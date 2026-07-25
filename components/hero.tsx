import Image from "next/image"
import { Phone, Truck, Star } from "lucide-react"
import { contact } from "@/lib/menu-data"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-8 sm:gap-8 sm:py-12 md:grid-cols-2 md:py-20">
        <div className="order-2 text-center md:order-1 md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            <Star className="h-3.5 w-3.5 fill-primary" />
            {contact.rating} rating · {contact.reviews} reviews
          </span>

          <h1 className="mt-4 text-balance font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:mt-5 sm:text-6xl md:text-7xl">
            Al Quds
            <span className="block text-primary">Fast Food</span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground sm:mt-5 md:mx-0">
            Signature burgers, Arabian wraps, crispy fried chicken, Chinese &amp;
            Italian-style pasta — all made fresh to order on Harley Street,
            Rawalpindi.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center md:justify-start">
            <a
              href="#menu"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform active:scale-95 sm:w-auto sm:hover:scale-105"
            >
              Explore the Menu
            </a>
            <a
              href={contact.phoneHref}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold text-foreground transition-colors active:scale-95 sm:w-auto sm:hover:border-primary sm:hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              Order Now
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-primary sm:mt-8 md:justify-start">
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
            className="h-auto w-full max-w-[240px] drop-shadow-2xl sm:max-w-[340px] md:max-w-[420px]"
          />
        </div>
      </div>
    </section>
  )
}
