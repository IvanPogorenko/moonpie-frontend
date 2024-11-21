import '../css/account.css'

function AccountData(){
    return (
        <div className="account__main">
            <h className="account__headline">Мои данные</h>
            <div className="account__image">
                <img className='account__profile-image' src="/img/account.png" alt="account"/>
                <svg className='account__add-image' width="65" height="65" viewBox="0 0 65 65" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <rect width="65" height="65" rx="32.5" fill="white"/>
                    <g clip-path="url(#clip0_581_1235)">
                        <path
                            d="M31.7688 16.7011C31.6043 16.82 31.3757 17.0302 31.2752 17.1673C31.0833 17.4233 31.0833 17.4873 31.0558 24.2338L31.0376 31.0351L24.2372 31.0533C17.4917 31.0808 17.4277 31.0808 17.1718 31.2727C16.2761 31.9401 16.2761 33.0553 17.1718 33.7227C17.4277 33.9147 17.4917 33.9147 24.2372 33.9421L31.0376 33.9604L31.0558 40.7617C31.0833 47.5081 31.0833 47.5721 31.2752 47.8281C31.9424 48.724 33.0576 48.724 33.7248 47.8281C33.9167 47.5721 33.9167 47.5081 33.9442 40.7617L33.9624 33.9604L40.7628 33.9421C47.5083 33.9147 47.5723 33.9147 47.8282 33.7227C48.7239 33.0553 48.7239 31.9401 47.8282 31.2727C47.5723 31.0808 47.5083 31.0808 40.7628 31.0533L33.9624 31.0351L33.9442 24.2338C33.9167 17.4873 33.9167 17.4233 33.7248 17.1673C33.4049 16.7285 32.9753 16.5 32.5 16.5C32.2075 16.5 31.979 16.564 31.7688 16.7011Z"
                            fill="black"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_581_1235">
                            <rect width="32" height="32" fill="white" transform="translate(16.5 16.5)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="account__fields">
                <div className="account__bio-fields">
                    <div className="account__field account__bio-field">
                        <div className="account__field-name text">Фамилия</div>
                        <input type="text" name='lastName' className="account__input"/>
                    </div>
                    <div className="account__field account__bio-field">
                        <div className="account__field-name text">Имя</div>
                        <input type="text" name='name' className="account__input"/>
                    </div>
                    <div className="account__field account__bio-field">
                        <div className="account__field-name text">Отчество</div>
                        <input type="text" name='surName' className="account__input"/>
                    </div>
                </div>
                <div className="account__other-fields">
                    <div className="account__field">
                        <div className="account__field-name text">E-mail</div>
                        <input type="email" name='mail' value='asdasd' className="account__input"/>
                        <svg className='rewrite-btn' width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_580_1226)">
                                <path
                                    d="M19.0547 0.135937C18.8016 0.257812 17.85 1.19531 10.1297 8.92031L1.48594 17.5687L0.745312 20.4469C0.323437 22.0687 0 23.4141 0 23.5359C0 23.8266 0.159375 24 0.440625 24C0.54375 24 1.93125 23.6719 3.51562 23.2687L6.39844 22.5328L15.0609 13.8797C24.7453 4.20469 24 5.00156 24 4.29375C24 3.6375 23.9906 3.62812 22.1812 1.81875C20.3719 0.00937462 20.3578 0 19.7109 0C19.3922 0 19.2937 0.0187492 19.0547 0.135937ZM20.0437 1.12031C20.2594 1.27969 22.8281 3.8625 22.9406 4.03125C22.9828 4.09219 23.0156 4.22812 23.0156 4.33125C23.0156 4.51406 22.9828 4.55156 21.5531 5.98594L20.0859 7.45312L18.3187 5.68594L16.5469 3.91406L18.0141 2.44687C19.4578 1.00781 19.4812 0.984375 19.6687 0.984375C19.8094 0.984375 19.9125 1.02187 20.0437 1.12031ZM17.625 6.39844L19.3828 8.15625L12.7828 14.7562L6.1875 21.3516L4.42031 19.5797L2.64844 17.8125L9.23437 11.2266C12.8578 7.60312 15.8297 4.64062 15.8437 4.64062C15.8578 4.64062 16.6594 5.43281 17.625 6.39844ZM5.12344 21.8109C5.00156 21.8625 1.20469 22.8281 1.19062 22.8141C1.17656 22.8047 1.89375 19.9734 2.16094 18.9656L2.2125 18.7828L3.70781 20.2781C4.92187 21.4922 5.18906 21.7781 5.12344 21.8109Z"
                                    fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_580_1226">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="account__field">
                        <div className="account__field-name text">Телефон</div>
                        <input type="tel" name='phone' className="account__input"/>
                        <svg className='rewrite-btn' width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_580_1226)">
                                <path
                                    d="M19.0547 0.135937C18.8016 0.257812 17.85 1.19531 10.1297 8.92031L1.48594 17.5687L0.745312 20.4469C0.323437 22.0687 0 23.4141 0 23.5359C0 23.8266 0.159375 24 0.440625 24C0.54375 24 1.93125 23.6719 3.51562 23.2687L6.39844 22.5328L15.0609 13.8797C24.7453 4.20469 24 5.00156 24 4.29375C24 3.6375 23.9906 3.62812 22.1812 1.81875C20.3719 0.00937462 20.3578 0 19.7109 0C19.3922 0 19.2937 0.0187492 19.0547 0.135937ZM20.0437 1.12031C20.2594 1.27969 22.8281 3.8625 22.9406 4.03125C22.9828 4.09219 23.0156 4.22812 23.0156 4.33125C23.0156 4.51406 22.9828 4.55156 21.5531 5.98594L20.0859 7.45312L18.3187 5.68594L16.5469 3.91406L18.0141 2.44687C19.4578 1.00781 19.4812 0.984375 19.6687 0.984375C19.8094 0.984375 19.9125 1.02187 20.0437 1.12031ZM17.625 6.39844L19.3828 8.15625L12.7828 14.7562L6.1875 21.3516L4.42031 19.5797L2.64844 17.8125L9.23437 11.2266C12.8578 7.60312 15.8297 4.64062 15.8437 4.64062C15.8578 4.64062 16.6594 5.43281 17.625 6.39844ZM5.12344 21.8109C5.00156 21.8625 1.20469 22.8281 1.19062 22.8141C1.17656 22.8047 1.89375 19.9734 2.16094 18.9656L2.2125 18.7828L3.70781 20.2781C4.92187 21.4922 5.18906 21.7781 5.12344 21.8109Z"
                                    fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_580_1226">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="account__data-actions">
                    <button className="account__save-btn">Сохранить</button>
                    <div className='account__log-out'>Выйти из аккаунта</div>
                </div>
            </div>
        </div>
    );
}

export default AccountData;