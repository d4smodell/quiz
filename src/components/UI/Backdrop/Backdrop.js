import React from 'react'
import s from './Backdrop.module.scss'

const Backdrop = props => <div className={s.Backdrop} onClick={props.onClick}></div>

export default Backdrop