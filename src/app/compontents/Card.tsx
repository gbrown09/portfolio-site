import React from 'react'

type Props = {
    content: string
}

export default function Card({content}: Props) {
  return (
    <div
    className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12 p-6 dark:bg-neutral-700">
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-center">
        {content}
    </p>
    </div>
  )
}
