import {Link, useParams} from 'react-router-dom';
import '../css/shopCard.css';
import {addItemToCart, getItemByName, getItemsByCategory} from '../api';
import {useEffect, useState} from "react";
import ShopCard from "../components/ShopCard";

function ItemCard() {

    const[products, setProducts] = useState([])
    let moreProducts = []

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getItemsByCategory('');
                setProducts(products);
            } catch(error){
                console.log(error)
            }
        };
        fetchProducts();
    }, [''])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const selectedSize = formData.get('size');
        const selectedColor = formData.get('color');
        try {
            await addItemToCart({
                itemName: product.name,
                size: selectedSize,
                color: selectedColor
            });
            alert('Item added to cart successfully!');
        } catch (error) {
            console.error('Error adding item to cart:', error);
            alert('Failed to add item to cart.');
        }
    }

    const[product, setProduct] = useState(null)
    const {productName} = useParams();
    const growth = [165, 170, 175, 180]

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const product = await getItemByName(productName);
                setProduct(product);
            } catch(error){
                console.log(error)
            }
        };
        fetchProducts();
    }, [productName])

    const [ownSelections, setOwnSelections] = useState(false)

    let slideIndex = 0
    const slideCount = document.querySelectorAll('.item__slide')
    // const itemSlider = document.querySelector('.item__slider')
    const itemSlides = document.querySelector('.item__slides')
    const switchSlide = (direction) => {
        if(direction === 'left'){
            slideIndex--
            const previousDot = document.getElementById(`${slideIndex+1}`)
            let newDot
            if(slideIndex < 0){
                slideIndex = slideCount.length-1
                newDot = document.getElementById(`${slideIndex}`)
            }
            else{
                newDot = document.getElementById(`${slideIndex}`)
            }
            switchDot(newDot, previousDot)
        }
        else if(direction === 'right'){
            slideIndex++
            let newDot
            const previousDot = document.getElementById(`${slideIndex-1}`)
            if (slideIndex > slideCount.length-1){
                slideIndex = 0
                newDot = document.getElementById(`${slideIndex}`)
            }
            else{
                newDot = document.getElementById(`${slideIndex}`)
            }
            switchDot(newDot, previousDot)
        }
        const width = 525
        itemSlides.style.transform = `translateX(-${slideIndex * width}px)`
    }
    const switchDot = (newDot, previousDot) => {
        previousDot.style.width = '8px'
        previousDot.style.height = '8px'
        previousDot.style.backgroundColor = '#727F90'
        newDot.style.width = '12px'
        newDot.style.height = '12px'
        newDot.style.backgroundColor = '#000000'
    }

    return(
        <section className='item'>
            <div className="item__container">
                <div className="back-to-catalog">
                    <Link className='back-to-catalog__link' to='/catalog'>В каталог</Link>
                </div>
                <div className="item__actions">
                    <div className="item__slider">
                        <div className="item__slides">
                            <div className="item__slide-img">
                                <img className='item__slide' src={product?.photoUrl} alt='item-picture'></img>
                            </div>
                            <div className="item__slide-img">
                                <img src="/img/bruki.png" alt="trousers" className='item__slide'/>
                            </div>
                            <div className="item__slide-img">
                                <img src="/img/bluzi.png" alt="blouse" className='item__slide'/>
                            </div>
                            <div className="item__slide-img">
                                <img src="/img/combinezoni.png" alt="overalls" className='item__slide'/>
                            </div>
                        </div>
                        <div className="item__slider-actions">
                        <button className="item__slider-btn item__slider-btn_left" onClick={()=>{
                                switchSlide('left')
                            }}>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.0076 6.06795C12.8178 6.1242 11.517 7.38279 7.29121 11.5945C4.01465 14.857 1.75762 17.1633 1.66621 17.332C1.46934 17.7117 1.46934 18.2883 1.66621 18.668C1.89121 19.0828 12.5436 29.707 12.8811 29.8476C14.1256 30.3609 15.4053 29.0742 14.8428 27.8789C14.7514 27.689 13.4014 26.2969 10.6943 23.5898C8.48652 21.389 6.67949 19.5609 6.67949 19.5328C6.67949 19.5047 12.7193 19.4695 20.1021 19.4625L33.5248 19.4414L33.8342 19.2305C34.8045 18.5484 34.6639 17.0789 33.5951 16.6289C33.3631 16.5375 31.8725 16.5234 20.0037 16.5234C12.6771 16.5234 6.67949 16.5023 6.67949 16.4742C6.67949 16.4461 8.52871 14.5687 10.7857 12.3047C14.8146 8.26873 14.892 8.18436 14.9623 7.83982C15.2084 6.65154 14.1748 5.71639 13.0076 6.06795Z"
                                        fill="#727F90"/>
                                </svg>
                            </button>
                            <div className="item__other-slides">
                                <div style={{width: '12px', height:'12px', backgroundColor: '#000000'}} className="item__slider-circle" id='0'></div>
                                <div className="item__slider-circle" id='1'></div>
                                <div className="item__slider-circle" id='2'></div>
                                <div className="item__slider-circle" id='3'></div>
                            </div>
                            <button className="item__slider-btn item__slider-btn_right" onClick={()=>{
                                switchSlide('right')
                            }}>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22.9924 29.9321C23.1822 29.8758 24.483 28.6172 28.7088 24.4055C31.9854 21.143 34.2424 18.8367 34.3338 18.668C34.5307 18.2883 34.5307 17.7117 34.3338 17.332C34.1088 16.9172 23.4564 6.29299 23.1189 6.15236C21.8744 5.63908 20.5947 6.9258 21.1572 8.12111C21.2486 8.31096 22.5986 9.70314 25.3057 12.4102C27.5135 14.611 29.3205 16.4391 29.3205 16.4672C29.3205 16.4953 23.2807 16.5305 15.8979 16.5375L2.47519 16.5586L2.16582 16.7695C1.1955 17.4516 1.33613 18.9211 2.40488 19.3711C2.63691 19.4625 4.12754 19.4766 15.9963 19.4766C23.3229 19.4766 29.3205 19.4977 29.3205 19.5258C29.3205 19.5539 27.4713 21.4313 25.2143 23.6953C21.1854 27.7313 21.108 27.8156 21.0377 28.1602C20.7916 29.3485 21.8252 30.2836 22.9924 29.9321Z"
                                        fill="#727F90"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="item__info">
                        <div className="item__name">{product?.name}</div>
                        <div className="item__price">{Math.trunc(product?.price)}р.</div>
                        <div className="item__selections">
                            <div className="item__market-selections">
                                <div className="item__selection-group">
                                    <div className="item__selection-name">Цвета</div>
                                    <select name="color" id="color" className="item__selection">
                                        <option value={product?.colors[0]}>{product?.colors[0]}</option>
                                        <option value={product?.colors[1]}>{product?.colors[1]}</option>
                                        <option value={product?.colors[2]}>{product?.colors[2]}</option>
                                        <option value={product?.colors[3]}>{product?.colors[3]}</option>
                                    </select>
                                </div>
                                <div className="item__selection-group">
                                    <div className="item__selection-name">Размер</div>
                                    <select name="size" id="size" className="item__selection">
                                        <option value={product?.sizes[0]}>{product?.sizes[0]}</option>
                                        <option value={product?.sizes[1]}>{product?.sizes[1]}</option>
                                        <option value={product?.sizes[2]}>{product?.sizes[2]}</option>
                                        <option value={product?.sizes[3]}>{product?.sizes[3]}</option>
                                    </select>
                                </div>
                                <div className="go-to-sizes">
                                    <Link className="go-to-sizes__link" to='/how-to-order'>Таблица размеров</Link>
                                </div>
                                <div className="item__selection-group">
                                    <div className="item__selection-name">Рост</div>
                                    <select name="growth" id="growth" className="item__selection">
                                        <option value={growth[0]}>{growth[0]}</option>
                                        <option value={growth[1]}>{growth[1]}</option>
                                        <option value={growth[2]}>{growth[2]}</option>
                                        <option value={growth[3]}>{growth[3]}</option>
                                    </select>
                                </div>
                            </div>
                            {ownSelections ? (
                                <div className='item__own-selections-form'>
                                    <div className="item__own-selections-group">
                                        <div className="item__own-selections-name text">Обхват груди</div>
                                        <div className="item__own-selections-field">
                                            <input type="text" className="item__selection"/>
                                        </div>
                                    </div>
                                    <div className="item__own-selections-group">
                                        <div className="item__own-selections-name text">Обхват талии</div>
                                        <div className="item__own-selections-field">
                                            <input type="text" className="item__selection"/>
                                        </div>
                                    </div>
                                    <div className="item__own-selections-group">
                                        <div className="item__own-selections-name text">Обхват бедер</div>
                                        <div className="item__own-selections-field">
                                            <input type="text" className="item__selection"/>
                                        </div>
                                    </div>
                                    <div className="item__own-selections-info">
                                        <div className="item__own-selections-text text">
                                            Если ваши параметры не подходят под размеры на странице Как заказать, укажите на
                                            полях выше
                                        </div>
                                        <svg className='item__own-selections-svg' width="16" height="55" viewBox="0 0 16 55" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.70711 0.292892C8.31658 -0.0976295 7.68342 -0.0976295 7.29289 0.292892L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41422L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM9 55L9 1H7L7 55H9Z"
                                                fill="black"/>
                                        </svg>
                                    </div>
                                </div>
                            ) : (
                                <div className="item__own-selections text" onClick={() => {
                                    setOwnSelections(true)
                                }}>
                                    Свои мерки
                                </div>
                            )}
                        </div>
                        <button className='item__btn' type='submit'>Добавить в карзину</button>
                    </div>
                </div>
                <div className="item__description">
                <div className="item__description-title">О товаре</div>
                    <div className="item__description-text">{product?.description}</div>
                </div>
                <div className="item__see-more">
                    {products.forEach((el) => {
                        if (el.name !== product?.name){
                            moreProducts.push(el)
                        }
                    })}
                    {moreProducts.map((obj) => (
                        <ShopCard
                            name={obj.name}
                            price={obj.price}
                            sizes={obj.size}
                            pictures={obj.photoUrl}
                            colors={obj.color}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ItemCard;