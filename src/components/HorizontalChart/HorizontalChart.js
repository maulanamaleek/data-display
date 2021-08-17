import React from 'react'
import './style.scss'

const HorizontalChart = ({title, data}) => {
    return (
        <div className="horizontal-chart">
            <h1>{title}</h1>
            <div className="chart">
                {data && data.map((item, index) => {
                    return (
                        <div className="label-value" key={index}>
                            <p className="y-tag">{item[0]}</p>
                            <div className="track">
                                <div style={{width: (item[1]/7) * 352 + 'px'}} className="progress"></div>
                            </div>
                        </div>
                    )
                })}
                <div className="x-tag">
                    <p>01</p>
                    <p>02</p>
                    <p>03</p>
                    <p>04</p>
                    <p>05</p>
                    <p>06</p>
                    <p>07</p>
                </div>
            </div>
        </div>
    )
}

export default HorizontalChart
