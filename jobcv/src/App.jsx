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


// =========================
// LẤY PAGE TỪ URL
// =========================

const getPageFromPath = () => {

    const path = window.location.pathname

    switch (path) {

        case '/':
        case '/home':
            return 'home'

        case '/jobs':
            return 'jobs'

        case '/job-detail':
            return 'job-detail'

        case '/companies':
            return 'companies'

        case '/company-detail':
            return 'company-detail'

        case '/login':
            return 'login'

        case '/register':
        case '/sign-up':
            return 'register'

        case '/post-job':
            return 'post-job'

        default:
            return 'home'
    }
}


function App() {

    // =========================
    // USER
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

    const [page, setPage] = useState(
        getPageFromPath()
    )


    // =========================
    // JOB ĐANG CHỌN
    // =========================

    const [selectedJob, setSelectedJob] =
        useState(null)


    // =========================
    // REFRESH JOB
    // =========================

    const [refreshJobs, setRefreshJobs] =
        useState(0)


    // =========================
    // CHUYỂN TRANG
    // =========================

    const navigate = (nextPage) => {

        const paths = {
            home: '/',
            jobs: '/jobs',
            'job-detail': '/job-detail',
            companies: '/companies',
            'company-detail': '/company-detail',
            login: '/login',
            register: '/register',
            'post-job': '/post-job'
        }


        const nextPath =
            paths[nextPage] || '/'


        // thêm lịch sử trình duyệt
        window.history.pushState(
            {
                page: nextPage
            },
            '',
            nextPath
        )


        setPage(nextPage)
    }


    // =========================
    // CLICK JOB
    // =========================

    const handleJobClick = (job) => {

        setSelectedJob(job)

        navigate('job-detail')
    }


    // =========================
    // BACK / FORWARD
    // =========================

    useEffect(() => {

        // Đảm bảo trang hiện tại có history state
        window.history.replaceState(
            {
                page: getPageFromPath()
            },
            '',
            window.location.pathname
        )


        const handlePopState = (event) => {

            const pageFromHistory =
                event.state?.page ||
                getPageFromPath()


            setPage(pageFromHistory)
        }


        window.addEventListener(
            'popstate',
            handlePopState
        )


        return () => {

            window.removeEventListener(
                'popstate',
                handlePopState
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
                    setPage={navigate}
                    user={user}
                    setUser={setUser}
                />

            )}


            {/* =========================
                HOME
            ========================= */}

            {page === 'home' && (

                <Home
                    setPage={navigate}
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
                    setPage={navigate}
                    job={selectedJob}
                />

            )}


            {/* =========================
                POST JOB
            ========================= */}

            {page === 'post-job' && (

                <PostJob
                    setPage={navigate}
                    setRefreshJobs={setRefreshJobs}
                />

            )}


            {/* =========================
                LOGIN
            ========================= */}

            {page === 'login' && (

                <Login
                    setPage={navigate}
                    setUser={setUser}
                />

            )}


            {/* =========================
                REGISTER
            ========================= */}

            {page === 'register' && (

                <Register
                    setPage={navigate}
                    setUser={setUser}
                />

            )}


            {/* =========================
                COMPANIES
            ========================= */}

            {page === 'companies' && (

                <Companies
                    setPage={navigate}
                />

            )}


            {/* =========================
                COMPANY DETAIL
            ========================= */}

            {page === 'company-detail' && (

                <CompanyDetail
                    setPage={navigate}
                />

            )}
        <Footer />
        </>
    )
}

export default App