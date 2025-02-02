'use client'

import { forwardRef, useState } from 'react'
import { Transition } from '@headlessui/react'
import clsx from 'clsx'

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="10" strokeWidth="0" />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m6.75 10.813 2.438 2.437c1.218-4.469 4.062-6.5 4.062-6.5"
      />
    </svg>
  )
}

function FeedbackButton(props) {
  return (
    <button
      type="submit"
      className="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900"
      {...props}
    />
  )
}

const FeedbackForm = forwardRef(function FeedbackForm(
  { onSubmit, className, ...props },
  ref,
) {
  return (
    <form
      {...props}
      ref={ref}
      onSubmit={onSubmit}
      className={clsx(
        className,
        'absolute inset-0 flex items-center justify-center gap-6 md:justify-start',
      )}
    >
      <p className="text-sm text-zinc-600">
        Bài viết có hữu ích?
      </p>
      <div className="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10">
        <FeedbackButton data-response="yes">Có</FeedbackButton>
        <div className="bg-zinc-900/10" />
        <FeedbackButton data-response="no">Không</FeedbackButton>
      </div>
    </form>
  )
})

const FeedbackThanks = forwardRef(function FeedbackThanks(
  { className, ...props },
  ref,
) {
  return (
    <div
      {...props}
      ref={ref}
      className={clsx(
        className,
        'absolute inset-0 flex justify-center md:justify-start',
      )}
    >
      <div className="flex items-center gap-3 rounded-full bg-emerald-50/50 py-1 pl-1.5 pr-3 text-sm text-emerald-900 ring-1 ring-inset ring-emerald-500/20">
        <CheckIcon className="h-5 w-5 flex-none fill-emerald-500 stroke-white" />
        Cảm ơn đã phản hồi!
      </div>
    </div>
  )
})

export function Feedback() {
  let [submitted, setSubmitted] = useState(false)

  function onSubmit(event) {
    event.preventDefault()

    // event.nativeEvent.submitter.dataset.response
    // => "yes" or "no"

    setSubmitted(true)
  }

  return (
    <div className="relative h-8">
      <Transition show={!submitted}>
        <FeedbackForm
          className="duration-300 data-[leave]:pointer-events-none data-[closed]:opacity-0"
          onSubmit={onSubmit}
        />
      </Transition>
      <Transition show={submitted}>
        <FeedbackThanks className="delay-150 duration-300 data-[closed]:opacity-0" />
      </Transition>
    </div>
  )
}
