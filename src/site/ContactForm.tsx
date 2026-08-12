import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "../design-system/Button";
import "./ContactForm.css";

interface ContactFields {
  [key: string]: string;
  name: string;
  email: string;
  organisation: string;
  message: string;
}

type ContactFieldName = "name" | "email" | "organisation" | "message";

const formId = "mqanpoeg";

export function ContactForm() {
  const [state, handleSubmit] = useForm<ContactFields>(formId);
  const successRef = useRef<HTMLDivElement>(null);
  const fieldHasError = (field: ContactFieldName) => Boolean(state.errors?.getFieldErrors(field).length);
  const hasFormError = Boolean(state.errors?.getFormErrors().length);
  const nameHasError = fieldHasError("name");
  const emailHasError = fieldHasError("email");
  const organisationHasError = fieldHasError("organisation");
  const messageHasError = fieldHasError("message");

  useEffect(() => {
    if (state.succeeded) successRef.current?.focus();
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <div className="site-contact-success" role="status" tabIndex={-1} ref={successRef}>
        <span className="site-contact-success__marker" aria-hidden="true" />
        <h2>Thank you. Your message has been sent.</h2>
        <p>I'll be in touch after I've reviewed the context you've provided.</p>
      </div>
    );
  }

  return (
    <form className="site-contact-form" onSubmit={handleSubmit} aria-labelledby="enquiry-heading" aria-busy={state.submitting}>
      <div className="site-contact-form__field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required aria-invalid={nameHasError || undefined} aria-describedby={nameHasError ? "contact-name-error" : undefined} />
        <ValidationError<ContactFields> id="contact-name-error" className="site-contact-form__error" prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className="site-contact-form__field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required aria-invalid={emailHasError || undefined} aria-describedby={emailHasError ? "contact-email-error" : undefined} />
        <ValidationError<ContactFields> id="contact-email-error" className="site-contact-form__error" prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="site-contact-form__field site-contact-form__field--wide">
        <label htmlFor="contact-organisation">Organisation <span>(optional)</span></label>
        <input id="contact-organisation" name="organisation" type="text" autoComplete="organization" aria-invalid={organisationHasError || undefined} aria-describedby={organisationHasError ? "contact-organisation-error" : undefined} />
        <ValidationError<ContactFields> id="contact-organisation-error" className="site-contact-form__error" prefix="Organisation" field="organisation" errors={state.errors} />
      </div>

      <div className="site-contact-form__field site-contact-form__field--wide">
        <label htmlFor="contact-message">What are you trying to change or improve?</label>
        <p id="contact-message-hint" className="site-contact-form__hint">Describe the capability, decision, experience or performance problem rather than the format you think you need.</p>
        <textarea id="contact-message" name="message" rows={8} required aria-invalid={messageHasError || undefined} aria-describedby={`contact-message-hint${messageHasError ? " contact-message-error" : ""}`} />
        <ValidationError<ContactFields> id="contact-message-error" className="site-contact-form__error" prefix="Learning challenge" field="message" errors={state.errors} />
      </div>

      <div className="site-contact-form__submit site-contact-form__field--wide">
        {hasFormError && (
          <div className="site-contact-form__submission-error" role="alert">
            <p>Something prevented the message from being sent. Check the details above and try again.</p>
            <ValidationError<ContactFields> errors={state.errors} />
          </div>
        )}
        <Button variant="primary" disabled={state.submitting} type="submit">
          {state.submitting ? "Sending…" : "Send enquiry"}
        </Button>
        <p className="site-contact-form__privacy">Submitting this form sends the information you provide to Artifact via Formspree so the enquiry can be responded to.</p>
      </div>
    </form>
  );
}
