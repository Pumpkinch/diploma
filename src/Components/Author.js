import React, { Component } from 'react'

export class Author extends Component {
    render() {
        return (
            <div className='item'>
                <img src={"./images/" + this.props.item.img} />
                <div className='desc'>
                    <h3>{this.props.item.title}</h3>
                    <h5>{this.props.item.category}</h5>
                </div>
                {/* <h2>{this.props.item.desc}</h2> */}
                {/* <div className='tracking'>Отслеживать</div> */}
            </div>
        )
    }
}

export default Author