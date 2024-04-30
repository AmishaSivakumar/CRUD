import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Newcontext } from '../Routing/Router'

function View() {
    const [data, setData] = useContext(Newcontext)
    const { id } = useParams()
    // console.log(index);
    const viewData = data[id]
    return (
        <div className="container mt-5">
            <h3 className='text-center'>VIEW</h3>
            <hr />
            <div className='mt-5 p-5 bg-light shadow rounded'>
                <h2 >Name: {viewData.name}</h2>
                <h3>Class: {viewData.class}</h3>
                <h3>Mark: {viewData.mark}</h3>
            </div>
        </div>


    )
}

export default View

