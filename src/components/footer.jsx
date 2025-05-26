import React from 'react'
import { Clover, Facebook, Youtube, Twitch} from 'lucide-react'

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <Clover size={32} />
        <p>
          Hololive ID Gen 3<br />
          Vestia Zeta<br />
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social Media</h6>
        <div className="grid grid-flow-col gap-4">
          <a href='facebook.com/vestiazeta' className='hover:bg-red-500'> 
            <Facebook />
          </a>
          <a href='youtube.com/vestiazeta' className='hover:bg-red-500'>
            <Youtube />
          </a>
          <a href='https://www.twitch.tv/vestiazeta' className='hover:bg-red-500'>
            <Twitch />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer