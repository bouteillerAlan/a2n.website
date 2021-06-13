import React from 'react';
import { motion } from 'framer-motion';

const ObsSvg = () => {

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(34, 30, 31, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(34, 30, 31, 1)"
    }
  };

  return (
    <motion.svg
      version="1.1"
      id="Capa_1"
      viewBox="0 0 512.001 512.001"
      fill="#221E1F"
      stroke="#feb300"
      strokeWidth="3px"
    >
      <motion.path
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 1, ease: "easeInOut" },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] }
        }}
        variants={icon}
  d="M499.92,188.26l-165.839-15.381L268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97
	L12.08,188.26c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348
	L256,413.188l143.207,85.034c10.027,5.954,22.314-2.972,19.75-14.348l-36.619-162.476l125.126-109.922
	C516.225,203.78,511.532,189.337,499.92,188.26z"/>
      <motion.path
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 1, ease: "easeInOut" },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] }
        }}
        variants={icon}
        d="M268.205,19.91c-4.612-10.711-19.799-10.711-24.411,0l-65.875,152.97L12.08,188.26
	c-11.612,1.077-16.305,15.52-7.544,23.216l125.126,109.922L93.044,483.874c-2.564,11.376,9.722,20.302,19.749,14.348l31.963-18.979
	c4.424-182.101,89.034-310.338,156.022-383.697L268.205,19.91z"/>
</motion.svg>

  )
}

export default ObsSvg;
