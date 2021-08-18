import React, { useEffect, useRef, useState } from 'react'
import './style.scss'

const CircularChart = ({title, data}) => {
    const [stroke, setStroke] = useState(537);
    const chartRef = useRef();


    useEffect(() => {
        const newStroke = (2 * Math.PI * 85) * (100 - data.progress) / 100
        setTimeout(() => {
            setStroke(newStroke)
        }, 100)
    }, [])
    
    return (
        <div className="circular-chart">
            <h1>{title}</h1>
            <div className="chart">
                <figure ref={chartRef} style={{strokeDashoffset: stroke}} className="chart-data" data-percent="70">
                    <figcaption>{data.progress}%</figcaption>
                    <svg width="200" height="200">
                        <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                    </svg>
                </figure>

                <div className="label">
                    <div>
                        <div className="c-1"></div>
                        <div>
                            <p className="title">Text 1</p>
                            <p className="data">{data.text_1} Guest(s)</p>
                        </div>
                    </div>
                     <hr style={{borderTopColor: '#CFD4DC', marginTop: 10, marginBottom: 10}} />
                    <div>
                        <div className="c-2"></div>
                        <div>
                            <p className="title">Text 1</p>
                            <p className="data">{data.text_1} Guest(s)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CircularChart
