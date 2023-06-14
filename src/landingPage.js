
import { MagnifyingGlass, List, CaretUp, CaretDown } from "@phosphor-icons/react"





export default function LandingPage() {
  return (
    <div className="wrapper">

      <nav className="navbar">
        <div className="logo">Spacious</div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Offers</li>
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
          <span className="text-bar"><span>Radiate</span> Your Space</span>
        </h1>
        <p>
          <span className="text-bar">Embrace Modern Grace</span>
        </p>
      </div>

      <div className="bottomNav">
        <div className="next">up next</div>
        <div className="nav">
    <ul>
      <li><CaretUp></CaretUp></li>
      <li><CaretDown></CaretDown></li>
    </ul>
        </div>
      </div>

    </div>
  )
}