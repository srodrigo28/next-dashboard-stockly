import { Button } from "./ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarButtonProps {
  children: React.ReactNode
  href: string
}

const SidebarButton = ({ children, href }: SidebarButtonProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Button  asChild variant={isActive ? "secondary" : "ghost"}
      className="justify-start gap-3 w-full"
    >
      <Link href={href}> {children} </Link>
    </Button>
  )
}

export default SidebarButton