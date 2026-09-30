import { useEffect, useState } from 'react'

import {
    Box,
    Button,
    CircularProgress,
    Container,
    IconButton,
    InputBase,
    Paper,
    Typography
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import TuneIcon from '@mui/icons-material/Tune'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import { getJobs } from '../../Services/data.service'
import JobCard from '../../components/JobCard/JobCard'

import './Jobs.css'


function Jobs({onJobClick}) {

    const [jobs, setJobs] = useState([])

    const [page, setPage] = useState(1)

    const [keyword, setKeyword] = useState('')

    const [cityId, setCityId] = useState('')

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState('')


    const locations = [
        {
            id: '',
            name: 'Ngẫu nhiên'
        },
        {
            id: 1,
            name: 'Hà Nội'
        },
        {
            id: 2,
            name: 'Thành phố Hồ Chí Minh'
        },
        {
            id: 3,
            name: 'Miền Bắc'
        },
        {
            id: 4,
            name: 'Miền Nam'
        }
    ]


    const loadJobs = async () => {

        try {

            setLoading(true)
            setError('')

            const data = await getJobs({
                page,
                keyword,
                city_id: cityId
            })

            console.log('JOB API:', data)

            /*
             * API có thể trả về:
             *
             * []
             *
             * hoặc:
             *
             * {
             *    data: []
             * }
             *
             * hoặc:
             *
             * {
             *    items: []
             * }
             */

            if (Array.isArray(data)) {

                setJobs(data)

            } else if (Array.isArray(data.data)) {

                setJobs(data.data)

            } else if (Array.isArray(data.items)) {

                setJobs(data.items)

            } else if (Array.isArray(data.jobs)) {

                setJobs(data.jobs)

            } else {

                setJobs([])

            }

        } catch (err) {

            console.error(err)

            setError('Không thể tải danh sách việc làm')

            setJobs([])

        } finally {

            setLoading(false)

        }
    }


    useEffect(() => {

        loadJobs()

    }, [page, cityId])


    const handleSearch = () => {

        setPage(1)

        loadJobs()

    }


    const handleLocation = (id) => {

        setCityId(id)
        setPage(1)

    }


    return (

        <Box className="jobs-page">

            {/* ================= HEADER SEARCH ================= */}

            <Box className="jobs-search-section">

                <Container maxWidth="lg">

                    <Paper
                        className="jobs-search-box"
                        elevation={0}
                    >

                        {/* KEYWORD */}

                        <Box className="jobs-search-item">

                            <SearchIcon />

                            <InputBase
                                placeholder="Tìm kiếm việc làm"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                onKeyDown={(e) => {

                                    if (e.key === 'Enter') {
                                        handleSearch()
                                    }

                                }}
                            />

                        </Box>


                        <Box className="jobs-search-divider" />


                        {/* LOCATION */}

                        <Box className="jobs-search-item">

                            <LocationOnOutlinedIcon />

                            <Typography>
                                Tất cả địa điểm
                            </Typography>

                        </Box>


                        <Button
                            className="jobs-search-button"
                            onClick={handleSearch}
                        >

                            <SearchIcon />

                            Tìm kiếm

                        </Button>

                    </Paper>

                </Container>

            </Box>


            {/* ================= MAIN ================= */}

            <Container
                maxWidth="lg"
                className="jobs-container"
            >

                {/* TITLE */}

                <Box className="jobs-title-row">

                    <Box>

                        <Typography
                            className="jobs-title"
                        >
                            Việc làm tốt nhất
                        </Typography>

                        <Typography
                            className="jobs-subtitle"
                        >
                            Tìm kiếm cơ hội việc làm phù hợp với bạn
                        </Typography>

                    </Box>

                </Box>


                {/* ================= LOCATION FILTER ================= */}

                <Box className="jobs-filter-wrapper">

                    <Box className="jobs-filter-title">

                        <TuneIcon />

                        <Typography>
                            Lọc theo:
                        </Typography>

                    </Box>


                    <Box className="jobs-location-list">

                        <IconButton
                            className="location-arrow"
                            onClick={() => {
                                const index = locations.findIndex(
                                    item => item.id === cityId
                                )

                                if (index > 0) {
                                    handleLocation(
                                        locations[index - 1].id
                                    )
                                }
                            }}
                        >

                            <ChevronLeftIcon />

                        </IconButton>


                        {locations.map((location) => (

                            <Button
                                key={location.id}
                                className={
                                    cityId === location.id
                                        ? 'location-button active'
                                        : 'location-button'
                                }
                                onClick={() =>
                                    handleLocation(location.id)
                                }
                            >

                                {location.name}

                            </Button>

                        ))}


                        <IconButton
                            className="location-arrow"
                            onClick={() => {

                                const index = locations.findIndex(
                                    item => item.id === cityId
                                )

                                if (
                                    index < locations.length - 1
                                ) {

                                    handleLocation(
                                        locations[index + 1].id
                                    )

                                }

                            }}
                        >

                            <ChevronRightIcon />

                        </IconButton>

                    </Box>

                </Box>


                {/* ================= INFO ================= */}

                <Box className="jobs-info">

                    💡

                    <Typography>

                        Di chuột vào tiêu đề việc làm để xem thêm
                        thông tin chi tiết

                    </Typography>

                </Box>


                {/* ================= LOADING ================= */}

                {loading && (

                    <Box className="jobs-loading">

                        <CircularProgress />

                        <Typography>
                            Đang tải việc làm...
                        </Typography>

                    </Box>

                )}


                {/* ================= ERROR ================= */}

                {!loading && error && (

                    <Box className="jobs-error">

                        {error}

                    </Box>

                )}


                {/* ================= JOB LIST ================= */}

                {!loading && !error && (

                    <Box className="jobs-grid">

                        {jobs.length > 0 ? (

                            jobs.map((job) => (

                                <JobCard
                                    key={job.id}
                                    job={job}
                                    onClick={() => onJobClick?.(job)}
                                />

                            ))

                        ) : (

                            <Box className="jobs-empty">

                                <Typography>
                                    Không tìm thấy việc làm
                                </Typography>

                            </Box>

                        )}

                    </Box>

                )}


                {/* ================= PAGINATION ================= */}

                {!loading && jobs.length > 0 && (

                    <Box className="jobs-pagination">

                        <IconButton
                            disabled={page === 1}
                            onClick={() =>
                                setPage(page - 1)
                            }
                        >

                            <ChevronLeftIcon />

                        </IconButton>


                        <Box className="page-number active">
                            {page}
                        </Box>


                        <IconButton
                            onClick={() =>
                                setPage(page + 1)
                            }
                        >

                            <ChevronRightIcon />

                        </IconButton>

                    </Box>

                )}

            </Container>

        </Box>
    )
}

export default Jobs