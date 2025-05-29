import React from 'react'
import { Soup, Facebook, Youtube, Twitch} from 'lucide-react'

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <Soup size={32} />
        <p>
          MIEATS<br />
          Tempat Makan No.1 di Indonesia<br />
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social Media</h6>
        <div className="grid grid-flow-col gap-4">
          <a href='' className='hover:bg-green-300'> 
            <Facebook />
          </a>
          <a href='' className='hover:bg-green-300'>
            <Youtube />
          </a>
          <a href='' className='hover:bg-green-300'>
            <Twitch />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer