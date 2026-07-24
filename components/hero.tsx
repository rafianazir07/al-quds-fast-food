import Image from "next/image"
import { Phone, Truck, Star } from "lucide-react"
import { contact } from "@/lib/menu-data"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
        <div className="order-2 md:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            <Star className="h-3.5 w-3.5 fill-primary" />
            {contact.rating} rating · {contact.reviews} reviews
          </span>

          <h1 className="mt-5 text-balance font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Al Quds
            <span className="block text-primary">Fast Food</span>
          </h1>

          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Signature burgers, Arabian wraps, crispy fried chicken, Chinese &amp;
            Italian-style pasta — all made fresh to order on Harley Street,
            Rawalpindi.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Explore the Menu
            </a>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              Order Now
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary">
            <Truck className="h-5 w-5" />
            Home Delivery
          </div>
        </div>

        <div className="relative order-1 flex justify-center md:order-2">
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8mzVlVIXyGaAyPz3WiPHo7K974Ab6o.png"
            alt="Al Quds mascot holding a burger and a shawarma wrap"
            width={560}
            height={560}
            priority
            className="h-auto w-full max-w-[420px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
