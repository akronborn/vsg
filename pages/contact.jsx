import Head from "next/head";
import styles from "../styles/Contact.module.css";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const contact = () => {
  const [state, handleSubmit] = useForm("xqknzpby");
  if (state.succeeded) {
    return <p>Thanks! I'll get back to you shortly!</p>;
  }

  return (
    <div>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="Contact information" />
      </Head>

      <div className={styles.image}>
        <h2 className={styles.p}>Contact the Admin </h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={styles.input}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            placeholder={
              "If you'd like an event posted, please provide the date, time, platform, and any contact information (if necessary). "
            }
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className={styles.submit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;
