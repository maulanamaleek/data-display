import React, { useEffect, useRef, useState } from 'react'
import './style.scss'

const CircularChart = ({title, data}) => {
    const [stroke, setStroke] = useState(0);
    const [maxStroke, setMaxStroke] = useState(534);
    const [radius, setRadius] = useState(75)
    const [cX, seCX] = useState(95)
    const [cY, setCY] = useState(95)
    const [isMobile, setIsMobile] = useState(false)
    const currentWidth = window.innerWidth;



    useEffect(() => {
        if (currentWidth < 500) setIsMobile(true)
        window.addEventListener('resize', () => {
            if (currentWidth <= 500) setIsMobile(true)
            if (currentWidth > 500) setIsMobile(false)
        })

        changeRadius()

        setTimeout(() => {
            const around = (2 * Math.PI * radius);
            const prog = around * (data.progress) / 100
            setStroke(prog)
            setMaxStroke(around)
        }, 100)
    }, [isMobile])

    const changeRadius = () => {
        if (isMobile) {
            setRadius(50) 
            seCX(130)
            setCY(60)
        } else {
            setRadius(75)
            seCX(95)
            setCY(95)
        }
    }

    const strokeDash =() => {
        return `${stroke}, ${maxStroke}`
    }
    
    return (
        <div className="circular-chart">
            <h1>{title}</h1>
            <div className="chart">
                {/* <figure style={{strokeDashoffset: stroke}} className="chart-data" data-percent="70">
                    <figcaption>{data.progress}%</figcaption>
                    <svg width="200" height="200">
                        <circle className="outer" cx={cX} cy={cY} r={radius} transform="rotate(-90, 95, 95)"/>
                    </svg>
                </figure> */}

                <svg className="chart-data" viewBox="0 0 180 180" width="180" height="180" xmlns="http://www.w3.org/2000/svg">
                    <text x="50%" y="50%" textAnchor="middle" className="progress-count"  dy=".3em">{data.progress}%</text>
                    <circle className="circle-chart__background" stroke="#efefef"  strokeWidth="20" fill="none" cx="90" cy="90" r={radius} />
                    <circle className="circle-chart__circle" strokeWidth="10" strokeDasharray={strokeDash()} strokeLinecap="round" fill="none" cx="90" cy="90" r={radius} />
                </svg>

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
