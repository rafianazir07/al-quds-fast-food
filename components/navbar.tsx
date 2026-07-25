"use client"

import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { contact } from "@/lib/menu-data"

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#deals", label: "Deals" },
  { href: "#visit", label: "Visit Us" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:py-3">
        <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="truncate font-display text-xl font-bold uppercase tracking-wide text-primary sm:text-2xl">
            Al Quds
          </span>
          <span className="shrink-0 text-lg text-primary/80 sm:text-xl" aria-hidden="true">
            {contact.arabic}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            {contact.phone}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="max-h-[calc(100dvh-56px)] overflow-y-auto border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-md px-3 text-base font-medium text-muted-foreground active:bg-secondary active:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={contact.phoneHref}
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              {contact.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
