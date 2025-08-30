"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight, Megaphone } from 'lucide-react'
import Link from "next/link"

type Announcement = {
  title: string
  date: string
  dateTime?: string
  description: string
  href?: string
}

export default function AnnouncementsSection() {
  // Keep one item for now; layout will center it in the middle column on md+
  const announcements: Announcement[] = [
    {
      title: "Illuminate: Empowering the Entrepreneur in you",
      date: "September 12, 2025",
      dateTime: "2025-09-12",
      description:
        "Hands-on entrepreneurship workshop guiding students through idea generation, business modeling, and startup development.",
      href: "#",
      // Add more fields later if needed
    },
  ]

  return (
    <section id="announcements" aria-labelledby="announcements-title" className="py-16 md:py-24">
      <div className="container">
        {/* Centered heading with underline that spans the whole heading text, icon after the text */}
        <div className="mb-8 text-center">
          <div className="flex items-end justify-center gap-2">
            <h2
              id="announcements-title"
              className="inline-block text-3xl md:text-4xl font-bold tracking-tight text-balance border-b-2 border-primary pb-1"
            >
              Announcements
            </h2>
          </div>
        </div>

        <p className="text-muted-foreground mb-8 text-center">
          Stay up to date with the latest news and updates from the E‑Cell community.
        </p>

        {/* Center a single card by placing it in the middle column on md+ */}
        <div className="grid gap-6 md:grid-cols-3">
          {announcements.map((item, i) => (
            <div key={i} className={announcements.length === 1 ? "md:col-start-2" : ""}>
              <Card
                className="group h-full transition-all duration-300 border border-border hover:-translate-y-1 hover:shadow-lg hover:border-[#FACC15] hover:ring-1 hover:ring-[#FACC15]"
              >
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={item.dateTime || ""}>{item.date}</time>
                  </div>

                  {/* Title turns gold on hover */}
                  <h3 className="text-xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-[#FACC15]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">{item.description}</p>

                  {item.href ? (
                    <div className="mt-auto">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        aria-label={`Read more about: ${item.title}`}
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
