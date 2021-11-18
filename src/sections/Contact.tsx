import ContactIcons from "../components/ContactIcons";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact me</h2>
        <div className="contact-body">
          Location: Manchester, United Kingdom
          <ContactIcons />
        </div>
      </div>
    </section>
  );
};

export default Contact;
