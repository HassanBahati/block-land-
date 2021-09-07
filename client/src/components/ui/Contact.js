import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-black text-white text-center ">
      <h4 className="p-4">Contact Us</h4>
      <div className="contactscreen">
        <form class="contactScreenForm bg-danger" style={{ width: "" }}>
          <div class="form-outline mb-4 ">
            <input
              type="email"
              id="form6Example5"
              class="bg-white form-control"
            />
            <label class="form-label" for="form6Example5">
              Name
            </label>
          </div>

          <div class="form-outline mb-4">
            <input
              type="email"
              id="form6Example5"
              class="bg-white form-control"
            />
            <label class="form-label" for="form6Example5">
              Email
            </label>
          </div>

          <div class="form-outline mb-4">
            <textarea
              class="form-control bg-white"
              id="form6Example7"
              rows="4"
            ></textarea>
            <label class="form-label" for="form6Example7">
              Additional information
            </label>
          </div>

          <button class="btn btn-black">Send </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
