import { Link, useNavigate } from 'react-router-dom';
import '../css/catalog.css';
import { getItemByName } from '../api';

function ShopCard(props){

    // const navigate = useNavigate()

    // const handleClick = async () => {
    //     try {
    //         const itemData = await getItemByName(props.name);
    //         navigate(`/cloth/item/${props.name}`, {
    //             state: {
    //                 name: itemData.name,
    //                 price: itemData.price,
    //                 photo: itemData.photoUrl,
    //                 sizes: itemData.sizes,
    //                 colors: itemData.colors,
    //                 description: itemData.description,
    //             }
    //         });
    //     } catch (error) {
    //         console.error('Error fetching item data:', error);
    //     }
    // };

    return(
        <Link to={`/cloth/item/${props.name}`} className='link'>
            <div className="card">
                <div className='card__image'>
                    <img className='card__image-img' src={props.pictures} alt={props.name}></img>
                    <svg className='card__favorite' width="40" height="40" viewBox="0 0 40 40" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8203 6.01562C7.83591 6.48438 5.37498 8.25781 4.02341 10.9062C2.81248 13.2812 2.62498 16.2344 3.52341 18.8047C5.02341 23.0859 9.60935 27.9453 16.5625 32.625C18.4219 33.875 18.789 34.0234 20 34.0234C21.1406 34.0234 21.5859 33.8516 23.0625 32.875C30.1875 28.1562 34.9453 23.1641 36.4765 18.8047C37.1953 16.75 37.2265 14.4062 36.5547 12.3047C35.3047 8.35938 31.5625 5.74219 27.5 5.96094C25.75 6.05469 24.2969 6.54688 22.7734 7.5625C22.0234 8.05469 20.7969 9.1875 20.25 9.88281L20 10.1953L19.75 9.88281C19.2422 9.23438 17.9609 8.04688 17.2734 7.59375C16.1562 6.84375 15.1015 6.39062 13.875 6.125C13.2031 5.97656 11.4687 5.92188 10.8203 6.01562ZM13.2265 8.00781C14.5781 8.24219 15.9531 8.90625 17.039 9.85156C17.5937 10.3281 18.3672 11.2422 18.8515 11.9922C19.3047 12.6953 19.5234 12.8984 19.8984 12.9375C20.3437 12.9922 20.6094 12.7812 21.2578 11.8203C22.6094 9.84375 24.3203 8.58594 26.3906 8.07031C27.1875 7.86719 28.8359 7.89062 29.6562 8.10938C32.2656 8.80469 34.2109 10.8281 34.8984 13.5625C35 13.9766 35.0312 14.4297 35.0312 15.5078C35.0312 16.8203 35.0156 16.9609 34.8125 17.6172C34.1172 19.8828 32.7109 22.0234 30.2344 24.5625C28.125 26.7188 25.3984 28.9531 22.3437 31.0156C20.1484 32.4922 19.8359 32.4922 17.539 30.9297C14.4844 28.8594 11.8828 26.7344 9.7656 24.5625C7.0781 21.8125 5.64841 19.5547 5.07029 17.1484C4.86716 16.3047 4.86716 14.7578 5.07029 13.7891C5.37498 12.3125 5.98435 11.1328 6.97654 10.1016C8.64841 8.35938 10.9062 7.60156 13.2265 8.00781Z"
                            fill="#727F90"/>
                    </svg>
                </div>
                <div className="card__description">
                    <div className='card__price'>{props.price}</div>
                    <div className="card__name">{props.name}</div>
                </div>
            </div>
        </Link>
    );
}

export default ShopCard;