
import axios from "axios";
import React, { Component } from 'react';
import Summary from './summary';
import Countries from './Countries';

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default class Details extends Component {
    state = {
        countries: [],
        global: [],
        curDate: null,
        direction: {
            price: 'asc',
        },
        arrow: {
            fa: 'fa-arrow-up',
        },
    }


    async componentDidMount() {
        const res = await axios.get("https://api.covid19api.com/summary");
        this.setState({ countries: res.data.Countries });
        this.setState({ global: res.data.Global });
        this.setState({ curDate: res.data.Date });
        this.setState({ loading: false });

        axios({
            "method": "GET",
            "url": "https://covid-19-data.p.rapidapi.com/country/all",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "89900d4746msh015452c4da7e1ffp1ccb35jsn15112e963af6",
                "useQueryString": true
            }, "params": {
                "format": "json"
            }
        })
            .then((response) => {
            })
            .catch((error) => {
                console.log(error)
            })

        this.sortBy('TotalConfirmed')

    }
    sortBy = (key) => {
        const countries = this.state.countries;
        this.setState({
            countries: countries.sort((a, b) => (
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



    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
        }

        return (
            <React.Fragment>
                <div>
                    <Summary summary={this.state.global} curDate={this.state.curDate} ></Summary>
                </div>
                <div className="justify-content-center d-flex ">
                    <h2> World Stats Of Coronavirus</h2>
                </div>
                <MDBTable bordered>
                    <MDBTableHead>

                        <tr>
                            <th>Country</th>
                            <th>New Cases &nbsp;&nbsp;
                            <span className="arrow " onClick={() => this.sortBy('NewConfirmed')}><i class="fas fa-sort"></i></span>
                            </th>
                            <th>Total Cases&nbsp;&nbsp;
                            <span className="arrow " onClick={() => this.sortBy('TotalConfirmed')}><i class="fas fa-sort"></i></span>
                            </th>
                            <th>Total Recovered&nbsp;&nbsp;&nbsp;
                            <span className="arrow " onClick={() => this.sortBy('TotalRecovered')}><i class="fas fa-sort"></i></span>
                            </th>
                            <th>Total Deaths&nbsp;&nbsp;&nbsp;
                                 <span className="arrow " onClick={() => this.sortBy('TotalDeaths')}><i class="fas fa-sort"></i></span>
                            </th>
                            <th>Time &nbsp;&nbsp;
                            <span className="arrow " onClick={() => this.sortBy('Date')}><i class="fas fa-sort"></i></span>

                            </th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {this.state.countries ? this.state.countries.map(country => (
                            <Countries countries={country} key={country.Country} />
                        )) : <div className="justify-content-center d-flex ">
                                <h4 className="text-center ml-5">No Data Available . Please Try Again</h4>
                            </div>}
                    </MDBTableBody>
                </MDBTable>
            </React.Fragment>
        )
    }
}
