import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import {
  Col,
  Row,
  Card,
  CardBody,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ButtonDropdown,
  CardTitle,
  CardSubtitle,
  Container,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiDropdown = () => {
  const [singlebtn, setSinglebtn] = useState(false)
  const [singlebtn1, setSinglebtn1] = useState(false)
  const [btnprimary1, setBtnprimary1] = useState(false)
  const [btnsecondary1, setBtnsecondary1] = useState(false)
  const [btnsuccess1, setBtnsuccess1] = useState(false)
  const [btnInfo1, setBtnInfo1] = useState(false)
  const [btnWarning1, setBtnWarning1] = useState(false)
  const [btnDanger1, setBtnDanger1] = useState(false)
  const [drp_primary1, setDrp_primary1] = useState(false)
  const [drp_secondary1, setDrp_secondary1] = useState(false)
  const [drp_success1, setDrp_success1] = useState(false)
  const [drp_info1, setDrp_info1] = useState(false)
  const [drp_warning1, setDrp_warning1] = useState(false)
  const [drp_danger1, setDrp_danger1] = useState(false)
  const [drp_secondary, setDrp_secondary] = useState(false)
  const [drp_secondary_lg, setDrp_secondary_lg] = useState(false)
  const [drp_secondary_sm, setDrp_secondary_sm] = useState(false)
  const [drp_secondary_sm1, setDrp_secondary_sm1] = useState(false)
  const [dropup1, setDropup1] = useState(false)
  const [drp_up11, setDrp_up11] = useState(false)
  const [drop_align, setDrop_align] = useState(false)
  const [info_dropup1, setInfo_dropup1] = useState(false)
  const [infodrp_up11, setInfodrp_up11] = useState(false)
  const [info_dropup111, setInfo_dropup111] = useState(false)
  const [infodrp_up1111, setInfodrp_up1111] = useState(false)

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dropdowns | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Dropdowns" />

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Single button dropdowns</CardTitle>
                  <CardSubtitle className="mb-4">
                    Any single <code className="highlighter-rouge">.btn</code>{" "}
                    can be turned into a dropdown toggle with some markup
                    changes. Here’s how you can put them to work with either{" "}
                    <code className="highlighter-rouge">&lt;button&gt;</code>{" "}
                    elements:
                  </CardSubtitle>
                  <Row>
                    <Col sm={6}>
                      <Dropdown
                        isOpen={singlebtn}
                        toggle={() => setSinglebtn(!singlebtn)}
                      >
                        <DropdownToggle className="btn btn-secondary" caret>
                          Dropdown button{" "}
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col sm={6}>
                      <Dropdown
                        isOpen={singlebtn1}
                        toggle={() => setSinglebtn1(!singlebtn1)}
                        className="mt-4 mt-sm-0"
                      >
                        <DropdownToggle className="btn btn-secondary" caret>
                          Dropdown Link <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Variant</CardTitle>
                  <CardSubtitle className="mb-4">
                    The best part is you can do this with any button variant,
                    too:
                  </CardSubtitle>

                  <div className="d-flex gap-2 flex-wrap">
                    <Dropdown
                      isOpen={btnprimary1}
                      toggle={() => setBtnprimary1(!btnprimary1)}
                    >
                      <DropdownToggle tag="button" className="btn btn-primary">
                        Primary <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>{" "}
                    &nbsp;
                    <Dropdown
                      isOpen={btnsecondary1}
                      toggle={() => setBtnsecondary1(!btnsecondary1)}
                    >
                      <DropdownToggle tag="button" className="btn btn-secondary">
                        Secondary <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>{" "}
                    &nbsp;
                    <Dropdown
                      isOpen={btnsuccess1}
                      toggle={() => setBtnsuccess1(!btnsuccess1)}
                    >
                      <DropdownToggle tag="button" className="btn btn-success">
                        Success <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    &nbsp;
                    <Dropdown
                      isOpen={btnInfo1}
                      toggle={() => setBtnInfo1(!btnInfo1)}
                    >
                      <DropdownToggle tag="button" className="btn btn-info">
                        Info <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    &nbsp;
                    <Dropdown
                      isOpen={btnWarning1}
                      toggle={() => setBtnWarning1(!btnWarning1)}
                    >
                      <DropdownToggle tag="button" className="btn btn-warning">
                        Warning <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    &nbsp;
                    <Dropdown
                      isOpen={btnDanger1}
                      toggle={() => setBtnDanger1(!btnDanger1)}
                    >
                      <DropdownToggle tag="button" className="btn btn-danger">
                        Danger <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle>Split button dropdowns</CardTitle>
                  <CardSubtitle className="mb-3">
                    The best part is you can do this with any button variant,
                    too:
                  </CardSubtitle>
                  <div className="d-flex gap-2 flex-wrap">
                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_primary1}
                        toggle={() => setDrp_primary1(!drp_primary1)}
                      >
                        <Button id="caret" color="primary">
                          Primary
                        </Button>
                        <DropdownToggle caret color="primary">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_secondary1}
                        toggle={() => setDrp_secondary1(!drp_secondary1)}
                      >
                        <Button id="caret" color="secondary">
                          Secondary
                        </Button>
                        <DropdownToggle caret color="secondary">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_success1}
                        toggle={() => setDrp_success1(!drp_success1)}
                      >
                        <Button id="caret" color="success">
                          Success
                        </Button>
                        <DropdownToggle caret color="success">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_info1}
                        toggle={() => setDrp_info1(!drp_info1)}
                      >
                        <Button id="caret" color="info">
                          Info
                        </Button>
                        <DropdownToggle caret color="info">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>


                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_warning1}
                        toggle={() => setDrp_warning1(!drp_warning1)}
                      >
                        <Button id="caret" color="warning">
                          Warning
                        </Button>
                        <DropdownToggle caret color="warning">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_danger1}
                        toggle={() => setDrp_danger1(!drp_danger1)}
                      >
                        <Button id="caret" color="danger">
                          Danger
                        </Button>
                        <DropdownToggle caret color="danger">
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem disabled>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Sizing</CardTitle>
                  <CardSubtitle className="mb-3">
                    {" "}
                    Button dropdowns work with buttons of all sizes, including
                    default and split dropdown buttons.
                  </CardSubtitle>
                  <div className="btn-group mb-2">
                    <ButtonDropdown
                      isOpen={drp_secondary}
                      toggle={() => setDrp_secondary(!drp_secondary)}
                    >
                      <DropdownToggle
                        caret
                        color="primary"
                        className="btn btn-primary btn-lg"
                      >
                        Large button &nbsp;{" "}
                        <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>{" "}
                  &nbsp;
                  <div className="btn-group mb-2">
                    <ButtonDropdown
                      isOpen={drp_secondary_lg}
                      toggle={() => setDrp_secondary_lg(!drp_secondary_lg)}
                    >
                      <Button className="btn btn-secondary">
                        {" "}
                        Large button &nbsp;
                      </Button>
                      <DropdownToggle
                        caret
                        color="secondary"
                        className="btn btn-secondary btn-lg"
                      >
                        <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>{" "}
                  &nbsp;
                  <div className="btn-group mb-2">
                    <ButtonDropdown
                      isOpen={drp_secondary_sm}
                      toggle={() => setDrp_secondary_sm(!drp_secondary_sm)}
                    >
                      <DropdownToggle
                        caret
                        color="info"
                        className="btn btn-info btn-sm"
                      >
                        Small button &nbsp;{" "}
                        <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>{" "}
                  &nbsp;
                  <div className="btn-group mb-2">
                    <ButtonDropdown
                      isOpen={drp_secondary_sm1}
                      toggle={() => setDrp_secondary_sm1(!drp_secondary_sm1)}
                    >
                      <Button className="btn btn-secondary btn-sm">
                        {" "}
                        Small button &nbsp;
                      </Button>
                      <DropdownToggle
                        caret
                        color="secondary"
                        className="btn btn-secondary btn-sm"
                      >
                        <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle>Dropup variation</CardTitle>
                  <CardSubtitle className="mb-3">
                    Trigger dropdown menus above elements by adding{" "}
                    <code className="highlighter-rouge">.dropup</code> to the
                    parent element.
                  </CardSubtitle>
                  <div className="d-flex gap-2 flex-wrap">
                    <Dropdown
                      className="btn-group dropup"
                      isOpen={dropup1}
                      direction="up"
                      toggle={() => setDropup1(!dropup1)}
                    >
                      <DropdownToggle className="btn btn-secondary">
                        Dropup <i className="mdi mdi-chevron-up" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    &nbsp;
                    <ButtonDropdown
                      direction="up"
                      isOpen={drp_up11}
                      toggle={() => setDrp_up11(!drp_up11)}
                    >
                      <Button id="caret" color="secondary">
                        Split dropup
                      </Button>
                      <DropdownToggle caret color="secondary">
                        <i className="mdi mdi-chevron-up" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Menu alignment</CardTitle>
                  <CardSubtitle className="mb-3">
                    Add{" "}
                    <code className="highlighter-rouge">
                      .dropdown-menu-end
                    </code>{" "}
                    to a{" "}
                    <code className="highlighter-rouge">.dropdown-menu</code> to
                    right align the dropdown menu.
                  </CardSubtitle>
                  <ButtonDropdown
                    isOpen={drop_align}
                    direction="right"
                    toggle={() => setDrop_align(!drop_align)}
                  >
                    <DropdownToggle
                      caret
                      color="secondary"
                      className="btn btn-secondary"
                    >
                      Menu is right-aligned{" "}
                      <i className="mdi mdi-chevron-down" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end">
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Dropright variation</CardTitle>
                  <CardSubtitle className="mb-3">
                    Trigger dropdown menus at the right of the elements by
                    adding <code>.dropright</code> to the parent element.
                  </CardSubtitle>

                  <div className="d-flex gap-2 flex-wrap">
                    <Dropdown
                      isOpen={info_dropup1}
                      direction="right"
                      className="btn-group dropend"
                      toggle={() => setInfo_dropup1(!info_dropup1)}
                    >
                      <DropdownToggle className="btn btn-info" caret>
                        Dropright <i className="mdi mdi-chevron-right" />
                      </DropdownToggle>
                      <DropdownMenu data-popper-placement="right-start">
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <ButtonDropdown
                      direction="right"
                      isOpen={infodrp_up11}
                      className="btn-group dropend"
                      toggle={() => setInfodrp_up11(!infodrp_up11)}
                    >
                      <Button id="caret" color="info">
                        Split dropright
                      </Button>
                      <DropdownToggle caret color="info" className="dropdown-toggle-split">
                        <i className="mdi mdi-chevron-right" />
                      </DropdownToggle>
                      <DropdownMenu data-popper-placement="right-start">
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardBody>
                  <CardTitle>Dropleft variation</CardTitle>
                  <CardSubtitle className="mb-3">
                    Trigger dropdown menus at the right of the elements by
                    adding <code>.dropleft</code> to the parent element.
                  </CardSubtitle>

                  <div className="d-flex gap-2 flex-wrap">
                    <Dropdown
                      isOpen={info_dropup111}
                      direction="left"
                      className="btn-group dropstart"
                      toggle={() => setInfo_dropup111(!info_dropup111)}
                    >
                      <DropdownToggle className="btn btn-info">
                        <i className="mdi mdi-chevron-left" /> Dropleft
                      </DropdownToggle>
                      <DropdownMenu data-popper-placement="left-start">
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <ButtonDropdown
                      isOpen={infodrp_up1111}
                      direction="left"
                      className="btn-group dropstart"
                      toggle={() => setInfodrp_up1111(!infodrp_up1111)}
                    >
                      <DropdownToggle caret color="info">
                        <i className="mdi mdi-chevron-left" />
                      </DropdownToggle>
                      <Button id="caret" color="info">
                        Split dropleft
                      </Button>
                      <DropdownMenu data-popper-placement="left-start">
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default UiDropdown
