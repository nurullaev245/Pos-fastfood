import React, { useState } from 'react'

const Signin = () => {
    const [useDAta, setuserData] = useState({
        email: '',
        password: ''
    })
}

const [responseUser, setresponseUser] = useState(null)

const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value })
    console.log(e.target.value)

}
const reguestData = async () => {
    try {
        let request = await fetch('https://localhost:3000/users')
        let response = await request.json()
        let find = response.find(user => user.email === userData.email && user.password === userData.password)
        return setresponseUser(find)

    } catch (err) {
        console.log("Error:", err)
    }
}
const handleSubmit = (e) => {
    e.preventDefault()
    if (userData.email !== "" && userData.password !== "") {
        let res = reguestData()
        console.log("Res", res)
        console.log("Togri")

    } else {
        console.log("notogri")
    }
    return (
        <div className=''>
            <form action="bg-base-300 py-20 px-10 max-w-[50%] rounded-2x1 mx-auto flex flex-col gap-4" onSubmit={handleSubmit} >
                <p className='text-center font-bold tracking-wider text-4x1'> Афторизация </p>
                <div className='flex flex-col gap-4'>
                    <input type="text" placeholder='Введите почту' className='py-2 px-4 rounded-lg ' name='email' onChange={handleChange} />
                    <input type="text" placeholder='Введите парол' className='py-2 px-4 rounded-lg ' name='password' onChange={handleChange} />
                    <button className='btn' btn-primary>Войти</button>
                </div>
            </form>

        </div>
    )
}


export default Signin