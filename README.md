# Hearts&Paws - Documentación Inicial del Proyecto

## 📄 Resumen Ejecutivo

**Nombre del proyecto:** Hearts & Paws  
**Descripción:** Plataforma web que conecta organizaciones de protección animal con personas interesadas en adoptar o donar a causas relacionadas con el bienestar animal.  
**Objetivo:** Digitalizar, centralizar y facilitar los procesos de adopción y donación de animales, promoviendo la transparencia y la colaboración.

---

## 🎯 Alcance del Proyecto

### Incluye:
- Registro y gestión de usuarios, organizaciones y administradores.
- Publicación de animales en adopción y en tratamiento.
- Donaciones directas y por campaña.
- Autenticación por correo y redes sociales.
- Notificaciones (in-app y push).
- Chat en tiempo real (usuario/organismo).
- Dashboards personalizados por rol.
- Sistema de pagos con Stripe o Mercado Pago.
- Almacenamiento de archivos (clínicos, imágenes, etc.).
- Documentación de API.
- Despliegue completo.

### No incluye (fase 1):
- Aplicación móvil nativa.
- Traducción multilenguaje.
- Automatización de procesos legales de adopción.

---

## 👤 Roles y Accesos

### Usuario:
- Navega y consulta animales.
- Se registra con correo o Google/Facebook.
- Dona a animales o campañas.
- Favoritos, historial, chat, dashboard personalizado.

### Organización:
- Gestión de perfil institucional.
- Publicación de animales.
- Recepción de donaciones.
- Almacenamiento de archivos.
- Chat con usuarios.
- Estadísticas en dashboard.

### Administrador:
- Validación de organizaciones.
- Supervisión de contenido.
- Métricas globales.
- Envío de notificaciones.
- Gestión general del sistema.

---

## 🔧 Requerimientos Funcionales
- Publicación y búsqueda de animales.
- Gestión de campañas de ayuda.
- Sistema de donaciones seguras.
- Autenticación con OAuth2.
- Chat integrado.
- Paneles diferenciados por rol.

---

## 🧰 Arquitectura

### Frontend:
- React + TailwindCSS
- React Router
- Zustand (state)

### Backend:
- NestJS + PostgreSQL + Prisma
- Passport.js (auth)
- Stripe SDK

### Infraestructura:
- Firebase / GCP Storage (archivos)
- Vercel (frontend)
- Railway/Render (backend)

---

## 🔐 Autenticación y Autorización
- Registro con correo y contraseña
- Login con Google/Facebook (OAuth2)
- JWT + Refresh Tokens
- Roles: USER | ORG | ADMIN

---

## 📁 Estructura del Repositorio
```
/frontend
/backend
/docs
/scripts
/designs
```

---

## 📚 Documentación Técnica
- Swagger para API REST
- Diagrama entidad-relación (ERD)
- Flujo de procesos (donación, adopción)
- Wireframes y mockups

---

## 🔔 Notificaciones
- In-App, Push y Email (opcional)
- Triggers:
  - Donación exitosa
  - Nuevo mensaje
  - Animal adoptado
  - Campaña por vencer

---

## ⏰ CRON Jobs
- Recordatorios de favoritos
- Alertas a donadores mensuales
- Limpieza de animales antiguos

---

## 💳 Pagos
- Integración con Stripe
- Comisiones opcionales
- Webhooks de confirmación

---

## 📂 Almacenamiento de Archivos
- GCP o Firebase Storage
- Estructura:
  /orgs/:orgId/animals/:animalId/

---

## 🚀 Despliegue y CI/CD
- Frontend: Vercel
- Backend: Railway o Render
- GitHub Actions para CI/CD
- Entornos: dev, staging, production

---

## 📅 Plan de Trabajo (Roadmap)
- Semana 1: Setup, auth, DB
- Semana 2: CRUDs, dashboard, entidades
- Semana 3: Pagos, notificaciones, chat
- Semana 4: Testing, documentación, deployment

---

## 📃 Recursos
- Figma: Mockups y flujo de pantallas
- Guía de estilos: Colores, tipografías, branding
- Diagramas en draw.io o Whimsical

---

## 🔗 Contacto / Colaboración
- Repositorio GitHub: (por definir)
- Slack o Discord para el equipo

---

Este documento servirá como base para definir las tareas técnicas, de diseño y organizativas durante el mes de desarrollo del MVP de PataSolidaria.

