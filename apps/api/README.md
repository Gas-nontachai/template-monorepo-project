Local API (Fastify + Prisma)

Prereqs
- Node.js
- Postgres running and DATABASE_URL configured

Setup

1. Copy .env.example to .env and update DATABASE_URL
2. Generate Prisma client: npm run prisma:generate
3. Apply migrations (optional/dev): npm run prisma:migrate
4. Run dev server: npm run dev (starts on API_PORT from .env, default 3001)

Available endpoints
- GET /products
- GET /products/:id
- POST /products
- PUT /products/:id
- DELETE /products/:id
- GET /orders
- POST /orders

Notes
- Prisma client is generated into the monorepo node_modules. If you change schema.prisma, re-run npm run prisma:generate.
