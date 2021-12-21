import React, { useState } from 'react';
import MetaTags from 'react-meta-tags';
import {
    Col,
    Row,
    Button,
    Card,
    CardBody,
    CardTitle,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiDrawer = () => {
    const [open, setOpen] = useState(false);
    const [isTop, setIsTop] = useState(false);
    const [isRight, setIsRight] = useState(false);
    const [isBottom, setIsBottom] = useState(false);
    const [isEnableScroll, setIsEnableScroll] = useState(false);
    const [isBackdrop, setIsBackdrop] = useState(false);
    const [isScrollBackDrop, setIsScrollBackDrop] = useState(false);

    const toggleLeftCanvas = () => {
        setOpen(!open);
    };

    const toggleTopCanvas = () => {
        setIsTop(!isTop);
    };
    const toggleRightCanvas = () => {
        setIsRight(!isRight);
    };
    const toggleBottomCanvas = () => {
        setIsBottom(!isBottom);
    };

    const toggleEnableScroll = () => {
        setIsEnableScroll(!isEnableScroll);
    };
    const toggleBackdrop = () => {
        setIsBackdrop(!isBackdrop);
    };
    const toggleScrollBackDrop = () => {
        setIsScrollBackDrop(!isScrollBackDrop);
    };
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Drawer | Skote - React Admin & Dashboard Template</title>
                </MetaTags>
                <div className="container-fluid">
                    <Breadcrumbs title="Ui Elements" breadcrumbItem="Offcanvas" />
                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardBody>
                                    <CardTitle className="h4">Demo</CardTitle>
                                    <p className="card-title-desc">
                                        Offcanvas can toggle open or closed.
                                    </p>
                                    <div>
                                        <Button
                                            color="primary"
                                            onClick={toggleLeftCanvas}
                                        >
                                            Open
                                        </Button>
                                        <Offcanvas isOpen={open} toggle={toggleLeftCanvas}>
                                            <OffcanvasHeader toggle={toggleLeftCanvas}>
                                                Offcanvas
                                            </OffcanvasHeader>
                                            <OffcanvasBody>
                                                <div>
                                                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                                                </div>
                                                <UncontrolledDropdown className="mt-3">
                                                    <DropdownToggle className="btn btn-primary" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                                        Dropdown button <i className="mdi mdi-chevron-down"></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <li><DropdownItem>Action</DropdownItem></li>
                                                        <li><DropdownItem>Another action</DropdownItem></li>
                                                        <li><DropdownItem>Something else here</DropdownItem></li>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </OffcanvasBody>
                                        </Offcanvas>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <CardBody>
                                    <CardTitle className="h4">Placement</CardTitle>
                                    <p className="card-title-desc">
                                        Offcanvas Diffrent Placement Example: Top, End & Bottom
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button
                                            color="primary"
                                            onClick={toggleTopCanvas}
                                        >
                                            Toggle top offcanvas
                                        </Button>
                                        <Button
                                            color="primary"
                                            onClick={toggleRightCanvas}
                                        >
                                            Toggle right offcanvas
                                        </Button>
                                        <Button
                                            color="primary"
                                            onClick={toggleBottomCanvas}
                                        >
                                            Toggle bottom offcanvas
                                        </Button>
                                    </div>
                                    {/* Top offcanvas */}
                                    <Offcanvas
                                        isOpen={isTop}
                                        direction="top"
                                        toggle={toggleTopCanvas}>
                                        <OffcanvasHeader toggle={toggleTopCanvas}>
                                            Offcanvas Top
                                        </OffcanvasHeader>
                                        <OffcanvasBody>
                                            ...
                                        </OffcanvasBody>
                                    </Offcanvas>
                                    {/* Right offcanvas */}
                                    <Offcanvas
                                        isOpen={isRight}
                                        direction="end"
                                        toggle={toggleRightCanvas}>
                                        <OffcanvasHeader toggle={toggleRightCanvas}>
                                            Offcanvas Right
                                        </OffcanvasHeader>
                                        <OffcanvasBody>
                                            ...
                                        </OffcanvasBody>
                                    </Offcanvas>
                                    {/* Bottom offcanvas */}
                                    <Offcanvas
                                        isOpen={isBottom}
                                        direction="bottom"
                                        toggle={toggleBottomCanvas}>
                                        <OffcanvasHeader toggle={toggleBottomCanvas}>
                                            Offcanvas Bottom
                                        </OffcanvasHeader>
                                        <OffcanvasBody>
                                            ...
                                        </OffcanvasBody>
                                    </Offcanvas>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <CardTitle className="h4">Backdrop</CardTitle>
                                    <p className="card-title-desc">
                                        Scrolling the <code>&lt;body&gt;</code> element is disabled when an offcanvas and its backdrop are visible. Use the <code>scrollable</code> attribute to toggle <code>&lt;body&gt;</code> scrolling and <code>backdrop</code> to toggle the backdrop.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button
                                            color="primary"
                                            onClick={toggleEnableScroll}
                                        >
                                            Enable body scrolling
                                        </Button>
                                        <Button
                                            color="primary"
                                            onClick={toggleBackdrop}
                                        >
                                            Enable backdrop (default)
                                        </Button>
                                        <Button
                                            color="primary"
                                            onClick={toggleScrollBackDrop}
                                        >
                                            Enable both scrolling & backdrop
                                        </Button>
                                    </div>
                                    <Offcanvas
                                        isOpen={isEnableScroll}
                                        scrollable
                                        backdrop={false}
                                        toggle={toggleEnableScroll}>
                                        <OffcanvasHeader toggle={toggleEnableScroll}>
                                            Colored with scrolling
                                        </OffcanvasHeader>
                                        <OffcanvasBody>
                                            <div>
                                                Try scrolling the rest of the page to see this option in action.
                                            </div>
                                        </OffcanvasBody>
                                    </Offcanvas>

                                    <Offcanvas
                                        isOpen={isBackdrop}
                                        toggle={toggleBackdrop}>
                                        <OffcanvasHeader toggle={toggleBackdrop}>
                                            Offcanvas with backdrop
                                        </OffcanvasHeader>
                                        <OffcanvasBody>
                                            <div>
                                                Try scrolling the rest of the page to see this option in action.
                                            </div>
                                        </OffcanvasBody>
                                    </Offcanvas>

                                    <Offcanvas
                                        isOpen={isScrollBackDrop}
                                        scrollable
                                        toggle={toggleScrollBackDrop}>
                                        <OffcanvasHeader toggle={toggleScrollBackDrop}>
                                            Backdroped with scrolling
                                        </OffcanvasHeader>
                                        <OffcanvasBody>
                                            <div>
                                                Try scrolling the rest of the page to see this option in action.
                                            </div>
                                        </OffcanvasBody>
                                    </Offcanvas>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UiDrawer;