import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>{new Date().getFullYear()} © Hashstack.</Col>
            <Col md={6}>
              <div className="text-sm-end d-none d-sm-block" data-testid="footer-text">
                Design & Develop by Hashstack Finance
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="text-sm-end d-none d-sm-block" data-testid="footer-text">
                <a href="https://twitter.com/0xhashstack" target="_blank" rel="noreferrer" className="w-inline-block"><img src="../../assets/images/Twitter-Icon-Fill.svg" loading="lazy"  alt="" /></a>
                <a href="https://in.linkedin.com/company/0xhashstack" target="_blank" rel="noreferrer" className="w-inline-block"><img src="./images/Linkedin-Icon-Fill.svg" loading="lazy"  alt="" /></a>
                <a href="https://github.com/0xHashstack" target="_blank" rel="noreferrer" className="w-inline-block"><img src="./images/github.svg" loading="lazy"  alt="" /></a>
                <a href="http://hashstack.community" target="_blank" rel="noreferrer" className="w-inline-block"><img src="./images/discord.svg" loading="lazy"  alt="" /></a>
                <a href="https://hashstack.medium.com/" target="_blank" rel="noreferrer" className="w-inline-block"><img src="./images/medium.svg" loading="lazy"  alt="" /></a>
                <a href="https://www.reddit.com/r/Hashstack/" target="_blank" rel="noreferrer"className="w-inline-block"><img src="./images/reddit.svg" loading="lazy"  alt="" /></a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
