import React from "react"
import { Row, Col } from "reactstrap"

//Import Images
import logolight from "../../../../assets/images/logo-light.png"

const FooterLink = () => {
  return (
    <React.Fragment>
      <Row>
        <Col lg="6">
          <div className="mb-4">
            <img src={logolight} alt="" height="20" />
          </div>

          <p className="mb-2">
            {new Date().getFullYear()} © Skote. Design & Develop by Themesbrand
          </p>
          <p>
            It will be as simple as occidental in fact, it will be to an english
            person, it will seem like simplified English, as a skeptical
          </p>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default FooterLink
