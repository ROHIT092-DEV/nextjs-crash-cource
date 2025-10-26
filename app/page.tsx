import EventCard from '@/components/EventCard'
import ExplorBtn from '@/components/ExplorBtn'
import { events } from '@/lib/constants'
import { section } from 'motion/react-client'
import React from 'react'

function page() {
  return (
    <section>
      <h1 className="text-center">
        The hub for every Dev <br /> Event you cant Miss
      </h1>
      <p className="text-center mt-5">
        Hackthon, Meetups and confress are in one place
      </p>
      <ExplorBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Event</h3>

        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard
                title={event.title}
                image={event.image}
                slug={event.slug}
                location={event.location}
                date={event.date}
                time={event.time}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page
