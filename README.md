# CandyWeb Frontend

Frontend de la plataforma de aprendizaje de idiomas CandyWeb.

## 🚀 Deployment en Vercel

### 1. Preparación

1. Sube este directorio `frontend/` a un repositorio Git separado
2. Crea una cuenta en [Vercel](https://vercel.com)
3. Asegúrate de que el backend esté desplegado en Render

### 2. Configuración en Vercel

1. **Importar Proyecto**:
   - Ve a Vercel Dashboard
   - Click "New Project"
   - Import desde tu repositorio Git del frontend

2. **Framework Settings**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables**:
   ```
   VITE_BACKEND_URL=https://your-backend-domain.onrender.com
   ```

### 3. Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_BACKEND_URL` | URL del backend API | `https://candyweb-backend.onrender.com` |

⚠️ **IMPORTANTE**: Las variables de entorno en Vite deben tener el prefijo `VITE_` para estar disponibles en el frontend.

### 4. Configuración de CORS

El backend ya está configurado para aceptar requests desde dominios de Vercel (`.vercel.app`). Si usas un dominio personalizado, asegúrate de agregar la variable `FRONTEND_URL` en el backend.

## 🔧 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con la URL de tu backend local o desplegado

# Modo desarrollo
npm run dev

# Build para producción
npm run build
npm run preview
```

## 🔗 Conexión con Backend

El frontend se conecta al backend a través de:

1. **API Calls**: Usando `apiRequest()` que construye URLs completas
2. **Autenticación**: Cookies de sesión con `credentials: "include"`
3. **Query Client**: TanStack Query para cache y estado del servidor

### URLs de API

Todas las rutas de API se construyen automáticamente:
- Desarrollo: `http://localhost:8000/api/*`
- Producción: `${VITE_BACKEND_URL}/api/*`

## 📱 Características

- **Responsive Design**: Mobile-first con optimización para desktop
- **Dark Mode**: Soporte completo para tema oscuro/claro
- **Gamificación**: 10 juegos interactivos con efectos visuales
- **Multiidioma**: Soporte para 5 idiomas (Francés, Italiano, Portugués, Inglés, Ruso)
- **Sistema Premium**: Autenticación y suscripciones
- **Real-time Updates**: Sistema de puntuaciones en tiempo real

## 🎨 Stack Tecnológico

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Library**: Radix UI + Shadcn/ui
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion + Canvas Confetti

## 📦 Assets

Los assets están en `/attached_assets/` y se pueden referenciar usando:
```typescript
import assetPath from "@assets/image.png"
```

## 🔧 Configuración de Build

### Vercel (Recomendado)
- Build Command: `npm run build`
- Output Directory: `dist`
- Node.js Version: 18.x

### Otros Providers
- Asegúrate de configurar las variables de entorno correctamente
- El build genera archivos estáticos en `/dist`

## 🚨 Troubleshooting

### CORS Errors
- Verifica que `VITE_BACKEND_URL` esté configurado correctamente
- Asegúrate de que el backend incluya tu dominio en la configuración CORS

### Authentication Issues
- Las cookies de sesión requieren HTTPS en producción
- Verifica que el backend tenga `trust proxy` habilitado para Render

### Build Errors
- Ejecuta `npm run build` localmente para verificar
- Revisa que todas las importaciones de assets usen `@assets/`