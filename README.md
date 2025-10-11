# 📸 Photobooth Web Application (Monorepo)

A modern full-stack **Photobooth web application** built with **Next.js, Fastify, Prisma, and Cloudflare R2** —  
designed for high performance, simplicity, and security.  
Supports photo capture, filter effects, stickers, and sharing features.

---

## 🧱 Tech Stack Overview

| Layer                | Stack                                                                        | Deployment                    |
| -------------------- | ---------------------------------------------------------------------------- | ----------------------------- |
| **Frontend**         | [Next.js 15](https://nextjs.org/) + TypeScript + TailwindCSS + Zustand + Zod | **Vercel**                    |
| **Backend**          | [Fastify](https://fastify.dev/) + Prisma + Zod + TypeScript                  | **Render / Fly.io**           |
| **Database**         | [PostgreSQL](https://www.postgresql.org/)                                    | **Neon / Supabase / Railway** |
| **Storage**          | [Cloudflare R2](https://www.cloudflare.com/r2/) (S3-compatible)              | —                             |
| **Validation**       | [Zod](https://zod.dev/) (Shared Schemas between Front & Back)                | —                             |
| **CI/CD**            | [GitHub Actions](https://github.com/features/actions)                        | Vercel + Render               |
| **Security**         | Helmet, CORS, JWT, Cloudflare Proxy (HTTPS)                                  | —                             |
| **Monitoring**       | [Sentry](https://sentry.io/) + [Axiom](https://www.axiom.co/)                | —                             |
| **Monorepo Tooling** | npm + Turborepo                                                              | —                             |

---

## 🧩 Features

- 📸 **Photo Capture** — via `getUserMedia()` or `react-webcam`
- 🎨 **Filter Effects** — Canvas / glfx.js / CSS filters
- 🧱 **Stickers & Text Overlay** — using Fabric.js / Konva.js
- ☁️ **Cloud Upload** — Direct upload via Presigned URL → Cloudflare R2
- 🗄️ **Database Integration** — Prisma + PostgreSQL
- 🔐 **Secure Authentication** — JWT / Clerk / NextAuth
- 🚀 **Continuous Deployment** — GitHub Actions + Vercel + Render
- 📊 **Monitoring & Analytics** — Sentry + Axiom + Plausible

---

## ⚙️ Folder Structure

```
photobooth/
├─ apps/
│  ├─ web/          # Frontend (Next.js)
│  ├─ admin/        # Admin Dashboard
│  └─ api/          # Backend (Fastify + Prisma + Zod)
│
├─ packages/
│  ├─ ui/           # Shared UI (ShadCN + Tailwind)
│  ├─ types/        # Shared Zod Schemas + Types
│  ├─ utils/        # Shared Helper Functions
│  └─ config/       # Env Config + Constants
│
├─ prisma/
│  ├─ schema.prisma
│  └─ migrations/
│
└─ .github/workflows/
   ├─ deploy-frontend.yml
   ├─ deploy-backend.yml
   └─ test.yml
```

---

## 🔐 Security Highlights

- ✅ HTTPS (via Cloudflare Proxy)
- 🧠 Helmet for secure HTTP headers
- 🔑 JWT-based Authentication
- 🚧 CORS domain whitelist
- 🕒 Presigned URL for direct upload (10-minute expiry)
- 🧱 GitHub Encrypted Secrets for sensitive config

---

## 🚀 CI/CD Pipeline

| Step                 | Tool            | Description                 |
| -------------------- | --------------- | --------------------------- |
| **1. Push to main**  | GitHub          | Trigger workflow            |
| **2. Build & Lint**  | GitHub Actions  | Validate code & run tests   |
| **3. Deploy Web**    | Vercel          | Auto deploy frontend        |
| **4. Deploy API**    | Render / Fly.io | Auto deploy backend         |
| **5. Notifications** | GitHub / Sentry | Build result & error alerts |

---

## 🧠 Monitoring & Analytics

- **Error Tracking:** Sentry (Frontend + Backend)
- **Logs:** Axiom / Logtail
- **Usage Analytics:** Plausible or Google Analytics

---

## 💡 Summary

> 🧩 **Next.js (Web)** + **Fastify (API)** + **Prisma (DB)** + **Cloudflare R2 (Storage)**  
> secured by **Cloudflare + Helmet + JWT**, automated with **GitHub Actions**,  
> and monitored via **Sentry + Axiom** — built for speed, security, and simplicity.

---

## 🧰 Commands

```bash
# Install dependencies
npm install

# Run dev (web + api)
npm run dev

# Build all apps
npm run build

# Run Prisma migrations
npm run --workspace=api prisma migrate deploy
```

---

## 📄 License

MIT © 2025 Photobooth Project
