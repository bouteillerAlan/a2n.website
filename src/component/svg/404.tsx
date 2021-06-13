import React from 'react';
import { motion } from 'framer-motion';

const NotFoundSvg = () => {

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
      viewBox="0 0 512.003 512.003"
      strokeWidth="2px"
    >
			<motion.path
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
        stroke="#E15342"
        variants={icon}
        d="M9.646,186.258c-0.601,2.241-0.324,4.627,0.775,6.671l0.985,1.331
				c0.38,0.435,0.818,0.816,1.301,1.132c0.409,0.357,0.87,0.649,1.368,0.867c0.524,0.228,1.063,0.42,1.614,0.572
				c2.194,0.5,4.496,0.18,6.471-0.899c0.934-0.579,1.757-1.319,2.43-2.188c2.037-2.643,2.341-6.234,0.777-9.182
				c-0.556-0.964-1.285-1.817-2.15-2.516c-0.848-0.725-1.828-1.279-2.886-1.634c-2.17-0.665-4.514-0.462-6.537,0.567
				C11.792,182.151,10.311,184.038,9.646,186.258z"/>
      <motion.path
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
        stroke="#E15342"
        variants={icon}
        d="M330.919,11.285c-0.551-0.256-1.126-0.456-1.717-0.596
				c-72.969-21.756-151.834-9.95-215.233,32.221l-0.014,0.014l-0.004-0.006c-27.758,18.648-51.645,42.491-70.343,70.216
				c-0.127,0.179-0.26,0.338-0.373,0.526c-6.745,10.011-12.757,20.496-17.991,31.373l-3.676,8.036
				c-0.934,2.092-0.979,4.474-0.126,6.601c0.853,2.127,2.532,3.816,4.653,4.683c4.302,1.727,9.2-0.238,11.116-4.459l3.423-7.483
				c4.432-9.222,9.466-18.143,15.07-26.704c19.566-4.116,39.504-6.207,59.498-6.239c35.363-0.064,70.424,6.501,103.368,19.355
				c-18.838,8.733-36.715,19.406-53.342,31.845h-48.859c-22.682,0.914-40.363,19.981-39.567,42.667v60.814
				c-15.578,29.829-26.007,62.075-30.848,95.377c-1.536-2.846-3.127-5.604-4.585-8.566c-16.076-32.647-24.392-68.568-24.3-104.958
				l0.657-16.394c0.377-5.656,0.92-11.031,1.651-16.492c0.538-4.592-2.612-8.801-7.169-9.58c-2.266-0.372-4.586,0.195-6.424,1.57
				c-1.839,1.376-3.037,3.441-3.32,5.72c-0.783,5.815-1.376,11.766-1.754,17.464l-0.708,17.712c-0.095,39,8.82,77.496,26.05,112.483
				c25.585,52.416,68.345,94.492,121.167,119.229c86.21,40.511,187.789,29.766,263.617-27.883
				c63.717-48.405,101.143-123.811,101.166-203.829C512.047,143.476,438.541,44.14,330.919,11.285z M461.406,133.911
				c-25.383-10.506-52.092-17.463-79.375-20.673c-7.218-27.162-18.263-53.158-32.802-77.21
				C396.114,55.84,435.425,90.142,461.406,133.911z M306.56,170.668c-13.859-11.391-28.718-21.508-44.396-30.228
				c27.041-8.265,55.162-12.457,83.438-12.439c7.595,0,15.2,0.402,22.751,1.02c3.115,13.708,5.207,27.629,6.258,41.647H306.56z
				 M70.328,105.798c15.179-18.792,33.084-35.208,53.121-48.702l-0.001-0.002c58.697-38.956,131.561-50.115,199.227-30.511
				c18.446,25.794,32.388,54.527,41.234,84.979c-6.089-0.377-12.199-0.628-18.307-0.628c-35.802-0.044-71.324,6.298-104.899,18.729
				c-39.37-18.055-82.188-27.356-125.501-27.262C100.181,102.437,85.183,103.573,70.328,105.798z M240.053,148.243
				c13.287,6.469,26.048,13.967,38.166,22.425h-82.575C209.757,161.899,224.618,154.395,240.053,148.243L240.053,148.243z
				 M93.869,213.335c-0.785-13.258,9.251-24.677,22.5-25.6h279.267c13.249,0.923,23.285,12.342,22.5,25.6v85.333
				c0.785,13.258-9.251,24.677-22.5,25.6H116.369c-13.249-0.923-23.285-12.342-22.5-25.6V213.335z M60.489,393.231
				c1.98-28.09,8.136-55.728,18.265-82.004c4.408,17.31,19.76,29.598,37.615,30.107h217.032
				c-40.422,66.018-105.91,112.802-181.468,129.637C115.313,453.293,83.831,426.529,60.489,393.231z M177.761,481.787
				c74.302-22.606,137.085-72.885,175.38-140.452h40.583c4.853,20.988,7.316,42.458,7.344,64
				c-0.017,14.358-1.146,28.694-3.376,42.878C334.405,494.989,252.123,507.55,177.761,481.787z M489.41,307.01
				c-10.552,48.387-35.902,92.29-72.533,125.619c0.811-8.966,1.258-18.078,1.258-27.294c-0.033-22.609-2.596-45.143-7.642-67.181
				c15.305-7.134,24.984-22.601,24.708-39.485v-85.333c0.797-22.686-16.885-41.753-39.567-42.667h-3.924
				c-0.928-13.346-2.748-26.615-5.449-39.718c30.594,4.302,60.271,13.613,87.84,27.56C494.97,205.095,500.336,257.147,489.41,307.01
				z"/>
      <motion.path
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
        stroke="#E15342"
        variants={icon}
        d="M145.069,281.601h34.133v17.067c0,4.713,3.821,8.533,8.533,8.533c4.713,0,8.533-3.821,8.533-8.533
				v-17.067h8.533c4.713,0,8.533-3.821,8.533-8.533c0-4.713-3.82-8.533-8.533-8.533h-8.533v-8.533c0-4.713-3.821-8.533-8.533-8.533
				c-4.713,0-8.533,3.821-8.533,8.533v8.533h-19.425l26.833-46.967c1.512-2.647,1.498-5.899-0.038-8.532
				c-1.536-2.633-4.36-4.247-7.408-4.233c-3.048,0.014-5.858,1.652-7.37,4.299l-34.133,59.733c-1.511,2.641-1.501,5.886,0.026,8.518
				C139.213,279.984,142.026,281.603,145.069,281.601z"/>
      <motion.path
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
        stroke="#E15342"
        variants={icon}
        d="M307.202,281.601h34.133v17.067c0,4.713,3.82,8.533,8.533,8.533s8.533-3.821,8.533-8.533v-17.067
				h8.533c4.713,0,8.533-3.821,8.533-8.533c0-4.713-3.82-8.533-8.533-8.533h-8.533v-8.533c0-4.713-3.82-8.533-8.533-8.533
				s-8.533,3.821-8.533,8.533v8.533H321.91l26.833-46.967c1.512-2.647,1.498-5.899-0.038-8.532c-1.536-2.633-4.36-4.247-7.408-4.233
				c-3.048,0.014-5.858,1.652-7.37,4.299l-34.133,59.733c-1.511,2.641-1.501,5.886,0.026,8.518
				C301.346,279.984,304.159,281.603,307.202,281.601z"/>
      <motion.path
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
        stroke="#E15342"
        variants={icon}
        d="M247.469,307.201h17.067c14.132-0.015,25.585-11.468,25.6-25.6v-51.2
				c-0.015-14.132-11.468-25.585-25.6-25.6h-17.067c-14.132,0.015-25.585,11.468-25.6,25.6v51.2
				C221.884,295.733,233.337,307.186,247.469,307.201z M238.935,230.401c0.005-4.711,3.822-8.529,8.533-8.533h17.067
				c4.711,0.005,8.529,3.822,8.533,8.533v51.2c-0.005,4.711-3.822,8.529-8.533,8.533h-17.067c-4.711-0.005-8.529-3.822-8.533-8.533
				V230.401z"/>
    </motion.svg>
  )
}

export default NotFoundSvg;