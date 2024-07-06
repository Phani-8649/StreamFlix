import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleShow);

    return () => {
      window.removeEventListener('scroll', handleShow);
    };
  }, []);

  return (
    <div className={`nav ${show ? 'nav_black' : ''}`}>
      <img
        className='nav_logo'
        src='https://imgs.search.brave.com/_Qf1typO1eDlzetTOG_Q5XKZDNqKeXVu8gPXn6xXTdg/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzA4L05l/dGZsaXhfMjAxNV9s/b2dvLnN2Zy81MTJw/eC1OZXRmbGl4XzIw/MTVfbG9nby5zdmcu/cG5n'
        alt='Netflix Logo'
      />

      <img
        className='nav_avatar'
        src='https://occ-0-8010-3662.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e'
        alt='netflix_avatar'
      />
    </div>
  );
}

export default Nav;
