export default function ContactPage() {
  return (
    <div id="contact-container" className="contact-container">
      <div className="contact-container--block">
        <h2 className="">Contact</h2>
        <div className="contact--container--content">
          <div className="contact--container--content-block">
            <label htmlFor="contact--email_id">Email id:</label>
            <a
              id="contact--email_id"
              href="mailto:waseemsvm14@gmail.com"
              target="blank"
            >
              waseemsvm14@gmail.com
            </a>
          </div>
          <div className="contact--container--content-block">
            <label htmlFor="contact--email_id">Mobile No.:</label>
            <a id="contact--mobile_num" href="tel:+01868152314">
              +91 8618152314
            </a>
          </div>
          <div className="contact--container--content-block">
            <label htmlFor="contact--linkedIn">LinkedIn:</label>
            <a
              id="contact--linkedin"
              href="https://www.linkedin.com/in/waseem-akram-p-a989a916b/"
              target="_blank"
            >
              www.linkedin.com/in/waseem-akram-p-a989a916b
            </a>
          </div>
          <div className="contact--container--content-block">
            <label htmlFor="contact--github">Github:</label>
            <a
              id="contact--github"
              href="https://github.com/Waseemsvm"
              target="_blank"
            >
              https://github.com/Waseemsvm
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
