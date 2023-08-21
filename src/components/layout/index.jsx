import './style.css'
import { Instagram, Mail, Telegram } from '../svg'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <div className='mainLayout'>
            <div className='topLayout'>
                <div className='topLayoutBlock'>
                    <img alt='' src={require('../../assets/refectioLogo.png')} onClick={() => window.location = '/'} />
                    <p>Агрегатор производителей мебели и предметов интерьера <br />по индивидуальным размерам.</p>
                </div>
            </div>
            <div className='topLayoutBlockBottom' />
            <div className='middleLayout'>
                <div className='middleLayoutBlock'>
                    <p>Все производители</p>
                    <span onClick={() => window.location = '/auth/login'}>Вход/Регистрация</span>
                </div>
            </div>
            <div className='layoutSeparator' />

            <Outlet />

            <div className='layoutSeparator' />
            <div className='bottomLayout'>
                <div className='bottomLayoutBlock'>
                    <div className='socialMedias'>
                        <div><Instagram /></div>
                        <div> <Telegram /> </div>
                        <div> <Mail /> </div>
                    </div>
                    <span>Refectio © 2023. <br />Все права защищены.</span>
                </div>
            </div>
        </div>
    )
}