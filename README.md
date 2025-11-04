# Clínica Veterinaria Familiar - Landing Page

Landing page profesional para clínica veterinaria familiar ubicada en Bucuresti, Rumania.

## 🚀 Tecnologías

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Resend** - Servicio de envío de emails

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/gabrielabagatello-cell/vet-clinic-landing.git
cd vet-clinic-landing
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env.local` en la raíz del proyecto:
```env
RESEND_API_KEY=tu_api_key_de_resend
RECEIVER_EMAIL=email@donde-recibir-solicitudes.com
```

4. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
/
├── app/
│   ├── components/
│   │   ├── AppointmentForm.tsx   # Formulario de cita
│   │   ├── Header.tsx            # Menú de navegación
│   │   ├── Hero.tsx              # Sección principal
│   │   ├── Map.tsx               # Mapa de ubicación
│   │   ├── Services.tsx          # Servicios y precios
│   │   ├── StickyBottomBar.tsx   # Barra inferior fija
│   │   ├── Testimonials.tsx      # Testimonios de clientes
│   │   └── TopBar.tsx             # Barra superior
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página principal
├── public/
│   ├── images/                   # Imágenes principales
│   └── Pets/                     # Imágenes para testimonios
├── PRD.md                        # Documento de requisitos
└── package.json
```

## 🎨 Características

- ✅ Diseño profesional con colores azul y blanco
- ✅ Formulario de contacto integrado con Resend
- ✅ Mapa interactivo con Google Maps
- ✅ Sección de servicios con precios
- ✅ Testimonios con imágenes de clientes
- ✅ Barra inferior fija con información de contacto
- ✅ Navegación con scroll suave
- ✅ Diseño responsive (móvil, tablet, desktop)

## 📧 Configuración de Resend

1. Crea una cuenta en [Resend](https://resend.com)
2. Obtén tu API Key
3. Agrega la API Key a `.env.local` como `RESEND_API_KEY`
4. Configura el email receptor en `RECEIVER_EMAIL`
5. Para producción, verifica tu dominio en Resend (opcional)

## 🚢 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio de GitHub a Vercel
2. Agrega las variables de entorno:
   - `RESEND_API_KEY`
   - `RECEIVER_EMAIL`
3. Vercel detectará automáticamente Next.js y desplegará

### Otros servicios

El proyecto puede desplegarse en cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📝 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Ejecuta el servidor de producción
- `npm run lint` - Ejecuta el linter

## 📞 Información de Contacto

- **Teléfono**: 0712.234.234
- **Dirección**: Strada Mara Rosetti 26 A, Bucuresti 020487

## 📄 Licencia

Este proyecto es privado y está destinado para uso de la clínica veterinaria.
