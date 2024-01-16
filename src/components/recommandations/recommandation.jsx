import { useRef } from "react";
import "./recommandations.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Florian DOS SANTOS",
    img: "photo-florian-dos-santos.jpeg",
    desc: "J'ai eu le privilège de travailler étroitement avec Kylian sur plusieurs projets lors de notre collaboration de 2 ans dans la société Apside. Sa capacité à résoudre des problèmes et son attention aux détails a été importante dans la réussite de nos projets communs. Je recommande vivement Kylian pour son dévouement, son professionnalisme et son aptitude à produire des résultats concrets.",
    boutonContent: "Retrouver son avis sur Malt",
    boutonLink: "https://www.malt.fr/profile/kyliantronchon"
  },
  {
    id: 2,
    title: "Lucas SPITERI",
    img: "photo-lucas-spiteri.webp",
    desc: "Kylian est un développeur full-stack talentueux, apportant expertise et conseils précieux au projet. Ses compétences en développement front et back-end ont été essentielles pour nos solutions logicielles, merci Kylian !",
    boutonContent: "Retrouver son avis sur Malt",
    boutonLink: "https://www.malt.fr/profile/kyliantronchon"
  },
  {
    id: 3,
    title: "Maxime BOUDIAF",
    img: "photo-maxime-boudiaf.webp",
    desc: "Développeur très compétent et expérimenté. Rigoureux et à l'écoute, c'est un vrai plaisir de travailler avec Kylian. Je recommande à 100%.",
    boutonContent: "Retrouver son avis sur Malt",
    boutonLink: "https://www.malt.fr/profile/kyliantronchon"
  }
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
            <img style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}}  src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.boutonLink} rel="noreferrer" target="_blank"><button>{item.boutonContent}</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Recommandations = () => {
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
        <h1>Recommandations</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Recommandations;
