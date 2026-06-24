'use client'

import { useState } from 'react'
import SectionHeading from '@/components/SectionHeading'
import ScrollReveal from '@/components/ScrollReveal'

const inputClassName =
  'w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-white transition placeholder:text-muted focus:border-yellow focus:outline-none'

const initialFormState = {
  name: '',
  phone: '',
  email: '',
  numberOfPlayers: '',
  dateOfGame: '',
  youngestAge: '',
  gameType: 'Standard Paintball',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialFormState)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const updateField = (
    field: keyof typeof initialFormState,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => {
      if (!prev[field]) return prev
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  const handleSubmit = () => {
    const nextErrors: Record<string, string> = {}
    if (!form.name.trim()) nextErrors.name = 'Name is required'
    if (!form.phone.trim()) nextErrors.phone = 'Phone is required'
    if (!form.email.trim()) nextErrors.email = 'Email is required'
    if (!form.numberOfPlayers.trim())
      nextErrors.numberOfPlayers = 'Number of players is required'
    if (!form.dateOfGame.trim()) nextErrors.dateOfGame = 'Date is required'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-surface section-padding pb-20">
      <ScrollReveal className="max-container">
        <SectionHeading>Enquire Now</SectionHeading>

        <p className="mb-10 mt-4 text-center font-body text-base text-muted">
          Fill in the form below and we&apos;ll get back to you quickly — or
          just give us a call on{' '}
          <a
            href="tel:01248340000"
            className="font-bold text-yellow hover:underline"
          >
            01248 340000
          </a>
        </p>

        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <div className="rounded-lg border-2 border-yellow bg-black p-8 text-center">
              <p className="font-body text-white">
                Thanks! We&apos;ll be in touch soon. Or call us now on{' '}
                <a
                  href="tel:01248340000"
                  className="font-bold text-yellow hover:underline"
                >
                  01248 340000
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block font-display text-xs uppercase tracking-wider text-muted"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className={inputClassName}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-danger">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block font-display text-xs uppercase tracking-wider text-muted"
                  >
                    Phone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className={inputClassName}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-danger">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block font-display text-xs uppercase tracking-wider text-muted"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className={inputClassName}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-danger">{errors.email}</p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="numberOfPlayers"
                    className="mb-1 block font-display text-xs uppercase tracking-wider text-muted"
                  >
                    Number of Players *
                  </label>
                  <input
                    id="numberOfPlayers"
                    type="text"
                    value={form.numberOfPlayers}
                    onChange={(e) =>
                      updateField('numberOfPlayers', e.target.value)
                    }
                    className={inputClassName}
                  />
                  {errors.numberOfPlayers && (
                    <p className="mt-1 text-xs text-danger">
                      {errors.numberOfPlayers}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="dateOfGame"
                    className="mb-1 block font-display text-xs uppercase tracking-wider text-muted"
                  >
                    Date of Game *
                  </label>
                  <input
                    id="dateOfGame"
                    type="date"
                    value={form.dateOfGame}
                    onChange={(e) => updateField('dateOfGame', e.target.value)}
                    className={inputClassName}
                  />
                  {errors.dateOfGame && (
                    <p className="mt-1 text-xs text-danger">
                      {errors.dateOfGame}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="youngestAge"
                    className="mb-1 block font-display text-xs uppercase tracking-wider text-muted"
                  >
                    Age of Youngest Player
                  </label>
                  <input
                    id="youngestAge"
                    type="text"
                    value={form.youngestAge}
                    onChange={(e) => updateField('youngestAge', e.target.value)}
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label
                    htmlFor="gameType"
                    className="mb-1 block font-display text-xs uppercase tracking-wider text-muted"
                  >
                    Game Type
                  </label>
                  <select
                    id="gameType"
                    value={form.gameType}
                    onChange={(e) => updateField('gameType', e.target.value)}
                    className={inputClassName}
                  >
                    <option value="Standard Paintball">Standard Paintball</option>
                    <option value="Low Impact">Low Impact</option>
                    <option value="Kids Party">Kids Party</option>
                    <option value="Stag or Hen Do">Stag or Hen Do</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Team Building">Team Building</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block font-display text-xs uppercase tracking-wider text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  className={inputClassName}
                  placeholder="Tell us about your group (optional)"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full rounded-lg bg-yellow py-4 font-display text-lg font-black uppercase text-black transition hover:brightness-110"
              >
                Send Enquiry
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="font-body text-sm text-muted">
            Prefer to just call? We&apos;re always happy to chat.
          </p>
          <a
            href="tel:01248340000"
            className="mt-2 block font-display text-3xl font-black text-yellow hover:underline"
          >
            01248 340000
          </a>
        </div>
      </ScrollReveal>
    </section>
  )
}
