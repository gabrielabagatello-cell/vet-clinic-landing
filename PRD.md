# Product Requirements Document (PRD)
## Landing Page - Clínica Veterinaria Familiar

### Información del Proyecto
- **Cliente**: Clínica Veterinaria Familiar
- **Ubicación**: Strada Mara Rosetti 26 A, Bucuresti 020487
- **Teléfono**: 0712.234.234
- **Stack Tecnológico**: Next.js 14, TypeScript, Tailwind CSS, Resend
- **Plataforma de Despliegue**: GitHub (Vercel/Netlify)

---

## 1. Objetivo del Producto

Crear una landing page profesional y elegante para una clínica veterinaria familiar que permita a los usuarios:
- Conocer los servicios y precios de la clínica
- Solicitar citas a través de un formulario
- Contactar fácilmente a la clínica
- Ubicar la clínica en el mapa
- Ver testimonios de clientes satisfechos

---

## 2. Requisitos de Diseño

### 2.1 Paleta de Colores
- **Color Principal**: Azul (Blue) - Profesional y confiable
- **Color Secundario**: Blanco (White) - Limpio y elegante
- **Colores de Acento**: Azul claro para destacar elementos importantes

### 2.2 Estilo Visual
- Diseño profesional y elegante
- Interfaz limpia y moderna
- Responsive (móvil, tablet, desktop)
- Accesibilidad web (WCAG 2.1 nivel AA)

---

## 3. Estructura de la Página

### 3.1 Top Bar (Barra Superior)
**Ubicación**: Parte superior de la página
**Contenido**:
- Iconos de redes sociales (Facebook, Instagram)
- Teléfono: 0712.234.234 (clickeable)
- Dirección: Strada Mara Rosetti 26 A, Bucuresti 020487
- Fondo: Azul oscuro
- Texto: Blanco

### 3.2 Header (Menú Principal)
**Ubicación**: Debajo del Top Bar, sticky
**Contenido**:
- Logo basado en texto: Nombre de la clínica
- Menú de navegación:
  - Inicio (scroll a Hero)
  - Servicios (scroll a Services)
  - Testimonios (scroll a Testimonials)
  - Contacto (scroll a Map/Contact)
- Menú hamburguesa para móvil
- Comportamiento: Scroll suave a cada sección

### 3.3 Hero Section
**Ubicación**: Primera sección visible
**Contenido**:
- Título principal y subtítulo
- Imagen de fondo (de la carpeta de imágenes)
- **Formulario de Cita**:
  - Campo: Nombre (requerido)
  - Campo: Teléfono (requerido)
  - Campo: Email (requerido)
  - Campo: Mensaje (opcional)
  - Botón: "Enviar" / "Send"
- Integración con Resend para envío de emails

### 3.4 Services Section (Servicios)
**Ubicación**: Después de Hero
**Contenido**:
- Título: "Nuestros Servicios"
- Grid de servicios con:
  - Nombre del servicio
  - Descripción
  - Precio (en RON - Leu rumano)
- Servicios a mostrar:
  - Consulta General: 150 RON
  - Vacunación: 80 RON
  - Cirugía: Desde 500 RON
  - Emergencias: 200 RON
  - Estética: 100 RON
  - Radiología: 180 RON
  - Laboratorio: 120 RON
  - Control de Parásitos: 90 RON

### 3.5 Testimonials Section (Testimonios)
**Ubicación**: Después de Services
**Contenido**:
- Título: "Lo que dicen nuestros clientes"
- Grid de testimonios con:
  - Foto de la persona (usar imágenes de carpeta `/Pets`)
  - Nombre del cliente
  - Texto del testimonio
  - Calificación con estrellas
- Imágenes a usar:
  - `/Pets/descarga.jpeg`
  - `/Pets/descarga (1).jpeg`
  - `/Pets/images (1).jpeg`
  - `/Pets/images (2).jpeg`
  - `/Pets/images (3).jpeg`
  - `/Pets/images.jpeg`

### 3.6 Map Section (Contacto)
**Ubicación**: Después de Testimonials
**Contenido**:
- Título: "Encuéntranos"
- Mapa de Google Maps integrado con dirección:
  - Strada Mara Rosetti 26 A, Bucuresti 020487
- Información de contacto:
  - Dirección completa
  - Teléfono clickeable
  - Horario de atención

### 3.7 Sticky Bottom Bar (Barra Inferior Fija)
**Ubicación**: Fija en la parte inferior de la pantalla
**Contenido**:
- Mensaje: "Llámanos para hacer una cita" / "Call to make an appointment"
- Teléfono: 0712.234.234 (clickeable)
- Fondo: Azul oscuro
- Texto: Blanco
- Comportamiento: Siempre visible al hacer scroll

---

## 4. Funcionalidades Técnicas

