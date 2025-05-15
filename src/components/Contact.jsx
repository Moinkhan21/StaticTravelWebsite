import React from 'react'

const Contact = (props) => {
  return (
    <div className="contacts">
        <article className="contact-card">
            <img src={props.img} alt="Photo of Mr. Whiskerson" className="main-img"/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="" alt="phone icon" />
                <p>{props.phone}</p>
            </div>  
            <div className="info-group">
                <img src="" alt="mail icon" />
                <p>{props.email}</p>
            </div>
        </article>
    </div>
  )
}

export default Contact