// list-products.ts

import { db } from "./app/_lib/prisma";

async function listAllProducts() {
  try {
    console.log("Buscando produtos no banco...\n");

    const products = await db.product.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        stock: true,
        status: true, // campo virtual que você criou!
      },
      orderBy: {
        name: "asc",
      },
    });

    if (products.length === 0) {
      console.log("Nenhum produto cadastrado ainda.");
      return;
    }

    console.log(`Total de produtos: ${products.length}\n`);
    console.log("-".repeat(70));
    console.log(
      "ID                                   | Nome                    | Preço     | Estoque | Status"
    );
    console.log("-".repeat(70));

    products.forEach((p) => {
      const price = Number(p.price).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      console.log(
        `${p.id} | ${p.name.padEnd(23)} | ${price.padEnd(9)} | ${String(p.stock).padEnd(7)} | ${p.status === "IN_STOCK" ? "Disponível" : "Esgotado"}`
      );
    });

    console.log("-".repeat(70));
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
  } finally {
    await db.$disconnect();
  }
}

listAllProducts();