import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const Signin = () => {
    const [userData, setUserData] = useState({ email: '', password: '' });
    const { handleLogin } = useOutletContext();

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userData.email !== "" && userData.password !== "") {
            handleLogin(userData.email, userData.password);
        } else {
            alert('Заполните все поля');
        }
    };

    return (
        <div className=''>
            <form className='bg-base-300 py-20 px-10 max-w-[50%] rounded-2xl mx-auto my-10 flex flex-col gap-4' onSubmit={handleSubmit}>
                <p className='text-center font-bold tracking-wider text-4xl'>Авторизация</p>
                <div className='flex flex-col gap-4'>
                    <input type='text' placeholder='Введите почту' className='py-2 px-4 rounded-lg' name='email' onChange={handleChange} />
                    <input type='password' placeholder='Введите пароль' className='py-2 px-4 rounded-lg' name='password' onChange={handleChange} />
                    <button className='btn btn-primary'>Войти</button>
                </div>
            </form>
        </div>
    );
};

export default Signin;
