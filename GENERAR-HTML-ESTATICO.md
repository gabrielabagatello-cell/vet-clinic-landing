# Cómo Generar HTML Estático

## 📝 Instrucciones

Si necesitas generar archivos HTML estáticos (por ejemplo, para hospedar en un servidor web básico):

### Paso 1: Habilitar Exportación Estática

Edita `next.config.js` y descomenta la línea `output: 'export'`:

```javascript
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true,
  },
  output: 'export', // 👈 Descomenta esta línea
}
```

### Paso 2: Generar los Archivos HTML

Ejecuta:

```bash
npm run build
```

Esto generará una carpeta `out/` con todos los archivos HTML estáticos.

### Paso 3: Ver los Archivos

Los archivos estarán en:
```
/out/
  ├── index.html
  ├── _next/
  │   └── static/
  └── ...
```

Puedes copiar todo el contenido de `out/` a cualquier servidor web.

## ⚠️ Limitaciones de Exportación Estática

Cuando usas exportación estática:
- ✅ Funciona: HTML, CSS, imágenes, navegación
- ❌ NO funciona: Formulario de contacto (necesita servidor)
- ❌ NO funciona: API routes (necesitan servidor Node.js)

## 🔄 Solución para el Formulario

Si necesitas el formulario funcionando con HTML estático, puedes:
1. Usar un servicio externo como Formspree o Netlify Forms
2. O usar un servicio de funciones serverless (Vercel, Netlify Functions)

## 💡 Recomendación

Para producción, es mejor usar:
- **Vercel** (gratis y optimizado para Next.js)
- O mantener el servidor de desarrollo con `npm run dev` o `npm run build && npm start`

Esto permite que todas las funcionalidades funcionen correctamente.

