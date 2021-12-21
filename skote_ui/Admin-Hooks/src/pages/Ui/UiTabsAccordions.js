import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import classnames from "classnames";
function UiTabsAccordions(props) {
  const [activeTab, setactiveTab] = useState("1");
  const [activeTab1, setactiveTab1] = useState("5");
  const [activeTab2, setactiveTab2] = useState("1");
  const [activeTab3, setactiveTab3] = useState("1");
  const [verticalActiveTab, setverticalActiveTab] = useState("1");
  const [verticalActiveTabWithIcon, setverticalActiveTabWithIcon] =
    useState("1");
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const [customIconActiveTab, setcustomIconActiveTab] = useState("1");
  const [col1, setcol1] = useState(true);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);

  const [col5, setcol5] = useState(true);
  const [col6, setcol6] = useState(true);
  const [col7, setcol7] = useState(true);

  const [col8, setcol8] = useState(true);
  const [col9, setcol9] = useState(true);
  const [col10, setcol10] = useState(false);
  const [col11, setcol11] = useState(false);

  const t_col1 = () => {
    setcol1(!col1);
    setcol2(false);
    setcol3(false);
  };

  const t_col2 = () => {
    setcol2(!col2);
    setcol1(false);
    setcol3(false);
  };

  const t_col3 = () => {
    setcol3(!col3);
    setcol1(false);
    setcol2(false);
  };

  const t_col5 = () => {
    setcol5(!col5);
  };

  const t_col6 = () => {
    setcol6(!col6);
  };

  const t_col7 = () => {
    setcol7(!col7);
  };

  const t_col8 = () => {
    setcol6(!col6);
    setcol7(!col7);
  };

  const t_col9 = () => {
    setcol9(!col9);
    setcol10(false);
    setcol11(false);
  };

  const t_col10 = () => {
    setcol10(!col10);
    setcol9(false);
    setcol11(false);
  };

  const t_col11 = () => {
    setcol11(!col11);
    setcol10(false);
    setcol9(false);
  };

  const toggle = tab => {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  };

  const toggle1 = tab => {
    if (activeTab1 !== tab) {
      setactiveTab1(tab);
    }
  };

  const toggle2 = tab => {
    if (activeTab2 !== tab) {
      setactiveTab2(tab);
    }
  };

  const toggle3 = tab => {
    if (activeTab3 !== tab) {
      setactiveTab3(tab);
    }
  };

  const toggleVertical = tab => {
    if (verticalActiveTab !== tab) {
      setverticalActiveTab(tab);
    }
  };

  const toggleVerticalIcon = tab => {
    if (verticalActiveTabWithIcon !== tab) {
      setverticalActiveTabWithIcon(tab);
    }
  };

  const toggleCustom = tab => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };

  const toggleIconCustom = tab => {
    if (customIconActiveTab !== tab) {
      setcustomIconActiveTab(tab);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Tabs & Accordions | Skote - React Admin & Dashboard Template
          </title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Tabs & Accordions" />

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Default Tabs</CardTitle>
                  <p className="card-title-desc">
                    Use the tab JavaScript plugin—include it individually or
                    through the compiled{" "}
                    <code className="highlighter-rouge">bootstrap.js</code>{" "}
                    file—to extend our navigational tabs and pills to create
                    tabbable panes of local content, even via dropdown menus.
                  </p>

                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab === "1",
                        })}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab === "2",
                        })}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab === "3",
                        })}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        Messages
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab === "4",
                        })}
                        onClick={() => {
                          toggle("4");
                        }}
                      >
                        Settings
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={activeTab} className="p-3 text-muted">
                    <TabPane tabId="1">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Raw denim you probably haven&apos;t heard of them jean
                            shorts Austin. Nesciunt tofu stumptown aliqua, retro
                            synth master cleanse. Mustache cliche tempor,
                            williamsburg carles vegan helvetica. Reprehenderit
                            butcher retro keffiyeh dreamcatcher synth. Cosby
                            sweater eu banh mi, qui irure terry richardson ex
                            squid. Aliquip placeat salvia cillum iphone. Seitan
                            aliquip quis cardigan american apparel, butcher
                            voluptate nisi qui.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Food truck fixie locavore, accusamus mcsweeney&apos;s
                            marfa nulla single-origin coffee squid. Exercitation
                            +1 labore velit, blog sartorial PBR leggings next
                            level wes anderson artisan four loko farm-to-table
                            craft beer twee. Qui photo booth letterpress,
                            commodo enim craft beer mlkshk aliquip jean shorts
                            ullamco ad vinyl cillum PBR. Homo nostrud organic,
                            assumenda labore aesthetic magna delectus mollit.
                            Keytar helvetica VHS salvia yr, vero magna velit
                            sapiente labore stumptown. Vegan fanny pack odio
                            cillum wes anderson 8-bit.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Etsy mixtape wayfarers, ethical wes anderson tofu
                            before they sold out mcsweeney&apos;s organic lomo retro
                            fanny pack lo-fi farm-to-table readymade. Messenger
                            bag gentrify pitchfork tattooed craft beer, iphone
                            skateboard locavore carles etsy salvia banksy hoodie
                            helvetica. DIY synth PBR banksy irony. Leggings
                            gentrify squid 8-bit cred pitchfork. Williamsburg
                            banh mi whatever gluten-free, carles pitchfork
                            biodiesel fixie etsy retro mlkshk vice blog.
                            Scenester cred you probably haven&apos;t heard of them,
                            vinyl craft beer blog stumptown. Pitchfork
                            sustainable tofu synth chambray yr.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="4">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Trust fund seitan letterpress, keytar raw denim
                            keffiyeh etsy art party before they sold out master
                            cleanse gluten-free squid scenester freegan cosby
                            sweater. Fanny pack portland seitan DIY, art party
                            locavore wolf cliche high life echo park Austin.
                            Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                            they sold out farm-to-table VHS viral locavore cosby
                            sweater. Lomo wolf viral, mustache readymade
                            thundercats keffiyeh craft beer marfa ethical. Wolf
                            salvia freegan, sartorial keffiyeh echo park vegan.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Justify Tabs</CardTitle>
                  <p className="card-title-desc">
                    Use the tab JavaScript plugin—include it individually or
                    through the compiled{" "}
                    <code className="highlighter-rouge">bootstrap.js</code>{" "}
                    file—to extend our navigational tabs and pills to create
                    tabbable panes of local content, even via dropdown menus.
                  </p>

                  <Nav pills className="navtab-bg nav-justified">
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab1 === "5",
                        })}
                        onClick={() => {
                          toggle1("5");
                        }}
                      >
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab1 === "6",
                        })}
                        onClick={() => {
                          toggle1("6");
                        }}
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab1 === "7",
                        })}
                        onClick={() => {
                          toggle1("7");
                        }}
                      >
                        Messages
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab1 === "8",
                        })}
                        onClick={() => {
                          toggle1("8");
                        }}
                      >
                        Settings
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={activeTab1} className="p-3 text-muted">
                    <TabPane tabId="5">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Raw denim you probably haven&apos;t heard of them jean
                            shorts Austin. Nesciunt tofu stumptown aliqua, retro
                            synth master cleanse. Mustache cliche tempor,
                            williamsburg carles vegan helvetica. Reprehenderit
                            butcher retro keffiyeh dreamcatcher synth. Cosby
                            sweater eu banh mi, qui irure terry richardson ex
                            squid. Aliquip placeat salvia cillum iphone. Seitan
                            aliquip quis cardigan american apparel, butcher
                            voluptate nisi qui.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="6">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Food truck fixie locavore, accusamus mcsweeney&apos;s
                            marfa nulla single-origin coffee squid. Exercitation
                            +1 labore velit, blog sartorial PBR leggings next
                            level wes anderson artisan four loko farm-to-table
                            craft beer twee. Qui photo booth letterpress,
                            commodo enim craft beer mlkshk aliquip jean shorts
                            ullamco ad vinyl cillum PBR. Homo nostrud organic,
                            assumenda labore aesthetic magna delectus mollit.
                            Keytar helvetica VHS salvia yr, vero magna velit
                            sapiente labore stumptown. Vegan fanny pack odio
                            cillum wes anderson 8-bit.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="7">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Etsy mixtape wayfarers, ethical wes anderson tofu
                            before they sold out mcsweeney&apos;s organic lomo retro
                            fanny pack lo-fi farm-to-table readymade. Messenger
                            bag gentrify pitchfork tattooed craft beer, iphone
                            skateboard locavore carles etsy salvia banksy hoodie
                            helvetica. DIY synth PBR banksy irony. Leggings
                            gentrify squid 8-bit cred pitchfork. Williamsburg
                            banh mi whatever gluten-free, carles pitchfork
                            biodiesel fixie etsy retro mlkshk vice blog.
                            Scenester cred you probably haven&apos;t heard of them,
                            vinyl craft beer blog stumptown. Pitchfork
                            sustainable tofu synth chambray yr.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>

                    <TabPane tabId="8">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Trust fund seitan letterpress, keytar raw denim
                            keffiyeh etsy art party before they sold out master
                            cleanse gluten-free squid scenester freegan cosby
                            sweater. Fanny pack portland seitan DIY, art party
                            locavore wolf cliche high life echo park Austin.
                            Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                            they sold out farm-to-table VHS viral locavore cosby
                            sweater. Lomo wolf viral, mustache readymade
                            thundercats keffiyeh craft beer marfa ethical. Wolf
                            salvia freegan, sartorial keffiyeh echo park vegan.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Custom Tabs With Icon</CardTitle>
                  <p className="card-title-desc">
                    Example of custom tabs with icon
                  </p>

                  <Nav className="icon-tab nav-justified">
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customIconActiveTab === "1",
                        })}
                        onClick={() => {
                          toggleIconCustom("1");
                        }}
                      >
                        <span className="d-none d-sm-block">
                          <i className="fas fa-home"></i> Home
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="fas fa-home"></i>
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customIconActiveTab === "2",
                        })}
                        onClick={() => {
                          toggleIconCustom("2");
                        }}
                      >
                        <span className="d-none d-sm-block">
                          <i className="fas fa-user"></i> Profile
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="fas fa-user"></i>
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customIconActiveTab === "3",
                        })}
                        onClick={() => {
                          toggleIconCustom("3");
                        }}
                      >
                        <span className="d-none d-sm-block">
                          <i className="fab fa-facebook-messenger"></i> Messages
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="fab fa-facebook-messenger"></i>
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customIconActiveTab === "4",
                        })}
                        onClick={() => {
                          toggleIconCustom("4");
                        }}
                      >
                        <span className="d-none d-sm-block">
                          <i className="fas fa-cog"></i> Settings
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="fas fa-cog"></i>
                        </span>
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent
                    activeTab={customIconActiveTab}
                    className="p-3 text-muted"
                  >
                    <TabPane tabId="1">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Raw denim you probably haven&apos;t heard of them jean
                            shorts Austin. Nesciunt tofu stumptown aliqua, retro
                            synth master cleanse. Mustache cliche tempor,
                            williamsburg carles vegan helvetica. Reprehenderit
                            butcher retro keffiyeh dreamcatcher synth. Cosby
                            sweater eu banh mi, qui irure terry richardson ex
                            squid. Aliquip placeat salvia cillum iphone. Seitan
                            aliquip quis cardigan american apparel, butcher
                            voluptate nisi qui.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Food truck fixie locavore, accusamus mcsweeney&apos;s
                            marfa nulla single-origin coffee squid. Exercitation
                            +1 labore velit, blog sartorial PBR leggings next
                            level wes anderson artisan four loko farm-to-table
                            craft beer twee. Qui photo booth letterpress,
                            commodo enim craft beer mlkshk aliquip jean shorts
                            ullamco ad vinyl cillum PBR. Homo nostrud organic,
                            assumenda labore aesthetic magna delectus mollit.
                            Keytar helvetica VHS salvia yr, vero magna velit
                            sapiente labore stumptown. Vegan fanny pack odio
                            cillum wes anderson 8-bit.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Etsy mixtape wayfarers, ethical wes anderson tofu
                            before they sold out mcsweeney&apos;s organic lomo retro
                            fanny pack lo-fi farm-to-table readymade. Messenger
                            bag gentrify pitchfork tattooed craft beer, iphone
                            skateboard locavore carles etsy salvia banksy hoodie
                            helvetica. DIY synth PBR banksy irony. Leggings
                            gentrify squid 8-bit cred pitchfork. Williamsburg
                            banh mi whatever gluten-free, carles pitchfork
                            biodiesel fixie etsy retro mlkshk vice blog.
                            Scenester cred you probably haven&apos;t heard of them,
                            vinyl craft beer blog stumptown. Pitchfork
                            sustainable tofu synth chambray yr.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="4">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Trust fund seitan letterpress, keytar raw denim
                            keffiyeh etsy art party before they sold out master
                            cleanse gluten-free squid scenester freegan cosby
                            sweater. Fanny pack portland seitan DIY, art party
                            locavore wolf cliche high life echo park Austin.
                            Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                            they sold out farm-to-table VHS viral locavore cosby
                            sweater. Lomo wolf viral, mustache readymade
                            thundercats keffiyeh craft beer marfa ethical. Wolf
                            salvia freegan, sartorial keffiyeh echo park vegan.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Custom Tabs</CardTitle>
                  <p className="card-title-desc">Example of custom tabs</p>

                  <Nav tabs className="nav-tabs-custom nav-justified">
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customActiveTab === "1",
                        })}
                        onClick={() => {
                          toggleCustom("1");
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="fas fa-home"></i>
                        </span>
                        <span className="d-none d-sm-block">Home</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customActiveTab === "2",
                        })}
                        onClick={() => {
                          toggleCustom("2");
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-user"></i>
                        </span>
                        <span className="d-none d-sm-block">Profile</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customActiveTab === "3",
                        })}
                        onClick={() => {
                          toggleCustom("3");
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-envelope"></i>
                        </span>
                        <span className="d-none d-sm-block">Messages</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customActiveTab === "4",
                        })}
                        onClick={() => {
                          toggleCustom("4");
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="fas fa-cog"></i>
                        </span>
                        <span className="d-none d-sm-block">Settings</span>
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent
                    activeTab={customActiveTab}
                    className="p-3 text-muted"
                  >
                    <TabPane tabId="1">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Raw denim you probably haven&apos;t heard of them jean
                            shorts Austin. Nesciunt tofu stumptown aliqua, retro
                            synth master cleanse. Mustache cliche tempor,
                            williamsburg carles vegan helvetica. Reprehenderit
                            butcher retro keffiyeh dreamcatcher synth. Cosby
                            sweater eu banh mi, qui irure terry richardson ex
                            squid. Aliquip placeat salvia cillum iphone. Seitan
                            aliquip quis cardigan american apparel, butcher
                            voluptate nisi qui.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Food truck fixie locavore, accusamus mcsweeney&apos;s
                            marfa nulla single-origin coffee squid. Exercitation
                            +1 labore velit, blog sartorial PBR leggings next
                            level wes anderson artisan four loko farm-to-table
                            craft beer twee. Qui photo booth letterpress,
                            commodo enim craft beer mlkshk aliquip jean shorts
                            ullamco ad vinyl cillum PBR. Homo nostrud organic,
                            assumenda labore aesthetic magna delectus mollit.
                            Keytar helvetica VHS salvia yr, vero magna velit
                            sapiente labore stumptown. Vegan fanny pack odio
                            cillum wes anderson 8-bit.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Etsy mixtape wayfarers, ethical wes anderson tofu
                            before they sold out mcsweeney&apos;s organic lomo retro
                            fanny pack lo-fi farm-to-table readymade. Messenger
                            bag gentrify pitchfork tattooed craft beer, iphone
                            skateboard locavore carles etsy salvia banksy hoodie
                            helvetica. DIY synth PBR banksy irony. Leggings
                            gentrify squid 8-bit cred pitchfork. Williamsburg
                            banh mi whatever gluten-free, carles pitchfork
                            biodiesel fixie etsy retro mlkshk vice blog.
                            Scenester cred you probably haven&apos;t heard of them,
                            vinyl craft beer blog stumptown. Pitchfork
                            sustainable tofu synth chambray yr.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="4">
                      <Row>
                        <Col sm="12">
                          <CardText className="mb-0">
                            Trust fund seitan letterpress, keytar raw denim
                            keffiyeh etsy art party before they sold out master
                            cleanse gluten-free squid scenester freegan cosby
                            sweater. Fanny pack portland seitan DIY, art party
                            locavore wolf cliche high life echo park Austin.
                            Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                            they sold out farm-to-table VHS viral locavore cosby
                            sweater. Lomo wolf viral, mustache readymade
                            thundercats keffiyeh craft beer marfa ethical. Wolf
                            salvia freegan, sartorial keffiyeh echo park vegan.
                          </CardText>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Vertical Nav Tabs</CardTitle>
                  <p className="card-title-desc">
                    Example of Vertical nav tabs
                  </p>
                  <Row>
                    <Col md="3">
                      <Nav pills className="flex-column">
                        <NavItem>
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              "mb-2": true,
                              active: verticalActiveTab === "1",
                            })}
                            onClick={() => {
                              toggleVertical("1");
                            }}
                          >
                            Home
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              "mb-2": true,
                              active: verticalActiveTab === "2",
                            })}
                            onClick={() => {
                              toggleVertical("2");
                            }}
                          >
                            Profile
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              "mb-2": true,
                              active: verticalActiveTab === "3",
                            })}
                            onClick={() => {
                              toggleVertical("3");
                            }}
                          >
                            Messages
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              active: verticalActiveTab === "4",
                            })}
                            onClick={() => {
                              toggleVertical("4");
                            }}
                          >
                            Settings
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </Col>
                    <Col md="9">
                      <TabContent
                        activeTab={verticalActiveTab}
                        className="text-muted mt-4 mt-md-0"
                      >
                        <TabPane tabId="1">
                          <p>
                            Raw denim you probably haven&apos;t heard of them jean
                            shorts Austin. Nesciunt tofu stumptown aliqua, retro
                            synth master cleanse. Mustache cliche tempor,
                            williamsburg carles vegan helvetica. Reprehenderit
                            butcher retro keffiyeh dreamcatcher synth. Cosby
                            sweater eu banh mi, qui irure terry richardson ex
                            squid. Aliquip placeat salvia cillum iphone. Seitan
                            aliquip quis cardigan.
                          </p>
                          <p>
                            Reprehenderit butcher retro keffiyeh dreamcatcher
                            synth. Cosby sweater eu banh mi, qui irure terry
                            richardson ex squid.
                          </p>
                        </TabPane>
                        <TabPane tabId="2">
                          <p>
                            Food truck fixie locavore, accusamus mcsweeney&apos;s
                            marfa nulla single-origin coffee squid. Exercitation
                            +1 labore velit, blog sartorial PBR leggings next
                            level wes anderson artisan four loko farm-to-table
                            craft beer twee. Qui photo booth letterpress,
                            commodo enim craft beer mlkshk.
                          </p>
                          <p className="mb-0">
                            {" "}
                            Qui photo booth letterpress, commodo enim craft beer
                            mlkshk aliquip jean shorts ullamco ad vinyl cillum
                            PBR. Homo nostrud organic, assumenda labore
                            aesthetic magna 8-bit
                          </p>
                        </TabPane>
                        <TabPane tabId="3">
                          <p>
                            Etsy mixtape wayfarers, ethical wes anderson tofu
                            before they sold out mcsweeney&apos;s organic lomo retro
                            fanny pack lo-fi farm-to-table readymade. Messenger
                            bag gentrify pitchfork tattooed craft beer, iphone
                            skateboard locavore carles etsy salvia banksy hoodie
                            helvetica. DIY synth PBR banksy irony. Leggings
                            gentrify squid 8-bit cred.
                          </p>
                          <p className="mb-0">
                            DIY synth PBR banksy irony. Leggings gentrify squid
                            8-bit cred pitchfork. Williamsburg banh mi whatever
                            gluten-free.
                          </p>
                        </TabPane>

                        <TabPane tabId="4">
                          <p>
                            Trust fund seitan letterpress, keytar raw denim
                            keffiyeh etsy art party before they sold out master
                            cleanse gluten-free squid scenester freegan cosby
                            sweater. Fanny pack portland seitan DIY, art party
                            locavore wolf cliche high life echo park Austin.
                            Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                            they sold out farm-to-table.
                          </p>
                          <p className="mb-0">
                            Fanny pack portland seitan DIY, art party locavore
                            wolf cliche high life echo park Austin. Cred vinyl
                            keffiyeh DIY salvia PBR, banh mi before they sold
                            out farm-to-table.
                          </p>
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">
                    Vertical Nav Tabs With Icon
                  </CardTitle>
                  <p className="card-title-desc">
                    Example of Vertical nav tabs with icon
                  </p>
                  <Row>
                    <Col md="3">
                      <Nav className="flex-column vertical-icon">
                        <NavItem>
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              "mb-2": true,
                              active: verticalActiveTabWithIcon === "1",
                            })}
                            onClick={() => {
                              toggleVerticalIcon("1");
                            }}
                          >
                            <i className="fas fa-home"></i> Home
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              "mb-2": true,
                              active: verticalActiveTabWithIcon === "2",
                            })}
                            onClick={() => {
                              toggleVerticalIcon("2");
                            }}
                          >
                            <i className="fas fa-user"></i> Profile
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              "mb-2": true,
                              active: verticalActiveTabWithIcon === "3",
                            })}
                            onClick={() => {
                              toggleVerticalIcon("3");
                            }}
                          >
                            <i className="fab fa-facebook-messenger"></i>{" "}
                            Messages
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            style={{ cursor: "pointer" }}
                            className={classnames({
                              active: verticalActiveTabWithIcon === "4",
                            })}
                            onClick={() => {
                              toggleVerticalIcon("4");
                            }}
                          >
                            <i className="fas fa-cog"></i> Settings
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </Col>
                    <Col md="9">
                      <TabContent
                        activeTab={verticalActiveTabWithIcon}
                        className="text-muted mt-4 mt-md-0"
                      >
                        <TabPane tabId="1">
                          <p>
                            Raw denim you probably haven&apos;t heard of them jean
                            shorts Austin. Nesciunt tofu stumptown aliqua, retro
                            synth master cleanse. Mustache cliche tempor,
                            williamsburg carles vegan helvetica. Reprehenderit
                            butcher retro keffiyeh dreamcatcher synth. Cosby
                            sweater eu banh mi, qui irure terry richardson ex
                            squid. Aliquip placeat salvia cillum iphone. Seitan
                            aliquip quis cardigan.
                          </p>
                          <p>
                            Reprehenderit butcher retro keffiyeh dreamcatcher
                            synth. Cosby sweater eu banh mi, qui irure terry
                            richardson ex squid.
                          </p>
                        </TabPane>
                        <TabPane tabId="2">
                          <p>
                            Food truck fixie locavore, accusamus mcsweeney&apos;s
                            marfa nulla single-origin coffee squid. Exercitation
                            +1 labore velit, blog sartorial PBR leggings next
                            level wes anderson artisan four loko farm-to-table
                            craft beer twee. Qui photo booth letterpress,
                            commodo enim craft beer mlkshk.
                          </p>
                          <p className="mb-0">
                            {" "}
                            Qui photo booth letterpress, commodo enim craft beer
                            mlkshk aliquip jean shorts ullamco ad vinyl cillum
                            PBR. Homo nostrud organic, assumenda labore
                            aesthetic magna 8-bit
                          </p>
                        </TabPane>
                        <TabPane tabId="3">
                          <p>
                            Etsy mixtape wayfarers, ethical wes anderson tofu
                            before they sold out mcsweeney&apos;s organic lomo retro
                            fanny pack lo-fi farm-to-table readymade. Messenger
                            bag gentrify pitchfork tattooed craft beer, iphone
                            skateboard locavore carles etsy salvia banksy hoodie
                            helvetica. DIY synth PBR banksy irony. Leggings
                            gentrify squid 8-bit cred.
                          </p>
                          <p className="mb-0">
                            DIY synth PBR banksy irony. Leggings gentrify squid
                            8-bit cred pitchfork. Williamsburg banh mi whatever
                            gluten-free.
                          </p>
                        </TabPane>

                        <TabPane tabId="4">
                          <p>
                            Trust fund seitan letterpress, keytar raw denim
                            keffiyeh etsy art party before they sold out master
                            cleanse gluten-free squid scenester freegan cosby
                            sweater. Fanny pack portland seitan DIY, art party
                            locavore wolf cliche high life echo park Austin.
                            Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                            they sold out farm-to-table.
                          </p>
                          <p className="mb-0">
                            Fanny pack portland seitan DIY, art party locavore
                            wolf cliche high life echo park Austin. Cred vinyl
                            keffiyeh DIY salvia PBR, banh mi before they sold
                            out farm-to-table.
                          </p>
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-0">Collapse</CardTitle>
                  <Row>
                    <Col xl="6">
                      <div className="mt-4">
                        <h5 className="font-size-14">Example</h5>
                        <p className="card-title-desc">
                          You can use a link with the{" "}
                          <code className="highlighter-rouge">href</code>{" "}
                          attribute, or a button with the{" "}
                          <code className="highlighter-rouge">data-target</code>{" "}
                          attribute. In both cases, the{" "}
                          <code className="highlighter-rouge">
                            {" "}
                            data-toggle=&quot;collapse&ldquo;
                          </code>{" "}
                          is required.
                        </p>

                        <div className="d-flex gap-2 flex-wrap mb-3">
                          <Link
                            to="#"
                            onClick={t_col5}
                            style={{ cursor: "pointer" }}
                            className="btn btn-primary mo-mb-2"
                          >
                            Link with href{" "}
                          </Link>
                          <button
                            onClick={t_col5}
                            className="btn btn-primary mo-mb-2"
                            type="button"
                            style={{ cursor: "pointer" }}
                          >
                            Button with data-target
                          </button>
                        </div>
                        <Collapse isOpen={col5}>
                          <Card>
                            <CardBody>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid.
                              Nihil anim keffiyeh helvetica, craft beer labore
                              wes anderson cred nesciunt sapiente ea proident.
                            </CardBody>
                          </Card>
                        </Collapse>
                      </div>
                    </Col>
                    <Col xl="6">
                      <div className="mt-4">
                        <h5 className="font-size-14">Multiple targets</h5>
                        <p className="card-title-desc">
                          A <code>&lt;button&gt;</code> or{" "}
                          <code>&lt;a&gt;</code> can show and hide multiple
                          elements by referencing them with a selector in its{" "}
                          <code>href</code> or <code>data-bs-target</code>{" "}
                          attribute.
                        </p>

                        <div className="d-flex gap-2 flex-wrap mb-3">
                          <Link
                            to="#"
                            onClick={t_col6}
                            style={{ cursor: "pointer" }}
                            className="btn btn-primary"
                          >
                            Toggle first element
                          </Link>
                          <button
                            onClick={t_col7}
                            className="btn btn-primary"
                            type="button"
                            style={{ cursor: "pointer" }}
                          >
                            Toggle second element
                          </button>

                          <button
                            onClick={t_col8}
                            className="btn btn-primary"
                            type="button"
                            style={{ cursor: "pointer" }}
                          >
                            Toggle both element
                          </button>
                        </div>
                        <div className="row">
                          <div className="col">
                            <Collapse isOpen={col6}>
                              <Card>
                                <CardBody className="border shadow-none text-muted mb-0">
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high life accusamus terry richardson
                                  ad squid. Nihil anim keffiyeh helvetica, craft
                                  beer labore wes anderson cred nesciunt
                                  sapiente ea proident.
                                </CardBody>
                              </Card>
                            </Collapse>
                          </div>
                          <div className="col">
                            <Collapse isOpen={col7}>
                              <Card>
                                <CardBody className="border shadow-none text-muted mb-0">
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high life accusamus terry richardson
                                  ad squid. Nihil anim keffiyeh helvetica, craft
                                  beer labore wes anderson cred nesciunt
                                  sapiente ea proident.
                                </CardBody>
                              </Card>
                            </Collapse>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Card>
              <CardBody>
                <Row>
                  <Col lg={6}>
                    <CardTitle className="h4">Accordion</CardTitle>
                    <p className="card-title-desc">
                      Extend the default collapse behavior to create an
                      accordion.
                    </p>

                    <div className="accordion" id="accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col1 }
                            )}
                            type="button"
                            onClick={t_col1}
                            style={{ cursor: "pointer" }}
                          >
                            Accordion Item #1
                          </button>
                        </h2>

                        <Collapse isOpen={col1} className="accordion-collapse">
                          <div className="accordion-body">
                            <div className="text-muted">
                              <strong className="text-dark">
                                This is the first item&apos;s accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It&apos;s also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col2 }
                            )}
                            type="button"
                            onClick={t_col2}
                            style={{ cursor: "pointer" }}
                          >
                            Accordion Item #2
                          </button>
                        </h2>

                        <Collapse isOpen={col2} className="accordion-collapse">
                          <div className="accordion-body">
                            <div className="text-muted">
                              <strong className="text-dark">
                                This is the second item&apos;s accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It&apos;s also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col3 }
                            )}
                            type="button"
                            onClick={t_col3}
                            style={{ cursor: "pointer" }}
                          >
                            Accordion Item #3
                          </button>
                        </h2>
                        <Collapse isOpen={col3} className="accordion-collapse">
                          <div className="accordion-body">
                            <div className="text-muted">
                              <strong className="text-dark">
                                This is the third item&apos;s accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It&apos;s also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </Collapse>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mt-4">
                      <CardTitle className="h4">Flush</CardTitle>
                      <p className="card-title-desc">
                        Add <code>.accordion-flush</code> to remove the default{" "}
                        <code>background-color</code>, some borders, and some
                        rounded corners to render accordions edge-to-edge with
                        their parent container.
                      </p>

                      <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFlushOne">
                            <button
                              className={classnames(
                                "accordion-button",
                                "fw-medium",
                                { collapsed: !col9 }
                              )}
                              type="button"
                              onClick={t_col9}
                              style={{ cursor: "pointer" }}
                            >
                              Accordion Item #1
                            </button>
                          </h2>

                          <Collapse
                            isOpen={col9}
                            className="accordion-collapse"
                          >
                            <div className="accordion-body">
                              <div className="text-muted">
                                <strong className="text-dark">
                                  This is the first item&apos;s accordion body.
                                </strong>{" "}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It&apos;s also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFlushTwo">
                            <button
                              className={classnames(
                                "accordion-button",
                                "fw-medium",
                                { collapsed: !col10 }
                              )}
                              type="button"
                              onClick={t_col10}
                              style={{ cursor: "pointer" }}
                            >
                              Accordion Item #2
                            </button>
                          </h2>

                          <Collapse
                            isOpen={col10}
                            className="accordion-collapse"
                          >
                            <div className="accordion-body">
                              <div className="text-muted">
                                <strong className="text-dark">
                                  This is the second item&apos;s accordion body.
                                </strong>{" "}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It&apos;s also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                              </div>
                            </div>
                          </Collapse>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="headingFlushThree"
                          >
                            <button
                              className={classnames(
                                "accordion-button",
                                "fw-medium",
                                { collapsed: !col11 }
                              )}
                              type="button"
                              onClick={t_col11}
                              style={{ cursor: "pointer" }}
                            >
                              Accordion Item #3
                            </button>
                          </h2>
                          <Collapse
                            isOpen={col11}
                            className="accordion-collapse"
                          >
                            <div className="accordion-body">
                              <div className="text-muted">
                                <strong className="text-dark">
                                  This is the third item&apos;s accordion body.
                                </strong>{" "}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It&apos;s also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                              </div>
                            </div>
                          </Collapse>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default UiTabsAccordions;
