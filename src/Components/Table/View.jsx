import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Newcontext } from '../Routing/Router'
import { Button } from 'react-bootstrap'

function View() {
    const [data, setData] = useContext(Newcontext)
    const { id } = useParams()
    // console.log(index);
    const viewData = data[id]
    return (
        <div className="container mt-5">
            <h3 className='text-center'>VIEW</h3>
            <hr />
            <div className='mt-5 p-5 bg-light shadow rounded m-auto'>
                <h2 >Name: {viewData.name}</h2>
                <h3>Class: {viewData.class}</h3>
                <h3>Mark: {viewData.mark}</h3>
                <Link to={'/'} >
                    <Button variant="secondary" className='mt-2'> Back</Button>
                </Link>
            </div>
        </div>


    )
}

export default View

