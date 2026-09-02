import {
    Box,
    Paper,
    Typography,
    IconButton
} from '@mui/material'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import './JobCard.css'

function JobCard({ job }) {

    console.log('LOGO:', job.company?.logo_url)

    return (
        <Paper className="job-card" elevation={0}>

            <Box className="job-logo">

                <img
                    src={job.company?.logo_url}
                    alt="logo"
                    onError={(e) => {
                        console.log('Ảnh lỗi:', e.currentTarget.src)
                    }}
                    onLoad={() => {
                        console.log('Ảnh load thành công')
                    }}
                />

            </Box>

            <Box className="job-content">

                <Typography className="job-title">
                    {job.title}
                </Typography>

                <Typography className="company-name">
                    {job.company?.company_name}
                </Typography>

                <Box className="job-tags">

                    <span>
                        {job.salary?.is_negotiable
                            ? 'Thỏa thuận'
                            : `${job.salary?.min / 1000000} - ${job.salary?.max / 1000000} triệu`
                        }
                    </span>

                    <span>
                        {job.work_location?.[0]?.city_name}
                    </span>

                </Box>

            </Box>

            <IconButton className="favorite-button">
                <FavoriteBorderIcon />
            </IconButton>

        </Paper>
    )
}

export default JobCard