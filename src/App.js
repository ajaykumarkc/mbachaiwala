import { useEffect, useState } from "react";
import IntroVideo from './components/IntroVideo';
import Section from './components/Section';
import Footer from './components/Footer';
import Loader from "./components/Loader";
import Misc from './components/Misc';



import freshTopicImg from './assets/academy.png'
import freshTopic2Img from "./assets/story.png";
import tedTalksImg from "./assets/in-the-news.gif";
import franchiseImg from "./assets/franchise.gif";
import data from './data/data.json'
import mapImg from "./assets/locations.png";
import coursesImg from "./assets/image2.png";
import albumImg from "./assets/mba-cares.gif";
import baratImg from "./assets/image1.png";
import chaiWalaImg from "./assets/image3.png";


import './styles/App.scss'
import './styles/intro.scss'
import './styles/section.scss'
import './styles/footer.scss'
import './styles/misc.scss'
import './styles/mediaQuery.scss'


const yellow = "#fff100",
  pink = "#ed1e79",
  white = "#fff",
  brown = "#6d3d0f";

function App() {
  const {
    freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    map,
    courses,
    album,
    barat,
    chaiwala,
  } = data;

  const [loading, setLoading] = useState(true);

  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target;

    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    } else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    } else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor);

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", dotCursor);
    };
  }, []);


  return <>
     
     {loading && <Loader />}
    <IntroVideo />
    
    
    <Section h3={freshTopic.heading} 
     text={freshTopic.text} 
     btnText={freshTopic.btn}
     imgSrc={freshTopicImg}
     backgroundColor={pink}
     headingColor={yellow}
     textColor={yellow}
     btnBgColor={yellow}
     btnColor={pink}
    />

    <Section h3={freshTopic2.heading} 
     text={freshTopic2.text} 
     btnText={freshTopic2.btn}
     imgSrc={freshTopic2Img}
     backgroundColor={pink}
     headingColor={yellow}
     textColor={yellow}
     btnBgColor={yellow}
     btnColor={pink}
    />


    <Section h3={tedTalks.heading} 
     text={tedTalks.text} 
     btnText={tedTalks.btn}
     imgSrc={tedTalksImg}
     backgroundColor={yellow}
     headingColor={pink}
     textColor={pink}
     btnBgColor={pink}
     btnColor={yellow}
    />

    <Section h3={franchise.heading} 
     text={franchise.text} 
     btnText={franchise.btn}
     imgSrc={franchiseImg}
     backgroundColor={white}
     headingColor={pink}
     textColor={brown}
     btnBgColor={brown}
     btnColor={yellow}
    />{" "}

    <Section h3={map.heading} 
     text={map.text} 
     imgSrc={mapImg}
     backgroundColor={pink}
     headingColor={yellow}
     textColor={yellow}
     btnBgColor={brown}
     btnColor={yellow}
     hasBtn = {false}
    />

    <Section h3={courses.heading} 
     text={courses.text} 
     btnText={courses.btn}
     imgSrc={coursesImg}
     imgSize={'30%'}
     backgroundColor={yellow}
     headingColor={pink}
     textColor={pink}
     btnBgColor={pink}
     btnColor={yellow}
    />

    <Section h3={album.heading} 
     text={album.text} 
     btnText={album.btn}
     imgSrc={albumImg}
     backgroundColor={white}
     headingColor={pink}
     textColor={brown}
     btnBgColor={brown}
     btnColor={yellow}
    />

    <Section h3={barat.heading} 
     text={barat.text} 
     btnText={barat.btn}
     imgSrc={baratImg}
     backgroundColor={pink}
     headingColor={yellow}
     textColor={yellow}
     btnBgColor={yellow}
     btnColor={pink}
    />

    <Section h3={chaiwala.heading} 
     text={chaiwala.text} 
     btnText={chaiwala.btn}
     imgSrc={chaiWalaImg}
     backgroundColor={white}
     headingColor={pink}
     textColor={brown}
     btnBgColor={brown}
     btnColor={yellow}
    />

    <Footer />

    <Misc />




    


      
  </>;
}

export default App;
