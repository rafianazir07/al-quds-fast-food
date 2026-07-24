"use client"

import { useState } from "react"
import { ShoppingCart, X, Plus, Minus, Trash2, MessageCircle } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { contact } from "@/lib/menu-data"

function formatPrice(amount: number) {
  return `Rs. ${amount.toLocaleString("en-US")}`
}

export function CartDrawer() {
  const [open, setOpen] = useState(false)
  const { items, removeItem, updateQty, clearCart, count, subtotal } = useCart()

  const handleWhatsAppOrder = () => {
    const lines = items.map(
      (i) => `• ${i.qty} x ${i.name}${i.label ? ` (${i.label})` : ""} — ${formatPrice(i.price * i.qty)}`,
    )
    const message = [
      "Assalam-o-Alaikum Al Quds Fast Food, I'd like to place an order:",
      "",
      ...lines,
      "",
      `Total: ${formatPrice(subtotal)}`,
      "",
      "My Name: ",
      "My Address: ",
    ].join("\n")

    const url = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
        aria-label="Open cart"
      >
        <ShoppingCart className="h-5 w-5" />
        Cart
        {count > 0 && (
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-foreground px-1 text-xs font-bold text-primary">
            {count}
          </span>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} aria-hidden="true" />

          <div className="relative flex h-full w-full max-w-sm flex-col bg-background shadow-2xl">
            <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
              <h2 className="font-display text-xl font-bold uppercase text-foreground">Your Cart</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-primary"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <p className="mt-10 text-center text-sm text-muted-foreground">
                  Your cart is empty. Add something tasty from the menu!
                </p>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-start justify-between gap-3 border-b border-border/50 pb-4"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">
                          {item.name}
                          {item.label && <span className="text-muted-foreground"> ({item.label})</span>}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{formatPrice(item.price)} each</p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-5 text-center text-sm font-medium text-foreground">{item.qty}</span>
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-sm font-semibold text-primary">
                          {formatPrice(item.price * item.qty)}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground transition-colors hover:text-destructive"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-border/60 px-5 py-4">
                <div className="flex items-center justify-between text-base font-semibold text-foreground">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  No online payment — pay cash on delivery or in-store. Confirm your order on WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Order via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={clearCart}
                  className="mt-2 w-full text-center text-xs font-medium text-muted-foreground transition-colors hover:text-destructive"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
