/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true, // Necesario para exportación estática
  },
  // Descomenta la siguiente línea solo cuando quieras generar HTML estático
  // output: 'export', // Genera HTML estático
}

module.exports = nextConfig
