import React from 'react';
import { NavLink } from 'react-router-dom';
import badUrl from "../../assets/me_with_idea.png"


const BadUrl = () => {
  return (
    <section className='bad-url'>
      <h2>Uh oh, that's not a valid URL!</h2>
      <h3>Try going <NavLink className='inactive' exact to='/'>home</NavLink> or a different address.</h3>
    </section>
  )
}

export default BadUrl
