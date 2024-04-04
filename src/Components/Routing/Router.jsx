import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentTable from '../Table/Table'
import { students } from '../Table/Data'
import View from '../Table/View'
import Create from '../Table/Create'
import Edit from '../Table/Edit'


export const Newcontext = createContext()


function Router() {
    const [data, setData] = useState(students)
    return (
        <Newcontext.Provider value={[data, setData]}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<StudentTable />} />
                    <Route path='/view/:id' element={<View />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/edit/:id' element={<Edit />} />
                </Routes>
            </BrowserRouter>
        </Newcontext.Provider>
    )
}

export default Router