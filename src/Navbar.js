import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


import styled from 'styled-components';
export default class Navbar1 extends Component {
    render() {
        return (
            <NavWrapper>
                <nav>

                    <Navbar className="bg-success" variant="dark">
                        <Navbar.Brand href="/details"><h2>Covid19-Dash</h2></Navbar.Brand>
                        <Nav className="mr-auto">
                        </Nav>
                        <Link to="/"> <Navbar.Brand className="border-light"> Home</Navbar.Brand></Link>
                        <Link to="/statewise">   <Navbar.Brand  > State-wise</Navbar.Brand></Link>
                        <Link to="/districtwise">  <Navbar.Brand > Karnataka District-wise</Navbar.Brand></Link>

                    </Navbar>
                </nav></NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background-color: green;
	.link1{
	color:white !important;
    text-transform: capitalize;
	font-size: 2rem;
	color: white;
    cursor: pointer;
    }
    nav{
        background-color:green;
    }
	`