import React, { Component } from 'react';
import { axios } from 'axios';
import $ from 'jquery';
import styled from 'styled-components';
import { MDBTable } from 'mdbreact';


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
                        district: result.karnataka.district
                    });
                    console.log(result);
                    console.log(this.state.district);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )


    }
    render() {



        return (
            <Wraper>
                <div>

                    <div >
                        <MDBTable fixed bordered>
                            <thead >
                                <tr>
                                    <th>District    <span className="arrow " onClick={() => this.sortBy('state')}><i class="fas fa-sort"></i></span></th>

                                    <th >Total Confirmed   <span className="arrow " onClick={() => this.sortBy('confirmed')}><i class="fas fa-sort"></i></span>
                                    </th>
                                    <th>Active    <span className="arrow " onClick={() => this.sortBy('active')}><i class="fas fa-sort"></i></span></th>
                                    <th>Recovered    <span className="arrow " onClick={() => this.sortBy('recovered')}><i class="fas fa-sort"></i></span></th>
                                    <th>New Cases    <span className="arrow " onClick={() => this.sortBy('deltaconfirmed')}><i class="fas fa-sort"></i></span></th>
                                    <th>Deaths     <span className="arrow " onClick={() => this.sortBy('deaths')}><i class="fas fa-sort"></i></span></th>
                                    <th>Time Updated</th>
                                </tr>
                            </thead>
                            <tbody className="tbod">


                                {this.state.district.map(state => (
                                    <tr key={state.state}>
                                        <td >{state.state}</td>

                                        <td>{state.confirmed}</td>
                                        <td>{state.active}</td>
                                        <td>{state.recovered}</td>
                                        <td>{state.deltaconfirmed}</td>
                                        <td>{state.deaths}</td> <td>{state.lastupdatedtime}</td>
                                    </tr>


                                ))}

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