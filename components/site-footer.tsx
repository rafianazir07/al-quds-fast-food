import { Phone, MapPin } from "lucide-react"
import { contact } from "@/lib/menu-data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center">
        <div className="flex items-center gap-3">
          <span className="font-display text-2xl font-bold uppercase tracking-wide text-primary">
            Al Quds
          </span>
          <span className="text-xl text-primary/80" aria-hidden="true">
            {contact.arabic}
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-6">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            Harley Street, Rawalpindi
          </span>
          <a href={contact.phoneHref} className="inline-flex items-center gap-2 hover:text-primary">
            <Phone className="h-4 w-4 text-primary" />
            {contact.phone}
          </a>
        </div>

        <p className="mt-2 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Al Quds Fast Food. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
