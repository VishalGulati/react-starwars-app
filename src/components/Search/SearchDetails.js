import React, { Component } from 'react';
import {
    Table
} from 'react-bootstrap';
import './SearchDetails.css';

export default class SearchDetails extends Component {
    render() {
        let searchItemDetails = [];
        if (this.props.location.params) {
            const params = this.props.location.params;
            searchItemDetails = Object.keys(
                params
            ).map((propName, key) => {
                return <tr key={key}>
                    <td>{propName}</td>
                    <td>{params[propName]}</td>
                </tr>
            })
        }

        return (
            <div >
                <h1>Search Details</h1>
                <Table striped bordered condensed hover className="search-details">
                    <tbody>
                        {searchItemDetails}
                    </tbody>
                </Table>
            </div>
        );
    }
}
