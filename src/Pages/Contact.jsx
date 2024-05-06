export const Contact = () => {
    return (
    <>
    <section className="contact" id="contact">
  <div className="title white">
    <h2>Contact Me</h2>
    <p>
      Please enter your contact information and I will get back to you as soon
      as I can.
    </p>
  </div>
  <div className="contactForm">
    <div className="row">
      <div className="col50">
        <input type="text" name="" placeholder="First Name" />
      </div>
      <div className="col50">
        <input type="text" name="" placeholder="Last Name" />
      </div>
    </div>
    <div className="row">
      <div className="col50">
        <input type="text" name="" placeholder="Email" />
      </div>
      <div className="col50">
        <input type="text" name="" placeholder="Phone number" />
      </div>
    </div>
    <div className="row">
      <div className="col100">
        <textarea placeholder="Message" defaultValue={""} />
      </div>
    </div>
    <div className="row">
      <div className="col100">
        <input type="submit" defaultValue="Send" />
      </div>
    </div>
  </div>

</section>

    </>
    )
}