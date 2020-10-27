import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import { Link } from "react-router-dom";
import { routesURL } from "../../constant/routesURL";

class Risks extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            Risks
            <div className="card-header-actions">
              <i className="fa fa-pencil-square" />
            </div>
          </CardHeader>
          <CardBody>
            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading>High Risk Items : </ListGroupItemHeading>
                <ListGroupItemText className="mb-0">
                  <Link to={routesURL.RISK_WIKI}> Risk1</Link>
                </ListGroupItemText>

                <ListGroupItemText className="mb-0">
                  <Link to={routesURL.RISK_WIKI}> Risk9</Link>
                </ListGroupItemText>
                <br />
                <ListGroupItemHeading>
                  {" "}
                  Medium Risk Items :{" "}
                </ListGroupItemHeading>
                <ListGroupItemText className="mb-0">
                  <Link to={routesURL.RISK_WIKI}>Risk4</Link>
                </ListGroupItemText>

                <ListGroupItemText className="mb-0">
                  <Link to={routesURL.RISK_WIKI}> Risk0</Link>
                </ListGroupItemText>

                <br />
                <ListGroupItemText className="mb-0">
                  <Link to={routesURL.RISK_LIST}> More... </Link>
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Risks;
