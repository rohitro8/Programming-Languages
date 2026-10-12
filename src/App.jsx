import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import rfcImage from './assets/RFC 1.jfif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={rfcImage} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>Rohit Food Cafe</h1>
          <p>
            Taste the best Delicious Food in Town. We serve a variety of dishes that will tantalize your taste buds and leave you craving for more. Come and experience the culinary delights at Rohit Food Cafe!
          </p>
        </div>
        <a href="/RFCaboutus.html" className="btn btn-primary">
           About Us
        </a>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
          </svg>
            <i class="bi bi-card-list"></i>
          <h2>Our Menu</h2>
          <p>Check out our delicious selection of dishes!</p>
          <ul>
            <li>
              <a href="/RFCmenu.html">
                MENU
              </a>
            </li>
            <li>
              <a href="/images/cafe-menu.png" class="btn btn-primary">
                Special Menu
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Contact Us</h2>
          <p>Order our delicious food or get in touch with us!</p>
          <ul>
            <li>
              <a href="/RFCcontact.html">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#phone-icon"></use>
                </svg>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
