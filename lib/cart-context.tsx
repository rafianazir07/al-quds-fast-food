"use client"

import { createContext, useContext, useEffect, useMemo, useState, useCallback, type ReactNode } from "react"

export type CartItem = { id: string; name: string; label?: string; price: number; qty: number }
type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void
  removeItem: (id: string) => void
  updateQty: (id: string, qty: number) => void
  clearCart: () => void
  count: number
  subtotal: number
  hydrated: boolean
}

const STORAGE_KEY = "al-quds-cart-v1"
const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          setItems(parsed.filter(
            (item): item is CartItem =>
              item && typeof item.id === "string" && typeof item.name === "string" &&
              typeof item.price === "number" && typeof item.qty === "number" && item.qty > 0,
          ))
        }
      }
    } catch {
      // Ignore invalid local cart data.
    } finally {
      setHydrated(true)
    }
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // Storage can be unavailable in restricted browser modes.
    }
  }, [items, hydrated])

  const addItem = useCallback((item: Omit<CartItem, "qty">, qty = 1) => {
    if (qty <= 0) return
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      return existing
        ? prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + qty } : i))
        : [...prev, { ...item, qty }]
    })
  }, [])

  const removeItem = useCallback((id: string) => setItems((prev) => prev.filter((i) => i.id !== id)), [])
  const updateQty = useCallback((id: string, qty: number) => {
    setItems((prev) => qty <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => i.id === id ? { ...i, qty } : i))
  }, [])
  const clearCart = useCallback(() => setItems([]), [])
  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items])
  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.qty * i.price, 0), [items])

  const value = useMemo(
    () => ({ items, addItem, removeItem, updateQty, clearCart, count, subtotal, hydrated }),
    [items, addItem, removeItem, updateQty, clearCart, count, subtotal, hydrated],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within a CartProvider")
  return ctx
}
