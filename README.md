# 🚀 API Inventory

Sistema de gestão de inventário e vendas com controle de acesso (RBAC) e transações seguras.

## 🛠 Tecnologias
- **Node.js** com **TypeScript**
- **Express** (Framework HTTP)
- **Prisma** (ORM) & **PostgreSQL** (Database)
- **Zod** (Validação)
- **Jest & Supertest** (Testes)

## 📋 Regras de Negócio
- [x] **SKU Único:** Controle rigoroso de identificação de produtos.
- [x] **Três Níveis de Acesso:** Admin, Stock Manager e Seller.
- [x] **Histórico de Preços:** Preços de venda são imutáveis após a conclusão.
- [x] **Atomicidade:** Vendas só são processadas se houver estoque disponível para todos os itens.

## 🚀 Como rodar
1. Clone o projeto
2. `yarn install`
3. Configure o `.env` baseado no `.env.example`
4. `npx prisma migrate dev`
5. `yarn dev`