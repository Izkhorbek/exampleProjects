import TextChange from "../Common/TextChange";
import emailjs from "@emailjs/browser";
import EmailJS from "../../assets/emailjs/EmailJS";
import React, { useState } from "react";
import InputHelper from "../../Helper/InputHelper";
import toastNotify from "../../Helper/toastNotify";
const templateParams = {
  user_from: "",
  email_from: "",
  message: ""
};
function Contact() {
  const [formData, setFormData] = useState(templateParams);
  const handleFormData = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const tempData = InputHelper(e, formData);
    setFormData(tempData);
  };

  const handlesendEmail = (event: any) => {
    event.preventDefault();
    emailjs
      .sendForm(
        EmailJS.SERVICE_ID,
        EmailJS.TEMPLATE_ID,
        event.target,
        EmailJS.PUBLIC_KEY
      )
      .then(() => {
        console.log("success");
        toastNotify("Message has sent successfully", "success");
      })
      .catch(() => {
        console.log("error");

        toastNotify("Message couldn't send, please try again!", "error");
      });
  };
  return (
    <section id="contact">
      <div className="pt-[100px]">
        <div className="container">
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
          >
            <div className="min-w-[100px] w-[500px]  border shadow-xl rounded-xl hover:bg-green-50  ">
              <form
                method="post"
                className="flex flex-col p-5 gap-5"
                onSubmit={handlesendEmail}
              >
                <span className="text-3xl text-[green] font-medium">
                  <TextChange texts={[`Let's get in touch`]} />
                </span>
                <div className="flex flex-col">
                  <label htmlFor="outline_filed" className="text-teal-300">
                    Full Name
                  </label>
                  <input
                    className="px-1 border-s-2 py-1"
                    type="text"
                    name="user_from"
                    id="outline_filed"
                    placeholder="Enter full name"
                    onChange={handleFormData}
                    value={formData.user_from}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="outline_filed" className="text-teal-300">
                    Email
                  </label>
                  <input
                    className="px-1 border-s-2 py-1"
                    type="email"
                    name="email_from"
                    id="outline_fullname"
                    placeholder="Enter email"
                    onChange={handleFormData}
                    value={formData.email_from}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="outline_filed" className="text-teal-300">
                    Your message
                  </label>
                  <textarea
                    className="w-full border border-gray-200 min-h-[100px] p-1 max-te"
                    name="message"
                    id="outline_message"
                    maxLength={150}
                    onChange={handleFormData}
                    value={formData.message}
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 px-6 rounded py-1 hover:bg-blue-700 text-white"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
