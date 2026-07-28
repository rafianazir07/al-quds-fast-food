"use client"

import { useState } from "react"
import Image from "next/image"
import { UtensilsCrossed } from "lucide-react"

// Real restaurant-style food photography, hotlinked from Unsplash (free to
// use commercially, no attribution required, no local storage needed).
// To switch to your own local photos instead: drop a JPG into
// /public/gallery/ using the filename in the comment on each line below,
// then change that line's src to "/gallery/<filename>.jpg". No other code
// changes are needed either way.
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1572448862527-d3c904757de6?w=1200&h=1200&fit=crop&q=80&auto=format", // /gallery/signature-burger.jpg
    alt: "Signature Burger at Al Quds Fast Food",
  },
  {
    src: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1200&h=1200&fit=crop&q=80&auto=format", // /gallery/arabian-wrap.jpg
    alt: "Arabian Wrap",
  },
  {
    src: "https://images.unsplash.com/photo-1767974968707-db3d448d4ef3?w=1200&h=1200&fit=crop&q=80&auto=format", // /gallery/fresh-off-the-grill.jpg
    alt: "Fresh Off the Grill",
  },
  {
    src: "https://images.unsplash.com/photo-1657271511865-f610b280dca4?w=1200&h=1200&fit=crop&q=80&auto=format", // /gallery/crispy-fried-chicken-platter.jpg
    alt: "Crispy Fried Chicken Platter",
  },
  {
    src: "https://images.unsplash.com/photo-1569058242261-35d2acbc5675?w=1200&h=1200&fit=crop&q=80&auto=format", // /gallery/chinese-rice-noodles.jpg
    alt: "Chinese Rice & Noodles",
  },
  {
    src: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?w=1200&h=1200&fit=crop&q=80&auto=format", // /gallery/italian-style-pasta.jpg
    alt: "Italian Style Pasta",
  },
]

function GalleryTile({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="group relative aspect-square overflow-hidden rounded-2xl border border-border/70 bg-card">
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 active:scale-105 sm:group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      ) : (
        // Neutral fallback shown only if the photo file above hasn't been
        // added to /public/gallery/ yet — never a broken-image icon.
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-card px-3 text-center">
          <UtensilsCrossed className="h-6 w-6 text-muted-foreground/60" aria-hidden="true" />
          <span className="text-xs font-medium text-muted-foreground">{alt}</span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100" />
      <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 text-xs font-medium text-white opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
        <span className="truncate drop-shadow">{alt}</span>
      </div>
    </div>
  )
}

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
        {galleryImages.map((img) => (
          <GalleryTile key={img.src} src={img.src} alt={img.alt} />
        ))}
      </div>
    </section>
  )
}
