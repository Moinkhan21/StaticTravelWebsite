import React from "react";
import marker from "../assets/marker.png";

const Entry = (props) => {
  console.log(props);
  console.log(props.img);
  //console.log("Image" + props.img.src);
  return (
    <>
      {/* <article className="journal-entry">
        <div className="main-image-container">
          <img
            className="main-image"
            src={props.img.src}
            alt={props.img.alt}
          />
        </div>
        <div className="info-container">
          <img className="marker" src={marker} alt="map marker icon" />
          <span className="country">{props.contry}</span>
          <a href="">View on Google Maps</a>
          <h2 className="entry-title">{props.title}</h2>
          <p className="trip-dates">{props.date}</p>
          <p className="entry-text">
            {props.text}
          </p>
        </div>
      </article> */}

      {/* <article className="journal-entry">
        <div className="main-image-container">
          <img className="main-image" src={props.entry.img.src} alt={props.entry.img.alt} />
        </div>
        <div className="info-container">
          <img className="marker" src={marker} alt="map marker icon" />
          <span className="country">{props.entry.contry}</span>
          <a href="">View on Google Maps</a>
          <h2 className="entry-title">{props.entry.title}</h2>
          <p className="trip-dates">{props.entry.date}</p>
          <p className="entry-text">{props.entry.text}</p>
        </div>
      </article> */}

      <article className="journal-entry">
        <div className="main-card">
          <div className="main-image-container">
            <img
              className="main-image"
              src={props.img.src}
              alt={props.img.alt}
            />
          </div>
          <div className="info-container">
            <img className="marker" src={marker} alt="map marker icon" />
            <span className="country">{props.contry}</span>
            <a href="">View on Google Maps</a>
            <h2 className="entry-title">{props.title}</h2>
            <p className="trip-dates">{props.date}</p>
            <p className="entry-text">{props.text}</p>
          </div>
        </div>
      </article>

      {/* The Sydney Opera House is a
      multi-venue performing arts centre in Sydney. Located on the banks of the
      Sydney Harbour, it is often regarded as one of the 20th century's most
      famous and distinctive buildings. The Geiranger Fjord is a fjord in the
      Sunnmore region of More og Romsdal country, Norway. It is located entirely
      in the Stranda Municipality. */}
    </>
  );
};

export default Entry;
