import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactImage from "../public/assets/contact.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [value, setValue] = useState();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
        process.env.NEXT_PUBLIC__YOUR_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC__YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          setValue(" ");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImage}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Shanif Mohammed</h2>
                <p>Full Stack Web Developer</p>
                <p className="py-4">
                  {" "}
                  I am available for freelance or full-time position.Contact me
                  and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Contact with me</p>
                <div className="flex items-center justify-between py-4">
                  <Link href="https://www.linkedin.com/in/shanif-mohammed-a9592923a/">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-75">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link href="https://github.com/ShanifKn">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-75">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link href="mailto:Shanifkaraden06@gmail.com">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-75">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href="https://drive.google.com/file/d/1BENCrA4DUQtos_9yuohrCh_JBkuHcDgv/view?usp=share_link">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-75">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="user_name"
                      value={value}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="user_phone"
                      value={value}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="user_email"
                    value={value}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    name="message"
                    value={value}
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"></textarea>
                </div>
                <button
                  className="w-full p-4 text-gray-100 mt-4 bg-gradient-to-r from-[#5651e5] to-[#709dff]"
                  type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div
              className="
              rounded-full
              shadow-lg
              shadow-gray-400
              p-4
              cursor-pointer
              hover:scale-110
              ease-in
              duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
