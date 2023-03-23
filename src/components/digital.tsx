import { useState } from "react";
import { motion, Variants } from "framer-motion";

const svgVariants: Variants = {
  unhover: {
    rotate: "0deg",
    skew: "0deg",
    translateX: 0,
    translateY: 0,
    translateZ: 0,
    zIndex: 0,
  },
  hover: (i) => {
    const translateX = 13 * i;
    const translateY = 13 * i;
    const zIndex = 1 - 0.2 * i;
    return {
      rotate: "-80deg",
      skew: "20deg",
      translateX: translateX,
      translateY: translateY,
      zIndex: zIndex,
    };
  },
};

const Digital = () => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      whileHover="hover"
      className="w-full h-full max-w-[500px] max-h-[500px] min-w-[500px] min-h-[500px] relative"
    >
      <motion.svg
        variants={svgVariants}
        custom={4}
        transition={{
          bounce: 0,
          duration: 0.7,
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1274 1274"
        className="absolute inset-0 origin-center [transform-style:preserve-3d]"
        height={500}
        width={500}
      >
        <g id="b0">
          <path
            d="M1254,620c9.37,0,17,7.63,17,17s-7.63,17-17,17h-85c-9.37,0-17-7.63-17-17s7.63-17,17-17h85m0-3h-85c-11.05,0-20,8.95-20,20s8.95,20,20,20h85c11.05,0,20-8.95,20-20s-8.95-20-20-20h0Z"
            fill="#c9edfd"
          />
          <path
            d="M105,620.17c9.37,0,17,7.63,17,17s-7.63,17-17,17H20c-9.37,0-17-7.63-17-17s7.63-17,17-17H105m0-3H20c-11.05,0-20,8.95-20,20H0c0,11.05,8.95,20,20,20H105c11.05,0,20-8.95,20-20h0c0-11.05-8.95-20-20-20h0Z"
            fill="#c9edfd"
          />
          <g>
            <circle
              cx="637"
              cy="153.5"
              r="36.5"
              fill="none"
              stroke="#c9edfd"
              strokeLinejoin="round"
            />
            <circle cx="637" cy="153.5" r="6" fill="#c9edfd" />
          </g>
          <g>
            <circle
              cx="637"
              cy="1120.5"
              r="36.5"
              fill="none"
              stroke="#c9edfd"
              strokeLinejoin="round"
            />
            <circle cx="637" cy="1120.5" r="6" fill="#c9edfd" />
          </g>
        </g>
      </motion.svg>
      <motion.svg
        variants={svgVariants}
        custom={3.5}
        transition={{
          bounce: 0,
          duration: 0.7,
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1274 1274"
        className="absolute inset-0 origin-center [transform-style:preserve-3d]"
        height={500}
        width={500}
      >
        <g id="b1">
          <g>
            <line
              x1="1119.96"
              y1="766.41"
              x2="1071.76"
              y2="753.5"
              fill="none"
              stroke="#4a2f86"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
            <line
              x1="202.24"
              y1="520.5"
              x2="154.04"
              y2="507.59"
              fill="none"
              stroke="#4a2f86"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
            <line
              x1="187"
              y1="637"
              x2="137"
              y2="637"
              fill="none"
              stroke="#4a2f86"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
            <line
              x1="1137"
              y1="637"
              x2="1087"
              y2="637"
              fill="none"
              stroke="#4a2f86"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
            <line
              x1="202.24"
              y1="753.5"
              x2="154.04"
              y2="766.41"
              fill="none"
              stroke="#4a2f86"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
            <line
              x1="1119.96"
              y1="507.59"
              x2="1071.76"
              y2="520.5"
              fill="none"
              stroke="#4a2f86"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
            <line
              x1="247.23"
              y1="862.03"
              x2="203.99"
              y2="887"
              fill="none"
              stroke="#4a2f86"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
            <line
              x1="1070.01"
              y1="387"
              x2="1026.77"
              y2="411.97"
              fill="none"
              stroke="#4a2f86"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
            <line
              x1="1070.01"
              y1="887"
              x2="1026.77"
              y2="862.03"
              fill="none"
              stroke="#4a2f86"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
            <line
              x1="247.23"
              y1="411.97"
              x2="203.99"
              y2="387"
              fill="none"
              stroke="#4a2f86"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
          </g>
        </g>
      </motion.svg>
      <motion.svg
        variants={svgVariants}
        custom={3}
        transition={{
          bounce: 0,
          duration: 0.7,
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1274 1274"
        className="absolute inset-0 origin-center [transform-style:preserve-3d]"
        height={500}
        width={500}
      >
        <g id="b2">
          <path
            d="M1045.17,637c0-111.37-44.6-212.31-116.91-285.96-9.89-10.08-10.31-26.08-.86-36.57-76.91-69.29-178.73-111.47-290.4-111.47s-213.5,42.18-290.4,111.47c9.45,10.49,9.03,26.5-.86,36.57-72.3,73.64-116.91,174.59-116.91,285.96s44.6,212.31,116.91,285.96c9.89,10.08,10.31,26.08,.86,36.57,76.91,69.29,178.73,111.47,290.4,111.47s213.5-42.18,290.4-111.47h0c-9.45-10.49-9.03-26.5,.86-36.57,72.3-73.64,116.91-174.59,116.91-285.96Zm-121.9,322.2c-78.93,70.18-180.48,108.8-286.27,108.8s-207.34-38.62-286.27-108.8c8.46-11.57,7.43-27.88-2.85-38.35-74.83-76.22-116.05-177.03-116.05-283.85s41.21-207.64,116.05-283.85c10.28-10.47,11.31-26.78,2.85-38.35,78.93-70.18,180.48-108.8,286.27-108.8s207.34,38.62,286.28,108.8c-8.46,11.57-7.43,27.88,2.85,38.35,74.83,76.22,116.05,177.03,116.05,283.85s-41.21,207.64-116.05,283.85c-10.28,10.47-11.31,26.78-2.85,38.35Z"
            fill="#4a2f86"
          />
          <path
            d="M1045.17,637c0-111.37-44.6-212.31-116.91-285.96-9.89-10.08-10.31-26.08-.86-36.57-76.91-69.29-178.73-111.47-290.4-111.47s-213.5,42.18-290.4,111.47c9.45,10.49,9.03,26.5-.86,36.57-72.3,73.64-116.91,174.59-116.91,285.96s44.6,212.31,116.91,285.96c9.89,10.08,10.31,26.08,.86,36.57,76.91,69.29,178.73,111.47,290.4,111.47s213.5-42.18,290.4-111.47h0c-9.45-10.49-9.03-26.5,.86-36.57,72.3-73.64,116.91-174.59,116.91-285.96Zm-121.9,322.2c-78.93,70.18-180.48,108.8-286.27,108.8s-207.34-38.62-286.27-108.8c8.46-11.57,7.43-27.88-2.85-38.35-74.83-76.22-116.05-177.03-116.05-283.85s41.21-207.64,116.05-283.85c10.28-10.47,11.31-26.78,2.85-38.35,78.93-70.18,180.48-108.8,286.27-108.8s207.34,38.62,286.28,108.8c-8.46,11.57-7.43,27.88,2.85,38.35,74.83,76.22,116.05,177.03,116.05,283.85s-41.21,207.64-116.05,283.85c-10.28,10.47-11.31,26.78-2.85,38.35Z"
            strokeMiterlimit="10"
            className="fill-cyan-500/50"
          />
        </g>
      </motion.svg>
      <motion.svg
        variants={svgVariants}
        custom={2.5}
        transition={{
          bounce: 0,
          duration: 0.7,
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1274 1274"
        className="absolute inset-0 origin-center [transform-style:preserve-3d]"
        height={500}
        width={500}
      >
        <g id="b3">
          <g>
            <path
              d="M924.23,378.38h0c-9.35,8.42-23.6,8.04-32.57-.77-65.58-64.39-155.48-104.11-254.66-104.11s-189.08,39.72-254.66,104.11c-8.97,8.81-23.23,9.19-32.57,.77h0c-61.71,68.49-99.27,159.17-99.27,258.62s37.56,190.13,99.27,258.62h0c9.35-8.42,23.6-8.04,32.57,.77,65.58,64.39,155.48,104.11,254.66,104.11s189.08-39.72,254.66-104.11c8.97-8.81,23.23-9.19,32.57-.77h0c61.71-68.49,99.27-159.17,99.27-258.62s-37.56-190.13-99.27-258.62Zm-16.19,455.54h0c-6.89,9.47-14.26,18.56-22.08,27.24-61.31,68.05-150.14,110.84-248.96,110.84s-187.65-42.79-248.96-110.84c-7.82-8.68-15.19-17.77-22.08-27.24h0c-6.77,4.92-16.27,3.2-20.89-3.77-36.7-55.36-58.07-121.76-58.07-193.15s21.37-137.79,58.07-193.15c4.62-6.97,14.12-8.69,20.89-3.77h0c6.89-9.47,14.26-18.56,22.08-27.24,61.31-68.05,150.14-110.84,248.96-110.84s187.65,42.79,248.96,110.84c7.82,8.68,15.19,17.77,22.08,27.24h0c6.77-4.92,16.27-3.2,20.89,3.77,36.7,55.36,58.07,121.76,58.07,193.15s-21.37,137.79-58.07,193.15c-4.62,6.97-14.12,8.69-20.89,3.77Z"
              fill="#4a2f86"
            />
            <path
              d="M293.14,438.47c-33.8,58.4-53.14,126.2-53.14,198.53s19.34,140.13,53.14,198.53l-17.32,10c-35.5-61.34-55.82-132.56-55.82-208.53s20.32-147.19,55.82-208.53l17.32,10Z"
              fill="#4a2f86"
            />
            <path
              d="M1054,637c0,75.97-20.32,147.19-55.82,208.53l-17.32-10c33.8-58.4,53.14-126.2,53.14-198.53s-19.34-140.13-53.14-198.53l17.32-10c35.5,61.34,55.82,132.56,55.82,208.53Z"
              fill="#4a2f86"
            />
          </g>
        </g>
      </motion.svg>
      <motion.svg
        variants={svgVariants}
        custom={2}
        transition={{
          bounce: 0,
          duration: 0.7,
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1274 1274"
        className="absolute inset-0 origin-center [transform-style:preserve-3d]"
        height={500}
        width={500}
      >
        <g id="b4">
          <g>
            <path
              d="M323,637c0,57.27,15.33,110.95,42.12,157.18l-7.36,4.26c-27.51-47.48-43.26-102.62-43.26-161.44s15.68-113.71,43.07-161.11l7.36,4.24c-26.67,46.16-41.93,99.73-41.93,156.87Z"
              fill="#f9bc6f"
            />
            <path
              d="M959.5,637c0,58.69-15.68,113.71-43.07,161.11l-7.36-4.24c26.67-46.16,41.93-99.73,41.93-156.87s-15.33-110.95-42.12-157.18l7.36-4.26c27.51,47.48,43.26,102.62,43.26,161.44Z"
              fill="#f9bc6f"
            />
            <path
              d="M354.51,635.25c-.01,.58-.01,1.17-.01,1.75s0,1.17,.01,1.75h-25.01v-3.5h25.01Z"
              fill="#f9bc6f"
            />
            <path
              d="M944.5,635.25v3.5h-25.01c.01-.58,.01-1.17,.01-1.75s0-1.17-.01-1.75h25.01Z"
              fill="#f9bc6f"
            />
            <path
              d="M371.57,481.73l21.62,12.48c-.59,1.01-1.18,2.02-1.75,3.04l-21.62-12.48,1.75-3.04Z"
              fill="#f9bc6f"
            />
            <path
              d="M904.18,789.23l-1.75,3.04-21.62-12.48c.59-1.01,1.18-2.02,1.75-3.04l21.62,12.48Z"
              fill="#f9bc6f"
            />
            <path
              d="M391.44,776.75c.57,1.02,1.16,2.03,1.75,3.04l-21.62,12.48-1.75-3.04,21.62-12.48Z"
              fill="#f9bc6f"
            />
            <path
              d="M904.18,484.77l-21.62,12.48c-.57-1.02-1.16-2.03-1.75-3.04l21.62-12.48,1.75,3.04Z"
              fill="#f9bc6f"
            />
            <circle cx="300.5" cy="637" r="1.75" fill="#f9bc6f" />
            <circle cx="973.5" cy="637" r="1.75" fill="#f9bc6f" />
          </g>
        </g>
      </motion.svg>
      <motion.svg
        variants={svgVariants}
        custom={1.5}
        transition={{
          bounce: 0,
          duration: 0.7,
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1274 1274"
        className="absolute inset-0 origin-center [transform-style:preserve-3d]"
        height={500}
        width={500}
      >
        <g id="b5">
          <circle
            cx="637"
            cy="637"
            r="252.5"
            fill="none"
            stroke="#b20037"
            strokeMiterlimit="10"
            strokeWidth="2"
            className="[filter:drop-shadow(0_0px_13px_rgba(178,0,55,0.5))_drop-shadow(0_0px_5px_rgba(178,0,55,0.8))]"
          />
          <circle
            cx="637"
            cy="637"
            r="262.5"
            fill="none"
            stroke="#f934d7"
            strokeMiterlimit="10"
            strokeWidth="5"
            className="[filter:drop-shadow(0_0px_13px_rgba(249,52,215,0.5))_drop-shadow(0_0px_5px_rgba(249,52,215,0.8))]"
          />
        </g>
      </motion.svg>
      <motion.svg
        variants={svgVariants}
        custom={1}
        transition={{
          bounce: 0,
          duration: 0.7,
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1274 1274"
        className="absolute inset-0 origin-center [transform-style:preserve-3d]"
        height={500}
        width={500}
      >
        <g id="b6">
          <g>
            <path
              d="M535.63,543.37c-21.59,23.35-35.2,54.17-36.52,88.15h-91.37l-19.69-17.55c4.72-51.75,25.22-98.94,56.63-136.72l26.35,1.52,64.6,64.6Z"
              fill="rgba(74, 47, 134, 0.5)"
            />
            <path
              d="M535.63,730.63l-64.6,64.6-26.35,1.52c-31.41-37.78-51.91-84.97-56.63-136.72l19.69-17.55h91.37c1.32,33.98,14.93,64.8,36.52,88.15Z"
              fill="rgba(74, 47, 134, 0.5)"
            />
            <path
              d="M631.52,774.89v91.37l-17.55,19.69c-51.75-4.72-98.94-25.22-136.72-56.63l1.52-26.35,64.6-64.6c23.35,21.59,54.17,35.2,88.15,36.52Z"
              fill="rgba(74, 47, 134, 0.5)"
            />
            <path
              d="M796.75,829.32c-37.78,31.41-84.97,51.91-136.72,56.63l-17.55-19.69v-91.37c33.98-1.32,64.8-14.93,88.15-36.52l64.6,64.6,1.52,26.35Z"
              fill="rgba(74, 47, 134, 0.5)"
            />
            <path
              d="M885.95,660.03c-4.72,51.75-25.22,98.94-56.63,136.72l-26.35-1.52-64.6-64.6c21.59-23.35,35.2-54.17,36.52-88.15h91.37l19.69,17.55Z"
              fill="rgba(74, 47, 134, 0.5)"
            />
            <path
              d="M631.52,407.74v91.37c-33.98,1.32-64.8,14.93-88.15,36.52l-64.6-64.6-1.52-26.35c37.78-31.41,84.97-51.91,136.72-56.63l17.55,19.69Z"
              fill="rgba(74, 47, 134, 0.5)"
            />
            <path
              d="M796.75,444.68l-1.52,26.35-64.6,64.6c-23.35-21.59-54.17-35.2-88.15-36.52v-91.37l17.55-19.69c51.75,4.72,98.94,25.22,136.72,56.63Z"
              fill="rgba(74, 47, 134, 0.5)"
            />
            <path
              d="M885.95,613.97l-19.69,17.55h-91.37c-1.32-33.98-14.93-64.8-36.52-88.15l64.6-64.6,26.35-1.52c31.41,37.78,51.91,84.97,56.63,136.72Z"
              fill="rgba(74, 47, 134, 0.5)"
            />
          </g>
        </g>
      </motion.svg>
      <motion.svg
        variants={svgVariants}
        custom={0.5}
        transition={{
          bounce: 0,
          duration: 0.7,
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1274 1274"
        className="absolute inset-0 origin-center [transform-style:preserve-3d]"
        height={500}
        width={500}
      >
        <g id="b7">
          <path
            d="M665.69,545.36l-3.89,14.51c4.23,1.35,8.31,3.05,12.2,5.05l7.5-13c-5.02-2.64-10.31-4.84-15.81-6.56Zm41.96,26.65l-10.61,10.61c2.95,3.26,5.64,6.75,8.03,10.46l13-7.51c-3.07-4.83-6.56-9.37-10.42-13.56Zm10.25,68.99c-.2,4.13-.71,8.18-1.5,12.13l14.54,3.71c1.09-5.14,1.76-10.43,1.97-15.84h-15.01Zm-12.83,39.92c-2.39,3.71-5.08,7.2-8.03,10.46l10.61,10.61c3.86-4.19,7.35-8.73,10.42-13.56l-13-7.51Zm-31.07,28.16c-3.89,2-7.96,3.69-12.19,5.05l3.89,14.51c5.49-1.72,10.78-3.92,15.8-6.56l-7.5-13Zm-54.08,7.12l-3.88,14.5c5.49,1.23,11.16,1.98,16.96,2.21v-15.01c-4.46-.21-8.83-.79-13.08-1.7Zm-19.92-7.12l-7.5,13c5.02,2.64,10.31,4.84,15.81,6.56l3.89-14.51c-4.23-1.35-8.31-3.05-12.2-5.05Zm-31.07-28.16l-13,7.51c3.07,4.83,6.56,9.37,10.42,13.56l10.61-10.61c-2.95-3.26-5.64-6.75-8.03-10.46Zm-12.83-39.92h-15.01c.23,5.8,.98,11.47,2.21,16.96l14.5-3.88c-.91-4.25-1.49-8.62-1.7-13.08Zm-4.18-48.5c-2.82,5.36-5.13,11.01-6.89,16.91l14.55,3.71c1.4-4.56,3.19-8.94,5.34-13.12l-13-7.5Zm33.65-36.57c-4.83,3.07-9.37,6.56-13.56,10.42l10.61,10.61c3.26-2.95,6.75-5.64,10.46-8.03l-7.51-13Zm30.47-12.63l3.88,14.5c4.25-.91,8.62-1.49,13.08-1.7v-15.01c-5.8,.23-11.47,.98-16.96,2.21Zm-23.54,8.62l7.5,13c3.89-2,7.96-3.69,12.19-5.05l-3.89-14.51c-5.49,1.72-10.78,3.92-15.8,6.56Zm-26.15,20.09c-3.86,4.19-7.35,8.73-10.42,13.56l13,7.51c2.39-3.71,5.08-7.2,8.03-10.46l-10.61-10.61Zm-23.29,45.15c-1.09,5.14-1.76,10.43-1.97,15.84h15.01c.2-4.13,.71-8.18,1.5-12.13l-14.54-3.71Zm16.81,44.65l-14.51,3.89c1.72,5.49,3.92,10.78,6.56,15.8l13-7.5c-2-3.89-3.69-7.96-5.05-12.19Zm22.75,35.23l-10.61,10.61c4.19,3.86,8.73,7.35,13.56,10.42l7.51-13c-3.71-2.39-7.2-5.08-10.46-8.03Zm71.46,19.16c-4.25,.91-8.62,1.49-13.08,1.7v15.01c5.8-.23,11.47-.98,16.96-2.21l-3.88-14.5Zm37.3-19.16c-3.26,2.95-6.75,5.64-10.46,8.03l7.51,13c4.83-3.07,9.37-6.56,13.56-10.42l-10.61-10.61Zm23.04-36.16c-1.4,4.56-3.19,8.94-5.34,13.12l13,7.5c2.82-5.36,5.13-11.01,6.89-16.91l-14.55-3.71Zm16.28-44.84l-14.5,3.88c.91,4.25,1.49,8.62,1.7,13.08h15.01c-.23-5.8-.98-11.47-2.21-16.96Zm-8.62-23.54l-13,7.5c2,3.89,3.69,7.96,5.05,12.19l14.51-3.89c-1.72-5.49-3.92-10.78-6.56-15.8Zm-33.65-36.57l-7.51,13c3.71,2.39,7.2,5.08,10.46,8.03l10.61-10.61c-4.19-3.86-8.73-7.35-13.56-10.42Zm-47.43-14.84v15.01c4.46,.21,8.83,.79,13.08,1.7l3.88-14.5c-5.49-1.23-11.16-1.98-16.96-2.21Z"
            fill="#4a2f86"
          />
        </g>
      </motion.svg>
      <motion.svg
        variants={svgVariants}
        custom={0}
        transition={{
          bounce: 0,
          duration: 0.7,
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1274 1274"
        className="absolute inset-0 origin-center [transform-style:preserve-3d] z-10"
        height={500}
        width={500}
      >
        <motion.g
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: [0, 1, 0.5, 1, 0.5, 1, 0, 0, 1, 1, 1, 1, 0],
          }}
          id="b8"
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="[filter:drop-shadow(0_0px_13px_rgb(255_255_255/0.3))_drop-shadow(0_0px_5px_rgb(255_255_255/0.8))]"
        >
          <g>
            <path
              d="M787.37,887.94c-43.94,26.39-95.38,41.56-150.37,41.56s-106.9-15.31-150.97-41.93l4.13-6.85c42.86,25.89,93.11,40.78,146.84,40.78s103.52-14.76,146.25-40.43l4.12,6.87Z"
              fill="#c9edfd"
            />
            <path
              d="M490.75,392.93l-4.12-6.87c43.94-26.39,95.38-41.56,150.37-41.56s106.9,15.31,150.97,41.93l-4.13,6.85c-42.86-25.89-93.11-40.78-146.84-40.78s-103.52,14.76-146.25,40.43Z"
              fill="#c9edfd"
            />
          </g>
        </motion.g>
      </motion.svg>
      <motion.svg
        variants={svgVariants}
        custom={-0.5}
        transition={{
          bounce: 0,
          duration: 0.7,
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1274 1274"
        className="absolute inset-0 origin-center [transform-style:preserve-3d]"
        height={500}
        width={500}
      >
        <motion.g
          initial={{
            transform: "rotate(0deg)",
          }}
          animate={{
            transform: [
              "rotate(0deg)",
              "rotate(30deg)",
              "rotate(0deg)",
              "rotate(-30deg)",
              "rotate(0deg)",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          id="b9"
        >
          <g className="[filter:drop-shadow(0_0px_13px_rgb(255_255_255/0.3))_drop-shadow(0_0px_13px_rgb(255_255_255/0.8))]">
            <path
              d="M712.31,561.69l120.99-120.99c4.96-4.96,11.55-7.96,18.55-8.43l35.3-2.38c9.22-.62,17.91-4.57,24.45-11.11l58.34-58.34c45.64,54.85,77.99,121.14,92.12,193.93"
              fill="none"
              stroke="#c9edfd"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
            <path
              d="M712.31,712.31l121.06,121.06c5,5,11.65,8,18.71,8.44l35.12,2.18c9.3,.58,18.07,4.53,24.66,11.12l58.72,58.72c45.51-54.94,77.72-121.31,91.69-194.16"
              fill="none"
              stroke="#c9edfd"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
            <path
              d="M561.69,561.69l-121-121c-4.96-4.96-11.55-7.95-18.55-8.43l-35.3-2.39c-9.22-.62-17.91-4.57-24.44-11.11l-58.84-58.85h-.01c-45.82,54.91-78.31,121.32-92.5,194.28"
              fill="none"
              stroke="#c9edfd"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
            <path
              d="M561.69,712.31l-121.26,121.26c-5.03,5.03-11.73,8.04-18.83,8.45l-34.71,2c-9.36,.54-18.19,4.5-24.82,11.13l-59.16,59.16c-45.68-55.01-78.02-121.48-92.06-194.47"
              fill="none"
              stroke="#c9edfd"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
          </g>
        </motion.g>
      </motion.svg>
      <motion.svg
        variants={svgVariants}
        custom={-1}
        transition={{
          bounce: 0,
          duration: 0.7,
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1274 1274"
        className="absolute inset-0 origin-center [transform-style:preserve-3d]"
        height={500}
        width={500}
      >
        <g id="b10">
          <circle
            cx="637"
            cy="637"
            r="58.5"
            fill="none"
            stroke="#5c5489"
            strokeMiterlimit="10"
          />
          <motion.g
            initial={{
              transform: "rotate(360deg)",
            }}
            animate={{
              transform: "rotate(0deg)",
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="[filter:drop-shadow(0_0px_13px_rgb(249_52_215/0.3))_drop-shadow(0_0px_5px_rgb(249_52_215/0.8))]"
          >
            <path
              d="M637,563c40.8,0,74,33.2,74,74s-33.2,74-74,74-74-33.2-74-74,33.2-74,74-74m0-1c-41.42,0-75,33.58-75,75s33.58,75,75,75,75-33.58,75-75-33.58-75-75-75h0Z"
              fill="#f934d7"
            />
            <path
              d="M662.66,566.5l-2.4,6.59c-7.25-2.65-15.09-4.09-23.26-4.09s-16.01,1.44-23.26,4.09l-2.4-6.59c8.01-2.91,16.65-4.5,25.66-4.5s17.65,1.59,25.66,4.5Z"
              fill="#f934d7"
            />
            <path
              d="M569,637c0,8.17,1.44,16.01,4.09,23.26l-6.59,2.4c-2.91-8.01-4.5-16.65-4.5-25.66s1.59-17.65,4.5-25.66l6.59,2.4c-2.65,7.25-4.09,15.09-4.09,23.26Z"
              fill="#f934d7"
            />
            <path
              d="M662.66,707.5c-8.01,2.91-16.65,4.5-25.66,4.5s-17.65-1.59-25.66-4.5l2.4-6.59c7.25,2.65,15.09,4.09,23.26,4.09s16.01-1.44,23.26-4.09l2.4,6.59Z"
              fill="#f934d7"
            />
            <path
              d="M712,637c0,9.01-1.59,17.65-4.5,25.66l-6.59-2.4c2.65-7.25,4.09-15.09,4.09-23.26s-1.44-16.01-4.09-23.26l6.59-2.4c2.91,8.01,4.5,16.65,4.5,25.66Z"
              fill="#f934d7"
            />
          </motion.g>
          <g>
            <circle
              cx="637"
              cy="533.86"
              r="18.5"
              fill="#f934d7"
              opacity=".25"
            />
            <circle cx="637" cy="533.86" r="2.5" fill="#f934d7" />
          </g>
          <g>
            <circle
              cx="637"
              cy="741.57"
              r="18.5"
              fill="#f934d7"
              opacity=".25"
            />
            <circle cx="637" cy="741.57" r="2.5" fill="#f934d7" />
          </g>
        </g>
      </motion.svg>
      <motion.svg
        variants={svgVariants}
        custom={-1.5}
        transition={{
          bounce: 0,
          duration: 0.7,
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1274 1274"
        className="absolute inset-0 origin-center [transform-style:preserve-3d]"
        height={500}
        width={500}
      >
        <motion.g
          initial={{
            transform: "rotate(0deg)",
          }}
          animate={{
            transform: [
              "rotate(0deg)",
              "rotate(30deg)",
              "rotate(45deg)",
              "rotate(90deg)",
              "rotate(45deg)",
              "rotate(120deg)",
              "rotate(180deg)",
              "rotate(45deg)",
              "rotate(120deg)",
              "rotate(45deg)",
              "rotate(30deg)",
              "rotate(0deg)",
            ],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          id="b11"
        >
          <g>
            <g>
              <polyline
                points="137 637 152 637 182 637 561.86 637"
                fill="none"
                stroke="#c9edfd"
                strokeLinecap="round"
                strokeMiterlimit="10"
              />
              <polyline
                points="712.14 637 1092 637 1122 637 1137 637"
                fill="none"
                stroke="#c9edfd"
                strokeLinecap="round"
                strokeMiterlimit="10"
              />
              <rect
                className="[filter:drop-shadow(0_0px_13px_rgb(255_255_255/0.3))_drop-shadow(0_0px_5px_rgb(255_255_255/0.8))]"
                x="1092"
                y="634.5"
                width="30"
                height="5"
                fill="#c9edfd"
              />
              <rect
                className="[filter:drop-shadow(0_0px_13px_rgb(255_255_255/0.3))_drop-shadow(0_0px_5px_rgb(255_255_255/0.8))]"
                x="152"
                y="634.5"
                width="30"
                height="5"
                fill="#c9edfd"
              />
              <polygon
                points="1107 642.5 1099 656.36 1115 656.36 1107 642.5"
                fill="none"
                stroke="#c9edfd"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <polygon
                points="1107 631.5 1099 617.64 1115 617.64 1107 631.5"
                fill="none"
                stroke="#c9edfd"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <polygon
                points="167 642.5 159 656.36 175 656.36 167 642.5"
                fill="none"
                stroke="#c9edfd"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <polygon
                points="167 631.5 175 617.64 159 617.64 167 631.5"
                fill="none"
                stroke="#c9edfd"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <circle
                className="[filter:drop-shadow(0_0px_13px_rgb(255_255_255/0.3))_drop-shadow(0_0px_5px_rgb(255_255_255/0.8))]"
                cx="712.14"
                cy="637"
                r="4.5"
                fill="#c9edfd"
              />
              <circle
                className="[filter:drop-shadow(0_0px_13px_rgb(255_255_255/0.3))_drop-shadow(0_0px_5px_rgb(255_255_255/0.8))]"
                cx="562"
                cy="637"
                r="4.5"
                fill="#c9edfd"
              />
            </g>
          </g>
        </motion.g>
      </motion.svg>
    </motion.div>
  );
};

export default Digital;
// className = "[filter:drop-shadow(0_0px_13px_rgb(255_255_255/0.3))_drop-shadow(0_0px_5px_rgb(255_255_255/0.8))]";
