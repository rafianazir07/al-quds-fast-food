"use client"

import { useState } from "react"
import Image from "next/image"
import { UtensilsCrossed } from "lucide-react"

// Real restaurant photos go here. Drop each JPG into /public/gallery/ using
// the exact filename listed below — the section is already fully wired to
// them, so no other code changes are needed once the files are in place.
//   /public/gallery/signature-burger.jpg
//   /public/gallery/arabian-wrap.jpg
//   /public/gallery/fresh-off-the-grill.jpg
//   /public/gallery/crispy-fried-chicken-platter.jpg
//   /public/gallery/chinese-rice-noodles.jpg
//   /public/gallery/italian-style-pasta.jpg
// Recommended: square crop, 1200x1200px+, exported as JPG at ~70-80% quality
// (aim for under 300KB each) for fast mobile loading.
const galleryImages = [
  { src: "/gallery/signature-burger.jpg", alt: "Signature Burger at Al Quds Fast Food" },
  { src: "/gallery/arabian-wrap.jpg", alt: "Arabian Wrap" },
  { src: "/gallery/fresh-off-the-grill.jpg", alt: "Fresh Off the Grill" },
  { src: "/gallery/crispy-fried-chicken-platter.jpg", alt: "Crispy Fried Chicken Platter" },
  { src: "/gallery/chinese-rice-noodles.jpg", alt: "Chinese Rice & Noodles" },
  { src: "/gallery/italian-style-pasta.jpg", alt: "Italian Style Pasta" },
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
