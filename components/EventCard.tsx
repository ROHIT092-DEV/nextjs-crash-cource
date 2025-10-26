import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function EventCard({
  title,
  image,
  slug,
  location,
  date,
  time,
}: {
  title: string
  image: string
  slug: string
  location?: string
  date: string
  time: string
}) {
  return (
    <div>
      <Link href={`/event/${slug}`} id="event-card">
        <Image
          src={image}
          alt={title}
          width={410}
          height={300}
          className="poster"
        />

        <div className="flex flex-row gap-2">
          <Image src={'/icons/pin.svg'} alt="location" width={14} height={14} />
          <p>{location}</p>
        </div>
        <p className="title">{title}</p>

        <div className="flex flex-row gap-2">
          <Image
            src={'/icons/calendar.svg'}
            alt="location"
            width={14}
            height={14}
          />
          <p>{location}</p>
        </div>

        <div className="flex flex-row gap-2">
          <Image
            src={'/icons/clock.svg'}
            alt="location"
            width={14}
            height={14}
          />
          <p>{location}</p>
        </div>
      </Link>
    </div>
  )
}

export default EventCard
