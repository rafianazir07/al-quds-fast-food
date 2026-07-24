"use client"

import { Check, ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { deals, contact } from "@/lib/menu-data"

export function DealsSection() {
  const { addItem } = useCart()

  return (
    <section id="deals" className="scroll-mt-20 border-y border-border/60 bg-card/40 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Best Value</p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            Combo Deals
          </h2>
          <p className="mx-auto mt-3 max-w-md text-pretty text-sm text-muted-foreground">
            Feast for one or the whole crew — every deal comes bundled with a drink.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <div
              key={deal.number}
              className="flex flex-col rounded-2xl border border-border/70 bg-card p-6 transition-colors hover:border-primary/60"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-bold uppercase text-primary">
                  Deal {deal.number}
                </span>
                <span className="rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
                  Rs. {deal.price.toLocaleString("en-US")}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {deal.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-2">
                <button
                  type="button"
                  onClick={() =>
                    addItem({
                      id: `deal-${deal.number}`,
                      name: `Deal ${deal.number}`,
                      label: deal.items.join(", "),
                      price: deal.price,
                    })
                  }
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center justify-center rounded-full border border-primary/50 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
