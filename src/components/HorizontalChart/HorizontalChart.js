import React, { useEffect, useState } from 'react'
import './style.scss'

const HorizontalChart = ({title, data}) => {
    const [isMobile, setIsMobile] = useState(false)
    const currentWidth = window.innerWidth;

    useEffect(() => {
        if (currentWidth < 500) setIsMobile(true)
        window.addEventListener('resize', () => {
            if (currentWidth <= 500) setIsMobile(true)
            if (currentWidth > 500) setIsMobile(false)
        })
    }, [])

    const getStyle = (item) => {
        if (!isMobile) {
            return {width: (item/7) * 352 + 'px'}
        } else {
            return {width: (item/7) * currentWidth * 0.6 + 'px'}
        }
    }
    
    return (
        <div className="horizontal-chart">
            <h1>{title}</h1>
            <div className="chart">
                {data && data.map((item, index) => {
                    return (
                        <div className="label-value" key={index}>
                            <p className="y-tag">{item[0]}</p>
                            <div className="track">
                                <div style={getStyle(item[1])} className="progress"></div>
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
