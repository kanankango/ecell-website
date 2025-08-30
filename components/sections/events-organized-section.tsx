"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

type EventItem = {
  title: string
  date: string
  dateTime?: string
  description: string
  href?: string
  image: { src: string; alt: string }
}

export default function EventsOrganizedSection() {
  const items: EventItem[] = [
    {
      title: "Eureka Idea Pitching Competition",
      date: "August 22, 2025",
      dateTime: "2025-08-22",
      description:
        "Campus-wide pitch battle where founders presented concise problem–solution narratives, market insight, and traction to an expert jury.",
      href: "#",
      image: {
        src: "/placeholder.svg?height=220&width=480",
        alt: "Participants presenting during the Eureka Idea Pitching Competition",
      },
    },
    {
      title: "Innovision!",
      date: "August 5, 2025",
      dateTime: "2025-08-05",
      description:
        "Demo evening featuring early-stage products and live feedback from mentors and peers.",
      href: "#",
      image: {
        src: "/placeholder.svg?height=220&width=480",
        alt: "Audience watching startup demos",
      },
    },
  ]

  return (
    <section
      id="events-organized"
      aria-labelledby="events-organized-title"
      className="py-16 md:py-24 bg-white text-black"
    >
      <div className="container">
        {/* Centered heading with thinner underline (6px) spanning only the text */}
        <div className="text-center">
          <h2
            id="events-organized-title"
            className="inline-block text-4xl md:text-5xl font-extrabold tracking-tight text-balance"
            style={{ borderBottom: "6px solid #FACC15" }}
          >
            Events Organized
          </h2>
        </div>

        <p className="mt-4 text-base md:text-lg text-black/70 text-center">
          View the events that were organized by our team
        </p>

        {/* Center the two cards with even space */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <Card
              key={idx}
              // Hover effect to match blog cards: lift, shadow, gold border/ring
              className="group h-full bg-white text-black border border-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#FACC15] hover:ring-1 hover:ring-[#FACC15]"
            >
              {/* Image with subtle zoom on hover */}
              <div className="relative z-0 w-full h-48 overflow-hidden">
                <Image
                  src={item.image.src || "/placeholder.svg"}
                  alt={item.image.alt}
                  fill
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              {/* Content above image layer to ensure visibility */}
              <CardContent className="relative z-10 p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-black/70">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <time dateTime={item.dateTime || ""}>{item.date}</time>
                </div>

                {/* Title turns gold on hover, like blog cards */}
                <h3 className="text-xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-[#FACC15]">
                  {item.title}
                </h3>

                <p className="text-sm text-black/75">{item.description}</p>

                {item.href ? (
                  <div className="mt-1">
                    <Link
                      href={item.href}
                      className="text-sm font-medium underline underline-offset-4"
                      aria-label={`View details: ${item.title}`}
                    >
                      View details
                    </Link>
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
