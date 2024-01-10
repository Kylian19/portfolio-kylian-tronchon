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
          Je vous accompagnes
          <br /> pour la réussite de vos projets.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Développement</motion.b> Full-Stack :
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Solutions</motion.b> Web Innovantes.
          </h1>
          <a href="#Portfolio"><button>MES PROJETS</button></a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Développement Front-End</h2>
          <p>
          Spécialisé en Angular et React, je crée des interfaces web réactives et conviviales, 
          optimisant l'expérience utilisateur sur divers appareils. 
          Mes compétences en front-end garantissent des sites web visuellement attrayants et fonctionnels.
          </p>
          <a href="#Contact"><button>Discutons Front-End</button></a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Développement Back-End</h2>
          <p>
          Avec une expertise approfondie en Java, SpringBoot, .Net, et Python, 
          je développe des architectures back-end fiables et sécurisées. 
          J'assure la scalabilité et la performance pour des applications web robustes et efficaces.
          </p>
          <a href="#Contact"><button>Parlons Back-End</button></a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Solutions Full-Stack Intégrées</h2>
          <p>
          Je combine front-end et back-end pour offrir des solutions full-stack complètes. 
          De la conception à la mise en production, je m'engage à fournir des applications web intégrées, 
          performantes et adaptées aux besoins spécifiques.
          </p>
          <a href="#Contact"><button>Développons une solution</button></a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Utilisation Méthode Agile</h2>
          <p>
          Fort de mon expérience en équipes multidisciplinaires, je gère des projets informatiques avec agilité et efficacité. 
          Ma capacité à diriger et à collaborer est cruciale pour transformer les idées en solutions web innovantes.
          </p>
          <a href="#Contact"><button>Planifions Votre Projet</button></a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
