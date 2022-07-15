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

const ThreeInputGet = ({
  title,
  type1,
  type2,
  type3,
  placeHolder1,
  placeHolder2,
  placeHolder3,
  handleClick,
}) => {
  const [firstInputVal, setFirstInputVal] = useState()
  const [secondInputVal, setSecondInputVal] = useState()
  const [threeInputValue, setThreeInputVal] = useState()
  const [returnVal, setReturnVal] = useState()

  console.log(returnVal)

  return (
    <div className="update-div">
      <h5>{title}</h5>
      <>
        <Input
          type={type1}
          className="form-control"
          id="amount"
          placeholder={placeHolder1}
          onChange={(e: any) => {
            setFirstInputVal(e.target.value)
          }}
          value={firstInputVal}
        />

        <Input
          type={type2}
          className="form-control"
          id="amount"
          placeholder={placeHolder2}
          onChange={(e: any) => {
            setSecondInputVal(e.target.value)
          }}
          value={secondInputVal}
        />
        <Input
          type={type3}
          className="form-control"
          id="amount"
          placeholder={placeHolder3}
          onChange={(e: any) => {
            setThreeInputVal(e.target.value)
          }}
          value={threeInputValue}
        />
        <Button
          color="primary"
          className="w-md"
          onClick={async () => {
            setReturnVal(
              await handleClick(firstInputVal, secondInputVal, threeInputValue)
            )
          }}
        >
          Call
        </Button>
      </>
      <p>{parseInt(returnVal)}</p>
    </div>
  )
}

export default ThreeInputGet
