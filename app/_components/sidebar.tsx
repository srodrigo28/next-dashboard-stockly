import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutGridIcon, PackageIcon, ShoppingBasketIcon } from "lucide-react";

const Sidebar = () => {
    return(
        <div className="w-64 bg-white">
            {/* IMAGEM */}
            <div className="px-8 py-6">
                <h1 className="font-bold text-2xl">STOCKLY</h1>
            </div>

            {/* BOTÕES */}
            <div className="flex flex-col gap-2 p-2">
                <Button asChild variant="ghost" className="justify-start gap-2" >
                    <Link href="">
                        <LayoutGridIcon />
                         Dashboard
                    </Link>
                </Button>
                <Button asChild variant="ghost" className="justify-start gap-2" >
                     <Link href="">
                        <PackageIcon />
                        Produtos
                    </Link>
                </Button>
                <Button asChild variant="ghost" className="justify-start gap-2" >
                     <Link href="">
                        <ShoppingBasketIcon />
                        Vendas
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default Sidebar;