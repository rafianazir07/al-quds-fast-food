import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { GallerySection } from "@/components/gallery-section"
import { DealsSection } from "@/components/deals-section"
import { VisitSection } from "@/components/visit-section"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart-drawer"
import { contact } from "@/lib/menu-data"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: contact.name + " Fast Food",
  telephone: contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address,
    addressLocality: "Rawalpindi",
    addressCountry: "PK",
  },
  servesCuisine: ["Burgers", "Arabian", "Chinese", "Italian", "Fast Food"],
  priceRange: "Rs.",
}

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MenuSection />
      <GallerySection />
      <DealsSection />
      <VisitSection />
      <SiteFooter />
      <CartDrawer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  )
}
