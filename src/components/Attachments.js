import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

class Attachments extends Component {
  state = {
    files: []
  };

  saveFiles = files => this.setState({ files });

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Attachments
            <div className="card-header-actions">
              <i className="fa fa-ellipsis-h" />
            </div>
          </CardHeader>
          <CardBody>
            <Row>
              <Col sm="12" md="8" lg="12" className="mb-5 h-100">
                <Dropzone onDrop={files => this.saveFiles(files)}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} className="dropzone">
                      <input {...getInputProps()} />
                      <div
                        className="col-12 h-100"
                        style={{
                          border: "1px dotted black",
                          minHeight: "164px",                         
                        }}
                      >
                        <div className="mt-3 mb-5 text-center">
                          <i className="cui-cloud-upload text-primary" /> Drop
                          files to attach,or browser
                        </div>
                        <div />
                        <div className="mt-5 row align-items-center justify-content-between">
                          {this.state.files.map(file => (
                            <div className="col-12">
                              {console.log(file)}
                              <div className="text-primary">{file.name}</div>
                              <div>
                                {
                                  new Date(file.lastModified)
                                    .toString()
                                    .split("GMT")[0]
                                }
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </Dropzone>
              </Col>
              {/* <Col sm="12" md="4" lg="4">
                <ul>
                  <li>Sort By Name</li>
                  <li>Sort By Date</li>
                  <li>Ascending</li>
                  <li>Descending</li>
                  <li>Thumbnails</li>
                  <li>List</li>
                  <li>Download All</li>
                  <li>Manage Attachments</li>
                </ul>
              </Col> */}
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Attachments;
