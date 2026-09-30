import {
    Box,
    IconButton,
    Typography
} from '@mui/material'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import './JobCard.css'


function JobCard({ job, onClick }) {

    return (

        <Box className="job-card"
        onClick={onClick}>

            {/* LOGO */}

            <Box className="job-logo">

                <img
                    src={
                        job.company?.logo ||
                        job.company_logo ||
                        job.logo ||
                        'https://via.placeholder.com/80'
                    }
                    alt=""
                />

            </Box>


            {/* CONTENT */}

            <Box className="job-content">

                <Typography
                    className="job-name"
                    title={job.title || job.name}
                >

                    {job.title || job.name || 'Việc làm'}

                </Typography>


                <Typography className="job-company">

                    {
                        job.company?.name ||
                        job.company_name ||
                        'Tên công ty'
                    }

                </Typography>


                <Box className="job-bottom">

                    <Box className="job-tag">

                        <div>
                            {job.salary?.is_negotiable
                                ? "Thỏa thuận"
                                : `${job.salary?.min} - ${job.salary?.max} ${job.salary?.currency}`}
                        </div>

                    </Box>


                    <Box className="job-tag">

                        {
                            job.city?.name ||
                            job.city_name ||
                            'Hà Nội'
                        }

                    </Box>

                </Box>

            </Box>


            {/* FAVORITE */}

            <IconButton className="job-favorite">

                <FavoriteBorderIcon />

            </IconButton>

        </Box>
    )
}

export default JobCard