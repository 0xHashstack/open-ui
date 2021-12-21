import React from "react";
import MetaTags from 'react-meta-tags';

import {
  Form,
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  Container,
} from "reactstrap";

// Form Editor
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const FormEditors = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Form Editors | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Editors" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">react-draft-wysiwyg</CardTitle>
                  <p className="card-title-desc">
                    Bootstrap-wysihtml5 is a javascript plugin that makes it
                    easy to create simple, beautiful wysiwyg editors with the
                    help of wysihtml5 and Twitter Bootstrap.
                  </p>

                  <Form method="post">
                    <Editor
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                    />
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">CK Editor</CardTitle>
                  <p className="card-title-desc">
                    Super simple wysiwyg editor on Bootstrap
                  </p>

                  <Form method="post">
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>Hello from CKEditor 5!</p>"
                      onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                      }}
                    />
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormEditors;
