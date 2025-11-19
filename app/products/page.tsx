import { db } from "../_lib/prisma";

const ProductsPage = async () => {
    const products = await db.product.findMany({})
    return(
        <div>
            <h1>Produtos</h1>
            <div>
                {products.map( product => <p key={product.id}>{product.name}</p> )}
            </div>
        </div>
    )
}
export default ProductsPage;