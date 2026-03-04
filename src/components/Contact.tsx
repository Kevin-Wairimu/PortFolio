import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const SERVICE_ID = "service_ckw8k08";
  const TEMPLATE_ID = "template_uzf85cf";
  const PUBLIC_KEY = "iLhOgwl_936hHwQgV";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("Sending...");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setStatus("Thank you! Your message has been sent successfully.");
        formRef.current?.reset();
        setTimeout(() => setStatus(""), 5000);
      },
      (error) => {
        console.log(error.text);
        setStatus("Oops! Something went wrong. Please try again later.");
      },
    );
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <i className="fa-solid fa-paper-plane"></i>{" "}
              kevinkhalid21@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> 0757724175
            </p>
            <div className="social-icons">
              <a href="mailto:kevinkhalid21@gmail.com" title="Email Me">
                <i className="fa-regular fa-envelope"></i>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            {/* <a href="/IMG/cv.pdf" download className="btn btn2">Download CV</a> */}
          </div>

          <div className="contact-right">
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="title"
                rows={6}
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
            {status && <span id="msg">{status}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
