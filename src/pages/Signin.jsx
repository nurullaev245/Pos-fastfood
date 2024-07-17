import React from 'react';

const Signin = () => {
  return (
    <div>
        <form className='bg-base-300 py-20 px-10 max-w-[50%] rounded-2xl mx-auto my-10 flex flex-col gap-4'>
            <p className='text-center font-bold tracking-wider text-4xl'>Авторизация</p>
            <div className='flex flex-col gap-4'>
                <input type='text' placeholder='Введите логин' className='py-2 px-4 rounded-lg' />
                <input type='text' placeholder='Введите пароль' className='py-2 px-4 rounded-lg' />
                <button className='btn btn-primary'>Войти</button>
            </div>
        </form> 
    </div>
    
  );
}

export default Signin;
