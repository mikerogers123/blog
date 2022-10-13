import * as React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import { FormEvent, useState } from "react";
import axios from "axios";
import { FormState } from "../models/form-state";
import { Contact, defaultContact } from "../models/contact";

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState(FormState.Clean);
  const [query, setQuery] = useState<Contact>(defaultContact);

  const handleChange = () => (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(
        "https://getform.io/f/fce447cd-baee-43b7-8c96-5cd5e9ad1c59",
        formData,
        { headers: { Accept: "application/json" } }
      )
      .then(() => {
        setFormStatus(FormState.Success);
        setQuery(defaultContact);
      })
      .catch((error) => {
          setFormStatus(FormState.Error);
          console.log(error);
      });
  };

  return (
    <Layout>
      <Head title="Contact" />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Contact me</legend>
          <div className="form-group">
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                value={query.name}
                onChange={handleChange()}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                value={query.email}
                onChange={handleChange()}
              />
            </label>
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Lorem ipsum dolet…"
              rows={7}
              required
              value={query.message}
              onChange={handleChange()}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </div>
          <div className="form-group">{formAlert(formStatus)}</div>
        </fieldset>
      </form>
    </Layout>
  );
};

const formAlert = (formState: FormState) => {
  switch (formState) {
    case FormState.Success:
      return (
        <div className="terminal-alert terminal-alert-primary">
          Thanks for reaching out!
        </div>
      );
    case FormState.Error:
      return (
        <div className="terminal-alert terminal-alert-error">
          An error occurred!
        </div>
      );
    default:
      return <></>;
  }
};

export default ContactPage;
