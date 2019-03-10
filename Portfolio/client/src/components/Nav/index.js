// import React from "react";
// import './style.css';

// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <a className="navbar" href="/home">
//         About
//       </a>
//       <a className="navbar" href="/contact">
//         Contact
//       </a>
//       <a className="navbar" href="/projects">
//         Projects
//       </a>
//       <a className="navbar" href="/add">
//         Add
//       </a>
//     </nav>
//   );
// }

// export default Nav;


import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './style.css'

export default class MenuExampleText extends Component {
  state = { activeItem: 'About' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu text>
        <Menu.Item header>Portfolio</Menu.Item>
        <Menu.Item
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
          href='/home'
        />
        <Menu.Item
          name='Projects'
          active={activeItem === 'Projects'}
          onClick={this.handleItemClick}
          href="/projects"
        />
        <Menu.Item
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
          href="/contact"
        />
        <Menu.Item
          name='Add'
          active={activeItem === 'Add'}
          onClick={this.handleItemClick}
          href="/add"
        />
      </Menu>
    )
  }
}
