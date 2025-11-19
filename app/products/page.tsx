// app/products/page.tsx   (ou qualquer rota que você quiser)

import { db } from "../_lib/prisma";

export default async function ProductsPage() {
  const products = await db.product.findMany();

  return (
    <div>
      <h1>Produtos</h1>
      <div>
        {products.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </div>
    </div>
  );
}