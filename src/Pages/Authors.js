import React, { Component } from 'react'
import AuthorsList from '../Components/Authors';

export default class Authors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: 'Pumpki',
          category: 'Frontend-разработчик',
          img: 'card1.jpg',
          desc: 'Делюсь туториалами и проектами по программированию. Развивайся вместе со мной)',
        },
        {
          id: 2,
          title: 'Дмитрий Куплинов',
          category: 'Видеоблогер',
          img: 'card2.jpg',
          desc: 'Хехееей, всем привет. Тут Дмитрий Куплинов Плеей',
        },
        {
          id: 3,
          title: 'Анастасиз',
          category: 'Видеоблогер',
          img: 'card3.jpg',
          desc: 'Я Настюшка. Люблю своих подписчиков и собачек)',
        },
        {
          id: 4,
          title: 'BlackSilverUFA',
          category: 'Стример',
          img: 'card4.jpg',
          desc: 'Я выкладываю здесь видео по интересным играм. Обитель прекрасных людей :)И стримера',
        },
      ]
    };
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='Authors'>
          <h1>Популярные авторы</h1>
          <AuthorsList items={this.state.items} />
        </div>
      </div>
    );
  }
}