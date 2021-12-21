import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import ReactApexChart from "react-apexcharts";

//actions
import { getEarningChartsData } from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

function Earning(props) {
  const dispatch = useDispatch();

  const { earningChartData } = useSelector(state => ({
    earningChartData: state.DashboardSaas.earningChartData,
  }));

  const options = {
    chart: {
      toolbar: "false",
      dropShadow: {
        enabled: !0,
        color: "#000",
        top: 18,
        left: 7,
        blur: 8,
        opacity: 0.2,
      },
    },
    dataLabels: {
      enabled: !1,
    },
    colors: ["#556ee6"],
    stroke: {
      curve: "smooth",
      width: 3,
    },
  };

  const series = [
    {
      name: "Series 1",
      data: [...earningChartData],
    },
  ];

  /*
  call api action to receive data
  */
  useEffect(() => {
    dispatch(getEarningChartsData("jan"));
  }, [dispatch]);

  const [seletedMonth, setSeletedMonth] = useState("jan");
  const onChangeMonth = value => {
    setSeletedMonth(value);
    dispatch(getEarningChartsData(value));
  };

  return (
    <React.Fragment>
      <Col xl="8">
        <Card>
          <CardBody>
            <div className="clearfix">
              <div className="float-end">
                <div className="input-group input-group-sm">
                  <select
                    className="form-select form-select-sm"
                    value={seletedMonth}
                    onChange={(e) => {
                      onChangeMonth(e.target.value);
                    }}
                  >
                    <option value="jan">Jan</option>
                    <option value="dec">Dec</option>
                    <option value="nov">Nov</option>
                    <option value="oct">Oct</option>
                  </select>
                  {/* <div className="input-group-append"> */}
                  <label className="input-group-text">Month</label>
                  {/* </div> */}
                </div>
              </div>
              <h4 className="card-title mb-4">Earning</h4>
            </div>

            <Row>
              <Col lg="4">
                <div className="text-muted">
                  <div className="mb-4">
                    <p>This month</p>
                    <h4>$2453.35</h4>
                    <div>
                      <span className="badge badge-soft-success font-size-12 me-1">
                        {" "}
                        + 0.2%{" "}
                      </span>{" "}
                      From previous period
                    </div>
                  </div>

                  <div>
                    <Link to="#" className="btn btn-primary  btn-sm">
                      View Details{" "}
                      <i className="mdi mdi-chevron-right ms-1"></i>
                    </Link>
                  </div>

                  <div className="mt-4">
                    <p className="mb-2">Last month</p>
                    <h5>$2281.04</h5>
                  </div>
                </div>
              </Col>

              <Col lg="8">
                <div id="line-chart" dir="ltr">
                  <ReactApexChart
                    series={series}
                    options={options}
                    type="line"
                    height={320}
                    className="apex-charts"
                  />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
}

export default Earning;
