
npm i prisma

npx prisma init

npm i @prisma/client

npx prisma generate

* config env

* popular o prisma/schema.prisma
```
model Sale {
  id   String   @id @default(uuid())
  date DateTime @default(now())

  totalPrice Decimal @db.Decimal(12, 2) // faltava o tipo Decimal aqui

  products SaleProduct[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

npx prisma migrate dev --name init

npx prisma format

npx prima studio