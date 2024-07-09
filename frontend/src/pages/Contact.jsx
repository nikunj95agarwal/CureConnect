const Contact = () => (
    <section>
      <div className="px-4 mx-auto max-w-screen-md pt-20 ">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form_label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form_input mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="form_label">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how can we help you"
              className="form_input mt-1"
            />
            </div>
            <div>
            <label htmlFor="message" className="form_label">
              Message:
            </label>
            <textarea rows="6"
            typeof="text"
            id="message"
            placeholder="Leave a comment"
            className="form_input mt-4"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">Send Message</button>
        </form>
      </div>
    </section>
  );
  
  export default Contact;
  