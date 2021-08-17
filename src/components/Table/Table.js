import React from 'react'
import './style.scss'

const Table = ({data, check, checkAll}) => {
    return (
        <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th className="check"><input onChange={checkAll} type="checkbox" /></th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Availability</th>
                    <th>Arrival</th>
                </tr>
                </thead>
                <tbody>
                    {data && data.map((item, index) => {
                        return (
                            <tr className="table-card" key={index}>
                                <td className="check"><input className="tbl-check" onChange={check} type="checkbox" /></td>
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td>{item.available}</td>
                                <td>{item.arrive}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
