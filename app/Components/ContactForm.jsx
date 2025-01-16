import { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Button from "./Button";

const ContactForm = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Use environment variable for service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Use environment variable for template ID
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Use environment variable for public key
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Message Sent!",
            text: "Your message has been sent successfully. I will get back to you soon!",
            icon: "success",
            confirmButtonText: "OK",
          });
          e.target.reset(); // Reset the form after successful submission
        },
        (error) => {
          Swal.fire({
            title: "Error",
            text: "There was an issue sending your message. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      );
  };

  return (
    <div className="lg:py-10 pb-12 lg:w-5/6">
      <h2 className="text-3xl font-bold mb-3">Contact Me</h2>
      <p className="text-sm text-gray-700 mb-6">
        I am open to freelancing gigs or full-time opportunities. Feel free to
        reach out to me.
      </p>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-10 w-full">
          <label htmlFor="name" className="block mb-2 text-gray-800">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_fullName" 
            className="border-b border-pink-600 focus:border-slate-500 outline-none w-full bg-inherit"
            placeholder=" "
            required
          />
        </div>
        <div className="mb-10">
          <label htmlFor="email" className="block mb-2 text-gray-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email" 
            className="border-b border-pink-600 focus:border-slate-500 outline-none w-full bg-inherit"
            placeholder=" "
            required
          />
        </div>
        <div className="mb-10">
          <label htmlFor="number" className="block mb-2 text-gray-800">
            Phone Number
          </label>
          <input
            type="text"
            id="number"
            name="user_phone" 
            className="border-b border-pink-600 focus:border-slate-500 outline-none w-full bg-inherit"
            placeholder=" "
          />
        </div>
        <div className="mb-5 lg:mb-10">
          <label htmlFor="message" className="block mb-2 text-gray-800">
            Message
          </label>
          <textarea
            id="message"
            name="user_message" 
            className="border-b border-pink-600 focus:border-slate-500 outline-none w-full bg-inherit"
            placeholder=" "
            required
          ></textarea>
        </div>
        <Button
          text="Submit"
          variant="primary"
          className={"lg:mt-4 lg:mr-6 mt-2"}
          type="submit"
        />
      </form>
    </div>
  );
};

export default ContactForm;
