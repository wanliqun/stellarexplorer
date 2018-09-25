import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
// import LumensRates from '../shared/LumensRates'

class Footer extends React.PureComponent {
  render() {
    return (
      <Grid id="footer">
 
 
        <Row>
          <Col mdOffset={10} md={2}>
            <a href="https://stellar.org">
              <img
                src={`${process.env.PUBLIC_URL}/stellar.ico`}
                alt="stellar"
                height={20}
                width={20}
              />
              Stellar.org
            </a>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Footer
