import React from 'react'

const Jokes = (props) => {
    console.log(props)
  return (
    <>
        {props.setup && <p className='setup'>Setup: {props.setup}</p>}
        <p className='punchline'>Punchline: {props.punchline}</p>
        <hr />
    </>
  )
}

export default Jokes