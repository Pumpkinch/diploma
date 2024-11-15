import React, { Component } from 'react'
import '../styles/components/authors.css'
import Author from './Author'

export class Authors extends Component {
  render() {
    return (
      <div className='authors'>
        {this.props.items.map(el => (
            <Author key={el.id} item={el}/>
        ))}
      </div>
    )
  }
}

export default Authors