import { useContext, useState } from 'react'
import { Newcontext } from '../Routing/Router'
import { useNavigate, useParams } from 'react-router-dom'


function Delete() {
    const navigate = useNavigate()
    const [data, setData] = useContext(Newcontext)
    const { details } = useParams()
    // const deleterow = () => {
    //     const newData = data.filter((item, index) => index != details)
    //     setData(newData)
    //     navigate(-1)
    // }
    // deleterow()
    console.log(data);


    return null;
}

export default Delete