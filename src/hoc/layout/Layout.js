import React from 'react'
import s from './Layout.module.scss'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'

export default class Layout extends React.Component {
    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }
    render() {
        return (
            <div className={s.Layout}>
                <Drawer isOpen={this.state.menu} onClose={this.menuCloseHandler}/>
                <MenuToggle isOpen={this.state.menu} onToggle={this.toggleMenuHandler}/>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}