import React from "react"
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"

const SocialSource = () => {
  const socials = [
    {
      title: "Facebook",
      bgColor: "bg-primary",
      iconClass: "mdi-facebook",
      description: "125",
    },
    {
      title: "Twitter",
      bgColor: "bg-info",
      iconClass: "mdi-twitter",
      description: "112",
    },
    {
      title: "Instagram",
      bgColor: "bg-pink",
      iconClass: "mdi-instagram",
      description: "104",
    },
  ]

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardTitle className="mb-4">Social Source</CardTitle>
          <div className="text-center">
            <div className="avatar-sm mx-auto mb-4">
              <span className="avatar-title rounded-circle bg-primary bg-soft font-size-24">
                <i className="mdi mdi-facebook text-primary"></i>
              </span>
            </div>
            <p className="font-16 text-muted mb-2"></p>
            <h5>
              <Link to="#" className="text-dark">
                Facebook - <span className="text-muted font-16">125 sales</span>{" "}
              </Link>
            </h5>
            <p className="text-muted">
              Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
              libero venenatis faucibus tincidunt.
            </p>
            <Link to="#" className="text-primary font-16">
              Learn more <i className="mdi mdi-chevron-right"></i>
            </Link>
          </div>
          <Row className="mt-4">
            {socials.map((social, key) => (
              <Col xs="4" key={"_li_" + key}>
                <div className="social-source text-center mt-3">
                  <div className="avatar-xs mx-auto mb-3">

                    <span
                      className={
                        "avatar-title rounded-circle " +
                        social.bgColor +
                        " font-size-16"
                      }
                    >
                      <i
                        className={"mdi " + social.iconClass + " text-white"}
                      ></i>
                    </span>
                  </div>
                  <h5 className="font-size-15">{social.title}</h5>
                  <p className="text-muted mb-0">{social.description} sales</p>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default SocialSource
