import React, { useState, useEffect } from "react";
import Card from "./Card";
import Figure from "./Figure";
import axios from "axios";
const URL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;



function App() {
  const [apod, setApode] = useState();

  useEffect(() => {
    function fetchPhoto() {
      axios
        .get(URL)
        .then((res) => {
          console.log(res.data);
          setApode(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    // fetchPhoto();
    setApode({
      date: "2023-11-09",
      explanation: "The Crab Nebula is cataloged as M1, the first object on Charles Messier's famous 18th century list of things which are not comets. In fact, the Crab is now known to be a supernova remnant, debris from the death explosion of a massive star witnessed by astronomers in the year 1054. This sharp image from the James Webb Space Telescope’s NIRCam (Near-Infrared Camera) and MIRI (Mid-Infrared Instrument) explores the eerie glow and fragmented strands of the still expanding cloud of interstellar debris...",
      hdurl: "https://apod.nasa.gov/apod/image/2311/M1_webb1024.png",
      media_type: "image",
      service_version: "v1",
      title: "M1: The Crab Nebula",
      url: "https://apod.nasa.gov/apod/image/2311/M1_webb1024.png",
    });
  }, [])

  if (!apod) return 'Fetching Photo'
  return (
    <section>
     <Card 
     title={apod.title}
     text={apod.explanation}
     />
     <Figure
     imageURL={apod.url}
     date={apod.date}
     />
    </section>
  );
}

export default App;
