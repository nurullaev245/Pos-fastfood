import React, { useState } from 'react';

const Signin = () => {
  const [userData, setuserData] = useState({
    email: '',
    password: ''
  });

  const [responseUser, setresponseUser] = useState(null);

  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const requestData = async () => {
    try {
      let request = await fetch('http://localhost:3000/users');
      let response = await request.json();
      let find = response.find(user => user.email === userData.email && user.password === userData.password);
      return setresponseUser(find);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.email !== "" && userData.password !== "") {
      let res = requestData();
      console.log("RES", res);
      console.log("Togri");
    } else {
      console.log("notogri");
    }
  };

  return (
    <div className=''>
      <form className='bg-base-300 py-20 px-10 max-w-[50%] rounded-2xl mx-auto my-10 flex flex-col gap-4' onSubmit={handleSubmit}>
        <p className='text-center font-bold tracking-wider text-4xl'>Авторизация</p>
        <div className='flex flex-col gap-4'>
          <input type='text' placeholder='Введите почту' className='py-2 px-4 rounded-lg' name='email' onChange={handleChange} />
          <input type='text' placeholder='Введите пароль' className='py-2 px-4 rounded-lg' name='password' onChange={handleChange} />
          <button className='btn btn-primary'>Войти</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;