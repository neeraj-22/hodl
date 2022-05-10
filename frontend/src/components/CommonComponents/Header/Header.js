import React, { Fragment } from 'react'
import "./Header.css";
import { Col, Container, Row } from "react-bootstrap";
import Timer from '../Timer/Timer';

const Header = () => {

  const coinNames = ["BTC", "ETH", "SOL", "MANA", "AVAX", "ZIL", "DOT", "SAND", "ADA", "MATIC"];

  return (
    <Fragment>
        <div >
      <Container className="head align-items-center justify-content-sm-center">
        <Row className="form-row mr-auto">
          <Col md={4} className="mw-1">
            <h2 className="logo-heading">HODLINFO</h2>
            <p className="logo-title">Powered By <span style={{color:"#3dc6c1"}}>Finstreet</span></p>
          </Col>
          <Col lg={4} md={2} sm={12} w={100} className="flexbox">
            <select className="m-1 d-inline-box">
              <option value="INR">INR</option>
            </select>
            <select className="m-1 d-inline-box">
              {coinNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </Col>
          <Col md={4} className="flexbox">
            
            <Timer />
            <div className="d-inline-box ml-4 mb-4 telegram-button">
              <img
                src="https://spng.subpng.com/20180625/khb/kisspng-telegram-logo-telegram-icon-5b3162e9cb1385.0766563815299632418318.jpg"
                className="telegram-logo"
                alt="Telegram.png"
              />
              Connect Telegram
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </Fragment>
  )
}

export default Header