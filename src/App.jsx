import Nav from "./components/Nav";
import fanta from "./assets/fanta.png";
import coke from "./assets/coke.png";
import sprite from "./assets/sprite.png";
import grape from "./assets/grape.png";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  ArrowLeft02Icon,
  ShoppingCart02Icon,
  NewTwitterIcon,
  Linkedin01Icon,
  TiktokIcon,
  InstagramIcon,
} from "@hugeicons/core-free-icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added this

function App() {
  const [active, setActive] = useState(null);

  const socials = [
    {
      name: "X",
      icon: <HugeiconsIcon icon={NewTwitterIcon} size={24} />,
      link: "#",
    },
    {
      name: "Instagram",
      icon: <HugeiconsIcon icon={InstagramIcon} size={24} />,
      link: "#",
    },
    {
      name: "Tiktok",
      icon: <HugeiconsIcon icon={TiktokIcon} size={24} />,
      link: "#",
    },
    {
      name: "LinkedIn",
      icon: <HugeiconsIcon icon={Linkedin01Icon} size={24} />,
      link: "#",
    },
  ];

  const drinks = [
    {
      name: "Coca-Cola",
      description:
        "The timeless original. Experience the perfect balance of crisp carbonation and signature caramel notes.",
      bg: "hover:bg-red",
      text: "text-red",
      image: coke,
      background: "bg-red",
      label: "Coca-Cola",
      price: "$23.99",
    },
    {
      name: "Fanta - Orange",
      description:
        "A bright, bubbly explosion of sun-ripened orange flavor that awakens your senses with every sip.",
      bg: "hover:bg-orange",
      background: "bg-orange",
      text: "text-orange",
      image: fanta,
      label: "Orange",
      price: "$41.99",
    },
    {
      name: "Sprite",
      description:
        "Crisp, clean, and caffeine-free. A legendary lemon-lime fusion designed to quench your thirst instantly.",
      bg: "hover:bg-green",
      image: sprite,
      background: "bg-green",
      text: "text-green",
      label: "Sprite",
      price: "$17.30",
    },
    {
      name: "Fanta - Grape",
      description:
        "Bold, sweet, and intensely fruity. Dive into the deep, velvety taste of juicy purple grapes.",
      bg: "hover:bg-purple",
      text: "text-purple",
      image: grape,
      background: "bg-purple",
      label: "Grape",
      price: "$12.99",
    },
  ];

  return (
    <>
      <div className="relative overflow-hidden max-md:hidden group">
        {/* --- MODAL ANIMATION --- */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`${active.background} h-screen w-screen absolute inset-0 z-50`}
            >
              <div className="h-full w-full flex items-center justify-center cont mx-auto text-background relative">
                <motion.h1
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="w-screen mx-auto text-center text-background text-[13em] tracking-normal font-[montserrat] font-bold z-0 absolute select-none"
                >
                  {active.label}
                </motion.h1>

                <div
                  className="absolute top-20 left-10 cursor-pointer flex items-center gap-2 z-10"
                  onClick={() => setActive(null)}
                >
                  <HugeiconsIcon
                    icon={ArrowLeft02Icon}
                    size={24}
                    color="white"
                  />{" "}
                  Go Back
                </div>

                <div className="absolute right-[-2em] flex flex-col gap-3 bg-white/10 backdrop-blur-md py-4 px-2 rounded-sm border border-white/20">
                  {socials.map((social, i) => (
                    <motion.a
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      href={social.link}
                      className="text-white  transition-transform p-3 rounded-full flex items-center justify-center hover:bg-white/20"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                  className="w-[300px] z-10"
                >
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-full drop-shadow-2xl"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-10 left-5 w-[300px] z-10 "
                >
                  <h2 className="text-2xl font-bold mt-4">{active.name}</h2>
                  <p className="mt-2 opacity-75">{active.description}</p>
                  <button className="mt-4 bg-background text-foreground font-medium px-4 py-2 rounded-sm flex items-center gap-2">
                    Add to Cart <HugeiconsIcon icon={ShoppingCart02Icon} />
                  </button>
                </motion.div>

                <p className="text-center z-10 absolute text-background/40 bottom-0 flex items-center justify-center w-full text-2xl font-bold mb-10">
                  Price{" "}
                  <span className="ml-2 text-background">{active.price}</span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- GRID VIEW --- */}
        <div className="h-screen w-screen bg-background">
          <Nav />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="h-screen w-full grid grid-cols-4 group"
          >
            {drinks.map((drink, index) => (
              <motion.div
                key={drink.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`group-hover:blur-[1px] hover:!blur-none item w-full h-full overflow-hidden flex border-r border-border flex-col items-center justify-center ${drink.bg} transition-colors duration-300 thee relative`}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
                  className="w-[250px] hidden
                "
                >
                  <img src={drink.image} alt={drink.name} className="w-full" />
                </motion.div>

                <div className="px-12 group-hover:mt-4">
                  <p className="absolute top-32 left-5 text-6xl text-background font-black  transition-opacity group-hover:opacity-100">
                    0{index + 1}
                  </p>

                  <p className="text-[1.5em] font-medium opacity-75 group-hover:hidden">
                    0{index + 1}
                  </p>

                  <h3 className="text-[1.4em] font-bold">{drink.name}</h3>
                  <p className="opacity-75 line-clamp-1">{drink.description}</p>
                </div>

                <button
                  onClick={() => setActive(drink)}
                  className="flex items-center cursor-pointer bg-white/10 backdrop-blur-md  gap-2 mt-4 text-sm font-medium border border-border/20 px-3 py-2 rounded-sm hover:opacity-100 transition-opacity duration-300"
                >
                  View Details
                  <span className="w-fit h-fit p-1 flex justify-center items-center bg-background rounded-full">
                    <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
                  </span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="bg-blue-600 text-white h-screen w-screen flex items-center justify-center gap-8 hidden max-md:flex">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-center text-5xl font-semibold">Hello There</h1>
          <p className="text-center opacity-70 text-lg  tracking-widest uppercase">
            {" "}
            i am sorry <br />
            You can only see this on desktop.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
