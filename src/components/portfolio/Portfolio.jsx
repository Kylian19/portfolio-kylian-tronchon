import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "PREVOL : Planning des Vols Dassault",
    img: "public/prevol_dalle_tactile.webp",
    desc: "Création d'une application Angular et Java pour la gestion des plannings de vols chez Dassault. Intégration de DevExtreme, une planification précise des vols et des pilotes, gestion via Jira.",
    boutonContent: "Voir le Projet Dassault",
    boutonLink: "https://www.apside.com/fr/projets/prevol-la-modelisation-de-plans-de-vol-dassault-aviation/"
  },
  {
    id: 2,
    title: "Innovation en Santé : Boîte Mail Médicale Mipih",
    img: "public/mipih.png",
    desc: "Développement d'une application mobile innovante pour la gestion des mails médicaux avec Mipih. Utilisation de la technologie Ionic pour une expérience utilisateur optimale, gestion de projet efficace via Redmine.",
    boutonContent: "Découvrir Mipih",
    boutonLink: "https://www.mipih.fr/"
  },
  {
    id: 3,
    title: "Gestion Complète des Collaborateurs du Groupe ADF",
    img: "public/groupe_adf.png",
    desc: "Création d'une solution complète pour la gestion des collaborateurs, couvrant le référencement, l'accès aux informations personnelles, et la gestion des contrats et avenants au sein du Groupe ADF.",
    boutonContent: "Découvrir Groupe ADF",
    boutonLink: "https://www.groupeadf.com/fr"
  },
  {
    id: 4,
    title: "Gestion CV Innovante : CV Maker Apside",
    img: "public/apside.png",
    desc: "Développement et migration d'une application de gestion de CV pour ESN. Transition d'Angular vers React et mise à jour de Java (Spring Boot), avec une gestion efficace des données via SQL.",
    boutonContent: "Découvrir Apside",
    boutonLink: "https://www.apside.com/fr/"
  },
  {
    id: 5,
    title: "Me Contacter pour découvir plus de projets",
    img: "public/banner-linkedin-kylian-tronchon.png",
    boutonContent: "En savoir plus via Linkedin",
    boutonLink: "https://www.linkedin.com/in/kylian-tronchon-16b1761b7/"
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
        <h1>Projets Clés</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
