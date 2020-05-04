import React from 'react'
import s from './Drawer.module.scss'
import BackDrop from '../../UI/Backdrop/Backdrop'

const links = [
    1, 2, 3
]

class Drawer extends React.Component {
    renderLinks() {
        return links.map((link, idx) => {
            return (
                <li key={idx}>
                    <a href='/'>Link {link}</a>
                </li>
            )
        }) 
    }

    render() {
        const cls = [s.Drawer]
        if(!this.props.isOpen) {
            cls.push(s.close)
        }
        return (
            <React.Fragment>
            <nav className={cls.join(' ')}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
            {this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        )
    }
}

export default Drawer