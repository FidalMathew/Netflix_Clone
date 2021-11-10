import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [Show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });

    return () => {
      window.removeEventListener("scroll"); //removing listener so that if it refreses again it takes 100px more,
      // prevents adding another listener
    };
  }, []);

  return (
    <div className={`Nav ${Show && "Nav_black"} `}>
      <img
        className="Nav_logo"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix-Logo"
      />
      <img
        className="Nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
        alt="profile-Logo"
      />
    </div>
  );
}

export default Navbar;
