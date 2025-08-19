"use client"

import * as React from "react"

type IconProps = React.SVGProps<SVGSVGElement> & { className?: string }

export default function WhatsAppIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="WhatsApp"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Chat bubble circle (complete) */}
      <circle cx="12" cy="12" r="9" />
      {/* Bubble tail */}
      <path d="M7 19l-.5 3 3-1" />
      {/* Handset shape */}
      <path d="M15.2 14.6c-.7.5-1.5.6-2.3.3-2.1-.8-3.8-2.5-4.6-4.6-.3-.8-.2-1.6.3-2.3l.6-.6c.2-.2.6-.2.8 0l1.1 1.1c.2.2.3.6.1.8l-.5.8c.5 1.1 1.4 2 2.5 2.5l.8-.5c.3-.2.6-.1.8.1l1.1 1.1c.2.2.2.6 0 .8l-.7.5Z" />
    </svg>
  )
}


