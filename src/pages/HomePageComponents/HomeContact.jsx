import { useRef, useState } from "react";
import Title from "../../components/Title";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

export default function HomeContact() {
  const form = useRef();
  const [checked, setChecked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (checked === true) {
      emailjs
        .sendForm("service_yjdhi6n", "template_pbhl5qa", form.current, {
          publicKey: "zbBbwVR3R-ED_J2Q7",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      e.target.reset();
      alert(
        "Die Nachricht wurde gesendet, wir werden so schnell wie möglich antworten. Vielen Dank."
      );
    } else {
      alert(
        "Akzeptieren Sie die Nutzungsbedingungen und versuchen Sie es erneut."
      );
    }
    setChecked(false);
  };

  return (
    <div className="home-contact">
      <div className="home-contact-top">
        <Title
          title="Kontaktiere uns"
          subtitle="Kontaktieren sie uns und wir werden uns bald bei ihnen melden."
        />
      </div>
      <div className="home-contact-middle" id="home-contact-middle">
        <iframe
          title="maps"
          width="100%"
          height="550"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Eckstra%C3%9Fe%207%2089250%20Senden+(ASN%20Geb%C3%A4udemanagement)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>
      </div>
      <div className="home-contact-bottom" id="home-contact-bottom">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="form-content">
            <div className="form-top" id="form-top">
              <input
                id="input-name"
                type="text"
                placeholder="Name"
                name="user_name"
                required
              />
              <input
                type="email"
                placeholder="E-mail-adresse"
                name="user_email"
                required
              />
            </div>
            <div className="form-middle" id="form-middle">
              <textarea
                className="textarea"
                type="text"
                placeholder="Nachricht"
                name="message"
                required
              />
            </div>
            <div className="form-bottom">
              <div className="checkbox" id="checkbox">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <Link to="/datenschutzerklärung" target="_blank">
                  <p>
                    Ich habe die datenschutzerklärung zur kenntnis genommen.
                  </p>
                </Link>
              </div>
              <button type="submit" className="btn-send">
                Absenden
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
