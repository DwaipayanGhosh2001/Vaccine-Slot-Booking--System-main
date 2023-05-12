import Particles from "react-tsparticles";
import {Card, Container, Row, Col, CardTitle, CardBody, CardFooter } from "reactstrap";
import { loadFull } from "tsparticles";
import doi from "../Img/doi.png";
import moinak from "../Img/moinak.jpg";
import vishal from "../Img/vishal.jpg"
import akansha from "../Img/aka.jpg"
import Devcard from "../component/Devshow";

const optionsvar = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 0,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffff00",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
      random: false,
      animation: {
        enable: true,
        speed: 0.5,
        minimumValue: 0,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: { enable: true, minimumValue: 4 },
      animation: {
        enable: false,
        speed: 20,
        minimumValue: 4,
        sync: false,
      },
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        acceleration: -0.5,
      },
      speed: 5,
      direction: "top",
      random: false,
      straight: false,
      outModes: {
        default: "destroy",
        bottom: "none",
      },
      attract: {
        enable: true,
        distance: 300,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
    },
  },
  fullScreen: {
    zIndex: -1,
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true,
    },
  },
  detectRetina: true,
  background: {
    color: "#000000",
  },
  emitters: [
    {
      direction: "top",
      particles: {
        color: "#f00",
      },
      rate: {
        quantity: 1,
        delay: 0.1,
      },
      size: {
        width: 100,
        height: 10,
      },
      position: {
        x: 50,
        y: 100,
      },
    },
    {
      direction: "top",
      particles: {
        color: "#0f0",
      },
      rate: {
        quantity: 1,
        delay: 0.1,
      },
      size: {
        width: 100,
        height: 10,
      },
      position: {
        x: 50,
        y: 100,
      },
    },
  ],
};

const devData = [
  { name: 'Dwaipayan Ghosh', role: 'User-side Front-end Development', img: doi, about: 'Tech enthusiast currently pursing MCA in MAKAUT. Loves to explore tech stuffs and develope modern webistes. Also a content-writer by passion.', github: 'https://github.com/DwaipayanGhosh2001', instagram: 'https://www.instagram.com/_._vagabond._._/', mail: 'dwaipayanghosh3@gmail.com', portfolio: '#', linkedin: 'https://www.linkedin.com/in/dwaipayan-ghosh-88b65b204/' },
  { name: 'Moinak Majumdar', role: 'Vaccine-centre Front-end & PWA development', img: moinak, about: 'A passionate full stack web developer from India, I design and build modern fullstack web site. Always keen to learn new web tech.', github: 'https://github.com/Moinak-Majumdar', instagram: '#', mail: 'moinak2030@gmail.com', portfolio: 'https://moinak05.vercel.app/', linkedin: 'https://www.linkedin.com/in/moinak-majumdar-b7a85b238/' },
  { name: 'Vishal Kumar Paswan', role: 'Back-end Development', img: vishal, about: ' A programming geek who prefers tea over coffee. Interested in Android, Flutter, Dart and other mobile app stuffs. Today I work mostly with Flutter, Node.js, Express and MongoDB and also looking forward to learn React and DevOps.', github: 'https://github.com/vishal-kumar-paswan', instagram: '#', mail: 'kumarpaswanvishal@gamil.com', portfolio: '#', linkedin: 'https://www.linkedin.com/in/vishal-kumar-paswan/' },
  { name: 'Akansha Priya', role: 'Layout and documentation management', img: akansha, about: 'An aspiring developer and UI/UX designer. Currently pursing Masters and working on my competetive programming skills. Have passion for front-end web developement using React, HTML and CSS.', github: 'https://github.com/Priyaakansha', instagram: '#', mail: 'myselfakanshapriya@gmail.com', portfolio: '#', linkedin: 'https://www.linkedin.com/in/akansha-priya-942221239/' },
]

export default function Developers() {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  
  return (
    <div className="text-white">
      <Container fluid className="pt-5 w-75 mx-auto">
        <div class="container">
          <div class="row row-cols-md-2  row-cols-auto">
            {devData.map((curr, i) => {
              return (
                <div class="col" key={i}>
                  <Devcard
                    name={curr.name}
                    role={curr.role}
                    image={curr.img}
                    about={curr.about}
                    github={curr.github}
                    instagram={curr.instagram}
                    portfolio={curr.portfolio}
                    mail={curr.mail}
                    linkedin={curr.linkedin}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </Container>

      <Particles id="tsparticles" init={particlesInit} options={optionsvar} />
    </div>
  );
}
