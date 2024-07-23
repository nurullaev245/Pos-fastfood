import React, { useState } from 'react';

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username) {
      alert('Придумайте логин!');
      return;
    }
    if (!password) {
      alert('Придумайте пароль!');
      return;
    }
    if (!email) {
      alert('Напишите email!');
      return;
    }
    if (!phone) {
      alert('Напишите номер телефона!');
      return;
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <div className='text-center font-bold text-4xl py-40 px-10'>Регистрация успешно прошла!</div>;
  }

  return (
    <div>
      <form 
        onSubmit={handleSubmit} 
        className='bg-base-300 py-20 px-10 max-w-[50%] rounded-2xl mx-auto my-10 flex flex-col gap-4'
      >
        <p className='text-center font-bold tracking-wider text-4xl'>Авторизация</p>
        <div className='flex flex-col gap-4'>
          <input 
            type='text' 
            placeholder='Придумайте логин' 
            className='py-2 px-4 rounded-lg' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type='password' 
            placeholder='Придумайте пароль' 
            className='py-2 px-4 rounded-lg' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <input 
            type='email' 
            placeholder='Введите @email' 
            className='py-2 px-4 rounded-lg' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type='tel' 
            placeholder='Введите тел.номер' 
            className='py-2 px-4 rounded-lg' 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type='submit' className='btn btn-primary'>Готово</button>
        </div>
      </form> 
    </div>
  );
};

export default Signup;
