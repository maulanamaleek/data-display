import React from 'react'
import './style.scss'

const VerticalChart = ({title, data}) => {
    return (
        <div className="vertical-chart">
            <h1>{title}</h1>
            <div className="chart">
                {data && data.map((item, index) => {
                    return <div style={{height: item[1] + 'px'}} className={item[0] === '1' ? 'bar-1' : 'bar-2'} key={index}></div>
                })}
            </div>
            <div className="label">
                <div className="c-1"></div>
                <p>Text 1</p>
                <div className="c-2"></div>
                <p>Text 2</p>
            </div>
        </div>
    )
}

export default VerticalChart
