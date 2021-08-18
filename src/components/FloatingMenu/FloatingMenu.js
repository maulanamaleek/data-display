import React from 'react'
import LabelIcon from '../../assets/label.png'
import DeleteIcon from '../../assets/delete.png'
import CloseIcon from '../../assets/close.png'
import './style.scss'

const FloatingMenu = ({selected, isShow, toggle, deleteItem}) => {


    if (!isShow || !selected ) return null
    return (
        <div className="floating-menu">
            <img onClick={toggle} style={{cursor: 'pointer'}} src={CloseIcon} alt="close" />
            <p>{selected} Table{selected > 1 ? 's' : ''} selected</p>
            <button className="assign-btn">
                <img src={LabelIcon} alt="label" />
                Assign Category
            </button>
            <button onClick={deleteItem} className="delete-btn">
                <img src={DeleteIcon} alt="delete" />
                Delete Table
            </button>
        </div>
    )
}

export default FloatingMenu
 