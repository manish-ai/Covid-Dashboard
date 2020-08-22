import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


import styled from 'styled-components';
export default class Navbar1 extends Component {
    render() {
        return (
            <nav>
                <Navbar className="bg-success" variant="dark">
                    <Navbar.Brand href="/details"><h2>Covid19-Dash</h2></Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Navbar.Brand href="/" className="border-light"> Home</Navbar.Brand>
                    <Navbar.Brand href="/statewise"> State-wise</Navbar.Brand>
                    <Navbar.Brand href="/district"> Karnataka District-wise</Navbar.Brand>

                </Navbar>
            </nav>
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