import { useEffect, useState } from 'react'

import {
    Box,
    Button,
    Container,
    Paper,
    Typography,
    InputBase,
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'


import { getData } from '../../Services/data.service'

import JobList from '../../components/JobList/JobList'

import './Home.css'
import CompanyList  from "../../components/CompanyList/CompanyList.jsx";
import JobStatistics from '../../components/JobStatistics/JobStatistics.jsx'
function Home() {

    const [jobs, setJobs] = useState([])
    const [companies, setCompanies] = useState([])
    useEffect(() => {

        async function loadData() {

            try {

                const data = await getData()
                setCompanies(data.companies || [])
                setJobs(data.jobs)

            } catch (error) {

                console.error(error)

            }

        }

        loadData()

    }, [])


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

            {/* HERO */}

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


            {/* JOB LIST */}

            <Container maxWidth="lg">

                <JobList jobs={jobs} />

            </Container>

            <Container maxWidth="lg">

                <CompanyList companies={companies} />
                <JobStatistics jobs={jobs} companies={companies} />

            </Container>


        </>
    )
}

export default Home