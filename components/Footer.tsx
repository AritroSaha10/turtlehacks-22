import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import axios from 'axios'

import logo from '../public/logo.png'
import EmailRegex from '../util/EmailRegex'

import { FaLinkedin, FaDiscord } from 'react-icons/fa'
import InstagramLogo from "../public/ig.png"

import { discordLink, eventTime, instagramLink, linkedinLink, name } from '../util/config'

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
      const startingTime = Date.now();

      await axios.post("/api/addToNewsletter", {
        email: email
      });

      // Slow down animation to take at least 300ms on user end so it's smoother
      await new Promise(resolve => {
        setTimeout(resolve.bind(null, null), 300 - (Date.now() - startingTime));
      });
    } catch (e) {
      // We don't need the user to know of the error, but log it for later uses
      console.error("Error when sending email", e);
    }

    // Let user know it was sent successfully
    setEmailState(EmailState.Success);
  }

  return (
    <footer className="flex flex-col justify-between gap-4 px-12 lg:px-20 py-8 bg-emerald-1000 items-center z-[99999999]">
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
          className="rounded-xl"
          alt="Logo"
        />
      </div>
      
      <Link href="/sign-up">
        <a className={`px-9 py-3 rounded-xl text-lg ${buttonColoring}`}>
          Register Today!
        </a>
      </Link>

      <hr className="h-px bg-white w-full lg:w-[40%] my-6" />

      <div className="lg:w-1/3">
        <h2 className="text-2xl text-white">Newsletter</h2>
        <p className="text-md text-emerald-500">
          Sign up to our newsletter to stay connected!
        </p>

        <form className="flex flex-col sm:flex-row items-center gap-2 mt-4" onSubmit={handleSubmit} noValidate>
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
            className={`rounded-lg py-2 px-4 w-60 sm:w-auto text-md ${buttonColoring} hover:cursor-pointer`}
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
      </div>
    </footer>
  )
}
