import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Row,
} from "reactstrap"

import Breadcrumbs from "../../components/Common/Breadcrumb"

// Form Mask
import InputMask from "react-input-mask"
// import MaterialInput from "@material-ui/core/Input"

class FormMask extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const ISBN1 = props => (
      <InputMask
        mask="999-99-999-9999-99-9"
        value={props.value}
        className="form-control input-mask"
        onChange={props.onChange}
      >
      </InputMask>
    )

    const ISBN2 = props => (
      <InputMask
        mask="999 99 999 9999 99 9"
        value={props.value}
        className="form-control input-mask"
        onChange={props.onChange}
      >
      </InputMask>
    )

    const ISBN3 = props => (
      <InputMask
        mask="999/99/999/9999/99/9"
        value={props.value}
        className="form-control input-mask"
        onChange={props.onChange}
      >
      </InputMask>
    )

    const IPV4 = props => (
      <InputMask
        mask="999.999.999.999"
        value={props.value}
        className="form-control input-mask"
        onChange={props.onChange}
      >
      </InputMask>
    )

    const IPV6 = props => (
      <InputMask
        mask="****:****:****:*:***:****:****:****"
        value={props.value}
        className="form-control input-mask"
        onChange={props.onChange}
      >
      </InputMask>
    )

    const TAX = props => (
      <InputMask
        mask="99-9999999"
        value={props.value}
        className="form-control input-mask"
        onChange={props.onChange}
      >
      </InputMask>
    )

    const Phone = props => (
      <InputMask
        mask="(999) 999-9999"
        value={props.value}
        className="form-control input-mask"
        onChange={props.onChange}
      >
      </InputMask>
    )

    const Currency = props => (
      <InputMask
        mask="$ 999,999,999.99"
        value={props.value}
        className="form-control input-mask"
        onChange={props.onChange}
      >
      </InputMask>
    )

    const Date1 = props => (
      <InputMask
        mask="99/99/9999"
        value={props.value}
        className="form-control input-mask"
        onChange={props.onChange}
      >
      </InputMask>
    )

    const Date2 = props => (
      <InputMask
        mask="99-99-9999"
        value={props.value}
        className="form-control input-mask"
        onChange={props.onChange}
      >
      </InputMask>
    )

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Form Mask | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs title="Forms" breadcrumbItem="Form Mask" />
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Example</CardTitle>
                    <Row>
                      <Col md="6">
                        <div className="p-20">
                          <Form action="#">
                            <FormGroup className="mb-4">
                              <Label>ISBN 1</Label>
                              <ISBN1 />
                              <span className="font-13 text-muted">
                                e.g &quot;999-99-999-9999-9&ldquo;
                              </span>
                            </FormGroup>
                            <FormGroup className="mb-4">
                              <Label>ISBN 2</Label>
                              <ISBN2 />
                              <span className="font-13 text-muted">
                                999 99 999 9999 9
                              </span>
                            </FormGroup>
                            <FormGroup className="mb-4">
                              <Label>ISBN 3</Label>
                              <ISBN3 />
                              <span className="font-13 text-muted">
                                999/99/999/9999/9
                              </span>
                            </FormGroup>
                            <FormGroup className="mb-4">
                              <Label>IPV4</Label>
                              <IPV4 />
                              <span className="font-13 text-muted">
                                192.168.110.310
                              </span>
                            </FormGroup>
                            <FormGroup className="mb-0">
                              <Label>IPV6</Label>
                              <IPV6 />
                              <span className="font-13 text-muted">
                                4deg:1340:6547:2:540:h8je:ve73:98pd
                              </span>
                            </FormGroup>
                          </Form>
                        </div>
                      </Col>

                      <Col md="6">
                        <div className="p-20">
                          <Form action="#">
                            <FormGroup className="mb-4">
                              <Label>Tax ID</Label>
                              <TAX />
                              <span className="font-13 text-muted">
                                99-9999999
                              </span>
                            </FormGroup>
                            <FormGroup className="mb-4">
                              <Label>Phone</Label>
                              <Phone />
                              <span className="font-13 text-muted">
                                (999) 999-9999
                              </span>
                            </FormGroup>
                            <FormGroup className="mb-4">
                              <Label>Currency</Label>
                              <Currency />
                              <span className="font-13 text-muted">
                                $ 999,999,999.99
                              </span>
                            </FormGroup>
                            <FormGroup className="mb-4">
                              <Label>Date</Label>
                              <Date1 />
                              <span className="font-13 text-muted">
                                dd/mm/yyyy
                              </span>
                            </FormGroup>
                            <FormGroup className="mb-0">
                              <Label>Date 2</Label>
                              <Date2 />
                              <span className="font-13 text-muted">
                                dd-mm-yyyy
                              </span>
                            </FormGroup>
                          </Form>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default FormMask
