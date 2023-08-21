import './style.css'
import { Search } from '../../components/svg'
import { EachManufacturer } from '../../components/eachManufacturer'

export const AllManufacturers = () => {
    const manufacturers = [
        {
            id: 1,
            avatar: 'manufacturer.png',
            name: 'Лайт Кухни',
            location: 'Италия',
            categories: [
                {
                    name: 'Прихожые'
                },
                {
                    name: 'Гостиные'
                },
                {
                    name: 'Детские'
                },
                {
                    name: 'Прихожые'
                },
                {
                    name: 'Гостиные'
                },
                {
                    name: 'Детские'
                },
                {
                    name: 'Прихожые'
                },
                {
                    name: 'Гостиные'
                },
            ],
            products: [
                {
                    image: 'product1.png',
                    title: 'Кухня ЛРАЙ145 МДФ ПВХ Сатин Бежевый/СИСТЕМА',
                    facades: 'эмаль',
                    body: 'ДСП',
                    top: 'Камень',
                    width: '8 метров*',
                    price: '1.200.000 руб.'
                },
                {
                    image: 'product1.png',
                    title: 'Кухня ЛРАЙ145 МДФ ПВХ Сатин Бежевый/СИСТЕМА',
                    facades: 'эмаль',
                    body: 'ДСП',
                    top: 'Камень',
                    width: '8 метров*',
                    price: '1.200.000 руб.'
                },
                {
                    image: 'product1.png',
                    title: 'Кухня ЛРАЙ145 МДФ ПВХ Сатин Бежевый/СИСТЕМА',
                    facades: 'эмаль',
                    body: 'ДСП',
                    top: 'Камень',
                    width: '8 метров*',
                    price: '1.200.000 руб.'
                },
            ]
        },
        {
            id: 2,
            avatar: 'manufacturer.png',
            name: 'Лайт Кухни',
            location: 'Италия',
            categories: [
                {
                    name: 'Прихожые'
                },
                {
                    name: 'Гостиные'
                },
                {
                    name: 'Детские'
                },
                {
                    name: 'Детские'
                },
                {
                    name: 'Детские'
                }
            ],
            products: [
                {
                    image: 'product1.png',
                    title: 'Кухня ЛРАЙ145 МДФ ПВХ Сатин Бежевый/СИСТЕМА',
                    facades: 'эмаль',
                    body: 'ДСП',
                    top: 'Камень',
                    width: '8 метров*',
                    price: '1.200.000 руб.'
                },
            ]
        },
        {
            id: 3,
            avatar: 'manufacturer.png',
            name: 'Лайт Кухни',
            location: 'Италия',
            categories: [
                {
                    name: 'Прихожые'
                },
                {
                    name: 'Гостиные'
                },
                {
                    name: 'Детские'
                }
            ],
            products: [
                {
                    image: 'product1.png',
                    title: 'Кухня ЛРАЙ145 МДФ ПВХ Сатин Бежевый/СИСТЕМА',
                    facades: 'эмаль',
                    body: 'ДСП',
                    top: 'Камень',
                    width: '8 метров*',
                    price: '1.200.000 руб.'
                },
                {
                    image: 'product1.png',
                    title: 'Кухня ЛРАЙ145 МДФ ПВХ Сатин Бежевый/СИСТЕМА',
                    facades: 'эмаль',
                    body: 'ДСП',
                    top: 'Камень',
                    width: '8 метров*',
                    price: '1.200.000 руб.'
                },
                {
                    image: 'product1.png',
                    title: 'Кухня ЛРАЙ145 МДФ ПВХ Сатин Бежевый/СИСТЕМА',
                    facades: 'эмаль',
                    body: 'ДСП',
                    top: 'Камень',
                    width: '8 метров*',
                    price: '1.200.000 руб.'
                },
                {
                    image: 'product1.png',
                    title: 'Кухня ЛРАЙ145 МДФ ПВХ Сатин Бежевый/СИСТЕМА',
                    facades: 'эмаль',
                    body: 'ДСП',
                    top: 'Камень',
                    width: '8 метров*',
                    price: '1.200.000 руб.'
                },
            ]
        }
    ]

    return (
        <div className='allManufacturersPage'>
            <div className='allManuPageTitle'>
                <h1>Производители</h1>
                <div className='allManuPageSearch'>
                    <input placeholder='Поиск...' />
                    <div className='allManuPageSearchBg'>
                        <Search />
                    </div>
                </div>
            </div>

            <div className='allManufacturers'>
                {manufacturers?.length > 0
                    ? manufacturers.map((e, i) => (
                        <EachManufacturer manufacturers={e} key={i} />
                    ))
                    : <span>Нет производителей</span>
                }
            </div>
        </div>
    )
}