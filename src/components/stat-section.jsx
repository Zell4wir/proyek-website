import { Facebook, Instagram, Twitter, Youtube, YoutubeIcon } from 'lucide-react'
import React from 'react'

function StatSection() {
  return (
    <section className="py-32">
      <div className="bg-[url(public/download.jpeg)] bg-fixed">
        <div className="grid grid-cols-2 md:grid-cols-4 items-center mx-auto bg-black/70 py-10 h-full rounded-lg max-w-full text-center">
          <div className="font-bold text-white">
            <div className="flex flex-col items-center justify-center">
              <h1>
                <YoutubeIcon size={25} />
              </h1>
            </div>
            <h1 className="text-2xl">977K</h1>
            <p>Subscribers</p>
          </div>
          <div className="font-bold text-white">
            <div className="flex items-center justify-center">
              <h1>
                <Instagram size={25} />
              </h1>
            </div>
            <h1 className="text-2xl">181K</h1>
            <p>Followers Instagram</p>
          </div>
          <div className="font-bold text-white">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl">
                <Facebook size={25} />
              </h1>
            </div>
            <h1 className="text-2xl">9,08K</h1>
            <p>Followers FB</p>
          </div>
          <div className="font-bold text-white">
            <div className="flex items-center justify-center">
              <h1>
                <Twitter size={25} />
              </h1>
            </div>
            <h1 className="text-2xl">507.2K</h1>
            <p>Followers Twitter</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatSection