import React, { Fragment, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { fetchCoinDataFromDB } from '../../../API/coreAPICalls'

import './TableComponent.css'

const TableComponent = () => {

    const [coinData, setCoinData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState();

    const loadAllCoinData = () => {
        setLoading(true);
        fetchCoinDataFromDB().then((data) => {
            if (data.error) {
                setLoading(false);
            } else {
                setCoinData(data.coinData);
                setLoading(false);
                console.log(data);
                if (data.coinDataCount === 0) {
                    setMessage("No Coins Found")
                }
            }
        });
    }

    useEffect(() => {
        loadAllCoinData();
    }, [])

    return (
        <Fragment>
            {loading
                ? "Loading.."
                :
                <div className="table-container text-center">
                    <Table responsive="md">
                        <thead className='table-head'>
                            <tr>
                                <th>#</th>
                                <th>name</th>
                                <th>Last</th>
                                <th>Buy / Sell Price</th>
                                <th>volume</th>
                                <th>base_unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coinData.map((coin, index) => (
                                <tr className="table-data" key={index}>
                                    <td>{index + 1}</td>
                                    <td>{coin.name}</td>
                                    <td>{coin.last}</td>
                                    <td>{coin.buy}/{coin.sell}</td>
                                    <td>{coin.volume}</td>
                                    <td>{coin.base_unit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            }
            <p>{JSON.stringify(message)}</p>
        </Fragment>
    )
}

export default TableComponent