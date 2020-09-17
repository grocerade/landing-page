import * as React from "react";

interface ContactFormProps {
  refContactForm: React.RefObject<HTMLDivElement>;
}

const EMAIL = "ec@grocerade.com";

const ContactForm: React.FunctionComponent<ContactFormProps> = ({
  refContactForm,
}) => {
  const sendEmail = () => {
    let link = document.createElement("a");
    const subject = escape("Message from grocerade.com");
    let body = ``;
    let href = `mailto:${EMAIL}?subject=${subject}`;

    if (name) {
      body += escape(`Name = ${name}`) + "%0D%0A";
    }
    if (companyName) {
      body += escape(`Company Name = ${companyName}`) + "%0D%0A";
    }
    if (phoneNumber) {
      body += escape(`Phone Number = ${phoneNumber}`) + "%0D%0A";
    }
    if (message) {
      body += escape(`Message = ${message}`);
    }

    if (body.length > 0) {
      href += `&body=${body}`;
    }

    link.href = href;
    link.click();
  };

  const [name, setName] = React.useState<string | undefined>(undefined);
  const [companyName, setCompanyName] = React.useState<string | undefined>(
    undefined
  );
  const [phoneNumber, setPhoneNumber] = React.useState<string | undefined>(
    undefined
  );
  const [message, setMessage] = React.useState<string | undefined>(undefined);

  return (
    <div className="contactform" ref={refContactForm}>
      <div className="contactform_page">
        <div className="contactform_content">
          <div className="contactform-content-box">
            <div className="contactform-text">
              Want to know more? Contact us here!
            </div>

            <div className="contactform-line">
              <input
                placeholder="Name"
                value={name as string}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="contactform-line">
              <input
                placeholder="Company Name"
                value={companyName as string}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
              />
            </div>
            <div className="contactform-line">
              <input
                placeholder="Phone Number"
                value={phoneNumber as string}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>
            <div className="contactform-line">
              <textarea
                placeholder="Message"
                value={message as string}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
            <div className="contactform-button" onClick={sendEmail}>
              Send
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContactForm };
