import React from 'react';
import '../about/about.css';

export const About = () => {
  return (
    <section className='about' id='about'>
      <h2 className='title'>About MazeGame</h2>

      <article className='article-box-1'>
        <div className='image-focal-point'>
          <div className='about-image about-image-1'></div>
          <div className='about-image about-image-2'></div>
        </div>
        <div className='text-focal-point'>
          <p>
            The purpose of doing this project was to create a game in 3D using ray-casting for ALX Software Engineering Program. This project was built with Ray Casting.
          </p>
        </div>
      </article>
      <div className='article-box-2'>
        <div className='article-image-1'></div>
        <div className='article-text'>
          <p>
            The purpose of doing this project was to create a game in 3D using ray-casting for ALX Software Engineering Program. This project was built with Ray Casting.
          </p>
        </div>
      </div>
    </section>
  )
}
