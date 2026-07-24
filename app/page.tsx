import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { GallerySection } from "@/components/gallery-section"
import { DealsSection } from "@/components/deals-section"
import { VisitSection } from "@/components/visit-section"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart-drawer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MenuSection />
      <GallerySection />
      <DealsSection />
      <VisitSection />
      <SiteFooter />
      <CartDrawer />
    </main>
  )
}
