import React from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler,
    MDBCollapse, MDBNavItem, MDBNavLink,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from 'mdbreact';
import Logo from '../assets/img/logo_transparent.png';
import '../assets/css/navbar.css';

class MyNavbar extends React.Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        return (
            <MDBNavbar color="stylish-color-dark" fixed="top" dark expand="md" scrolling>
                <MDBNavbarBrand href="home">
                    <img  src={Logo} style={{ 
                        height: '1.5rem',
                        width: '1.5rem',
                        "marginBottom": '0.5rem',
                        "marginRight": '0.5rem', }} alt="fireSpot"/>
                    <strong className="white-text">ZCK Website</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse")} />
                <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBNavLink to={"home"}><strong>Home</strong></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to={"projects"}><strong>Projects</strong></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to={"what-to-eat"}><strong>What To Eat!</strong></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown className="mydropdown">
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-2"><strong>Apps</strong></span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="mydropdown">
                                    <MDBDropdownItem className="mydropdownitems" href="#!">More coming soon!</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default MyNavbar;