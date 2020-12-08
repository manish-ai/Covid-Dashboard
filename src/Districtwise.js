import React, { Component } from 'react';
import styled from 'styled-components';
import { MDBTable } from 'mdbreact';
import districts from './DistrictList';
import { Dropdown } from 'react-bootstrap';


export default class District extends Component {

    state = {
        isLoaded: false,
        district: [],
        direction: {
            price: 'asc',
        },
        arrow: {
            fa: 'fa-arrow-up',
        },
        dist: null,
        distInfo: null

    }
    sortBy = (key) => {
        const district = this.state.district;
        this.setState({
            district: district.sort((a, b) => (
                this.state.direction[key] === 'asc'
                    ? parseFloat(a[key]) - parseFloat(b[key])
                    : parseFloat(b[key]) - parseFloat(a[key])
            )),
            direction: {
                [key]: this.state.direction[key] === 'asc'
                    ? 'desc'
                    : 'asc'
            }


        })

    }


    async componentDidMount() {
        fetch("https://api.covid19india.org/state_district_wise.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        district: result.Karnataka.districtData
                    });
                    // console.log(result.Karnataka.districtData);
                    // console.log(this.state.district);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )


    }
    getDistrict = (dist) => {
        this.setState({ dist: dist, distInfo: this.state.district[dist] })

    }
    render() {



        return (
            <Wraper>
                <div>

                    <div >
                        <div className="justify-content-center d-flex mt-2 mb-1">
                            <h2>District Wise Data Of Karnataka, India</h2>
                        </div>
                        <div className="mt-2 mb-4 justify-content-center d-flex">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Select District
  </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {districts.district.map(dist => (

                                        <Dropdown.Item id={dist} onClick={() => this.getDistrict(dist)}>{dist}</Dropdown.Item>
                                    ))}

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <MDBTable fixed bordered>
                            <thead >
                                <tr>
                                    <th>District Name  <span className="arrow " onClick={() => this.sortBy('state')}><i class="fas fa-sort"></i></span></th>

                                    <th >Total Confirmed   <span className="arrow " onClick={() => this.sortBy('confirmed')}><i class="fas fa-sort"></i></span>
                                    </th>
                                    <th>Active    <span className="arrow " onClick={() => this.sortBy('active')}><i class="fas fa-sort"></i></span></th>
                                    <th>Recovered    <span className="arrow " onClick={() => this.sortBy('recovered')}><i class="fas fa-sort"></i></span></th>
                                    <th>New Cases    <span className="arrow " onClick={() => this.sortBy('deltaconfirmed')}><i class="fas fa-sort"></i></span></th>
                                    <th>Deaths     <span className="arrow " onClick={() => this.sortBy('deaths')}><i class="fas fa-sort"></i></span></th>

                                </tr>
                            </thead>
                            <tbody className="tbod mt-2">



                                {this.state.dist ?
                                    <tr >
                                        <td >{this.state.dist}</td>

                                        <td>{this.state.distInfo.confirmed}</td>
                                        <td>{this.state.distInfo.active}</td>
                                        <td>{this.state.distInfo.recovered}</td>
                                        <td>{this.state.distInfo.delta.confirmed}</td>
                                        <td>{this.state.distInfo.deceased}</td>
                                    </tr>
                                    : null}

                            </tbody>
                        </MDBTable>
                    </div>
                </div>

            </Wraper>
        )
    }
}
const Wraper = styled.div`
`