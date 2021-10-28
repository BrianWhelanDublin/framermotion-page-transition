import React, { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
//Components
import ScrollForMore from "../components/scrollForMore";

const transition = {
  duration: 1.4,
  ease: [.6, .01, -.05, .9]
}

const firstNameVaiants = {
  end: {
    transition: {
      delayChildren: .6,
      staggerChildren: .1,
      staggerDirection: -1
    }
  }
}

const lastNameVaiants = {
  end: {
    transition: {
      delayChildren: .6,
      staggerChildren: .1,
      staggerDirection: 1
    }
  }
}

const letterVarients = {
  start: {
    y: 400
  },
  end: {
    y: 0,
    transition: {
      duration: 1, ...transition
    }
  }
}


const Model = ({ imageDetails }) => {

  const { scrollYProgress } = useViewportScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (!canScroll) {
      document.querySelector("body").classList.add("no-scroll")
    } else {
      document.querySelector("body").classList.remove("no-scroll")
    }
  }, [canScroll])


  return (
    <motion.div className='single'
      onAnimationComplete={() => setCanScroll(true)}
      initial="start"
      animate="end"
      exit="exit"
    >
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div className='details'
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition }
              }}
            >
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
              <div className='mua'>MUA: @mylifeascrystall</div>
            </motion.div>
            <motion.div className='model'

            >
              <motion.span className='first'
                variants={firstNameVaiants}
              >
                <motion.span variants={letterVarients}>Y</motion.span>
                <motion.span variants={letterVarients}>a</motion.span>
                <motion.span variants={letterVarients}>s</motion.span>
                <motion.span variants={letterVarients}>m</motion.span>
                <motion.span variants={letterVarients}>e</motion.span>
                <motion.span variants={letterVarients}>e</motion.span>
                <motion.span variants={letterVarients}>n</motion.span>
              </motion.span>
              <motion.span className='last'
                variants={lastNameVaiants}
              >
                <motion.span variants={letterVarients} >T</motion.span>
                <motion.span variants={letterVarients} >a</motion.span>
                <motion.span variants={letterVarients} >r</motion.span>
                <motion.span variants={letterVarients} >i</motion.span>
                <motion.span variants={letterVarients} >q</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <div className='image-container-single'>
              <motion.div className='thumbnail-single'
                initial={{ width: imageDetails.width, height: imageDetails.height, y: " -50%" }}
                animate={{ y: 0, width: "100%", height: window.innerWidth > 1440 ? 800 : 400, transition: { delay: .2, ...transition } }}

              >
                <div className='frame-single'>
                  <motion.img src={require("../images/yasmeen.webp")} alt=''
                    style={{ scale: scale }}
                    initial={{ scale: 1 }}
                    animate={{
                      y: window.innerWidth > 1400 ? -1200 : -600,
                      transition: { delay: .2, ...transition }
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
