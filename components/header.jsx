import React from 'react'
import Navigation from '../components/navigation/navigation'
import MobileNavigation from '../components/navigation/mobile-navigation'

export const Header = () => {
  return (
      <div className="headerCont">
        <div className="content">
          <div className="header">
            <div className="corners">
              <div className="logo"></div>
            </div>
            <Navigation />
            <MobileNavigation />
            {/* <div className="menu">
              <ul>
                <li>Главная</li>
                <li>Технологии</li>
                <li>График полетов</li>
                <li>Гарантии</li>
                <li>О компании</li>
                <li>Контакты</li>
              </ul>
            </div> */}
          </div>  
        </div>
      </div>
  )
}