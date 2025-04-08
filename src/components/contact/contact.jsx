import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject]= useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Yewande",
      message: message,
      subject: subject
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
        setStatus({ type: "success", message: "Your message has been sent successfully!" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus({ type: "error", message: "Failed to send message. Please try again later." });
      });
  };

  return (
    <section className="contact py-5 bg-dark text-white position-relative overflow-hidden h-auto">
      <div className="position-absolute top-0 start-0 translate-middle rounded-circle bg-primary opacity-100 blur-circle animate-pulse"></div>
      <div className="position-absolute top-100 start-100 translate-middle rounded-circle bg-primary opacity-75 blur-circle animate-pulse"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="text-center mt-4"
            style={{ maxWidth: "650px", fontWeight: "bold" }}
          >
            <h3 className="section-title">GET IN TOUCH</h3>
            <h5 className="mb-5">Let's build something  <span className="text-primary"> awesome!</span> </h5>
          </div>

          <div className="col-md-8">
            <form className="row g-3 emailForm" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="visually-hidden" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control rounded-0"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label className="visually-hidden" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control rounded-0"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label className="visually-hidden" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="form-control rounded-0"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label className="visually-hidden" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control rounded-0"
                    placeholder="Message"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-dark btn-outline-light w-100 rounded-0"
                >
                  Send Message
                </button>
              </div>

              {status && (
                <div className="col-12 ">
                  <div
                    className={`alert mt-3 ${
                      status.type === "success" ? "alert-success" : "alert-danger"
                    }`}
                    role="alert"
                  >
                    {status.message}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
