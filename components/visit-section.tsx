import { MapPin, Phone, Clock, Truck, Navigation } from "lucide-react"
import { contact } from "@/lib/menu-data"

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Al+Quds+Fast+Food+Harley+Street+Rawalpindi"

const details = [
  { icon: MapPin, label: "Location", value: contact.address },
  { icon: Phone, label: "Phone", value: contact.phone },
  { icon: Clock, label: "Hours", value: contact.hours },
  { icon: Truck, label: "Delivery", value: "Home delivery across the area" },
]

export function VisitSection() {
  return (
    <section id="visit" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-10 sm:py-16">
      <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Come Say Hi</p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            Visit Us
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            The perfect spot for a casual meal with friends or a quick, affordable
            takeaway. Prefer to stay in? We deliver right to your door.
          </p>

          <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-primary/10 p-2.5 text-primary">
                  <d.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {d.label}
                  </p>
                  <p className="mt-0.5 text-pretty text-foreground">{d.value}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={contact.phoneHref}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform active:scale-95 sm:mt-8 sm:w-auto sm:hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            Call {contact.phone}
          </a>
        </div>

        <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card p-6 sm:min-h-[360px] sm:p-8 md:min-h-[440px]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <MapPin className="h-3.5 w-3.5" />
              Find Us
            </div>
            <p className="mt-5 font-display text-2xl font-bold uppercase leading-tight text-foreground">
              Harley Street Chowk
            </p>
            <p className="mt-2 max-w-sm leading-relaxed text-muted-foreground">{contact.address}</p>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-6 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform active:scale-95 sm:hover:scale-105"
          >
            <Navigation className="h-4 w-4" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}
