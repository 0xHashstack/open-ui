import { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardBody
} from "reactstrap";


const WorkflowInfo = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <CardBody>
      <Dropdown
        isOpen={isMenu}
        toggle={toggleMenu}
        className="float-end ms-2"
      >
        <DropdownToggle tag="a" className="text-muted">
          <i className="mdi mdi-dots-horizontal font-size-18" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#">Deposit</DropdownItem>
          <DropdownItem href="#">Borrow</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <div className="mb-4 me-3">
        <h4 className="card-title mb-4">How Deposits work</h4>
      </div>

      <div>
        <ul className="verti-timeline list-unstyled">
          <li className="event-list">
            <div className="event-timeline-dot">
              <i className="bx bx-right-arrow-circle" />
            </div>
            <div className="d-flex">
              <div className="me-3">
                <i className="bx bx-user-plus h2 text-primary" />
              </div>
              <div className="flex-grow-1">
                <div>
                  <h5 className="font-size-14">Register Account</h5>
                  <p className="text-muted">
                    New common language will be more simple and
                    regular than the existing.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="event-list">
            <div className="event-timeline-dot">
              <i className="bx bx-right-arrow-circle" />
            </div>
            <div className="d-flex">
              <div className="me-3">
                <i className="bx bx-copy-alt h2 text-primary" />
              </div>
              <div className="flex-grow-1">
                <div>
                  <h5 className="font-size-14">Select Deposit</h5>
                  <p className="text-muted">
                    To achieve this, it would be necessary to have
                    uniform grammar.
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className="event-list">
            <div className="event-timeline-dot">
              <i className="bx bx-right-arrow-circle" />
            </div>
            <div className="d-flex">
              <div className="me-3">
                <i className="bx bx-cloud-download h2 text-primary" />
              </div>
              <div className="flex-grow-1">
                <div>
                  <h5 className="font-size-14">Get Earnings</h5>
                  <p className="text-muted">
                    New common language will be more simple and
                    regular than the existing.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </CardBody>
  );
}

export default WorkflowInfo;