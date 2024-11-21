import '../css/account.css'

function AccountFavorites(){
    return (
        <div className="account__main">
            <h className="account__headline">Избранное</h>
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
                        </div>
                        <button className="account__item-card-btn">На страницу товара</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountFavorites;