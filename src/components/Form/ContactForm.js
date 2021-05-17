import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
import "../Form/Contact.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xqkwpkgy");
  if (state.succeeded) {
    return (
      <div className="thanks">
        <p>Thanks for joining!</p>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    );
  }
  return (
    <section className="forms">
      <form onSubmit={handleSubmit}>
        <Form.Group className="message">
          <Form.Control
            placeholder="Type of enquiry"
            id="enquiry"
            type="textarea"
            name="Enquiry"
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState" className="message">
            <Form.Control
              placeholder="First Name"
              id="firstname"
              type="text"
              name="First Name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState" className="message">
            <Form.Control
              placeholder="Last Name"
              id="lastname"
              type="text"
              name="Last Name"
            />
          </Form.Group>
        </Form.Row>

        <ValidationError
          prefix="firstname"
          field="text"
          errors={state.errors}
        />
        <ValidationError prefix="lastname" field="text" errors={state.errors} />

        <Form.Group as={Col} controlId="formGridEmail" className="message">
          <Form.Control
            placeholder="Enter Email"
            id="email"
            type="text"
            name="Email"
          />
        </Form.Group>
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <Form.Group controlId="formGridCompany" className="message">
          <Form.Control
            placeholder="Company(Optional)"
            id="company"
            type="text"
            name="Company"
          />
        </Form.Group>
        <ValidationError
          prefix="Company"
          field="company"
          errors={state.errors}
        />

        <Form.Group controlId="formGridTelephone" className="message">
          <Form.Control
            placeholder="Telephone(Optional)"
            id="telephone"
            type="text"
            name="Telephone"
          />
        </Form.Group>
        <ValidationError
          prefix="Telephone"
          field="text"
          errors={state.errors}
        />

        <Form.Group className="message">
          <Form.Control
            placeholder="Message*"
            id="message"
            type="textarea"
            name="Message"
          />
        </Form.Group>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </section>
  );
}
export default ContactForm;
