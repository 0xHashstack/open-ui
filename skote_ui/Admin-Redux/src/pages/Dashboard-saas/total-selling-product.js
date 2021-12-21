import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Col, Card, CardBody, Table } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import { getTopSellingProduct } from "../../store/actions";

const getChartOptions = (index) => {
  var options = {
    chart: { sparkline: { enabled: !0 } },
    dataLabels: { enabled: !1 },
    colors: ["#556ee6"],
    plotOptions: {
      radialBar: {
        hollow: { margin: 0, size: "60%" },
        track: { margin: 0 },
        dataLabels: { show: !1 },
      },
    },
  };
  switch (index) {
    case 1:
      options['colors'][0] = "#556ee6";
      break;
    case 2:
      options['colors'][0] = "#34c38f";
      break;
    case 3:
      options['colors'][0] = "#f46a6a";
      break;
    default:
      break;
  }

  return options;
};
class TotalSellingProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TopsellingData: [],
      seletedMonth: "jan"
    };
  }

  componentDidMount() {
    const { onGetTopSellingProduct } = this.props;
    onGetTopSellingProduct("jan");
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ ...this.state, TopsellingData: this.props.sellingData });
    }
  }

  render() {
    const { TopsellingData, seletedMonth } = this.state;
    return (
      <React.Fragment>
        <Col xl="4">
          <Card>
            <CardBody>
              <div className="clearfix">
                <div className="float-end">
                  <div className="input-group input-group-sm">
                    <select className="form-select form-select-sm"
                      value={seletedMonth}
                      onChange={(e) => {
                        this.setState({ ...this.state, seletedMonth: e.target.value });
                        this.props.onGetTopSellingProduct(e.target.value);
                      }}
                    >
                      <option value="jan">Jan</option>
                      <option value="dec">Dec</option>
                      <option value="nov">Nov</option>
                      <option value="oct">Oct</option>
                    </select>
                    <label className="input-group-text">Month</label>
                  </div>
                </div>
                <h4 className="card-title mb-4">Top Selling product</h4>
              </div>

              <div className="text-muted text-center">
                <p className="mb-2">Product A</p>
                <h4>$ 6385</h4>
                <p className="mt-4 mb-0">
                  <span className="badge badge-soft-success font-size-11 me-2">
                    0.6% <i className="mdi mdi-arrow-up" />
                  </span>
                  From previous period
                </p>
              </div>

              <div className="table-responsive mt-4">
                <Table className="table align-middle mb-0">
                  <tbody>
                    {(TopsellingData || []).map((sellingdata, key) => {
                      const options = getChartOptions(key + 1);
                      return <tr key={key}>
                        <td>
                          <h5 className="font-size-14 mb-1">{sellingdata.name}</h5>
                          <p className="text-muted mb-0">{sellingdata.desc}</p>
                        </td>

                        <td>
                          <div id="radialchart-1" className="apex-charts">
                            <ReactApexChart
                              options={options}
                              series={[sellingdata.value]}
                              type="radialBar"
                              height={60}
                              width={60}
                            />
                          </div>
                        </td>
                        <td>
                          <p className="text-muted mb-1">Sales</p>
                          <h5 className="mb-0">{sellingdata.value} %</h5>
                        </td>
                      </tr>;
                    })}
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}

TotalSellingProduct.propTypes = {
  sellingData: PropTypes.any,
  onGetTopSellingProduct: PropTypes.func
};

const mapStateToProps = ({ DashboardSaas }) => ({
  sellingData: DashboardSaas.sellingData,
});

const mapDispatchToProps = dispatch => ({
  onGetTopSellingProduct: (month) => dispatch(getTopSellingProduct(month)),
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(TotalSellingProduct);
