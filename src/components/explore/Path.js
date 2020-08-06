import React, { useEffect, useRef, createRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import DrawSVG from "gsap/dist/DrawSVGPlugin";
import styles from "@styles/Path.module.css";

export default function Path() {
  gsap.registerPlugin(ScrollTrigger, DrawSVG); //check if process is happening on client or server side

  const path = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(path.current, {
      drawSVG: 0,
      ease: "none",
      scrollTrigger: {
        scrub: true,
        start: "top 25%",
        end: "bottom bottom",
      },
    });

    ScrollTrigger.batch(".point", {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          scale: 1.2,
          yoyo: true,
          repeat: -1,
        });
      },
      onLeave: (batch) => {
        gsap.to(batch, {
          opacity: 0,
          scale: 1,
        });
      },
      start: "center center",
    });

    return function cleanup() {
      console.log("cleaning up");
    };
  }, []);

  return (
    <div>
      <svg
        id="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 683.8 1636.08"
        className={styles.svg}
      >
        <title>Route Troncal-Kavanayen 1</title>
        <g>
          <path
            className={styles.cls}
            id="route"
            d="M19.75,15.25c27,6.48,46.07,40.57,55.75,71.65s7.27,42.87,15.29,57.47c5.86,10.66,40.15,21.22,45.76,32.07,25.44,49.16-5.09,109.73-3.64,143.09,0,0,45.76,40.71,78.5,58.45,14.45,7.83,20.73.06,53.45,1.61,14.07.67,19.15,23.59,32.63,23.34,45.79-.88,47.72,29.17,52,32.48,12.5,9.64,28.78-8.78,51.6,20.19,21.4,27.16,50.8,41.4,70.92,47.4,10.91,19.31-1.87,57.94,50.28,54.55,10.08,25.13,17.1,6.9,21.81,81.91,1.72,27.33,11.32,39.44,12.24,65.19.5,14.16.49,43,5.73,55.67,4,9.63,12.3,21.18,18.6,28.8,5.47,6.61,18.1,6.34,23.2,13.23,12.88,17.44,7.87,26.72,18.16,46.53,15.46,29.72,15.88,43.56,25.81,59.83,7.69,12.62,13,13.35,16.75,26.23-3,7.87-7.69,14.77-22.21,22.79-11.22,6.2-34.55,5.53-51.75,17.24-21.49,14.63-36.3,30.94-38.37,38.94,1.46,10.54,38.13,29.38,36.26,47-1.72,16.17-9.11,22.91-14.11,39.57s-7.89,23-2.89,39.69c5.6,18.68,24.71,47.58,39.3,56.78,27.5,17.35,81.42,33.21,79.94,40.87-2.23,9.4-30.46,23-41,37.53-3.35,4.6-40.65,68.48-41.4,74.54-.85,6.75,4,32.73,4,39.56.11,14-9.73,39.42-12.27,53.11-7.67,41.42-6.13,49.78-48.18,78.63-20.84,14.29-28.78,37.85-56.19,44.19-12.49,2.89-46.48,12.21-57.1,20.65-11.7,9.3-12,26.17-23.67,35.49-10.88,8.67-19.23,15.31-33.18,17.1"
            transform="translate(-13.37 -8.88)"
            ref={path}
          />
        </g>
        <g id="luepa" className="point">
          <circle cx="6.37" cy="6.37" r="6.37" />
        </g>
        <g id="toron" className="point">
          <circle cx="232.86" cy="370.13" r="6.37" />
        </g>
        <g id="aponwao" className="point">
          <circle cx="507.79" cy="550.57" r="6.37" />
        </g>
        <g id="chivaton" className="point">
          <circle cx="615.54" cy="854.02" r="6.37" />
        </g>
        <g id="mantopai" className="point">
          <circle cx="586.06" cy="1178.12" r="6.37" />
        </g>
        <g id="kavanayen" className="point">
          <circle cx="677.42" cy="1229.09" r="6.37" />
        </g>
        <g id="karuay" className="point">
          <circle cx="367.08" cy="1629.7" r="6.37" />
        </g>
      </svg>
    </div>
  );
}

// const [elRefs, setElRefs] = React.useState([]);

// useEffect(() => {
//   // add or remove refs
//   setElRefs((elRefs) =>
//     Array(7)
//       .fill()
//       .map((x, i) => elRefs[i] || createRef())
//   );
// }, []);
