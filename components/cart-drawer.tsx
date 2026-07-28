"use client"

import { useEffect, useState } from "react"
import { ShoppingCart, X, Plus, Minus, Trash2, MessageCircle, User, MapPin, Phone, FileText } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { contact } from "@/lib/menu-data"

const formatPrice = (amount: number) => `Rs. ${amount.toLocaleString("en-PK")}`

export function CartDrawer() {
  const [open, setOpen] = useState(false)
  const [details, setDetails] = useState({ name: "", phone: "", address: "", notes: "" })
  const { items, removeItem, updateQty, clearCart, count, subtotal } = useCart()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  const update = (key: keyof typeof details, value: string) => setDetails((prev) => ({ ...prev, [key]: value }))

  const orderOnWhatsApp = () => {
    const lines = items.map((i) => `• ${i.qty} x ${i.name}${i.label ? ` (${i.label})` : ""} — ${formatPrice(i.price * i.qty)}`)
    const message = [
      "Assalam-o-Alaikum Al Quds Fast Food, I'd like to place an order:",
      "",
      ...lines,
      "",
      `Subtotal: ${formatPrice(subtotal)}`,
      "",
      `Name: ${details.name || "Not provided"}`,
      `Phone: ${details.phone || "Not provided"}`,
      `Address: ${details.address || "Not provided"}`,
      details.notes ? `Notes: ${details.notes}` : "",
    ].filter(Boolean).join("\n")
    window.open(`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{ bottom: "max(1.25rem, calc(env(safe-area-inset-bottom) + 0.75rem))" }}
        className="fixed right-4 z-40 flex min-h-14 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform active:scale-95 sm:right-5 sm:hover:scale-105"
        aria-label={`Open cart${count ? `, ${count} items` : ""}`}
      >
        <ShoppingCart className="h-5 w-5" aria-hidden="true" /> Cart
        {count > 0 && <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-foreground px-1 text-xs font-bold text-primary">{count}</span>}
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex justify-end" role="dialog" aria-modal="true" aria-labelledby="cart-title">
          <button type="button" className="absolute inset-0 cursor-default bg-black/60" onClick={() => setOpen(false)} aria-label="Close cart" />
          <aside className="relative flex h-full w-full max-w-md flex-col bg-background shadow-2xl">
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-3 sm:px-5 sm:py-4">
              <div><h2 id="cart-title" className="font-display text-xl font-bold uppercase">Your Cart</h2><p className="text-xs text-muted-foreground">{count} {count === 1 ? "item" : "items"}</p></div>
              <button type="button" onClick={() => setOpen(false)} className="flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground hover:text-primary" aria-label="Close cart"><X className="h-5 w-5" /></button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-5">
              {items.length === 0 ? (
                <div className="mt-16 text-center">
                  <ShoppingCart className="mx-auto h-10 w-10 text-muted-foreground/50" aria-hidden="true" />
                  <p className="mt-4 font-medium">Your cart is empty.</p>
                  <p className="mt-1 text-sm text-muted-foreground">Add something tasty from the menu.</p>
                  <button type="button" onClick={() => setOpen(false)} className="mt-5 min-h-11 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground">Browse Menu</button>
                </div>
              ) : (
                <>
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li key={item.id} className="flex items-start justify-between gap-3 border-b border-border/50 pb-4">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold">{item.name}{item.label && <span className="text-muted-foreground"> ({item.label})</span>}</p>
                          <p className="mt-0.5 text-xs text-muted-foreground">{formatPrice(item.price)} each</p>
                          <div className="mt-2 flex items-center gap-1">
                            <button type="button" onClick={() => updateQty(item.id, item.qty - 1)} className="flex h-8 w-8 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary" aria-label={`Decrease ${item.name}`}><Minus className="h-3.5 w-3.5" /></button>
                            <span className="w-7 text-center text-sm font-medium">{item.qty}</span>
                            <button type="button" onClick={() => updateQty(item.id, item.qty + 1)} className="flex h-8 w-8 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary" aria-label={`Increase ${item.name}`}><Plus className="h-3.5 w-3.5" /></button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-sm font-semibold text-primary">{formatPrice(item.price * item.qty)}</span>
                          <button type="button" onClick={() => removeItem(item.id)} className="flex h-8 w-8 items-center justify-center text-muted-foreground hover:text-destructive" aria-label={`Remove ${item.name}`}><Trash2 className="h-4 w-4" /></button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <h3 className="font-display text-lg font-bold uppercase">Delivery details</h3>
                    <p className="mt-1 text-xs text-muted-foreground">Added to your WhatsApp order.</p>
                    <div className="mt-4 space-y-3">
                      <label className="relative block"><User className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" /><input value={details.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className="min-h-11 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm outline-none focus:border-primary" /></label>
                      <label className="relative block"><Phone className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" /><input type="tel" value={details.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Phone number" className="min-h-11 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm outline-none focus:border-primary" /></label>
                      <label className="relative block"><MapPin className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" /><textarea value={details.address} onChange={(e) => update("address", e.target.value)} placeholder="Delivery address" rows={2} className="w-full resize-none rounded-lg border border-border bg-background py-3 pl-10 pr-3 text-sm outline-none focus:border-primary" /></label>
                      <label className="relative block"><FileText className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" /><textarea value={details.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Order notes (optional)" rows={2} className="w-full resize-none rounded-lg border border-border bg-background py-3 pl-10 pr-3 text-sm outline-none focus:border-primary" /></label>
                    </div>
                  </div>
                </>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-border/60 bg-background px-4 pt-4 sm:px-5" style={{ paddingBottom: "max(1rem, calc(env(safe-area-inset-bottom) + 0.5rem))" }}>
                <div className="flex items-center justify-between text-base font-semibold"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                <p className="mt-1 text-xs text-muted-foreground">Delivery charges, if any, are confirmed by the restaurant.</p>
                <button type="button" onClick={orderOnWhatsApp} className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white hover:scale-[1.02]"><MessageCircle className="h-4 w-4" /> Order via WhatsApp</button>
                <button type="button" onClick={clearCart} className="mt-1 min-h-11 w-full text-center text-xs font-medium text-muted-foreground hover:text-destructive">Clear Cart</button>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  )
}
