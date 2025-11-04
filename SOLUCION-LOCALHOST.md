# Solución: localhost no funciona

## ✅ Servidor está funcionando correctamente

El servidor está corriendo y respondiendo con código 200. Si no puedes ver la página en el navegador, prueba lo siguiente:

## 🔧 Soluciones

### 1. Verifica la URL correcta
Asegúrate de usar:
```
http://localhost:3000
```

**NO uses:**
- `https://localhost:3000` (el servidor de desarrollo no usa HTTPS)
- `localhost:3000` sin `http://`
- `127.0.0.1:3000` (aunque debería funcionar)

### 2. Reinicia el servidor
```bash
# Detén el servidor actual (Ctrl+C en la terminal donde corre)
# Luego ejecuta:
npm run dev
```

### 3. Verifica que el puerto 3000 no esté bloqueado
```bash
lsof -ti:3000
```
Si muestra un proceso, el puerto está en uso.

### 4. Prueba en otro navegador
- Chrome
- Firefox
- Safari
- Edge

### 5. Limpia la caché del navegador
- Presiona `Ctrl+Shift+R` (Windows/Linux) o `Cmd+Shift+R` (Mac) para hard refresh
- O abre en modo incógnito

### 6. Verifica la consola del navegador
- Abre las herramientas de desarrollador (F12)
- Ve a la pestaña "Console"
- Busca errores en rojo

### 7. Verifica la terminal
- Mira la terminal donde ejecutaste `npm run dev`
- Busca errores o mensajes de compilación
- Debería decir: "Ready on http://localhost:3000"

## 🔄 Reiniciar completamente

Si nada funciona:

```bash
# 1. Detén el servidor (Ctrl+C)

# 2. Elimina .next
rm -rf .next

# 3. Reinicia
npm run dev
```

## 📝 Nota sobre Exportación Estática

Si tienes `output: 'export'` en `next.config.js`, desactívalo para desarrollo:

```javascript
// Comenta esta línea para desarrollo:
// output: 'export',
```

Solo descomenta cuando quieras generar HTML estático con `npm run build`.

## 🆘 Si aún no funciona

Comparte:
1. El mensaje exacto que ves en el navegador
2. Los errores en la consola del navegador (F12)
3. Los mensajes en la terminal donde corre `npm run dev`

