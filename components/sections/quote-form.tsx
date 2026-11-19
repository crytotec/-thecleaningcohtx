"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ChevronDown, Info, Mail, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { serviceOptions, site } from "@/lib/site";

type FormValues = {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  service: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emptyValues: FormValues = {
  fullName: "",
  phone: "",
  email: "",
  preferredDate: "",
  service: "",
  details: "",
};

// Required fields, in the order they appear on the form.
const requiredFields: (keyof FormValues)[] = ["fullName", "phone", "email", "service"];

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Please enter a valid phone number with at least 10 digits.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address, such as name@example.com.";
  }

  if (!values.service) {
    errors.service = "Please choose a cleaning service.";
  }

  return errors;
}

function buildMailto(values: FormValues): string {
  const subject = `Free quote request: ${values.service || "Cleaning"}`;
  const body = [
    `Name: ${values.fullName}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Preferred date: ${values.preferredDate || "Not specified"}`,
    `Service: ${values.service}`,
    "",
    `Details: ${values.details || "None"}`,
  ].join("\n");

  return `${site.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function errorProps(id: string, error?: string) {
  return {
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
  };
}

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink">
        {label}
        {optional ? <span className="font-normal text-grey-500"> (optional)</span> : null}
      </label>
      <div className="relative mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-rose-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "block w-full min-h-12 rounded-xl border border-grey-300 bg-white px-4 py-3 text-base text-ink placeholder:text-grey-400 transition-colors focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-100 aria-[invalid=true]:border-rose-600";

export function QuoteForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update(key: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    if (errors[key]) {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = requiredFields.find((key) => nextErrors[key]);
    if (firstInvalid) {
      document.getElementById(`quote-${firstInvalid}`)?.focus();
      return;
    }

    setSubmitting(true);

    // No submission backend is connected yet. This delay only demonstrates the loading state.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-3xl border border-brand-200 bg-brand-50 p-8 sm:p-10"
      >
        <Info aria-hidden="true" className="size-9 text-brand-700" />
        <h3 className="mt-5 font-display text-3xl text-ink">No enquiry was sent.</h3>
        <p className="mt-4 text-base leading-relaxed text-grey-600">
          This form is not connected to a submission service yet, so your details have not
          reached our team. To request your free quote, call us or send your details by email.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href={site.phoneHref} icon={Phone}>
            Call {site.phone}
          </ButtonLink>
          <ButtonLink href={buildMailto(values)} variant="secondary" icon={Mail}>
            Email my details
          </ButtonLink>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex min-h-12 items-center text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
        >
          Edit my details
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-labelledby="quote-form-title"
      className="rounded-3xl border border-grey-200 bg-white p-6 shadow-sm sm:p-10"
    >
      <h3 id="quote-form-title" className="font-display text-2xl text-ink">
        Tell us about your home
      </h3>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field id="quote-fullName" label="Full Name" error={errors.fullName}>
          <input
            id="quote-fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            className={inputClass}
            {...errorProps("quote-fullName", errors.fullName)}
          />
        </Field>

        <Field id="quote-phone" label="Phone Number" error={errors.phone}>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={inputClass}
            {...errorProps("quote-phone", errors.phone)}
          />
        </Field>

        <Field id="quote-email" label="Email Address" error={errors.email}>
          <input
            id="quote-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="name@example.com"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={inputClass}
            {...errorProps("quote-email", errors.email)}
          />
        </Field>

        <Field id="quote-preferredDate" label="Preferred Date" optional>
          <input
            id="quote-preferredDate"
            name="preferredDate"
            type="date"
            value={values.preferredDate}
            onChange={(event) => update("preferredDate", event.target.value)}
            className={inputClass}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field id="quote-service" label="Cleaning Service" error={errors.service}>
            <select
              id="quote-service"
              name="service"
              value={values.service}
              onChange={(event) => update("service", event.target.value)}
              className={`${inputClass} appearance-none pr-12`}
              {...errorProps("quote-service", errors.service)}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-grey-500"
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field id="quote-details" label="Additional Details" optional>
            <textarea
              id="quote-details"
              name="details"
              rows={4}
              value={values.details}
              onChange={(event) => update("details", event.target.value)}
              className={`${inputClass} min-h-28 resize-y`}
            />
          </Field>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-700 disabled:cursor-wait disabled:opacity-70"
        >
          {submitting ? (
            <>
              <span
                aria-hidden="true"
                className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white motion-reduce:animate-none"
              />
              Please wait…
            </>
          ) : (
            "Request My Free Quote"
          )}
        </button>
        <p className="text-sm text-grey-500">
          Prefer to talk?{" "}
          <a
            href={site.phoneHref}
            className="font-semibold text-brand-700 underline-offset-4 hover:underline"
          >
            Call {site.phone}
          </a>
          .
        </p>
      </div>
    </form>
  );
}