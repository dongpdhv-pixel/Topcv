import {
    Box,
    Button,
    Paper,
    Typography
} from '@mui/material'

import AddIcon from '@mui/icons-material/Add'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'

import './CompanyCard.css'


function CompanyCard({ company, featured = false }) {

    const logo = company?.logo_url


    // =========================
    // COMPANY FEATURED
    // =========================

    if (featured) {

        return (
            <Paper
                className="company-featured"
                elevation={0}
            >

                <Box className="featured-content">

                    <Box className="featured-logo">

                        <img
                            src={logo}
                            alt={company?.company_name || 'Company'}
                            onError={(e) => {
                                e.currentTarget.style.display = 'none'
                            }}
                        />

                    </Box>


                    <Typography className="featured-name">
                        {company?.company_name || 'Tên công ty'}
                    </Typography>


                    <Typography className="featured-category">
                        {company?.category || 'Khác'}
                    </Typography>


                    <Box className="featured-job-count">

                        <BusinessCenterIcon />

                        <span>
                            {company?.job_count || 0} việc làm
                        </span>

                    </Box>


                    <Button className="featured-pro">
                        Pro Company
                    </Button>


                    <Button
                        className="featured-follow"
                        startIcon={<AddIcon />}
                    >
                        Theo dõi
                    </Button>

                </Box>

            </Paper>
        )
    }


    // =========================
    // COMPANY CARD
    // =========================

    return (
        <Paper
            className="company-card"
            elevation={0}
        >

            <Box className="company-logo">

                <img
                    src={logo}
                    alt={company?.company_name || 'Company'}
                    onError={(e) => {
                        e.currentTarget.style.display = 'none'
                    }}
                />

            </Box>


            <Box className="company-info">

                <Typography
                    className="company-name"
                    title={company?.company_name}
                >
                    {company?.company_name || 'Tên công ty'}
                </Typography>


                <Typography className="company-category">
                    {company?.category || 'Khác'}
                </Typography>


                <Box className="company-job-count">

                    <BusinessCenterIcon />

                    <span>
                        {company?.job_count || 0} việc làm
                    </span>

                </Box>

            </Box>

        </Paper>
    )
}


export default CompanyCard