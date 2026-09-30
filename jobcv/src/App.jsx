import { useEffect, useState } from 'react'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './Pages/Home/Home.jsx'
import Jobs from './Pages/Jobs/Jobs.jsx'
import JobDetail from './Pages/JobDetail/JobDetail.jsx'
import Companies from './Pages/Companies/Companies'
import CompanyDetail from './Pages/CompanyDetail/CompanyDetail'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import PostJob from './Pages/PostJob/PostJob'


function App() {

    // =========================
    // USER ĐANG ĐĂNG NHẬP
    // =========================

    const [user, setUser] = useState(() => {

        const savedUser =
            localStorage.getItem('topcv_user')

        return savedUser
            ? JSON.parse(savedUser)
            : null
    })


    // =========================
    // PAGE
    // =========================

    const [page, setPage] = useState('home')


    // =========================
    // JOB ĐANG ĐƯỢC CHỌN
    // =========================

    const [selectedJob, setSelectedJob] = useState(null)


    // =========================
    // REFRESH JOB
    // =========================

    const [refreshJobs, setRefreshJobs] = useState(0)


    // =========================
    // CLICK VÀO JOB CARD
    // =========================

    const handleJobClick = (job) => {

        setSelectedJob(job)

        setPage('job-detail')
    }


    // =========================
    // NÚT BACK TRÌNH DUYỆT
    // =========================

    useEffect(() => {

        const handleBack = () => {
            setPage('home')
        }

        window.addEventListener(
            'popstate',
            handleBack
        )

        return () => {

            window.removeEventListener(
                'popstate',
                handleBack
            )

        }

    }, [])


    return (
        <>


            {/* =========================
                HEADER
            ========================= */}

            {page !== 'register' && (

                <Header
                    setPage={setPage}
                    user={user}
                />

            )}



            {/* =========================
                HOME
            ========================= */}

            {page === 'home' && (

                <Home
                    setPage={setPage}
                    refreshJobs={refreshJobs}
                    onJobClick={handleJobClick}
                />

            )}



            {/* =========================
                JOBS
            ========================= */}

            {page === 'jobs' && (

                <Jobs
                    onJobClick={handleJobClick}
                />

            )}



            {/* =========================
                JOB DETAIL
            ========================= */}

            {page === 'job-detail' && (

                <JobDetail
                    setPage={setPage}
                    job={selectedJob}
                />

            )}



            {/* =========================
                POST JOB
            ========================= */}

            {page === 'post-job' && (

                <PostJob
                    setPage={setPage}
                    setRefreshJobs={setRefreshJobs}
                />

            )}



            {/* =========================
                LOGIN
            ========================= */}

            {page === 'login' && (

                <Login
                    setPage={setPage}
                    setUser={setUser}
                />

            )}



            {/* =========================
                REGISTER
            ========================= */}

            {page === 'register' && (

                <Register
                    setPage={setPage}
                    setUser={setUser}
                />

            )}



            {/* =========================
                COMPANIES
            ========================= */}

            {page === 'companies' && (

                <Companies
                    setPage={setPage}
                />

            )}



            {/* =========================
                COMPANY DETAIL
            ========================= */}

            {page === 'company-detail' && (

                <CompanyDetail
                    setPage={setPage}
                />

            )}

           <Footer />
        </>
    )
}

export default App