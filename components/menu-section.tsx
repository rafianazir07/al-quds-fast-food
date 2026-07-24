"use client"

import { Plus } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { menu, type MenuItem } from "@/lib/menu-data"

function formatPrice(amount: number) {
  return `Rs. ${amount.toLocaleString("en-US")}`
}

function MenuCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart()

  return (
    <div className="flex flex-col rounded-xl border border-border/70 bg-card p-5 transition-colors hover:border-primary/60">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
          {item.name}
        </h3>
        {item.signature && (
          <span className="shrink-0 rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
            Signature
          </span>
        )}
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.prices.map((p, i) => (
          <button
            key={i}
            type="button"
            onClick={() =>
              addItem({
                id: `${item.name}${p.label ? `-${p.label}` : ""}`,
                name: item.name,
                label: p.label,
                price: p.amount,
              })
            }
            className="group inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {p.label && (
              <span className="text-[11px] font-medium uppercase text-muted-foreground group-hover:text-primary-foreground/80">
                {p.label}
              </span>
            )}
            {formatPrice(p.amount)}
            <Plus className="h-3.5 w-3.5" />
          </button>
        ))}
      </div>
    </div>
  )
}

export function MenuSection() {
  return (
    <section id="menu" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Our Kitchen</p>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
          The Menu
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty text-sm text-muted-foreground">
          Tap a price to add it to your cart.
        </p>
      </div>

      <div className="mt-12 space-y-14">
        {menu.map((category) => (
          <div key={category.id} id={category.id} className="scroll-mt-20">
            <div className="mb-6 flex items-center gap-4">
              <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-primary">
                {category.title}
              </h3>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
