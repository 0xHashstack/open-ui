import React, { Component } from "react"
import {
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";


export default class TextualInputs extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle className="h4">Textual inputs</CardTitle>
          <p className="card-title-desc">
            Here are examples of <code>.form-control</code> applied to each
            textual HTML5 <code>&lt;input&gt;</code> <code>type</code>.
          </p>

          <div className="mb-3 row">
            <label
              htmlFor="example-text-input"
              className="col-md-2 col-form-label"
            >
              Text
            </label>
            <div className="col-md-10">
              <input
                className="form-control"
                type="text"
                defaultValue="Artisanal kale"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="example-search-input"
              className="col-md-2 col-form-label"
            >
              Search
            </label>
            <div className="col-md-10">
              <input
                className="form-control"
                type="search"
                defaultValue="How do I shoot web"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="example-email-input"
              className="col-md-2 col-form-label"
            >
              Email
            </label>
            <div className="col-md-10">
              <input
                className="form-control"
                type="email"
                defaultValue="bootstrap@example.com"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="example-url-input"
              className="col-md-2 col-form-label"
            >
              URL
            </label>
            <div className="col-md-10">
              <input
                className="form-control"
                type="url"
                defaultValue="https://getbootstrap.com"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="example-tel-input"
              className="col-md-2 col-form-label"
            >
              Telephone
            </label>
            <div className="col-md-10">
              <input
                className="form-control"
                type="tel"
                defaultValue="1-(555)-555-5555"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="example-password-input"
              className="col-md-2 col-form-label"
            >
              Password
            </label>
            <div className="col-md-10">
              <input
                className="form-control"
                type="password"
                defaultValue="hunter2"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="example-number-input"
              className="col-md-2 col-form-label"
            >
              Number
            </label>
            <div className="col-md-10">
              <input
                className="form-control"
                type="number"
                defaultValue="42"
                id="example-number-input"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="example-datetime-local-input"
              className="col-md-2 col-form-label"
            >
              Date and time
            </label>
            <div className="col-md-10">
              <input
                className="form-control"
                type="datetime-local"
                defaultValue="2019-08-19T13:45:00"
                id="example-datetime-local-input"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="example-date-input"
              className="col-md-2 col-form-label"
            >
              Date
            </label>
            <div className="col-md-10">
              <input
                className="form-control"
                type="date"
                defaultValue="2019-08-19"
                id="example-date-input"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="example-month-input"
              className="col-md-2 col-form-label"
            >
              Month
            </label>
            <div className="col-md-10">
              <input
                className="form-control"
                type="month"
                defaultValue="2019-08"
                id="example-month-input"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="example-week-input"
              className="col-md-2 col-form-label"
            >
              Week
            </label>
            <div className="col-md-10">
              <input
                className="form-control"
                type="week"
                defaultValue="2019-W33"
                id="example-week-input"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="example-time-input"
              className="col-md-2 col-form-label"
            >
              Time
            </label>
            <div className="col-md-10">
              <input
                className="form-control"
                type="time"
                defaultValue="13:45:00"
                id="example-time-input"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="example-color-input"
              className="col-md-2 col-form-label"
            >
              Color
            </label>
            <div className="col-md-10">
              <input
                className="form-control form-control-color mw-100"
                type="color"
                defaultValue="#556ee6"
                id="example-color-input"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-md-2 col-form-label">Select</label>
            <div className="col-md-10">
              <select className="form-select">
                <option>Select</option>
                <option>Large select</option>
                <option>Small select</option>
              </select>
            </div>
          </div>
          <div className="row">
            <label htmlFor="exampleDataList" className="col-md-2 col-form-label">Datalists</label>
            <div className="col-md-10">
              <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
              <datalist id="datalistOptions">
                <option value="San Francisco" />
                <option value="New York" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" />
              </datalist>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }
}
