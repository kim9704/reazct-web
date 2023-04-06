import style from './module/header.module.css'
import UserContext from '../../Global/UserContext';
import { useContext } from 'react';

function Header() {
    const lang = JSON.parse(useContext(UserContext))
    const onClickHandle = (event)=>{
        var clas = document.getElementsByClassName('btn_icon')
        for(let i = 0; i < clas.length;i++){
            clas[i].classList.remove(style.active)
        }
        event.target.classList.add(style.active)
    }
    return (
        <header className={style.header}>
           <ul  className={style.menu}>
                <li className={style.menu_item} onClick={(event)=>{
                    onClickHandle(event)
                }}><a href='/buy'><img className='btn_icon' style={{
                    width:'1.3em',
                    height:'1.3em',
                    padding:'10px 20px'
                }} src={require('../../assets/coin.png')} /></a></li>
                <li className={style.menu_item} onClick={(event)=>{
                    onClickHandle(event)
                }}><a href='/train'>
                    <img className='btn_icon' style={{
                    width:'1.3em',
                    height:'1.3em',
                    padding:'10px 20px'
                }}  src={require('../../assets/train.png')} /></a></li>
                <li className={style.menu_item} onClick={(event)=>{
                    onClickHandle(event)
                }}><a href='/'>
                    <img className='btn_icon'style={{
                    width:'1.3em',
                    height:'1.3em',
                    padding:'10px 20px'
                }}  src={require('../../assets/home.png')} /></a></li>
                <li className={style.menu_item} onClick={(event)=>{
                    onClickHandle(event)
                }}><a href='/connect'>
                    <img className='btn_icon' style={{
                    width:'1.3em',
                    height:'1.3em',
                    padding:'10px 20px'
                }}  src={require('../../assets/connect.png')} /></a></li>
                <li className={style.menu_item} onClick={(event)=>{
                    onClickHandle(event)
                }}><a href='/person'>
                    <img className='btn_icon' style={{
                    width:'1.3em',
                    height:'1.3em',
                    padding:'10px 20px'
                }}  src={require('../../assets/person.png')} /></a></li>
            </ul>
        </header>
    );
}

export default Header;

