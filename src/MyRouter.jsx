import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import { AllManufacturers } from './pages/allManufacturers'
import { Login } from './pages/login'

export const MyRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<AllManufacturers />} />
                    <Route path='/auth/login' element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}