# Cómo Ejecutar la Aplicación

## 🚀 Opción 1: Servidor de Desarrollo (Recomendado)

Next.js funciona con un servidor de desarrollo que genera el HTML dinámicamente.

### Pasos:

1. **Instalar dependencias** (ya hecho):
   ```bash
   npm install
   ```

2. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador**:
   - Ve a: http://localhost:3000
   - El servidor se ejecuta en tiempo real y recarga automáticamente cuando haces cambios

### ¿Por qué no hay HTML estático?
Next.js genera el HTML dinámicamente cuando alguien visita la página. Esto permite:
- Mejor rendimiento
- Funcionalidades del servidor (como el formulario)
- Optimización automática

---

## 📦 Opción 2: Generar HTML Estático (Exportación)

Si realmente necesitas archivos HTML estáticos, puedes configurar Next.js para exportarlos.

### Configuración necesaria:

1. **Actualizar `next.config.js`** para usar exportación estática
2. **Ejecutar**:
   ```bash
   npm run build
   npm run export
   ```

Esto generará una carpeta `out/` con archivos HTML estáticos.

**Nota**: Al usar exportación estática, algunas funcionalidades del servidor (como el formulario de contacto) no funcionarán a menos que uses un servicio externo.

---

## 🎯 Recomendación

Para desarrollo y producción, usa **Opción 1** (servidor de desarrollo). Es la forma estándar de trabajar con Next.js y permite todas las funcionalidades.

Si necesitas HTML estático para hospedaje en servidor básico, puedo configurarlo, pero perderás funcionalidades del servidor.

