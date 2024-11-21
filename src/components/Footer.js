import '../css/footer.css';

function Footer() {
    return(
        <footer className='footer'>
            <div className="footer__container">
                <div className="rights">© 2022 Все права защищены</div>
                <div className="footer__logo">
                    <div className="footer__image">
                        <img src="/img/footer-logo.png" alt="logo"/>
                    </div>
                    <div className="social-media">
                        <div className="inst-logo">
                            <img src="/img/inst.png" alt="inst"/>
                        </div>
                        <div className="vk-logo">
                            <img src="/img/vk.png" alt="vk"/>
                        </div>
                        <div className="phone-logo">
                            <img src="/img/phone.png" alt="phone"/>
                        </div>
                    </div>
                </div>
                <div className="footer__links">
                    <div className="footer__link">Политика конфиденциальности</div>
                    <div className="footer__link">Пользовательское соглашение</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;