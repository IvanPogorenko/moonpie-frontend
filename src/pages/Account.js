import '../css/account.css';
import AccountHistory from "../components/AccountHistory";
import AccountOrders from "../components/AccountOrders";
import AccountData from "../components/AccountData";
import AccountFavorites from "../components/AccountFavorites";
import {useState} from "react";

function Account(){

    const [componentLink, setComponentLink] = useState('data')
    const [componentName, setComponentName] = useState(<AccountData></AccountData>)
    const changeComponentLink = (component) => {
        let previousComp = document.getElementById(`${componentLink}`)
        let nextComp = document.getElementById(`${component}`)
        previousComp.classList.remove('account__link_active')
        nextComp.classList.add('account__link_active')
        setComponentLink(component)
        setComponentName(components[component])
    }

    const components = {
        'data': <AccountData></AccountData>,
        'orders': <AccountOrders></AccountOrders>,
        'history': <AccountHistory></AccountHistory>,
        'favorites': <AccountFavorites></AccountFavorites>
    }

    return(
        <section className="account">
            <div className="account__container">
                <div className="account__nav">
                    <nav className="account__links">
                        <ul className="account__list list">
                            <li className="account__list-item"><a href="#" onClick={() => {changeComponentLink('data')}} id='data' className="account__link account__link_active">Мои данные</a></li>
                            <li className="account__list-item"><a href="#" onClick={() => {changeComponentLink('orders')}} id='orders' className="account__link">Мои заказы</a></li>
                            <li className="account__list-item"><a href="#" onClick={() => {changeComponentLink('favorites')}} id='favorites' className="account__link">Избранное</a></li>
                            <li className="account__list-item"><a href="#" onClick={() => {changeComponentLink('history')}} id='history' className="account__link">История заказов</a></li>
                        </ul>
                    </nav>
                </div>
                {componentName}
            </div>
        </section>
    );
}

export default Account;