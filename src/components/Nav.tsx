import avatar from "/avatar.png";
import facebook from "/facebook.svg";
import twitter from "/twitter.svg";
import instagram from "/instagram.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
const itemMotionDesktop = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 1, x: 0 },
};
const navLinks = [
  { name: "Inicio", href: "/", id: 1 },
  { name: "Información", href: "/information", id: 2 },
  { name: "Contacto", href: "/contact", id: 3 },
];

const NavLinks = ({
  isMobile,
  className,
}: {
  isMobile: boolean;
  className: string;
}) => (
  <div className={className}>
    {navLinks.map(({ name, href, id }) => (
      <motion.a
        key={id}
        variants={isMobile ? itemMotion : itemMotionDesktop}
        href={href}
      >
        {name}
      </motion.a>
    ))}
  </div>
);

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  return (
      <nav className="relative mx-8 mb-24 flex items-center justify-between pb-6 pt-12 font-medium md:mx-14 lg:mx-32">
          <motion.div
              animate={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -25}}
              transition={{delay: 0.35}}
              className="flex gap-12"
          >
              <a href="/">
                  <img className="w-20" src={avatar} alt="Logo Mas Camarena"/>
              </a>
              <motion.div className="hidden items-center gap-12 xl:flex">
                  <a href="https://www.facebook.com/ComplejoEducativoMCamarena"><img src={facebook}
                                                                                     alt="Facebook Account"/></a>
                  <a href="https://twitter.com/C_Mas_Camarena"><img src={twitter} alt="Twitter Account"/></a>
                  <a href="https://www.instagram.com/ColegioMasCamarena"><img src={instagram} alt="Instagram Account"/></a>
              </motion.div>
          </motion.div>
          <div className="flex flex-col items-center"> {/* Add this div */}
              <h1 className="text-lg font-bold">
                  <a className="relative sm:relative sm:right-50 top-6" href="/">
                      Exposición PEP
                  </a>
              </h1>
          </div>

          {/* Title */}


          {/* Nav Items animating in  */}
          {toggled && (
              <motion.div
                  variants={navMotion}
                  animate="visible"
                  initial="hidden"
                  className="fixed left-0 top-0  z-40 flex h-screen
          w-full flex-col items-center  justify-center  gap-24 bg-white text-2xl font-bold"
              >
                  <NavLinks
                      className="flex flex-col gap-24 text-lg "
                      isMobile={true}
                  />
              </motion.div>
          )}
          <motion.div
              animate={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 25}}
              transition={{delay: 0.35}}
              className="hidden xl:flex xl:items-center xl:justify-center xl:gap-12 xl:text-lg   "
          >
              <NavLinks className="flex gap-12" isMobile={false}/>
          </motion.div>

          {/* Hamburger Toggle */}
          <motion.div
              animate={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 25}}
              transition={{delay: 0.35}}
              onClick={() => setToggled((prevToggle) => !prevToggle)}
              className={`burger z-50 cursor-pointer space-y-1.5 xl:hidden 
        `}
          >
              <motion.span
                  animate={{rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0}}
                  className="line-1 block h-0.5 w-8 bg-content"
              ></motion.span>

              <motion.span
                  animate={{width: toggled ? 0 : 24}}
                  className="line-2 block h-0.5 w-6 bg-content"
              ></motion.span>
              <motion.span
                  animate={{
                      rotateZ: toggled ? -45 : 0,
                      y: toggled ? -8 : 0,
                      width: toggled ? 32 : 24,
                  }}
                  className="line-3 block h-0.5 w-4 bg-content"
              ></motion.span>
          </motion.div>
      </nav>
  );
}
