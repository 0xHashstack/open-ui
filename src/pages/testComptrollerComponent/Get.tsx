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
const Get = ({ handleClick, title, isHex }) => {
  const [value, setValue] = useState()

  console.log("isPaused", value)

  return (
    <div>
      <h5>{title}</h5>
      <h6> output {isHex ? parseInt(value) : `${value}`}</h6>
      <Button
        color="primary"
        className="w-md"
        onClick={async () => {
          setValue(await handleClick())
        }}
      >
        Get call
      </Button>
    </div>
  )
}

export default Get
