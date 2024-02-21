import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    download: false,
    title: "Hotelina",
    url: "https://steven019.pythonanywhere.com/",
    img: "projects/hotel.png",
    desc: "A platform where individuals and hotel owners can list their rooms for bookings. Individuals can create an account and book rooms listed on the platform, they could also become sellers themselves by registering for a seller account. Individuals could have multiple seller profiles, the platform also provides anlytics to know how well a seller is performing, it also contains a blog site to let users and visitors know the latest updates on the platform and many other core features.",
  },
  {
    id: 2,
    download: false,
    title: "Video Chat-app",
    url: "https://zoom-clone-wb4u.onrender.com",
    img: "projects/zoom.png",
    desc: "A re-implementation of zoom, where people can make safe video calls that are end-to-end encrypted. Ever suspected that your calls aren't 100% private? this platform takes those worries away by providing a safe and secure video call connection using zego-cloud SDK. It's also visually appealing and user friendly",
  
  },
  {
    id: 3,
    download: true,
    title: "Movie App",
    url: "projects/movieupdates.apk",
    img: "projects/movieapp.png",
    desc: "A database of every movie ever created get to know more about your favorite movies and their cast. This platform uses the TMDB database to provide information on a wide variety of movies, you could get to know all the latest and trending movies on here, search for info on specific movies, save/make a list of your favorite movies or movies you would like to watch, etc. The app is currently not published on playstore or the apple store but you can download it using the link below.",
    
  },
  {
    id: 4,
    download: false,
    title: "Weather App",
    url: "https://weatherapp-ud3j.onrender.com/",
    img: "projects/weatherapp.png",
    desc: "A visually appealing weather app with current and up-to-date weather information for your daily activity scheduling. This web-app uses Rapidapi to get data of countries and cities then uses the openweathermap api to get the current weather information of the cities and the weather forecast for the next 1 week.",
  
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a target="_blank" href={item.url} download={item.download}>{item.download? "Download":'See Demo'}</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
