import React, { Component } from 'react'

export default class summary extends Component {
    render() {
        const { summary, curDate } = this.props;
        return (
            <div className="row">
                <div className="NewCases ">
                    <h5>New Cases</h5>
                    <h1 >{summary.NewConfirmed}</h1>
                    <h5 >{new Date(curDate).toDateString()}</h5>
                </div>
                <div className="TotalCases">
                    <h5>Total Cases</h5>
                    <h1>{summary.TotalConfirmed}</h1>
                    <h5 >{new Date(curDate).toDateString()}</h5>
                </div>
                <div className="TotalRecovered">
                    <h5>Total Recovered</h5>
                    <h1>{summary.TotalRecovered}</h1>
                    <h5 >{new Date(curDate).toDateString()}</h5>
                </div>
                <div className="NewDeaths">
                    <h5>New Deaths</h5>
                    <h1>{summary.NewDeaths}</h1>
                    <h5 >{new Date(curDate).toDateString()}</h5>
                </div>
                <div className="TotalDeaths">
                    <h5>Total Deaths</h5>
                    <h1>{summary.TotalDeaths}</h1>
                    <h5 >{new Date(curDate).toDateString()}</h5>
                </div>

            </div>
        )
    }
}
