import style from './module/header.module.css'
import UserContext from '../../Global/UserContext';
import { useContext } from 'react';

function Top() {
    const lang = JSON.parse(useContext(UserContext))
    const onClickHandle = (event)=>{
        event.target.classList.add(style.active)
    }
    return (
        <div style={{
            height:'40px',
            backgroundColor:'black'
        }}>
           
        </div>
    );
}

export default Top;

