import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import axios from 'axios'

import EmailRegex from '@util/EmailRegex'
import { discordLink, eventTime, facebookLink, instagramLink, linkedinLink, name, registrationLink, tiktokLink } from '@util/config'

import logo from '@media/logo.png'
import InstagramLogo from "@media/ig.png"
import FacebookLogo from "@media/fb.png"
import TikTokLogo from "@media/tiktok.png"
import { FaLinkedin, FaDiscord, FaTiktok } from 'react-icons/fa'

const buttonColoring =
  'bg-emerald-700 text-white hover:bg-white hover:text-emerald-700 active:bg-emerald-500 active:text-white transition-all duration-300'

enum EmailState {
  Neutral,
  Invalid,
  Success,
  Sending
}

export default function Footer() {
  const [emailState, setEmailState] = useState(EmailState.Neutral)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Extract email from form data
    const formData = Object.fromEntries(new FormData(e.currentTarget))
    const email = formData.email.toString()

    // Match using regex
    if (email === '' || !email.match(EmailRegex)) {
      setEmailState(EmailState.Invalid);
      return;
    }

    // Submit to Airtable
    setEmailState(EmailState.Sending);

    try {
      const startingTime = new Date().getTime();

      await axios.post("/api/addToNewsletter", {
        email: email
      });

      // Slow down animation to take at least 300ms on user end so it's smoother
      await new Promise(resolve => {
        setTimeout(resolve.bind(null, null), 300 - (new Date().getTime() - startingTime));
      });
    } catch (e) {
      // We don't need the user to know of the error, but log it for later uses
      console.error("Error when sending email", e);
    }

    // Let user know it was sent successfully
    setEmailState(EmailState.Success);
  }

  return (
    <footer className="flex flex-col justify-between gap-4 px-12 lg:px-20 py-8 bg-emerald-1000 items-center z-[99999999] text-center sm:text-left" id="footer">
      <div className="flex justify-between items-center gap-6 lg:w-1/3 mb-4">
        <div>
          <h2 className="text-4xl text-white">{name}</h2>
          <p className="text-lg text-emerald-500">
            {eventTime}
          </p>
        </div>

        <Image
          src={logo}
          width={100}
          height={100}
          quality={100}
          className="rounded-xl hidden sm:block"
          alt="Logo"
        />
      </div>

      <a 
        className={`px-9 py-3 rounded-xl text-lg ${buttonColoring}`} 
        href={registrationLink}
        target="_blank" 
        rel="noreferrer"
      >
        In-Person Hacker Registration
      </a>

      <hr className="h-px bg-white w-full lg:w-[40%] my-6" />

      <div className="lg:w-1/3" id="newsletter">
        <h2 className="text-2xl text-white">Newsletter</h2>
        <p className="text-md text-emerald-500">
          Sign up to our newsletter to stay connected!
        </p>

        <form className="flex flex-col sm:flex-row items-center gap-2 mt-4 text-center lg:text-left" onSubmit={handleSubmit} noValidate>
          <input
            className={`rounded-lg py-2 px-3 w-60 sm:w-72 align-middle text-white outline-none focus:ring-2 focus:ring-emerald-700 duration-200 bg-white/20 shadow-lg focus:shadow-none ${emailState == EmailState.Invalid && "ring-1 ring-red-600"}`}
            placeholder="Your email address"
            name="email"
            type="email"
            onChange={() => setEmailState(EmailState.Neutral)}
            required
          />
          <input
            type="submit"
            disabled={emailState === EmailState.Sending}
            className={`rounded-lg py-2 px-4 w-60 sm:w-auto text-md ${buttonColoring} hover:cursor-pointer disabled:bg-emerald-900 disabled:text-white/50 disabled:cursor-wait`}
            value={emailState === EmailState.Sending ? "Submitting..." : "Submit"}
          />
        </form>

        {emailState == EmailState.Invalid && (
          <p className="text-sm text-red-500">
            Please provide a valid email address.
          </p>
        )}

        {emailState == EmailState.Success && (
          <p className="text-sm text-emerald-400">Thanks for submitting!</p>
        )}
      </div>

      <hr className="h-px bg-white w-full lg:w-[40%] my-6" />

      <div className="flex items-center gap-3 text-4xl">
        <a
          href={linkedinLink}
          className="text-[#0A66C2] hover:text-[#0A66C2]/75 active:text-[#0A66C2]/50 duration-200"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href={discordLink}
          className="text-[#5865F2] hover:text-[#5865F2]/75 active:text-[#5865F2]/50 duration-200"
          target="_blank"
          rel="noreferrer"
          title="Discord"
        >
          <FaDiscord />
        </a>

        <a
          href={instagramLink}
          className="text-[#F77737] hover:text-[#F77737]/75 active:text-[#F77737]/50 duration-200"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <Image src={InstagramLogo} width={30} height={30} alt="instagram" />
        </a>

        <a
          href={facebookLink}
          className="text-[#F77737] hover:text-[#F77737]/75 active:text-[#F77737]/50 duration-200"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <Image src={FacebookLogo} width={30} height={30} alt="facebook" />
        </a>

        <a
          href={tiktokLink}
          className="text-[#00f2ea] hover:text-[#ff0050]/75 active:text-[#ff0050]/50 duration-200"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <Image src={TikTokLogo} width={30} height={30} alt="tiktok" />
        </a>
      </div>

      <hr className="h-px bg-white w-full lg:w-[40%] mt-6 mb-2" />

      <p className='text-md text-gray-200 font-sans'>
        Made with Next.js, Tailwind, and 💙 by
        {" "}
        <a href="https://aritrosaha.vercel.app" target="_blank" rel="noreferrer" className='text-blue-300 hover:text-blue-500 duration-150'>
          Aritro Saha
        </a>
      </p>
    </footer>
  )
}
