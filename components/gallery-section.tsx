import Image from "next/image"
import { ImageIcon } from "lucide-react"

// Replace each `src` below with your own food/restaurant photos.
// Drop the image files into /public/images/gallery/ and update the paths,
// e.g. src: "/images/gallery/mount-everest-burger.jpg"
const galleryImages = [
  { src: "/placeholder.jpg", alt: "Signature burger at Al Quds Fast Food" },
  { src: "/placeholder.jpg", alt: "Arabian wrap fresh off the grill" },
  { src: "/placeholder.jpg", alt: "Crispy fried chicken platter" },
  { src: "/placeholder.jpg", alt: "Chinese rice and noodles" },
  { src: "/placeholder.jpg", alt: "Italian-style pasta" },
  { src: "/placeholder.jpg", alt: "Al Quds Fast Food storefront on Harley Street" },
]

export function GallerySection() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Take A Look</p>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
          Gallery
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty text-sm text-muted-foreground">
          A peek at what's coming out of the kitchen.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
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
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-2 left-2 flex items-center gap-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
              <ImageIcon className="h-3.5 w-3.5" />
              <span className="drop-shadow">{img.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
