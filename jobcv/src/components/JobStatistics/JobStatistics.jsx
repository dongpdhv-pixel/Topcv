
import {
    Box,
    Paper,
    Typography
} from '@mui/material'

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

import './JobStatistics.css'


function JobStatistics({ jobs = [], companies = [] }) {

    const statistics = [
        {
            value: jobs.length,
            label: 'Việc làm mới 24h gần nhất'
        },
        {
            value: '45.372',
            label: 'Việc làm đang tuyển'
        },
        {
            value: companies.length,
            label: 'Công ty đang tuyển'
        }
    ]


    return (
        <section className="statistics-section">

            <Typography className="statistics-title">

                Thị trường việc làm hôm nay

                <span>
                    23/08/2026
                </span>

            </Typography>


            <Box className="statistics-content">

                {/* LEFT */}

                <Box className="statistics-left">

                    <Box className="statistics-robot">
                        🤖
                    </Box>


                    <Typography className="latest-title">
                        Việc làm mới nhất
                    </Typography>


                    {jobs.slice(0, 3).map((job, index) => (

                        <Box
                            className="latest-job"
                            key={job.id || index}
                        >

                            <Box className="latest-job-logo">

                                {job.logo_url ? (

                                    <img
                                        src={job.logo_url}
                                        alt=""
                                    />

                                ) : (

                                    <BusinessCenterIcon />

                                )}

                            </Box>


                            <Box>

                                <Typography className="latest-job-name">
                                    {job.title || job.job_name}
                                </Typography>


                                <Typography className="latest-job-company">
                                    {job.company_name || 'Công ty'}
                                </Typography>


                                <Typography className="latest-job-location">
                                    {job.location || 'Hà Nội'}
                                </Typography>

                            </Box>

                        </Box>

                    ))}

                </Box>


                {/* RIGHT */}

                <Box className="statistics-right">

                    <Box className="stat-cards">

                        {statistics.map((item, index) => (

                            <Paper
                                key={index}
                                className="stat-card"
                                elevation={0}
                            >

                                <Typography className="stat-value">
                                    {item.value}
                                </Typography>

                                <Typography className="stat-label">
                                    {item.label}
                                </Typography>

                            </Paper>

                        ))}

                    </Box>


                    <Box className="charts">

                        <Paper
                            className="chart-box"
                            elevation={0}
                        >

                            <Box className="chart-title">

                                <TrendingUpIcon />

                                <Typography>
                                    Tăng trưởng cơ hội việc làm
                                </Typography>

                            </Box>


                            <Box className="fake-line-chart">

                                {[
                                    70, 45, 80, 75, 50,
                                    85, 70, 30, 40, 75,
                                    60, 20, 65, 70, 10
                                ].map((height, index) => (

                                    <Box
                                        key={index}
                                        className="chart-line"
                                        style={{
                                            height: `${height}%`
                                        }}
                                    />

                                ))}

                            </Box>

                        </Paper>


                        <Paper
                            className="chart-box"
                            elevation={0}
                        >

                            <Box className="chart-title">

                                <TrendingUpIcon />

                                <Typography>
                                    Nhu cầu tuyển dụng theo
                                </Typography>

                            </Box>


                            <Box className="bar-chart">

                                {[90, 65, 50, 55, 40].map(
                                    (height, index) => (

                                        <Box
                                            key={index}
                                            className="bar"
                                            style={{
                                                height: `${height}%`
                                            }}
                                        />

                                    )
                                )}

                            </Box>

                        </Paper>

                    </Box>

                </Box>

            </Box>

        </section>
    )
}


export default JobStatistics