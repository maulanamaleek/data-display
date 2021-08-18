import React from 'react'
import CloseIcon from '../../assets/close.png'
import OfflineImg from '../../assets/offline.png'
import './style.scss'

const OfflineStatus = ({close}) => {
    return (
        <div className="offline-status">
            <div className="offline-card">
                <img onClick={close} className="close-btn" src={CloseIcon} alt="close" />
                <img className="offline-img" src={OfflineImg} alt="close" />
                <h1>No internet connection</h1>
                <p>Seems like you're not connected to the internet! Check your connection and refresh the page.</p>
            </div>
        </div>
    )
}

export default OfflineStatus
