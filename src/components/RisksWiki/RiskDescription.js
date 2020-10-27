import React, { Component } from 'react'
import {Card,CardHeader,CardBody} from 'reactstrap'

class RiskDescription extends Component {
    render() {
        return (
            <React.Fragment>
            <Card>
                <CardHeader>
                    Description
                    <div className="card-header-actions">
                        <span className="text-primary cursor-pointer">
                            <i className="fa fa-pencil-square" />
                        </span>
                    </div>
                </CardHeader>
                <CardBody />
            </Card>
            </React.Fragment>
        )
    }
}

export default RiskDescription
