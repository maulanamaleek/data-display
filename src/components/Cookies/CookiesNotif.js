import React from 'react'
import NotifIcon from '../../assets/notif.png';
import './style.scss'

const CookiesNotif = ({close}) => {
    return (
        <div className="notif-cookie">
            <img src={NotifIcon} alt="notif" />
            <p>This website use cookies</p>
            <p onClick={close} className="close-notif">OK</p>
        </div>
    )
}

export default CookiesNotif
