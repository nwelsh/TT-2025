import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Present from "./present";
import present1 from "./images/present1.png";
import image1 from "./images/image1.jpg";
import lexi from "./images/lexi.png";
import photobooth from "./images/mike.png";
import cousins from "./images/cousins.png";
import rome from "./images/rome.png";
import lexi2 from "./images/lexi2.png";
import game from "./images/game.png";
import game2 from "./images/game2.png";
import gingerbread from "./images/gingerbread.png";
import zoo from "./images/zoo.png";
import us from "./images/us.png";

function App() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const data = [
    {
      presentImg: present1,
      img: lexi,
      title: "lexi",
      alt: "LEXI",
    },
    {
      presentImg: present1,
      img: photobooth,
      title: "photobooth",
      alt: "photobooth",
    },
    {
      presentImg: present1,
      img: rome,
      title: "rome",
      alt: "rome",
    },
    {
      presentImg: present1,
      img: lexi2,
      title: "lexi2",
      alt: "lexi2",
    },
    {
      presentImg: present1,
      img: cousins,
      title: "cousins",
      alt: "",
    },
    {
      presentImg: present1,
      img: game,
      title: "game",
      alt: "game",
    },
    {
      presentImg: present1,
      img: game2,
      title: "game 1",
      alt: "game 1",
    },
    {
      presentImg: present1,
      img: gingerbread,
      title: "gingerbread",
      alt: "gingerbread",
    },
    {
      presentImg: present1,
      img: zoo,
      title: "present 1",
      alt: "present 1",
    },
    {
      presentImg: present1,
      img: us,
      title: "present 2",
      alt: "present 2",
    },
  ];

  return (
    <div className="main">
      <div className="container">
        <p className="title">Merry Christmas, TT</p>
        <div className="present-grid">
          {data.map((datum) => (
            <Present
              key={datum.title}
              present={datum.presentImg}
              image={datum.img}
              onOpen={setActiveImage}
            />
          ))}
        </div>
      </div>
      {activeImage && (
        <dialog open className="modal">
          <img src={activeImage} className="present-image" alt="Full size" />

          <div className="button-container">
            <button className="close" onClick={() => setActiveImage(null)}>
              Close
            </button>

            <a href={activeImage} download className="download-image">
              Download image
            </a>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default App;
