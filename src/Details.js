
import axios from "axios";
import React, { Component } from 'react';
import Summary from './summary';
import Countries from './Countries';

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default class Details extends Component {
    state = {
        countries: [],
        global: [],
        curDate: null
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
                    <h2>Coronavirus Data Of the World</h2>
                </div>
                <MDBTable bordered>
                    <MDBTableHead>

                        <tr>
                            <th>Country</th>
                            <th>New Cases</th>
                            <th>Total Cases</th>
                            <th>Total Recovered</th>
                            <th>Total Deaths</th>
                            <th>Time Updated</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {this.state.countries.map(country => (
                            <Countries countries={country} key={country.Country} />
                        ))}
                    </MDBTableBody>
                </MDBTable>
            </React.Fragment>
        )
    }
}
