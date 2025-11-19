### Iniciando  Prisma
[x] instalar o prisma versão que dar certo ( OK )
npm install prisma@6.19.0 @prisma/client@6.19.0 --save-dev

[x] iniciar o prisma
npx prisma init

[x] configurar os envs
* .env
* .env.local

[x]
### ( aviso arquivo para renover ou deletar ) ==> prisma.config.ts

[x] Criar o schema da tabale
* popular o prisma/schema.prisma
```
generator client {
  provider = "prisma-client"
  output   = "../src/_lib/generated/prisma"
}

datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
}

model Category {
  id   String   @id @default(uuid())
  
  name String

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

#### problemas com prisma 7 remover caso necessário
npm remove prisma @prisma/client @prisma/migrate @prisma/instrumentation

* reset caso necessário ( cuidado apaga tudo)
npx prisma migrate reset 

[x] rodar o migrate
npx prisma migrate dev --name init

npx prisma generate

npx prisma format

npx prima studio