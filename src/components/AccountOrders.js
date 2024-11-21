import '../css/account.css'
import {useState} from "react";

function AccountOrders(){

    const [trackerView, setTrackerView] = useState(false)

    return (
        <div className="account__main">
            <h className="account__headline">Заказы</h>
            <div className="account__cards">
                <div className="account__card">
                    <div className="account__card-image">
                        <img src="/img/test.png" alt="test"/>  {/*Заглушка*/}
                    </div>
                    <div className="account__card-info">
                        <div className="account__card-headline">
                            <div className="account__card-name">М2 Кимано</div> {/*Заглушка*/}
                            <div className="account__card-price">3450p.</div>  {/*Заглушка*/}
                        </div>
                        <div className="account__card-text">
                            <ul className="account__card-params list">
                                <li className="account__card-param">Цвет: темно-синий</li> {/*Заглушка*/}
                                <li className="account__card-param">Рост: 164</li> {/*Заглушка*/}
                                <li className="account__card-param">Размер: 42</li> {/*Заглушка*/}
                            </ul>
                            <ul className="account__card-deliver-params list">
                                <li className="account__card-param">Адрес доставки: Томск, Ленина 64а</li> {/*Заглушка*/}
                                <li className="account__card-param">Ожидаемая дата доставки: 5 августа</li> {/*Заглушка*/}
                            </ul>
                        </div>
                        <div className="account__card-tracker">
                            {trackerView ? (
                                <div className='account__card-track'>
                                    <div className="close-svg" onClick={() => {
                                        setTrackerView(false)
                                    }}>
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.4">
                                                <path d="M33.5459 14.4541L14.454 33.546" stroke="black" stroke-width="2"
                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M33.546 33.546L14.4541 14.4541" stroke="black" stroke-width="2"
                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="account__track-info">
                                        <div className="account__track-headline">Статус доставки</div>
                                        <ul className="account__track-text">
                                            <li className="account__track-status account__track-status_active">В обработке</li>
                                            <li className="account__track-status">Принят</li>
                                            <li className="account__track-status">Упакован</li>
                                            <li className="account__track-status">Доставляется</li>
                                            <li className="account__track-status">Доставлен</li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className="account__card-link" onClick={()=>{
                                    setTrackerView(true)
                                }}>Состояние доставки</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountOrders;