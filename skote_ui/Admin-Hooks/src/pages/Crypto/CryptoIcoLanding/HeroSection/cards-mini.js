import React from "react"
import { Container, Row } from "reactstrap"

//Import Components
import CardBox from "./card-box"

const CardsMini = () => {
  const coins = [
    {
      title: "Bitcoin",
      color: "warning",
      icon: "mdi mdi-bitcoin",
      value: "9134.39",
      rate: "0.0012.23 ( 0.2 % )",
      isIncrease: true,
    },
    {
      title: "Ethereum",
      color: "primary",
      icon: "mdi mdi-ethereum",
      value: "245.44",
      rate: "004.12 ( 0.1 % )",
      isIncrease: false,
    },
    {
      title: "Litecoin",
      color: "info",
      icon: "mdi mdi-litecoin",
      value: "63.61",
      rate: "0.0001.12 ( 0.1 % ) ",
      isIncrease: true,
    },
  ]

  return (
    <React.Fragment>
      <section className="section bg-white p-0">
        <Container>
          <div className="currency-price">
            <Row>
              {/* reder card boxes */}
              <CardBox coins={coins} />
            </Row>
          </div>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default CardsMini
