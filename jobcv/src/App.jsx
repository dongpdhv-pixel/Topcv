import { useState } from 'react'
import Header from '../src/components/Header/Header.jsx'
import Home from './Pages/Home/Home.jsx'
import Jobs from './Pages/Jobs/Jobs.jsx'
import JobDetail from './Pages/JobDetail/JobDetail.jsx'
import Companies from './Pages/Companies/Companies'
import CompanyDetail from './Pages/CompanyDetail/CompanyDetail'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'



function App() {
  const [page, setPage] = useState('home')

  return (
      <>
      <Header setPage={setPage} />

        {page === 'home'  && (
            <Home setPage={setPage} />
        )}
        {page === 'companies'  && (
            <Companies setPage={setPage} />
            )}
        {page === 'jobs' && (
        <Jobs setPage={setPage} />
        )}

        {page === 'job-detail'  && (
            <JobDetail setPage={setPage} />
        )}

        {page === 'login'  && (
            <Login setPage={setPage} />
        )}

        {page === 'register'  && (
            <Register setPage={setPage} />
        )}

        {page === 'company-detail'  && (
            <CompanyDetail setPage={setPage} />
        )}

        </>
        )
}
export default App