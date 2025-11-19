// código prisma typescript

import { PrismaClient } from "@/src/generated/prisma";

/**
 * Cache global da instância do Prisma (apenas em desenvolvimento)
 * Necessário para evitar múltiplas conexões durante hot reload do Next.js
 */
declare global {
    // Corrigido: permite undefined (valor inicial antes da primeira criação)
    var cachedPrisma: ReturnType<typeof createPrismaClient> | undefined;
}

const createPrismaClient = () => {
    return new PrismaClient().$extends({
        result: {
            product: {
                status: {
                    needs: { stock: true },
                    compute(product) {
                        if (product.stock <= 0) {
                            return "OUT_OF_STOCK";
                        }
                        return "IN_STOCK"
                    },
                },
            },
        },
    })
}

let prisma: ReturnType<typeof createPrismaClient>;

// Singleton com cache global (padrão oficial recomendado)
if (process.env.NODE_ENV === "production") {
    prisma = createPrismaClient();
} else {
    if (!global.cachedPrisma) {
        global.cachedPrisma = createPrismaClient();
    }
    prisma = global.cachedPrisma;
}

export const db = prisma;