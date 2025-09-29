import { useQuery } from "@tanstack/react-query";
import { getQueryFn } from "@/lib/queryClient";

export interface User {
  id: string;
  username: string;
  email: string;
  isPremium: boolean;
}

export function useAuth() {
  const { data: user, isLoading, error } = useQuery<User | null>({
    queryKey: ["/api/user-info"],
    queryFn: getQueryFn({ on401: "returnNull" }), // Return null for unauthenticated users
    retry: false,
    staleTime: 0, // Always fresh for auth state
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user && !error,
    isPremium: user?.isPremium || false,
    error,
  };
}