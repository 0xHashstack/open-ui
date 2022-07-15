import { useState, useContext } from "react"
import {
  Col,
  Button,
  Form,
  Input,
  Modal,
  Spinner,
  InputGroup,
  FormText,
  FormGroup,
} from "reactstrap"

const SingleInput = ({ title, type, placeHolder, handleClick }) => {
  const [inputVal, setInputVal] = useState()

  return (
    <div className="update-div">
      <h5>{title}</h5>
      <Input
        type={type}
        className="form-control"
        id="amount"
        placeholder={placeHolder}
        onChange={(e: any) => {
          setInputVal(e.target.value)
        }}
        value={inputVal}
      />
      <Button
        color="primary"
        className="w-md"
        onClick={() => {
          handleClick(inputVal)
        }}
      >
        Update
      </Button>
    </div>
  )
}

export default SingleInput
