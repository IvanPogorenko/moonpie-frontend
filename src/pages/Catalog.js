import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ShopCard from "../components/ShopCard"
import '../css/catalog.css';
import { getItemsByCategory } from "../api";

function Catalog() {

    const [categoryName, setCategoryName] = useState('');
    const[products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getItemsByCategory(categoryName);
                setProducts(products);
            } catch(error){
                console.log(error)
            }
        };
        fetchProducts();
    }, [categoryName])

    const handleCategorySelect = (category)  => {
        let previousPage
        if (categoryName === ''){
            previousPage = document.querySelector('.all')
        }
        else{
            previousPage = document.querySelector(`.${categoryName}`)
        }
        let nextPage
        if (category === ''){
            nextPage = document.querySelector('.all')
        }
        else {
            nextPage = document.querySelector(`.${category}`)
        }
        previousPage.classList.remove('catalog__link_active')
        nextPage.classList.add('catalog__link_active')
        setCategoryName(category);
    }

    return(
        <section className="catalog container" id='catalog'>
            <div className="catalog__navigation">
                <h className="catalog__headline">Каталог</h>
                <a className="catalog__link catalog__link_active all" href="#" onClick={() => handleCategorySelect('')}>Все
                    товары</a>
                <a className="catalog__link blouse" href="#" onClick={() => handleCategorySelect('blouse')}>Блузы</a>
                <a className="catalog__link trousers" href="#"
                   onClick={() => handleCategorySelect('trousers')}>Брюки</a>
                <a className="catalog__link overalls" href="#"
                   onClick={() => handleCategorySelect('overalls')}>Комбинезоны</a>
            </div>
            <div className='catalog__actions'>
                <div className="catalog__cart">
                    <Link to="/cart">
                        <div className="cart">
                            <img src="img/cart.png" alt="cart_icon"></img>
                            <div className="cart-counter">
                                1
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="cards">
                    {products.map((obj) => (
                        <ShopCard
                            name={obj.name}
                            price={obj.price}
                            sizes={obj.size}
                            pictures={obj.photoUrl}
                            colors={obj.color}
                        />
                    ))}
                    {products.map((obj) => (
                        <ShopCard
                            name={obj.name}
                            price={obj.price}
                            sizes={obj.size}
                            pictures={obj.photoUrl}
                            colors={obj.color}
                            all_products={products}
                        />
                    ))}
                    <div className="up-btn">
                        <a href="#catalog">
                            <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M29.4532 3.93542C22.8517 4.76062 17.1896 7.41394 12.5812 11.8573C7.99815 16.288 5.16709 21.7596 4.10069 28.2469C3.82139 29.9735 3.7833 34.6454 4.03721 36.3085C5.06553 42.9989 7.8585 48.5341 12.4669 53.0155C15.7677 56.2274 19.297 58.3602 23.6642 59.7821C38.0353 64.4667 53.6632 57.0907 59.211 42.9989C60.6202 39.4315 61.2804 35.5595 61.1534 31.6112C61.0011 27.2186 60.0489 23.4481 58.1319 19.6395C53.9679 11.3876 46.3126 5.75085 37.1339 4.17664C35.3946 3.88464 31.0401 3.745 29.4532 3.93542ZM35.6104 7.2489C40.295 7.7948 45.1319 9.88953 48.8771 13.0126C52.9396 16.3895 56.0245 21.4042 57.2687 26.6093C58.1573 30.329 58.1192 34.8739 57.1925 38.5936C55.3263 46.0204 50.2735 52.2157 43.4054 55.4657C39.8761 57.1415 36.4483 57.9032 32.5001 57.9032C28.3614 57.9032 25.048 57.1415 21.3917 55.3514C16.0851 52.7616 12.1749 48.8514 9.63584 43.6083C7.8585 39.9266 7.09678 36.6386 7.08408 32.5634C7.05869 22.6737 12.6065 13.8251 21.506 9.58484C26.0509 7.41394 30.5323 6.66492 35.6104 7.2489Z"
                                    fill="#727F90"/>
                                <path
                                    d="M32.056 26.076C31.8528 26.1775 29.263 28.6785 26.3177 31.6238C20.7698 37.2098 20.6556 37.3494 20.8968 38.1111C21.0618 38.6443 21.4554 39.076 21.9124 39.2283C22.8646 39.5457 22.9534 39.4822 26.6224 35.7625C28.5013 33.8582 30.5833 31.7381 31.2562 31.0398L32.4876 29.7703L36.9437 34.3025C41.9202 39.368 41.8821 39.3426 42.9485 38.8728C43.761 38.5047 44.1546 37.5144 43.7864 36.7781C43.5833 36.3846 33.5286 26.3045 33.1097 26.076C32.6907 25.8601 32.5511 25.8601 32.056 26.076Z"
                                    fill="#727F90"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="catalog__pages">
                    <ul className="catalog__pages-list">
                        <li><a href='#' className="catalog__page catalog__page_shadow">1</a></li>
                        <li><a href='#' className="catalog__page catalog__page_shadow">2</a></li>
                        <li><a href='#' className="catalog__page catalog__page_shadow">3</a></li>
                        <li><a href='#' className='catalog__page'>...</a></li>
                        <li>
                            <a href="#" className="catalog__page catalog__page_shadow">
                                <svg width="40" height="41" viewBox="0 0 40 41" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_423_1292)">
                                        <path
                                            d="M22.7749 27.1313C22.8804 27.1001 23.603 26.4009 25.9507 24.061C27.771 22.2485 29.0249 20.9673 29.0757 20.8735C29.1851 20.6626 29.1851 20.3423 29.0757 20.1313C28.9507 19.9009 23.0327 13.9985 22.8452 13.9204C22.1538 13.6352 21.4429 14.3501 21.7554 15.0141C21.8062 15.1196 22.5562 15.893 24.0601 17.397C25.2866 18.6196 26.2905 19.6352 26.2905 19.6509C26.2905 19.6665 22.9351 19.686 18.8335 19.6899L11.3765 19.7016L11.2046 19.8188C10.6655 20.1977 10.7437 21.0141 11.3374 21.2641C11.4663 21.3149 12.2944 21.3227 18.8882 21.3227C22.9585 21.3227 26.2905 21.3345 26.2905 21.3501C26.2905 21.3657 25.2632 22.4087 24.0093 23.6665C21.771 25.9087 21.728 25.9555 21.689 26.147C21.5522 26.8071 22.1265 27.3266 22.7749 27.1313Z"
                                            fill="#171D25"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_423_1292" x="-4" y="0.514404" width="48" height="48"
                                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                           result="hardAlpha"/>
                                            <feOffset dy="4"/>
                                            <feGaussianBlur stdDeviation="2"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix"
                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                     result="effect1_dropShadow_423_1292"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_423_1292"
                                                     result="shape"/>
                                        </filter>
                                    </defs>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Catalog;