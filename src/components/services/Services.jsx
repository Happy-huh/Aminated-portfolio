import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on delivering actionable solutions
          <br /> and promoting innovation
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          {/* <button>WHAT WE DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Programming languages</h2>
          <p>
            <li>Python</li>
            <li>Javascript</li>
            <li>Typescript</li>
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frameworks / Libaries</h2>
          <p>
            <li>React</li>
            <li>React-Native</li>
            <li>Django</li>
            <li>Django-Rest-Framework</li>
            <li>Node.js</li>
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Databases</h2>
          <p>
            <li>Postgres-SQL</li>
            <li>My-SQL</li>
            <li>Mongo-DB</li>
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box others"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Others</h2>
          <p>
            <li>Git</li>
            <li>Testing and Debugging</li>
            <li>Agile Development</li>
            <li>AWS</li>
            <li>UI / UX Design</li>
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
