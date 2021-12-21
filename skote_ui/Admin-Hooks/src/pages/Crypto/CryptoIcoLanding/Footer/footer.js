import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "react-router-dom"

//Import Components
import FooterLink from "./footer-link"

const Features = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { title: "About Us", link: "#" },
        { title: "Features", link: "#" },
        { title: "Team", link: "#" },
        { title: "News", link: "#" },
        { title: "FAQs", link: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Whitepaper", link: "#" },
        { title: "Token sales", link: "#" },
        { title: "Privacy Policy", link: "#" },
        { title: "Terms & Conditions", link: "#" },
      ],
    },
    {
      title: "Links",
      links: [
        { title: "Tokens", link: "#" },
        { title: "Roadmap", link: "#" },
        { title: "FAQs", link: "#" },
      ],
    },
  ]

  return (
    <React.Fragment>
      <footer className="landing-footer">
        <Container>
          <Row>
            {footerLinks.map((footerLink, key) => (
              <Col lg="3" sm="6" key={key}>
                <div className="mb-4 mb-lg-0">
                  <h5 className="mb-3 footer-list-title">{footerLink.title}</h5>
                  <ul className="list-unstyled footer-list-menu">
                    {footerLink.links.map((Flink, key) => (
                      <li key={key}>
                        <Link to={Flink.link}>{Flink.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}

            <Col lg="3" sm="6">
              <div className="mb-4 mb-lg-0">
                <h5 className="mb-3 footer-list-title">Latest News</h5>
                <div className="blog-post">
                  <Link to="#" className="post">
                    <div className="badge badge-soft-success font-size-11 mb-3">
                      Cryptocurrency
                    </div>
                    <h5 className="post-title">Donec pede justo aliquet nec</h5>
                    <p className="mb-0">
                      <i className="bx bx-calendar me-1"/> 04 Mar, 2020
                    </p>
                  </Link>
                  <Link to="#" className="post">
                    <div className="badge badge-soft-success font-size-11 mb-3">
                      Cryptocurrency
                    </div>
                    <h5 className="post-title">In turpis, Pellentesque</h5>
                    <p className="mb-0">
                      <i className="bx bx-calendar me-1"/> 12 Mar, 2020
                    </p>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>

          <hr className="footer-border my-5" />

          <FooterLink />
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Features
