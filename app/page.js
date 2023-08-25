"use client";
import React, { useState, useEffect } from "react";
import Links from "./components/Links";
import Panel from "./components/Panel";
import ImageCarousel from "./components/ImageCarousel";
import { BiSolidBriefcase, BiSolidMessageRounded } from "react-icons/bi";
import { GrUserWorker } from "react-icons/gr";
import { SiJoplin } from "react-icons/si";
import {
  PiListMagnifyingGlassFill,
  PiClockClockwiseFill,
  PiDevicesFill,
} from "react-icons/pi";
import { FaPeopleLine } from "react-icons/fa6";
import { BsCalendar3EventFill } from "react-icons/bs";
import { FaRecycle, FaCoins } from "react-icons/fa";
const testimonials = [
  {
    id: 1,
    name: "John",
    text: `“I was looking for a casual job as a cleaner for a few months when a friend told me to create a Worker Profile on Classified App. I did as he suggested and since it was free, I had nothing to lose. Within days, I received an enquiry through Classified App Messaging and got the job I was looking for.”`,
  },
  {
    id: 2,
    name: "Jane Smith",
    text: `“I posted a Job Vacancy on Classified App for a bike technician and had an enquiry through Classified App Messaging - the same day.
    Found a great worker and very happy with the result. Classified App worked awesomely for me!
    Next is to use Classified App to sell my bikes. Thanks Classified App.”`,
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen mx-auto bg-cover bg-center bg-no-repeat bg-[#ffffff]">
      <ImageCarousel />
      <div className="md:py-8 py-3 ">
        <h1 className="flex justify-center text-black">
          KEY FEATURES
        </h1>
        <div className="flex flex-row flex-wrap justify-center md:mt-4 mt-2 text-white">
          <div className="bg-[url('/assets/feature1.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center ">
            <p className="flex justify-center md:mt-5 mt-3">
              <BiSolidBriefcase size={60} />
            </p>
            <span className="flex justify-center md:mt-5 mt-3">
            <Links
              url="/business"
              text="BUSINESSES"
            />
            </span>
          </div>
          <div className="bg-[url('/assets/feature2.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center">
            <p className="flex justify-center md:mt-5 mt-3 ">
              <GrUserWorker size={60} />
            </p>
            <a href="" className="flex justify-center md:mt-5 mt-3">
              WORKERS
            </a>
          </div>
          <div className="bg-[url('/assets/feature3.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center">
            <p className="flex justify-center md:mt-5 mt-3 ">
              <SiJoplin size={56} />
            </p>
            <a href="" className="flex justify-center md:mt-5 mt-3">
              JOBS
            </a>
          </div>
          <div className="bg-[url('/assets/feature4.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center">
            <p className="flex justify-center md:mt-5 mt-3 ">
              <PiListMagnifyingGlassFill size={60} />
            </p>
            <span className="flex justify-center md:mt-5 mt-3">
            <Links
              url="/classifieds"
              text="CLASSIFIEDS"
            />
            </span>
          </div>
          <div className="flex flex-row flex-wrap justify-center lg:mt-0 md:mt-4 mt-2">
            <div className="bg-[url('/assets/feature6.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center ">
              <p className="flex justify-center md:mt-5 mt-3">
                <FaPeopleLine size={60} />
              </p>
              <a href="" className="flex justify-center md:mt-5 mt-3">
                COMMUNITY
              </a>
            </div>
            <div className="bg-[url('/assets/feature7.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center">
              <p className="flex justify-center md:mt-5 mt-3 ">
                <BsCalendar3EventFill size={54} />
              </p>
              <a href="" className="flex justify-center md:mt-5 mt-3">
                EVENTS
              </a>
            </div>
            <div className="bg-[url('/assets/feature8.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center">
              <p className="flex justify-center md:mt-5 mt-3 ">
                <BiSolidMessageRounded size={60} />
              </p>
              <a href="/messaging" className="flex justify-center md:mt-5 mt-3">
                MESSAGING
              </a>
            </div>
            <div className="bg-[url('/assets/Whats-Fresh.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center">
              <p className="flex justify-center md:mt-5 mt-3 ">
                <PiClockClockwiseFill size={60} />
              </p>
              <a href="/whats-fresh" className="flex justify-center md:mt-5 mt-3">
                WHAT&apos;S FRESH
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/workapp_bg.jpg')] bg-cover text-white md:py-5 py-3">
        <h1 className="flex justify-center">
          WHY CLASSIFIED APP
        </h1>
        <p className="flex justify-center text-center md:mt-2">
          Classified App combines the most commonly used App functions<br></br>
          into one simple and free application for businesses, individuals and
          community.
        </p>
        <div className="flex flex-col md:flex-row flex-wrap justify-center md:py-5 py-3 mx-10 md:mx-3 text-center">
          <div className="flex-row border-none justify-center bg-gray-400 bg-opacity-25 rounded-lg py-3 md:h-60 h-auto md:w-80 w-auto mt-3 ml-6">
            <p className="z-0 md:mt-3 mt-1 md:ml-24 ml-16 bg-[#E3E3E3] text-[#6D6E71] text-center border-8 border-[#079DE2] rounded-full md:h-28 h-24 md:w-28 w-24">
              <PiDevicesFill size={80} className="md:m-2" />
            </p>
            <p className="mx-3">
              Classified App eliminates the use of multiple apps and platforms.
              Everything you need is in one place and on all your devices.
            </p>
          </div>
          <div className="flex-row border-none justify-center bg-gray-400 bg-opacity-25 rounded-lg py-3 md:h-60 h-auto md:w-80 w-auto mt-3 ml-6 lg:ml-10">
            <p className="z-0 md:mt-3 mt-1 md:ml-24 ml-16 bg-[#E3E3E3] text-[#6D6E71] text-center border-8 border-[#079DE2] rounded-full md:h-28 h-24 md:w-28 w-24">
              <FaRecycle size={60} className="md:m-4 m-2" />
            </p>
            <p className="mx-3">
              Whether you are a worker or business, buying or selling,
              organising an event, or sending a message, Classified App is the answer.
            </p>
          </div>
          <div className="flex-row border-none justify-center bg-gray-400 bg-opacity-25 rounded-lg py-3 md:h-60 h-auto md:w-80 w-auto mt-3 ml-6 lg:ml-10">
            <p className="z-0 md:mt-3 mt-1 md:ml-24 ml-16 bg-[#E3E3E3] text-[#6D6E71] text-center border-8 border-[#079DE2] rounded-full md:h-28 h-24 md:w-28 w-24">
              <FaCoins size={60} className="m-4" />
            </p>
            <p className="mx-3">
              Classified App has no upfront or hidden fees. You keep 100% of the
              proceeds of any sale you make using our platform.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/testimonials.jpg')] bg-cover bg-no-repeat md:py-5 py-3">
        <h1 className="flex justify-center text-black">
          TESTIMONIALS
        </h1>
        <div className="flex flex-col items-center py-10">
          <div className="relative overflow-hidden md:w-1/2 w-auto md:h-80 h-auto rounded-lg bg-[#ffffff] bg-opacity-25 shadow-md">
            <p className="text-black flex justify-center lg:mt-14 md:mt-10 mt-5 italic mx-3">
              {testimonials[currentSlide].text}
            </p>
            <div className="my-5 md:my-10 flex justify-center">
              <p className="text-[#2B3C96] md:mt-5 font-semibold">
                {testimonials[currentSlide].name}
              </p>
            </div>
            <div className="absolute bottom-0 w-full flex justify-center md:mb-5 lg:mb-10 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === currentSlide ? "bg-[#2B3C96]" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 ">
        <h1 className="flex justify-center text-center text-black">
          CLASSIFIED APP WORKS FOR YOU
        </h1>
        <div className="flex justify-center mt-5">
          <iframe
            className="w-1/2 md:h-96 aspect-auto"
            src={`https://www.youtube.com/embed/DHtLqWYu4Wo`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      {/*Panel for the homepage*/}
      <div className="bg-[url('/assets/testimonials.jpg')] bg-cover md:py-5 py-3">
        <h1 className="flex justify-center text-[#2B3C96]">
          QUESTIONS?
        </h1>
        <div className="flex justify-center items-center py-5">
          <div className="md:w-3/5 w-auto ">
            <Panel title="What is Classified App?">
              <p>
                Classified App is an integrated App designed for iOS, Android and Web
                Browsers that combines a<br></br> number of features to make it
                easier and simpler for you to conduct business, communicate with
                <br></br> people and actively engage with your local community.
                Classified App works for Businesses,<br></br> Communities and
                individuals alike and there are no fees, charges or commissions
                payable. You<br></br> will have to see Classified App to appreciate the
                many benefits you can derive from this unique platform.
              </p>
            </Panel>
            <Panel title="Why is it different from other apps out there?">
              <p>
                Classified App is the only App globally that integrates a number of
                functions into a single App.<br></br>Businesses can sell
                product, advertise their business, list job vacancies and find
                workers - all for<br></br> free. Individuals can find vacancies,
                promote themselves as a worker looking for work, buy, swap,
                <br></br> sell new or used goods. Community organisations can
                promote their services and seek<br></br> volunteers or club
                members, promote events and sell tickets. Overlaying all these
                rich features is<br></br> a fully functional messaging platform
                where you can chat with friends and family, send audio,<br></br>{" "}
                video and photos. No other App currently does all that Classified App
                offers.
              </p>
            </Panel>
            <Panel title="Who can use Classified App?">
              <p>
                Classified App is available now for download Globally from App Store
                and Google’s Play Store.<br></br> Alternatively you get started
                with the web version. Classified App is a single App with features for
                <br></br> businesses and individuals alike. Enjoy using your
                Classified App.
              </p>
            </Panel>
          </div>
        </div>
      </div>
    </main>
  );
}
