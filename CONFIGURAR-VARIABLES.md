# 📝 Guía: Configurar Variables de Entorno

Esta guía te explica cómo configurar las variables de entorno `RESEND_API_KEY` y `RECEIVER_EMAIL` tanto para desarrollo local como para producción.

## 🔐 Variables Necesarias

- `RESEND_API_KEY`: Tu API Key de Resend para enviar emails
- `RECEIVER_EMAIL`: Email donde recibirás las solicitudes de citas

---

## 🏠 Desarrollo Local

### Paso 1: Crear archivo `.env.local`

En la raíz del proyecto, crea un archivo llamado `.env.local`:

```bash
# En la terminal, desde la carpeta del proyecto:
cd /Users/gabrielabagatello/Desktop/Cursor-VetPageNew
touch .env.local
```

### Paso 2: Agregar las variables

Abre el archivo `.env.local` y agrega:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
RECEIVER_EMAIL=tu-email@ejemplo.com
```

**Reemplaza los valores:**
- `re_xxxxxxxxxxxxxxxxxxxxx` → Tu API Key real de Resend
- `tu-email@ejemplo.com` → Tu email donde recibir las solicitudes

### Paso 3: Obtener tu API Key de Resend

1. Ve a [Resend.com](https://resend.com)
2. Crea una cuenta o inicia sesión
3. Ve a **API Keys** en el menú
4. Haz clic en **Create API Key**
5. Copia la key (comienza con `re_`)
6. Pégala en tu archivo `.env.local`

### Paso 4: Reiniciar el servidor

Si el servidor está corriendo, deténlo (`Ctrl+C`) y reinícialo:

```bash
npm run dev
```

---

## 🚀 Producción (Vercel)

### Paso 1: Ir a tu proyecto en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión
3. Selecciona tu proyecto `vet-clinic-landing`

### Paso 2: Agregar Variables de Entorno

1. Ve a **Settings** (Configuración)
2. Haz clic en **Environment Variables** (Variables de Entorno)
3. Agrega cada variable:

   **Variable 1:**
   - Name: `RESEND_API_KEY`
   - Value: `tu_api_key_de_resend`
   - Environments: Selecciona todas (Production, Preview, Development)
   - Haz clic en **Save**

   **Variable 2:**
   - Name: `RECEIVER_EMAIL`
   - Value: `tu-email@ejemplo.com`
   - Environments: Selecciona todas
   - Haz clic en **Save**

### Paso 3: Redesplegar

Después de agregar las variables, Vercel necesitará redesplegar:

1. Ve a **Deployments**
2. Haz clic en los **3 puntos** del último deployment
3. Selecciona **Redeploy**
4. O simplemente haz un nuevo commit y push a GitHub

---

## 🌐 Producción (Netlify)

### Paso 1: Ir a tu sitio en Netlify

1. Ve a [netlify.com](https://netlify.com)
2. Inicia sesión
3. Selecciona tu sitio

### Paso 2: Agregar Variables de Entorno

1. Ve a **Site settings** (Configuración del sitio)
2. Haz clic en **Environment variables** (Variables de entorno)
3. Haz clic en **Add a variable**
4. Agrega cada variable:

   **Variable 1:**
   - Key: `RESEND_API_KEY`
   - Value: `tu_api_key_de_resend`
   - Scope: All scopes (o selecciona según necesites)
   - Haz clic en **Save**

   **Variable 2:**
   - Key: `RECEIVER_EMAIL`
   - Value: `tu-email@ejemplo.com`
   - Scope: All scopes
   - Haz clic en **Save**

### Paso 3: Redesplegar

1. Ve a **Deploys**
2. Haz clic en **Trigger deploy** > **Deploy site**
3. O haz un nuevo commit y push

---

## ✅ Verificar que Funciona

### En Desarrollo Local:

1. Abre http://localhost:3000
2. Completa el formulario de contacto
3. Envía el formulario
4. Verifica que recibas el email en `RECEIVER_EMAIL`

### En Producción:

1. Ve a tu sitio desplegado
2. Completa el formulario de contacto
3. Verifica que recibas el email

---

## 🔒 Seguridad

⚠️ **IMPORTANTE:**
- **NUNCA** subas el archivo `.env.local` a GitHub
- El archivo `.env.local` está en `.gitignore` y no se subirá
- Solo el archivo `.env.example` está en GitHub como plantilla
- Las variables de entorno en Vercel/Netlify están encriptadas

---

## 🐛 Solución de Problemas

### El formulario no envía emails

1. Verifica que `RESEND_API_KEY` esté correcta (debe comenzar con `re_`)
2. Verifica que `RECEIVER_EMAIL` sea un email válido
3. Revisa los logs de la consola del navegador (F12)
4. Revisa los logs de Vercel/Netlify

### Error: "API key is invalid"

- Verifica que copiaste la API key completa
- Asegúrate de no tener espacios antes o después de la key
- Verifica que la key no haya expirado en Resend

### Error: "Email not verified"

- Para pruebas, puedes usar `onboarding@resend.dev` como `RECEIVER_EMAIL`
- Para producción, verifica tu dominio en Resend

---

## 📧 Ejemplo de Configuración

```env
# .env.local (archivo local - NO subir a GitHub)
RESEND_API_KEY=re_1234567890abcdefghijklmnopqrstuvwxyz
RECEIVER_EMAIL=contacto@clinicaveterinaria.com
```

---

**¡Listo!** Una vez configuradas las variables, el formulario funcionará correctamente. 🎉
