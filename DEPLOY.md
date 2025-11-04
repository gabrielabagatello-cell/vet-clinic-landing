# Guía de Despliegue - Clínica Veterinaria Familiar

Esta guía te ayudará a desplegar la landing page en GitHub y en una plataforma de hosting.

## 📦 Preparación para GitHub

### 1. Inicializar Git (si no está inicializado)

```bash
git init
git add .
git commit -m "Initial commit: Landing page clínica veterinaria"
```

### 2. Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. **No** inicialices con README, .gitignore o licencia (ya los tenemos)
3. Copia la URL del repositorio

### 3. Conectar el Repositorio Local con GitHub

```bash
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git branch -M main
git push -u origin main
```

## 🚀 Despliegue en Vercel (Recomendado para Next.js)

### Opción 1: Despliegue Automático desde GitHub

1. Ve a [Vercel](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en "Add New Project"
4. Selecciona tu repositorio de GitHub
5. Vercel detectará automáticamente Next.js
6. Agrega las variables de entorno:
   - `RESEND_API_KEY`: Tu API key de Resend
   - `RECEIVER_EMAIL`: Email donde recibir las solicitudes
7. Haz clic en "Deploy"
8. ¡Listo! Tu sitio estará en línea

### Opción 2: Despliegue desde CLI

```bash
npm i -g vercel
vercel
```

Sigue las instrucciones en la terminal y agrega las variables de entorno cuando se soliciten.

## 🌐 Despliegue en Netlify

1. Ve a [Netlify](https://www.netlify.com)
2. Inicia sesión con GitHub
3. Haz clic en "New site from Git"
4. Selecciona tu repositorio
5. Configuración del build:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Agrega las variables de entorno en "Site settings" > "Environment variables"
7. Haz clic en "Deploy site"

## ⚙️ Configuración de Variables de Entorno

### En Vercel:
1. Ve a tu proyecto
2. Settings > Environment Variables
3. Agrega:
   - `RESEND_API_KEY`
   - `RECEIVER_EMAIL`

### En Netlify:
1. Ve a tu sitio
2. Site settings > Environment variables
3. Agrega las mismas variables

## 📧 Configuración de Resend

1. Crea una cuenta en [Resend](https://resend.com)
2. Ve a "API Keys" y crea una nueva key
3. Copia la key y agrégala como `RESEND_API_KEY`
4. Configura el email receptor en `RECEIVER_EMAIL`
5. Para producción, puedes verificar tu dominio en Resend (opcional)

## ✅ Verificación Post-Despliegue

Después del despliegue, verifica:

- [ ] El sitio carga correctamente
- [ ] El formulario de contacto funciona
- [ ] El mapa se muestra correctamente
- [ ] Las imágenes se cargan
- [ ] La navegación funciona (scroll suave)
- [ ] El diseño es responsive
- [ ] Los enlaces de teléfono funcionan

## 🔄 Actualizaciones Futuras

Para actualizar el sitio:

```bash
git add .
git commit -m "Descripción de los cambios"
git push origin main
```

Vercel/Netlify desplegarán automáticamente los cambios.

## 📝 Notas Importantes

- Las imágenes en `/public` se sirven automáticamente
- El archivo `.env.local` NO se sube a GitHub (está en .gitignore)
- Las variables de entorno deben configurarse en la plataforma de hosting
- Resend tiene un límite de emails gratuitos (verificar plan)

## 🐛 Solución de Problemas

### El formulario no envía emails
- Verifica que `RESEND_API_KEY` esté configurada correctamente
- Verifica que `RECEIVER_EMAIL` sea válido
- Revisa los logs de Vercel/Netlify para errores

### Las imágenes no se cargan
- Verifica que las imágenes estén en `/public`
- Asegúrate de usar rutas relativas desde `/public` (ej: `/images/imagen.jpeg`)

### El mapa no se muestra
- Verifica que la dirección sea correcta
- El mapa usa Google Maps embed (no requiere API key)

---

**¡Listo! Tu landing page está en producción.** 🎉