### 4.1 Formulario de Cita
- **Validación**: 
  - Nombre: Requerido, mínimo 2 caracteres
  - Teléfono: Requerido, formato validado
  - Email: Requerido, formato email válido
  - Mensaje: Opcional
- **Integración**: API Route de Next.js que usa Resend
- **Mensajes**:
  - Éxito: "¡Gracias! Tu solicitud ha sido enviada. Te contactaremos pronto."
  - Error: Mensaje de error descriptivo
- **Estado**: Loading durante el envío

### 4.2 Navegación
- Scroll suave (smooth scroll) a cada sección
- IDs de sección:
  - `hero`
  - `services`
  - `testimonials`
  - `contact`

### 4.3 Integración con Resend
- **Configuración**: 
  - Variable de entorno: `RESEND_API_KEY`
  - Email receptor: `RECEIVER_EMAIL`
- **Email enviado**:
  - Asunto: "Nueva solicitud de cita - [Nombre]"
  - Contenido: Todos los campos del formulario + fecha/hora

---

## 5. Imágenes y Assets

### 5.1 Imágenes Principales
**Ubicación**: `/public/images/`
- `images.jpeg`
- `images (1).jpeg`
- `images (2).jpeg`
- `images (3).jpeg`
- `images (4).jpeg`

### 5.2 Imágenes de Testimonios
**Ubicación**: `/public/Pets/`
- `descarga.jpeg`
- `descarga (1).jpeg`
- `images (1).jpeg`
- `images (2).jpeg`
- `images (3).jpeg`
- `images.jpeg`

---

## 6. Configuración del Proyecto

### 6.1 Dependencias Principales
- `next`: Framework React
- `react`: Biblioteca React
- `react-dom`: DOM de React
- `typescript`: TypeScript
- `tailwindcss`: Framework CSS
- `resend`: Servicio de email

### 6.2 Archivos de Configuración
- `package.json`: Dependencias y scripts
- `tsconfig.json`: Configuración TypeScript
- `tailwind.config.js`: Configuración Tailwind con colores azul y blanco
- `next.config.js`: Configuración Next.js
- `.env.local`: Variables de entorno (Resend API key)

---

## 7. Despliegue

### 7.1 Preparación para GitHub
- Repositorio en GitHub
- Variables de entorno configuradas en plataforma de despliegue
- README.md con instrucciones de instalación

### 7.2 Plataforma de Despliegue
- Vercel (recomendado para Next.js) o Netlify
- Configuración automática desde GitHub

---

## 8. Criterios de Aceptación

### 8.1 Diseño
- [x] Paleta de colores azul y blanco implementada
- [x] Diseño profesional y elegante
- [x] Responsive en todos los dispositivos
- [x] Logo basado en texto visible

### 8.2 Funcionalidad
- [x] Top Bar con redes sociales, teléfono y dirección
- [x] Header con navegación funcional (scroll suave)
- [x] Hero con formulario de cita
- [x] Sección de servicios con precios
- [x] Sección de testimonios con imágenes de Pets
- [x] Mapa con dirección correcta
- [x] Sticky Bottom Bar con teléfono y mensaje

### 8.3 Integración
- [x] Formulario envía emails a través de Resend
- [x] Validación de campos funcionando
- [x] Mensajes de éxito/error visibles

### 8.4 Contenido
- [x] Todos los textos en español
- [x] Información de contacto correcta
- [x] Servicios y precios mostrados
- [x] Testimonios con imágenes correctas

---

## 9. Mejoras Futuras (Opcional)

- [ ] Galería de imágenes de la clínica
- [ ] Blog/Noticias sobre cuidado de mascotas
- [ ] Sistema de reserva de citas en línea
- [ ] Chat en vivo
- [ ] Integración con Google Calendar
- [ ] SEO optimizado
- [ ] Análiticas (Google Analytics)

---

## 10. Notas de Implementación

### 10.1 Variables de Entorno Requeridas
```env
RESEND_API_KEY=tu_api_key_de_resend
RECEIVER_EMAIL=email@donde-recibir-solicitudes.com
```

### 10.2 Configuración de Resend
1. Crear cuenta en Resend
2. Obtener API Key
3. Verificar dominio (opcional, se puede usar onboarding@resend.dev para pruebas)
4. Configurar email receptor

### 10.3 Estructura de Carpetas
```
/
├── app/
│   ├── api/
│   │   └── appointment/
│   │       └── route.ts
│   ├── components/
│   │   ├── AppointmentForm.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Map.tsx
│   │   ├── Services.tsx
│   │   ├── StickyBottomBar.tsx
│   │   ├── Testimonials.tsx
│   │   └── TopBar.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── images/
│   └── Pets/
└── PRD.md
```

---

**Fecha de Creación**: 2024
**Última Actualización**: 2024
**Estado**: En Desarrollo

