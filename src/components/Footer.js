import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      চোখ রাখুন{' '}
      <a href="https://www.facebook.com/AmaderDUCSU/">স্বতন্ত্র জোট</a>
    </h2>
    <br />
    {/*<InstagramFeed count="8" />*/}
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://www.facebook.com/AmaderDUCSU/">স্বতন্ত্র জোট</a>.
        </span>
      </div>
    </footer>
  </div>
)
