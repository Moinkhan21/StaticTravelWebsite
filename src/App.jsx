import React from "react";
import Header from "./components/Header";
import Entry from "./components/Entry";
import DisplayTime from "./components/DisplayTime";
import Contact from "./components/Contact";
// import catone from './assets/catone.jpg'
// import cattwo from './assets/cattwo.jpg'
// import catthree from './assets/catthree.jpg'
// import catfour from './assets/catfour.jpg '
import Jokes from "./components/Jokes";
import MapFunction from "./components/MapFunction";
import jokesData from "./jokesData";
import data from "./data";

const App = () => {

  //console.log(jokesData);

  // const jokeElements = jokesData.map((joke) => {
  //   return <Jokes setup={joke.setup} punchline={joke.punchline} />
  // })

  // const ninjaTurtles = ["Leonardo", "Donatello", "Raphael", "Michelangelo"]
  // const ninjaTurtles = [
  //   <h2>Donatello</h2>,
  //   <h2>Michaelangelo</h2>,
  //   <h2>Leonardo</h2>,
  //   <h2>Raphael</h2>,
  // ]

  // const entryElements = data.map((entry) => {
  //   return (
  //     <Entry 
  //       img={{
  //         src: entry.img.src,
  //         alt: entry.img.alt,
  //       }} //Optional Code
  //       key={entry.id}
  //       img={entry.img}
  //       title={entry.title}
  //       country={entry.country}
  //       googleMapslink={entry.googleMapsLink}
  //       date={entry.date}
  //       text={entry.text}
  //     />
  //   )
  // })

  // const entryElements = data.map((entry) => {
  //   return(
  //     <Entry
  //       key={entry.id}
  //       entry={entry} 
  //     />
  //   )
  // })

  const entryElements = data.map((entry) => {
    return(
      <Entry
        key={entry.id}
        {...entry} 
      />
    )
  })


  return (
    <>
      {/* <Header />
      <Entry
        img={{
          src: "https://scrimba.com/links/travel-japan-image-url",
          alt: "mount fuji",
        }}
        title="Mount Fuji"
        country="Japan"
        date="12 Jan, 2021 - 24 Jan, 2021"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,389 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists."
      />

      <Entry
        img={{
          src: "https://scrimba.com/links/travel-japan-image-url",
          alt: "Opera House",
        }}
        title="Opera House"
        country="Japan"
        date="12 Fab, 2021 - 24 Fab, 2021"
        text="The Sydney Opera House is a
            multi-venue performing arts centre in Sydney. Located on the banks of the
            Sydney Harbour, it is often regarded as one of the 20th century's most
            famous and distinctive buildings."
      />

      <Entry
        img={{
          src: "https://scrimba.com/links/travel-japan-image-url",
          alt: "Geiranger Fjord",
        }}
        title="Geiranger Fjord"
        country="Norway"
        date="12 March, 2021 - 24 March, 2021"
        text=" The Geiranger Fjord is a fjord in the
            Sunnmore region of More og Romsdal country, Norway. It is located entirely
            in the Stranda Municipality."
      /> */}

      {/* <DisplayTime /> */}
      {/* <Contact 
        img={catone}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
       />
       <Contact 
        img={cattwo}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
       />
       <Contact 
        img={catthree}
        name="Felix"
        phone="(212) 555-3456"
        email="thecat@hotmail.meow"
       />
       <Contact 
        img={catfour}
        name="Mr. Pumpkin"
        phone="(212) 555-4567"
        email="pumpkin@cat.com"
       /> */}

      {/* <Jokes 
          setup="I got my dauther a fridge for her birthday"
          punchline="I can't wait to see her face light up when she opens it."
          upvotes = {10}
          isPun={true}
          comments = {[
            {author: "", text: "", title: ""},
            {author: "", text: "", title: ""}
          ]} 
        />
       <Jokes 
          setup="How did the hacker escape the police?"
          punchline="He just ransomware!" 
        />
       <Jokes 
          setup="Why don't pirates shower before they walk the plank?"
          punchline="Scurvy!" 
        />
       <Jokes 
          setup="Why do bees stay in the hive in the winter?"
          punchline="Swarm!" 
        />
       <Jokes 
          setup="what's the best thing about Switzerland?"
          punchline="I don't know, but the flag is a big plus!" 
        /> */}
        {/* <MapFunction /> */}
        <div>
          {/* {ninjaTurtles} */}

          {/* {jokeElements} */}
          <Header />
          <main className="container">
              {entryElements}
          </main>

          {/* <div className="cont"></div> */}

        </div>
    </>
  );
};

export default App;
