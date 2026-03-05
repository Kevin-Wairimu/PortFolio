import { useState, useRef } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("Sending...");

    const formData = new FormData(formRef.current);
    const data = {
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Thank you! Your message has been sent successfully.");
        formRef.current?.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        // Attempt to parse JSON only if the response header says it's JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const result = await response.json();
          console.error("Error result:", result);
          setStatus(`Oops! Something went wrong: ${result.error || "Unknown error"}`);
        } else {
          // Handle non-JSON errors (like 404 from Vite)
          const textError = await response.text();
          console.error("Non-JSON error:", textError);
          setStatus(`Error: The API endpoint was not found (404). This function only runs on Vercel.`);
        }
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("Oops! Something went wrong. Please try again later.");
    }
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
              <a href="mailto:kevinkhalid21@gmail.com" aria-label="Email Me" title="Email Me">
                <i className="fa-regular fa-envelope"></i>
              </a>
              <a
                href="https://github.com/Kevin-Wairimu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" name="from_name" placeholder="Your Name" required />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
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
