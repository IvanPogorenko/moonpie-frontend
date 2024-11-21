import '../css/account.css'

function AccountHistory(){
    return (
        <div className="account__main">
            <h className="account__headline">История заказов</h>
            <div className="account__cards">
                <div className="account__card">
                    <div className="account__card-image">
                        <img src="/img/test.png" alt="test"/> {/*Заглушка*/}
                    </div>
                    <div className="account__card-info">
                        <div className="account__card-headline">
                            <div className="account__card-name">М2 Кимано</div>
                            {/*Заглушка*/}
                            <div className="account__card-price">3450p.</div>
                            {/*Заглушка*/}
                        </div>
                        <div className="account__card-text">
                            <ul className="account__card-params list">
                                <li className="account__card-param">Цвет: темно-синий</li>
                                {/*Заглушка*/}
                                <li className="account__card-param">Рост: 164</li>
                                {/*Заглушка*/}
                                <li className="account__card-param">Размер: 42</li>
                                {/*Заглушка*/}
                            </ul>
                            <ul className="account__card-deliver-params list">
                                <li className="account__card-param">Адрес доставки: Томск, Ленина 64а</li>
                                {/*Заглушка*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountHistory;