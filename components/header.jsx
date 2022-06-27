import React from 'react'

export const Header = () => {
  return (
      <div className="headerCont">
        <div className="content">
          <div className="header">
            <div className="corners">
              <div className="logo"></div>
            </div>
            <div className="menu">
              <ul>
                <li>Главная</li>
                <li>Технологии</li>
                <li>График полетов</li>
                <li>Гарантии</li>
                <li>О компании</li>
                <li>Контакты</li>
              </ul>
            </div>
          </div>  
        </div>
      </div>
  )
}