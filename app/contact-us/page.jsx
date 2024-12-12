'use client';
import Navbar from "../components/Navbar";
export default function ContactUs() {
return(
    <div>
           <Navbar />

         <section id="contact" className="contact bg-white py-10">
              <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
              <div className="max-w-xl mx-auto px-6">
                <p className="text-center mb-6">
                  To contact us  fill out the form below, and we’ll get back to you as soon as possible.
                </p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 border rounded"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="w-full p-2 border rounded"
                    rows="4"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
              <p className="text-center mt-6">
                Or call us at <span className="font-bold">403-547-4595</span> or email at{' '}
                <a
                  href="mailto:info@voltrace.com"
                  className="text-blue-600 hover:underline"
                >
                  info@voltrace.com
                </a>
                .
              </p>
            </section>
    </div>
)
}