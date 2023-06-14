
import { MagnifyingGlass, List, CaretUp, CaretDown } from "@phosphor-icons/react"

import './LandingPage.scss'
import { useEffect, useRef } from "react"
import { gsap } from 'gsap'


export default function LandingPage() {

  const el = useRef(null);


  useEffect(() => {

    el.current = gsap.timeline()
      .to(".background", {
        width: "100%",
        duration: 0.5,
      })
      .to(".navbar", {
        duration: 1.5,
        opacity: 1,
        y: 20,
        ease: "expo.easeInOut"
      })
    // gsap.to(".background", {
    //   width: "100%",
    //   duration: 0.5,
    // })

    // gsap.from(".navbar", {
    //   delay: 5,
    //   duration: 1.5,
    //   y: 20,
    // })
    // gsap.from(".media ul li", {
    //   duration: 1.5,
    //   delay: 2.8,
    //   opacity: 0,
    //   x: -30,
    //   ease: "expo.easeInOut"
    // }, 0.08)
    // gsap.from(".text-slogan h1 .text-bar", {
    //   duration: 1.5,
    //   delay: 1.6,
    //   y: "100%",
    //   ease: "expo.easeInOut"
    // })
    // gsap.from(".text-slogan p .text-bar", {
    //   duration: 1.5,
    //   delay: 2,
    //   y: "100%",
    //   ease: "expo.easeInOut"
    // })
    // gsap.from(".bottomNav", {
    //   duration: 1.5,
    //   delay: 3.2,
    //   opacity: 0,
    //   y: 30,
    //   ease: "expo.easeInOut"
    // })
    // gsap.from(".bottomNav .next", {
    //   duration: 1.5,
    //   delay: 3.5,
    //   opacity: 0,
    //   x: -20,
    //   ease: "expo.easeInOut"
    // })
  }, [])



  return (
    <div className="wrapper" ref={el}>

      <div className="background"></div>

      <nav className="navbar">
        <div className="logo">SPACIOUS</div>
        <div className="nav-item">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>OFFERS</li>
          </ul>
        </div>
        <div className="menu">
          <List className="icon-menu"></List>
          <MagnifyingGlass className="icon-search"></MagnifyingGlass>
        </div>
      </nav>

      <div className="media">
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>

      <div className="image-wrapper">
        <div className="image"></div>
        <div className="block"></div>
      </div>

      <div className="text-slogan">
        <h1>
          <span className="text-bar"><span>Radiate Your</span> Space</span>
        </h1>
        <p>
          <span className="text-bar">Embrace Modern Grace</span>
        </p>
      </div>

      <div className="bottomNav">
        <div className="next">COLLECTION</div>
        <div className="nav">
          <ul>
            <li><CaretUp></CaretUp></li>
            <li><CaretDown></CaretDown></li>
          </ul>
          <div className="image"></div>
        </div>
      </div>

    </div>
  )
}