import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./Footer.scss"
const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>{new Date().getFullYear()} © Hashstack.</Col>
            <Col md={6}>
              <div className="text-sm-end w-layout-grid footer-socials">
                <a
                  href="https://twitter.com/0xhashstack"
                  rel="noreferrer"
                  target="_blank"
                  className="w-inline-block"
                >
                  <img
                    src="./images/Twitter-Icon-Fill.svg"
                    loading="lazy"
                    alt=""
                  />
                </a>
                <a
                  href="https://in.linkedin.com/company/0xhashstack"
                  rel="noreferrer"
                  target="_blank"
                  className="w-inline-block"
                >
                  <img
                    src="./images/Linkedin-Icon-Fill.svg"
                    loading="lazy"
                    alt=""
                  />
                </a>
                <a
                  href="https://github.com/0xHashstack"
                  rel="noreferrer"
                  target="_blank"
                  className="w-inline-block"
                >
                  <img src="./images/github.svg" loading="lazy" alt="" />
                </a>
                <a
                  href="http://hashstack.community"
                  rel="noreferrer"
                  target="_blank"
                  className="w-inline-block"
                >
                  <img src="./images/discord.svg" loading="lazy" alt="" />
                </a>
                <a
                  href="https://hashstack.medium.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="w-inline-block"
                >
                  <img src="./images/medium.svg" loading="lazy" alt="" />
                </a>
                <a
                  href="https://www.reddit.com/r/0xHashstack/"
                  rel="noreferrer"
                  target="_blank"
                  className="w-inline-block"
                >
                  <img src="./images/reddit.svg" loading="lazy" alt="" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
