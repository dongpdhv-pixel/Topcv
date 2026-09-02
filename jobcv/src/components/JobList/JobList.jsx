import {
    Box,
    Button,
    Typography
} from '@mui/material'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import JobCard from '../JobCard/JobCard'

import './JobList.css'

function JobList({ jobs }) {

    return (
        <section className="job-section">

            {/* Header */}

            <Box className="job-section-header">

                <Typography
                    component="h2"
                    className="job-section-title"
                >
                    Việc làm tốt nhất
                </Typography>


                <Box className="job-section-actions">

                    <Button>
                        Việc văn phòng
                    </Button>

                    <Button>
                        Việc phổ thông
                    </Button>

                    <a href="#">
                        Xem tất cả
                    </a>

                    <button>
                        <ChevronLeftIcon />
                    </button>

                    <button>
                        <ChevronRightIcon />
                    </button>

                </Box>

            </Box>


            {/* Filter */}

            <Box className="job-filter">

                <Button>
                    ☰ &nbsp; Lọc theo: &nbsp; Địa điểm
                </Button>

                <Box className="location-filter">

                    <Button>
                        <ChevronLeftIcon />
                    </Button>

                    <span>Ngẫu Nhiên</span>

                    <span>Hà Nội</span>

                    <span>Thành phố Hồ Chí Minh (cũ)</span>

                    <span>Miền Bắc</span>

                    <span>Miền Nam</span>

                    <Button>
                        <ChevronRightIcon />
                    </Button>

                </Box>

            </Box>


            {/* Gợi ý */}

            <Box className="job-notice">

                💡

                <strong> Gợi ý:</strong>

                Di chuột vào tiêu đề việc làm để xem thêm thông tin chi tiết

            </Box>


            {/* Jobs */}

            <Box className="job-grid">

                {jobs.map((job) => (

                    <JobCard
                        key={job.id}
                        job={job}
                    />

                ))}

            </Box>

        </section>
    )
}

export default JobList