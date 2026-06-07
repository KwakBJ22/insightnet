import { useState, type FormEvent } from 'react'
import Reveal from '../Reveal'
import { contactSection } from '../../data/site'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const { formLabels, placeholders } = contactSection

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-background-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-foreground-900 md:text-4xl">
              {contactSection.title}
            </h2>
            <p className="mt-4 leading-relaxed text-foreground-500">{contactSection.subtitle}</p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-foreground-600">
                <i className="ri-mail-line text-primary-500" />
                <span>contact@insightnet.co.kr</span>
              </div>
              <div className="flex items-center gap-3 text-foreground-600">
                <i className="ri-phone-line text-primary-500" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-foreground-600">
                <i className="ri-map-pin-line text-primary-500" />
                <span>서울특별시 강남구</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {submitted ? (
              <div className="rounded-2xl border border-accent-500/30 bg-accent-100/50 p-8 text-center">
                <i className="ri-checkbox-circle-line text-4xl text-accent-600" />
                <p className="mt-4 font-medium text-foreground-900">
                  {contactSection.successMessage}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-background-200 bg-white p-6 shadow-sm md:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium text-foreground-700">
                      {formLabels.name}
                    </span>
                    <input
                      required
                      type="text"
                      className="w-full rounded-lg border border-background-200 px-4 py-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium text-foreground-700">
                      {formLabels.company}
                    </span>
                    <input
                      type="text"
                      placeholder={placeholders.company}
                      className="w-full rounded-lg border border-background-200 px-4 py-3 text-sm placeholder:text-foreground-400 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium text-foreground-700">
                      {formLabels.email}
                    </span>
                    <input
                      required
                      type="email"
                      className="w-full rounded-lg border border-background-200 px-4 py-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium text-foreground-700">
                      {formLabels.phone}
                    </span>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-background-200 px-4 py-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
                    />
                  </label>
                </div>
                <label className="mt-5 block">
                  <span className="mb-1.5 block text-sm font-medium text-foreground-700">
                    {formLabels.message}
                  </span>
                  <textarea
                    required
                    rows={5}
                    maxLength={500}
                    placeholder={placeholders.message}
                    className="w-full resize-none rounded-lg border border-background-200 px-4 py-3 text-sm placeholder:text-foreground-400 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
                  />
                  <span className="mt-1 block text-right text-xs text-foreground-400">
                    최대 500자까지 입력 가능합니다
                  </span>
                </label>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-primary-500 py-3.5 text-sm font-semibold text-background-50 transition hover:bg-primary-600 sm:w-auto sm:px-10"
                >
                  {formLabels.submit}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
