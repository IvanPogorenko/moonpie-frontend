import {useState} from 'react';
import {authenticateUser, registerUser} from '../api';
import {Link} from "react-router-dom";
import '../css/pop-up.css';

function Auth({authData, setAuthData}) {

    const [flag, setFlag] = useState(0);
    const [rememberUser, setRememberUser] = useState(1)

    const handleChangeAuthData = (newState) => {
        const newData = newState;
        setAuthData(newData);
    };

    //registration
    // const [formData, setFormData] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    // });
    //
    // const [error, setError] = useState(null);
    // const [success, setSuccess] = useState(false);
    //
    // const handleChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // };
    //
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError(null);
    //     setSuccess(false);
    //
    //     try {
    //         const response = await registerUser(formData);
    //         console.log('User registered successfully:', response);
    //         setSuccess(true);
    //     } catch (error) {
    //         setError(error.message);
    //     }
    // };

    //auth
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: '',
    // });
    //
    // const [error, setError] = useState(null);
    // const [success, setSuccess] = useState(false);
    //
    // const handleChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // };
    //
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError(null);
    //     setSuccess(false);
    //
    //     try {
    //         const token = await authenticateUser(formData.email, formData.password);
    //         if (token) {
    //             localStorage.setItem('token', token);
    //             setSuccess(true);
    //         } else {
    //             setError('Authentication failed: No token received');
    //         }
    //     } catch (error) {
    //         setError(error.message);
    //     }
    // };

    return (
        <>
            {authData ?
                <div className="pop-up__overlay" style={{display: 'flex'}}>
                    <div className='pop-up' style={{display: 'flex'}}>
                        <svg className='pop-up__svg' onClick={
                            () => {
                                handleChangeAuthData(false)
                            }
                        } width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0684 8.43156L8.93143 19.5685" stroke="#171D25" stroke-width="1.3"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M20.0686 19.5685L8.93164 8.43156" stroke="#171D25" stroke-width="1.3"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                        <div className="pop-up__fields">
                            {flag === 0 ? <h className="pop-up__header">Войти в систему</h> :
                                <h className="pop-up__header">Регистрация</h>}
                            <div className="pop-up__field">
                                <label className='form-field'>
                                    Электронная почта
                                    <input
                                        className='pop-up__input'
                                        type="email"
                                        name="email"
                                        placeholder='iivanow@gmail.com'
                                        // value={formData.email}
                                        // onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            {flag === 1 ?
                                <div className="pop-up__field">
                                    <label className='form-field'>
                                        Номер телефона
                                        <input
                                            className='pop-up__input'
                                            type="tel"
                                            name="phone"
                                            placeholder='+7-999-999-99-99'
                                            pattern='+7-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
                                            // value={formData.email}
                                            // onChange={handleChange}
                                            required
                                        />
                                    </label>
                                </div> : null}
                            <div className="pop-up__field">
                                <label className='form-field'>
                                    Пароль
                                    <input
                                        className='pop-up__input'
                                        type="password"
                                        id='password'
                                        name="password"
                                        placeholder='**********************'
                                        // value={formData.email}
                                        // onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            {flag === 1 ?
                                <div className="pop-up__field">
                                    <label className='form-field'>
                                        Подтверждение пароля
                                        <input
                                            className='pop-up__input'
                                            id='password_again'
                                            type="password"
                                            name="password_again"
                                            placeholder='**********************'
                                            required
                                        />
                                    </label>
                                </div> : null}
                            {flag === 0 ?
                                <div className="pop-up__actions">
                                    <div className="pop-up__remember-user">
                                        <div className="switcher"
                                             style={{backgroundColor: "#727F90FF", justifyContent: 'right'}} onClick={
                                            () => {
                                                const switcher = document.querySelector('.switcher')
                                                if (rememberUser === 1) {
                                                    switcher.style.backgroundColor = '#D5DBF5FF'
                                                    switcher.style.justifyContent = 'left'
                                                    setRememberUser(0)
                                                } else {
                                                    switcher.style.backgroundColor = '#727F90FF'
                                                    switcher.style.justifyContent = 'right'
                                                    setRememberUser(1)
                                                }
                                            }}>
                                            <div className="switcher__circle"></div>
                                        </div>
                                        <div className="pop-up__remember-text">Запомнить</div>
                                    </div>
                                    <a className='pop-up__forgot-password' href='#'>Забыли пароль?</a>
                                </div> : null}
                            {flag === 0 ? <button className="pop-up__btn">Войти</button> :
                                <button className="pop-up__btn" onClick={
                                    () => {
                                        const password = document.getElementById('password')
                                        const password_again = document.getElementById('password_again')
                                        if (password.value !== password_again.value) {
                                            alert('Пароли должны совпадать!')
                                        }
                                    }
                                }>Зарегистрироваться</button>}
                            <div className="pop-up__bottom-menu">
                                {flag === 0 ? <h2 className='pop-up__bottom-text'>У вас нет учетной записи?</h2> :
                                    <h2 className='pop-up__bottom-text'>Есть учетная запись?</h2>}
                                {flag === 0 ? <a className='pop-up__link' href='#' onClick={() => {
                                        setFlag(1)
                                    }}>Зарегистрироваться</a> :
                                    <a className='pop-up__link' href='#' onClick={() => {
                                        setFlag(0)
                                    }}>Войти</a>}
                            </div>
                        </div>
                    </div>
                </div>
                : null}

        </>
    );
}


export default Auth;