import { useEffect, useState } from 'react'

import {
    Box,
    Button,
    Container,
    Paper,
    Typography,
    InputBase
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import { getJobs, getCompanies } from '../../Services/data.service'

import JobList from '../../components/JobList/JobList'
import CompanyList from '../../components/CompanyList/CompanyList.jsx'

import './Home.css'

function Home({ setPage, refreshJobs, onJobClick }) {

    const [jobs, setJobs] = useState([])
    const [companies, setCompanies] = useState([])

    useEffect(() => {

        async function loadData() {

            try {

                const jobsResult = await getJobs({
                    page: 1
                })

                const companiesResult = await getCompanies()

                console.log('JOBS RESULT:', jobsResult)
                console.log('COMPANIES RESULT:', companiesResult)


               // Job từ API

                let jobList = jobsResult.data || []



                // JOB VỪA ĐĂNG

                const savedJob =
                    localStorage.getItem('topcv_new_job')


                if (savedJob) {

                    try {

                        const newJob =
                            JSON.parse(savedJob)

                        // Đưa tin mới lên đầu
                        jobList = [
                            newJob,
                            ...jobList
                        ]

                    } catch (error) {

                        console.error(
                            'Không đọc được job vừa đăng:',
                            error
                        )

                    }
                }



                // HIỂN THỊ


                setJobs(jobList)

                setCompanies(
                    companiesResult.data || []
                )

            } catch (error) {

                console.error(
                    'Lỗi lấy dữ liệu:',
                    error
                )


                // API LỖI VẪN HIỆN JOB MỚI

                const savedJob =
                    localStorage.getItem('topcv_new_job')


                if (savedJob) {

                    try {

                        const newJob =
                            JSON.parse(savedJob)

                        setJobs([newJob])

                    } catch (error) {

                        console.error(error)

                    }

                }

            }

        }

        loadData()

    }, [refreshJobs])


    const categories = [
        'Kinh doanh/Bán hàng',
        'Marketing/PR/Quảng cáo',
        'Chăm sóc khách hàng (Customer Service)',
        'Nhân sự/Hành chính/Pháp chế',
        'Công nghệ Thông tin',
        'Lao động phổ thông'
    ]


    return (
        <>

            <Box className="hero">

                <Container maxWidth="lg">

                    <Typography
                        className="hero-title"
                        variant="h4"
                    >
                        TopCV - Tạo CV, Tìm việc làm, Tuyển dụng hiệu quả
                    </Typography>


                    <Paper
                        className="search-container"
                        elevation={0}
                    >

                        <InputBase
                            className="keyword-input"
                            placeholder="Vị trí tuyển dụng, tên công ty"
                        />

                        <Box className="location-box">

                            <LocationOnOutlinedIcon />

                            <Typography>
                                Địa điểm
                            </Typography>

                            <KeyboardArrowDownIcon />

                        </Box>


                        <Button
                            className="search-button"
                            startIcon={<SearchIcon />}
                        >
                            Tìm kiếm
                        </Button>

                    </Paper>


                    <Box className="hero-content">

                        <Paper
                            className="category-box"
                            elevation={0}
                        >

                            {categories.map((category) => (

                                <Box
                                    key={category}
                                    className="category-item"
                                >

                                    <Typography>
                                        {category}
                                    </Typography>

                                    <ChevronRightIcon />

                                </Box>

                            ))}

                        </Paper>


                        <Paper
                            className="promo-banner"
                            elevation={0}
                        >

                            <Box className="promo-content">

                                <Typography className="promo-small">
                                    Cơ hội được đề xuất
                                </Typography>

                                <Typography className="promo-title">
                                    Kiếm thêm
                                    <span> thu nhập </span>
                                    khi đang tìm việc
                                </Typography>

                                <Button className="promo-button">
                                    Khám phá ngay →
                                </Button>

                            </Box>

                        </Paper>

                    </Box>

                </Container>

            </Box>





            {/* JOB */}


                {/*BANNER AN TOÀN*/}


            <div className="safe-banner">

                <span>
                    🔎
                </span>

                <strong>
                    Tìm việc an toàn cùng TopCV
                </strong>

                <button>
                    Tìm hiểu thêm →
                </button>

            </div>


            {/* VIỆC LÀM NỔI BẬT*/}

            <Box className="featured-jobs">

                <Container maxWidth="lg">

                    <div className="featured-header">

                        <div>

                            <h2>
                                Việc làm nổi bật
                            </h2>

                            <p>
                                Tìm kiếm cơ hội việc làm phù hợp với bạn
                            </p>

                        </div>


                        <button
                            onClick={() => setPage('jobs')}
                        >
                            Xem tất cả →
                        </button>

                    </div>


                    {/* TABS */}

                    <div className="featured-tabs">

                        <button className="active">
                            Việc văn phòng
                        </button>

                        <button>
                            Việc phổ thông
                        </button>

                    </div>


                    {/* FILTER */}

                    <div className="featured-filter">

                        <span>
                            ⚙ Lọc theo:
                        </span>

                        <button className="active">
                            Ngẫu nhiên
                        </button>

                        <button>
                            Hà Nội
                        </button>

                        <button>
                            Thành phố Hồ Chí Minh
                        </button>

                        <button>
                            Miền Bắc
                        </button>

                        <button>
                            Miền Nam
                        </button>

                    </div>


                    {/* NOTE */}

                    <div className="featured-note">

                        💡 Di chuột vào tiêu đề việc làm để xem thêm thông tin chi tiết

                    </div>


                    {/* JOB LIST */}

                    <JobList
                        jobs={jobs.slice(0, 6)}
                        onJobClick={onJobClick}
                    />

                </Container>

            </Box>



            {/* COMPANY */}

            <Container maxWidth="lg">

                <CompanyList companies={companies} />

            </Container>

        </>
    )
}

export default Home