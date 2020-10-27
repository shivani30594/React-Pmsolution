import React, { Component } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";
import { Card, CardBody, CardHeader } from "reactstrap";
import database from "../../../database/database";

const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
export class FinancialAnalysis extends Component {
  state = {
    data1: [],
    data2: [],
    data3: []
  };

  componentDidMount() {
    const { actualData, plannedData, forecastData } = this.props
      .financialAnalysis
      ? this.props.financialAnalysis
      : database.financialAnalysis;
    this.setState({
      data1: actualData,
      data2: plannedData,
      data3: forecastData
    });
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>Effort Analysis</CardHeader>
          <CardBody>
            <div className="chart-wrapper">
              <div className="control-pane">
                <style>{SAMPLE_CSS}</style>
                <div className="control-section">
                  <ChartComponent
                    id="charts"
                    style={{
                      textAlign: "center"
                    }}
                    primaryXAxis={{
                      valueType: "Category",
                      interval: 1,
                      majorGridLines: {
                        width: 0
                      },

                      labelIntersectAction: "Rotate45"
                    }}
                    primaryYAxis={{
                      majorGridLines: {
                        width: 0
                      },
                      majorTickLines: {
                        width: 0
                      },
                      lineStyle: {
                        width: 0
                      }
                    }}
                    chartArea={{
                      border: {
                        width: 0
                      }
                    }}
                    tooltip={{
                      enable: true
                    }}
                    width={Browser.isDevice ? "100%" : "60%"}
                    title="FINANCIAL ANALYSIS"
                    loaded={this.onChartLoad.bind(this)}
                  >
                    <Inject
                      services={[
                        ColumnSeries,
                        Legend,
                        Tooltip,
                        Category,
                        DataLabel
                      ]}
                    />
                    <SeriesCollectionDirective>
                      <SeriesDirective
                        dataSource={this.state.data1}
                        xName="x"
                        yName="y"
                        lineStyle={{
                          backgroundColor: "blue"
                        }}
                        name="Actuals"
                        type="Column"
                        fill={"#1767b7"}
                        marker={{
                          dataLabel: {
                            visible: false,
                            position: "Top",
                            font: {
                              fontWeight: "600",
                              color: "#f2d1fc"
                            }
                          }
                        }}
                      />
                      <SeriesDirective
                        dataSource={this.state.data2}
                        xName="x"
                        yName="y"
                        name="Planned"
                        type="Column"
                        marker={{
                          dataLabel: {
                            visible: false,
                            position: "Top",
                            font: {
                              fontWeight: "600",
                              color: "#ffffff"
                            }
                          }
                        }}
                      />
                      <SeriesDirective
                        dataSource={this.state.data3}
                        xName="x"
                        yName="y"
                        name="Forecast (saved)"
                        type="Column"
                        fill={"#edc02d"}
                        marker={{
                          dataLabel: {
                            visible: false,
                            position: "Top",
                            font: {
                              fontWeight: "600",
                              color: "#ffffff"
                            }
                          }
                        }}
                      />
                    </SeriesCollectionDirective>
                  </ChartComponent>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
  onChartLoad(args) {
    let chart = document.getElementById("charts");
    chart.setAttribute("title", "");
  }
}

export default FinancialAnalysis;
