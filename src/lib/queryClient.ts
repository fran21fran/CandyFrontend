import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    console.error(`API Error: ${res.status} ${res.statusText}`, {
      url: res.url,
      status: res.status,
      statusText: res.statusText,
      errorText: text
    });
    throw new Error(`${res.status}: ${text}`);
  }
}

// Get the backend API URL from environment variable or default to localhost in development
const getApiUrl = (path: string) => {
  // In development, use the Vite proxy which routes /api to the backend
  // In production, use the full backend URL
  const isDevelopment = (import.meta as any).env?.DEV;
  
  if (isDevelopment) {
    // Use Vite dev server proxy - routes /api to backend automatically
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return cleanPath;
  } else {
    // Production: use full backend URL
    const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'https://candybackend.onrender.com';
    const cleanBackendUrl = backendUrl.replace(/\/$/, '');
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${cleanBackendUrl}${cleanPath}`;
  }
};

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const fullUrl = getApiUrl(url);
  
  console.log(`API Request: ${method} ${fullUrl}`, data ? { body: data } : {});
  
  try {
    const res = await fetch(fullUrl, {
      method,
      headers: data ? { "Content-Type": "application/json" } : {},
      body: data ? JSON.stringify(data) : undefined,
      credentials: "include",
    });

    await throwIfResNotOk(res);
    console.log(`API Success: ${method} ${fullUrl} - ${res.status}`);
    return res;
  } catch (error) {
    console.error(`API Failed: ${method} ${fullUrl}`, error);
    throw error;
  }
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const path = queryKey.join("/") as string;
    const fullUrl = getApiUrl(path);
    const res = await fetch(fullUrl, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
