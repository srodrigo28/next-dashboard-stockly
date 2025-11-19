📘✨ Guia Encantador de Configuração do Prisma

Este README descreve passo a passo a inicialização, configuração e preparação do Prisma em um projeto Node.js, seguindo exatamente a ordem pedida.
Prepare-se para uma jornada suave e organizada! 🚀💙

🧩 1. Iniciando Prisma
✅ Instalar o Prisma (versão compatível)
npm install prisma@6.19.0 @prisma/client@6.19.0 --save-dev

⚙️ 2. Iniciar o Prisma
npx prisma init


Isso criará a pasta prisma/ e os arquivos necessários para começar. ✨

🔐 3. Configurar os arquivos de ambiente

Crie e configure os arquivos:

.env

.env.local

Certifique-se de incluir a variável:

DATABASE_URL="postgresql://..."

⚠️ 4. Aviso — Arquivo para remover/deletar

🗑️ Deletar se existir:
prisma.config.ts

Esse arquivo não deve estar presente em setups do Prisma 6.

🏗️ 5. Criar o schema da tabela

✍️ Popular o arquivo prisma/schema.prisma com o seguinte conteúdo:

generator client {
  provider = "prisma-client"
  output   = "../src/_lib/generated/prisma"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Category {
  id        String   @id @default(uuid())
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

🧹 6. Problemas com Prisma 7? Remover tudo

Se aparecer qualquer incompatibilidade com Prisma 7, execute:

npm remove prisma @prisma/client @prisma/migrate @prisma/instrumentation


Caso precise resetar tudo (cuidado: apaga dados!):

npx prisma migrate reset

🛠️ 7. Rodar as migrations

📌 Criar migration inicial:

npx prisma migrate dev --name init


📌 Gerar o cliente Prisma:

npx prisma generate


📌 Formatar o schema:

npx prisma format


📌 Abrir o Prisma Studio:

npx prisma studio