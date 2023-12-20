import React, {Component} from 'react'
export class Group extends Component{
    constructor(props) {
        super(props)
        this.state = {
            categories:[
                {
                    key:'all',
                    name:'Все'
                },
                {
                    key:'Бургеры',
                    name:'Бургеры'
                },
                {
                    key:'Лонг',
                    name:'Лонг'
                },
                {
                    key:'Бакет',
                    name:'Бакет'
                },
                {
                    key:'Комбо',
                    name:'Комбо'
                },
                {
                    key:'Напитки',
                    name:'Напитки'
                },
            ]
        }
    }
    render() {
        return(
            <div className='categories'>
                {this.state.categories.map(el =>(
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}