# Solución de Problemas - Página no carga

## ✅ El servidor está funcionando

El servidor está corriendo correctamente en `http://localhost:3000` y responde con código 200.

## 🔍 Pasos para diagnosticar

### 1. Verifica que el servidor esté corriendo
En la terminal deberías ver:
```
✓ Ready in Xms
```

### 2. Abre el navegador correctamente

**URL correcta:**
```
http://localhost:3000
```

**NO uses:**
- ❌ `https://localhost:3000`
- ❌ `localhost:3000` sin http://
- ❌ Solo `localhost`

### 3. Verifica la consola del navegador

1. Abre las herramientas de desarrollador:
   - **Chrome/Edge**: `F12` o `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
   - **Firefox**: `F12` o `Ctrl+Shift+K`
   - **Safari**: `Cmd+Option+I` (debes habilitar el menú de desarrollador primero)

2. Ve a la pestaña **Console**

3. Busca errores en **rojo**

### 4. Limpia la caché

**Opción 1: Hard Refresh**
- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

**Opción 2: Modo Incógnito**
- Abre una ventana de incógnito/privada
- Ve a `http://localhost:3000`

### 5. Verifica los logs del servidor

En la terminal donde corre `npm run dev`, deberías ver:
```
✓ Compiled / in X.Xs
GET / 200 in Xms
```

Si ves errores, cópialos aquí.

## 🔄 Reiniciar todo

Si nada funciona:

```bash
# 1. Detén el servidor (Ctrl+C en la terminal)

# 2. Elimina la carpeta de build
rm -rf .next

# 3. Reinicia el servidor
npm run dev

# 4. Espera a ver "Ready in Xms"

# 5. Abre http://localhost:3000 en el navegador
```

## 🐛 Errores comunes

### Error: "Port 3000 is already in use"
```bash
# Mata el proceso en el puerto 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Error: "Cannot find module"
```bash
# Reinstala dependencias
rm -rf node_modules
npm install
npm run dev
```

### La página carga pero está en blanco
- Abre la consola del navegador (F12)
- Busca errores de JavaScript
- Verifica que no haya errores en la pestaña Network

## 📞 Si aún no funciona

Por favor comparte:
1. **Mensaje exacto** que ves en el navegador
2. **Errores en la consola** (F12 → Console)
3. **Mensajes en la terminal** donde corre `npm run dev`
4. **Screenshot** si es posible

