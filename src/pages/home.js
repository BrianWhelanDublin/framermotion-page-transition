import React from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";
import { motion } from "framer-motion";

const transition = {
  duration: .6,
  ease: [.43, .13, .23, .96]
}

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link to={`/model/yasmeen-tariq`}>
                  <ProgressiveImage
                    src={require("../images/yasmeen.webp")}
                    placeholder={require("../images/compressed-image.jpg")}>
                    {(src) => <motion.img src={src} alt='Yasmeen Tariq'
                      whileHover={{ scale: 1.1 }}
                      transition={transition}
                    />}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div className='information'
              exit={{ opacity: 0 }}
              transition={transition}
            >
              <div className='title'>Yasmeen Tariq</div>
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
