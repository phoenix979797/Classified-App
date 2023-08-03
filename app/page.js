import Image from "next/image";
import ImageCarousel from './components/ImageCarousel';
import { BiSolidBriefcase } from 'react-icons/bi';
import { GrUserWorker } from 'react-icons/gr';
import { SiJoplin } from 'react-icons/si';
import { PiListMagnifyingGlassFill } from 'react-icons/pi';

export default function Home() {
  return (
    <main className="min-h-screen mx-auto px-4 md:px-8 py-5 bg-cover bg-center bg-no-repeat bg-[#ffffff]">
      <ImageCarousel />
      <div className="md:py-8 py-3">
        <h1 className="flex justify-center text-black font-bold md:text-3xl text-base ">KEY FEATURES</h1>
        <div className="flex flex-row flex-wrap justify-center md:mt-4 mt-2">
          <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/feature1.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center ">
            <p className="flex justify-center md:mt-5 mt-3"><BiSolidBriefcase size={60}/></p>
            <a href="" className="flex justify-center md:mt-5 mt-3">BUSINESSES</a>
          </div>
          <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/feature2.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center">
            <p className="flex justify-center md:mt-5 mt-3 "><GrUserWorker size={60}/></p>
            <a href="" className="flex justify-center md:mt-5 mt-3">WORKERS</a>
          </div>
          <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/feature3.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center">
            <p className="flex justify-center md:mt-5 mt-3 "><SiJoplin size={60}/></p>
            <a href="" className="flex justify-center md:mt-5 mt-3">JOBS</a>
          </div>
          <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/feature4.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center">
            <p className="flex justify-center md:mt-5 mt-3 "><PiListMagnifyingGlassFill size={60}/></p>
            <a href="" className="flex justify-center md:mt-5 mt-3">CLASSIFIEDS</a>
          </div>
        </div>
      </div>
    </main>
  );
}
