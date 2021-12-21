import React, { Component } from "react"
import MetaTags from 'react-meta-tags';

//Import Components
import Navbar from "./Navbar/Navbar"
import Section from "./HeroSection/Section"
import CardsMini from "./HeroSection/cards-mini"
import AboutUs from "./AboutUs/about-us"
import Features from "./Features/features"
import RoadMap from "./RoadMap/road-map"
import OurTeam from "./Team/our-team"
import Blog from "./Blog/blog"
import FAQs from "./Faqs/FAQs"
import Footer from "./Footer/footer"

class CryptoIcoLanding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pos: document.documentElement.scrollTop,
      imglight: true,
      navClass: "",
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true)
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky", imglight: false })
    } else {
      this.setState({ navClass: "", imglight: true })
    }
  }
  render() {
    return (
      <React.Fragment>
      {/* add meta title */}
          <MetaTags>
            <title>ICO Landing | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
        {/* import navbar */}
        <Navbar navClass={this.state.navClass} imglight={this.state.imglight} />

        {/* Hero section */}
        <Section />

        {/* mini cards */}
        <CardsMini />

        {/* aboutus */}
        <AboutUs />

        {/* features */}
        <Features />

        {/* roadmap */}
        <RoadMap />

        {/* our team */}
        <OurTeam />

        {/* blog */}
        <Blog />

        {/* faqs */}
        <FAQs />

        {/* footer */}
        <Footer />
      </React.Fragment>
    )
  }
}

export default CryptoIcoLanding
