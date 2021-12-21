import React from "react"
import { Card, CardBody, CardTitle, Progress } from "reactstrap"

const TopCities = () => {
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardTitle className="mb-4">Top Cities Selling Product</CardTitle>
          <div className="text-center">
            <div className="mb-4">
              <i className="bx bx-map-pin text-primary display-4" />
            </div>
            <h3>1,456</h3>
            <p>San Francisco</p>
          </div>

          <div className="table-responsive mt-4">
            <table className="table align-middle table-nowrap">
              <tbody>
                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">San Francisco</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <h5 className="mb-0">1,456</h5>
                  </td>
                  <td>
                    <Progress
                      value="94"
                      color="primary"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-0">Los Angeles</p>
                  </td>
                  <td>
                    <h5 className="mb-0">1,123</h5>
                  </td>
                  <td>
                    <Progress
                      value="82"
                      color="success"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-0">San Diego</p>
                  </td>
                  <td>
                    <h5 className="mb-0">1,026</h5>
                  </td>
                  <td>
                    <Progress
                      value="70"
                      color="warning"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default TopCities
