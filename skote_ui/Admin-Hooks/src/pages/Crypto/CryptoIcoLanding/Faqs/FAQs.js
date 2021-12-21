import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Nav,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap"
import classnames from "classnames"

//Import Components
import Accordian from "./accordian"

const FAQs = () => {
  const [activeTab, setactiveTab] = useState("1")

  return (
    <React.Fragment>
      <section className="section" id="faqs">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <div className="small-title">FAQs</div>
                <h4>Frequently asked questions</h4>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <div className="vertical-nav">
                <Row>
                  <Col lg="2" sm="4">
                    <Nav pills className="flex-column">
                      <NavLink
                        className={classnames({ active: activeTab === "1" })}
                        onClick={() => {
                          setactiveTab("1")
                        }}
                      >
                        <i className="bx bx-help-circle nav-icon d-block mb-2"/>
                        <p className="font-weight-bold mb-0">
                          General Questions
                        </p>
                      </NavLink>

                      <NavLink
                        className={classnames({ active: activeTab === "2" })}
                        onClick={() => {
                          setactiveTab("2")
                        }}
                      >
                        <i className="bx bx-receipt nav-icon d-block mb-2"/>
                        <p className="font-weight-bold mb-0">Token sale</p>
                      </NavLink>

                      <NavLink
                        className={classnames({ active: activeTab === "3" })}
                        onClick={() => {
                          setactiveTab("3")
                        }}
                      >
                        <i className="bx bx-timer d-block nav-icon mb-2"/>
                        <p className="font-weight-bold mb-0">Roadmap</p>
                      </NavLink>
                    </Nav>
                  </Col>
                  <Col lg="10" sm="8">
                    <Card>
                      <CardBody>
                        <TabContent activeTab={activeTab}>
                          <TabPane tabId="1" id="buy">
                            <h4 className="card-title mb-4">
                              General Questions
                            </h4>

                            {/* accoridan */}
                            <Accordian
                              question1="What is Lorem Ipsum ?"
                              answer1="Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                              question2="Why do we use it ?"
                              answer2="If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                              question3="Where does it come from ?"
                              answer3="It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental."
                              question4="Where can I get some ?"
                              answer4="To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                            />
                          </TabPane>

                          <TabPane tabId="2">
                            <h4 className="card-title mb-4">Token sale</h4>

                            <Accordian
                              question1="Why do we use it ?"
                              answer1="If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                              question2="What is Lorem Ipsum ?"
                              answer2="It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental."
                              question3="Where can I get some ?"
                              answer3="Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                              question4="Where does it come from ?"
                              answer4="To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                            />
                          </TabPane>

                          <TabPane tabId="3">
                            <h4 className="card-title mb-4">Roadmap</h4>

                            <Accordian
                              question1="Why do we use it ?"
                              answer1="Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                              question2="What is Lorem Ipsum ?"
                              answer2="It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental."
                              question3="Where can I get some ?"
                              answer3="To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                              question4="Where does it come from ?"
                              answer4="If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                            />
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default FAQs
