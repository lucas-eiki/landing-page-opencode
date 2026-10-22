import { useEffect, useRef } from 'react'
import { editions, getEditionById } from '../../../shared/data/editions'
import { Button } from '../../../shared/ui/Button'
import { Field } from '../../../shared/ui/Field'
import { Seal } from '../../../shared/ui/Seal'
import { SectionLabel } from '../../../shared/ui/SectionLabel'
import { waitlistContent } from '../model/waitlist-content'
import { useWaitlist } from '../viewmodel/useWaitlist'
import { Certificate } from './Certificate'
import styles from './Waitlist.module.css'

export function Waitlist() {
  const {
    values,
    errors,
    status,
    entry,
    storageAvailable,
    selectedEditionId,
    updateField,
    selectEdition,
    submit,
    reset,
  } = useWaitlist()

  const certificateHeadingRef = useRef<HTMLHeadingElement>(null)
  const previousStatus = useRef(status)
  const isSubmitting = status === 'submitting'
  const edition = entry ? getEditionById(entry.editionId) : undefined
  const successCopy = entry
    ? waitlistContent.success.body.replace('{name}', entry.name)
    : ''

  useEffect(() => {
    if (previousStatus.current === 'submitting' && status === 'success') {
      certificateHeadingRef.current?.focus()
    }
    previousStatus.current = status
  }, [status])

  const handleNew = () => {
    reset()
    window.requestAnimationFrame(() => document.getElementById('edition')?.focus())
  }

  return (
    <section id="lista" className={`${styles.section} section`} aria-labelledby="waitlist-title">
      <p className="sr-only" role="status" aria-live="polite">
        {isSubmitting
          ? waitlistContent.progress
          : status === 'success' && entry
            ? `${waitlistContent.success.eyebrow}. ${successCopy}`
            : ''}
      </p>

      <div className={`${styles.grid} container`}>
        <div className={styles.copy}>
          <SectionLabel number={waitlistContent.label} tone="inverse">
            Lista
          </SectionLabel>
          <p className={styles.eyebrow}>{waitlistContent.eyebrow}</p>
          <h2 id="waitlist-title" className={styles.title}>
            {waitlistContent.title}
          </h2>
          <p className={styles.intro}>{waitlistContent.intro}</p>
          <p className={styles.aside}>{waitlistContent.aside}</p>
          <Seal number="00" size={96} className={styles.seal} />
        </div>

        <div className={styles.panel}>
          {!storageAvailable ? (
            <p className={styles.notice}>{waitlistContent.storageNotice}</p>
          ) : null}

          {status === 'success' && entry && edition ? (
            <Certificate
              entry={entry}
              edition={edition}
              headingRef={certificateHeadingRef}
              onNew={handleNew}
            />
          ) : (
            <div className={styles.formCard}>
              <p className={styles.formEyebrow}>{waitlistContent.formTitle}</p>

              <form
                className={styles.form}
                aria-label={waitlistContent.formTitle}
                aria-busy={isSubmitting}
                onSubmit={(event) => {
                  event.preventDefault()
                  submit()
                }}
                noValidate
              >
                <Field
                  id="edition"
                  label={waitlistContent.fields.edition}
                  error={errors.editionId}
                >
                  <select
                    id="edition"
                    name="edition"
                    className={styles.control}
                    value={selectedEditionId ?? ''}
                    onChange={(event) => selectEdition(event.target.value)}
                    disabled={isSubmitting}
                    aria-invalid={errors.editionId ? true : undefined}
                    aria-describedby={errors.editionId ? 'edition-error' : undefined}
                  >
                    <option value="" disabled>
                      {waitlistContent.fields.editionPlaceholder}
                    </option>
                    {editions.map((item) => (
                      <option
                        key={item.id}
                        value={item.id}
                        disabled={item.availability === 'archive'}
                      >
                        {item.number} / {item.name}
                        {item.availability === 'archive'
                          ? waitlistContent.fields.editionArchiveSuffix
                          : ''}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field id="name" label={waitlistContent.fields.name} error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={styles.control}
                    value={values.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    placeholder={waitlistContent.fields.namePlaceholder}
                    autoComplete="name"
                    maxLength={80}
                    disabled={isSubmitting}
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                </Field>

                <Field id="email" label={waitlistContent.fields.email} error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={styles.control}
                    value={values.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    placeholder={waitlistContent.fields.emailPlaceholder}
                    autoComplete="email"
                    inputMode="email"
                    spellCheck={false}
                    maxLength={120}
                    disabled={isSubmitting}
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                </Field>

                <div className={styles.consentField}>
                  <div className={styles.consent}>
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={values.consent}
                      onChange={(event) => updateField('consent', event.target.checked)}
                      disabled={isSubmitting}
                      aria-invalid={errors.consent ? true : undefined}
                      aria-describedby={errors.consent ? 'consent-error' : undefined}
                    />
                    <label htmlFor="consent">{waitlistContent.fields.consent}</label>
                  </div>
                  {errors.consent ? (
                    <p id="consent-error" className={styles.consentError} role="alert">
                      {errors.consent}
                    </p>
                  ) : null}
                </div>

                <Button
                  type="submit"
                  className={styles.submit}
                  disabled={isSubmitting}
                  icon={isSubmitting ? undefined : '→'}
                >
                  {isSubmitting ? waitlistContent.submitting : waitlistContent.submit}
                </Button>

                <p className={styles.progress}>
                  {isSubmitting ? waitlistContent.progress : null}
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
