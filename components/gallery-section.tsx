import Image from "next/image"
import { ImageIcon } from "lucide-react"

// These are stand-in illustrations (not real photos) so the section never
// renders blank. Swap in real restaurant photography by dropping JPG/PNG
// files into /public/images/gallery/ and updating the `src` paths below —
// no other code changes needed. Recommended: square images, 1000x1000px+,
// under ~300KB each (run them through an image compressor before adding).
const galleryImages = [
  { src: "/images/gallery/burger.svg", alt: "Signature burger at Al Quds Fast Food" },
  { src: "/images/gallery/wrap.svg", alt: "Arabian wrap fresh off the grill" },
  { src: "/images/gallery/fried-chicken.svg", alt: "Crispy fried chicken platter" },
  { src: "/images/gallery/rice-noodles.svg", alt: "Chinese rice and noodles" },
  { src: "/images/gallery/pasta.svg", alt: "Italian-style pasta" },
  { src: "/images/gallery/storefront.svg", alt: "Al Quds Fast Food storefront on Harley Street" },
]

export function GallerySection() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-10 sm:py-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Take A Look</p>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
          Gallery
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty text-sm text-muted-foreground">
          A peek at what's coming out of the kitchen.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-border/70 bg-card"
          >
            <Image
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 active:scale-105 sm:group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100" />
            <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 text-xs font-medium text-white opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
              <ImageIcon className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate drop-shadow">{img.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
