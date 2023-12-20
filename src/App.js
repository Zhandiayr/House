import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import {Group} from "./components/Group";

import {Displayitem} from "./components/Displayitem";


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            orders:[],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: 'Воппер Джуниор',
                    img:'Воппер Джуниор.png',
                    disc:'Фирменный бургер среднего размера со свежими овощами и 100% говядиной, приготовленной на гриле',
                    category:'Бургеры',
                    price:'500'
                },
                {
                    id: 2,
                    title: 'Стейкхаус',
                    img:'стейкхаус.png',
                    disc:'Сытный говяжий бургер с сыром и хрустящим луком в кукурузной булочке с соусом барбекю',
                    category:'Бургеры',
                    price:'600'
                },
                {
                    id: 3,
                    title: 'Чизбургер',
                    img:'Чизбургер.png',
                    disc:'Бургер среднего размера с говяжей котлетой приготовленной на огне, с ломтиком сыра, горчицей и кетчупом.',
                    category:'Бургеры',
                    price:'900'
                },
                {
                    id: 4,
                    title: 'Двойной криспи чикен',
                    img:'Двойной криспи чикен.png',
                    disc:'Сытный куриный бургер со свежими овощами и с двойной хрустящей котлетой в кукурузной булочке',
                    category:'Бургеры',
                    price:'1200'
                },
                {
                    id: 5,
                    title: 'Воппер',
                    img:'Воппер.png',
                    disc:'Фирменный, сытный бургер с овощами, со 100% говядиной, приготовленной на открытом огне',
                    category:'Бургеры',
                    price:'900'
                },

                {
                    id: 6,
                    title: 'Криспи Чикен',
                    img:'криспи чикен.png',
                    disc:'Куриный бургер со свежими овощами и хрустящей котлетой в панировке.',
                    category:'Бургеры',
                    price:'900'
                },
                {
                    id: 7,
                    title: 'Хруст Бургер',
                    img:'хруст бургер.png',
                    disc:'Сытный бургер с хрустящими листьями салата и нежным куриным филе.',
                    category:'Бургеры',
                    price:'500'
                },
                {
                    id: 8,
                    title: 'Лонг Чикен',
                    img:'Лонг чикен.png',
                    disc:'Сытный Лонг с хрустящими листьями салата и нежным куриным филе..',
                    category:'Лонг',
                    price:'800'
                },
                {
                    id: 9,
                    title: 'Лонг Чикен сыром',
                    img:'Лонг чикен.png',
                    disc:'Сытный Лонг с хрустящими листьями салата и нежным куриным филе и сыром.',
                    category:'Лонг',
                    price:'900'
                },
                {
                    id: 10,
                    title: 'Лонг Чиззи',
                    img:'Чиззи Ролл.png',
                    disc:'Сытный Лонг с хрустящими листьями салата и нежным куриным филе и сыром.',
                    category:'Лонг',
                    price:'900'
                },
                {
                    id: 11,
                    title: 'Топ Микс Бакет',
                    img:'Топ микс бакет.png',
                    disc:'13  крыльев картошка фри.',
                    category:'Бакет',
                    price:'900'
                },
                {
                    id: 12,
                    title: 'Мега Микс Бакет',
                    img:'Мега микс бакет.png',
                    disc:'20  крыльев 10 луковец 10 снеков.',
                    category:'Бакет',
                    price:'900'
                },
                {
                    id: 13,
                    title: 'Чикен Микс Бакет',
                    img:'Чикен Микс Бакет.png',
                    disc:'13  крыльев 10 ножек картошка фри.',
                    category:'Бакет',
                    price:'900'
                },
                {
                    id: 14,
                    title: 'Воппер Комбо',
                    img:'Воппер Комбо.png',
                    disc:'Воппер, стандартный картофель фри, Cola 0.4л\n' +
                        'Можно заменить картофель фри на луковые кольца с доплатой',
                    category:'Комбо',
                    price:'1500'
                },
                {
                    id: 15,
                    title: 'Напитки',
                    img:'Coco-cola.png',
                    disc:'Cola 0.4л',
                    category:'Напитки',
                    price:'500'
                },
                {
                    id: 16,
                    title: 'Фанта',
                    img:'Fanta.png',
                    disc:'Fanta 0.4л',
                    category:'Напитки',
                    price:'500'
                },
                {
                    id: 17,
                    title: 'Спрайт',
                    img:'Sprite.png',
                    disc:'Sprite 0.4л',
                    category:'Напитки',
                    price:'500'
                },
                {
                    id: 18,
                    title: 'Сок Пико',
                    img:'Pico.png',
                    disc:'Pico 0.2л',
                    category:'Напитки',
                    price:'300'
                },

            ],
            showFullItem: false,
            fullItem: {}
        }


        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }
    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Group chooseCategory={this.chooseCategory}/>
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

                {this.state.showFullItem && <Displayitem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
                <Footer/>
            </div>

        )
    }

    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})



    }

    chooseCategory(category) {
        if(category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el=> el.category === category)
        })
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})


    }
    addToOrder(item){
        let isInArray = false
        this.state.orders.forEach(el => {
            if(el.id === item.id)
                isInArray = true
        })
        if(!isInArray)
        this.setState({orders: [...this.state.orders, item] })

    }
}

export default App;
