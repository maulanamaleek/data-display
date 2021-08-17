import React from 'react'
import './style.scss'

const CircularChart = ({title, data}) => {
    return (
        <div className="circular-chart">
            <h1>{title}</h1>
            <div className="chart">
                <div className="progress">
                    {data.progress}%
                </div>
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
