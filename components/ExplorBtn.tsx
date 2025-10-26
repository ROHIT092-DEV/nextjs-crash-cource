'use client'

import Image from 'next/image'

function ExplorBtn() {
  return (
    <button
      type="button"
      id="explor-btn"
      className="mt-7 mx-auto flex items-center gap-2 text-sm font-medium text-white hover:underline"
      onClick={() => console.log('button Clicked')}
    >
      <a href="#event">Explor Event</a>
      <Image
        src="/icons/arrow-down.svg"
        alt="arrow down"
        width={16}
        height={16}
      />
    </button>
  )
}

export default ExplorBtn
