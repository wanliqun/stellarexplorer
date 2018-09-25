import React from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import NavItem from 'react-bootstrap/lib/NavItem'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {FormattedMessage, injectIntl} from 'react-intl'

 
class Header extends React.Component {
  render() {
    const {formatMessage} = this.props.intl
    return (
      <Navbar fluid fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
  
              <span className="brand-text">Tiger Change</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
   
          </Navbar.Form>
          <Navbar.Form pullRight>
 
          </Navbar.Form>
          <Nav>
            <LinkContainer to="/operations">
              <NavItem>
                <FormattedMessage id="operations" />
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/txs">
              <NavItem>
                <FormattedMessage id="transactions" />
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/ledgers">
              <NavItem>
                <FormattedMessage id="ledgers" />
              </NavItem>
            </LinkContainer>

            <li className="divider-vertical" />

            <LinkContainer to="/assets">
              <MenuItem>
                <FormattedMessage id="assets" />
              </MenuItem>
            </LinkContainer>
       
          

            <li className="divider-vertical" />

    
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default injectIntl(Header)
