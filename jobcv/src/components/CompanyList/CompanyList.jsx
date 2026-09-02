import {
    Box,
    Button,
    IconButton,
    Typography
} from '@mui/material'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import CompanyCard from '../CompanyCard/CompanyCard'

import './CompanyList.css'


function CompanyList({ companies = [] }) {

    const categories = [
        'Tất cả',
        'Ngân hàng',
        'Bất động sản',
        'Xây dựng',
        'IT - Phần mềm',
        'Tài chính',
        'Bán lẻ - Hàng tiêu dùng - FMCG',
        'Sản xuất'
    ]


    return (
        <section className="company-section">

            {/* BANNER */}

            <Box className="company-banner">

                <Box>

                    <Typography className="banner-title">
                        Thương hiệu lớn tiêu biểu
                    </Typography>

                    <Typography className="banner-description">
                        Hàng trăm thương hiệu lớn tiêu biểu đang tuyển dụng trên TopCV Pro
                    </Typography>

                </Box>


                <Button className="pro-company-button">
                    Pro Company
                </Button>

            </Box>


            {/* CATEGORY */}

            <Box className="company-category-wrapper">

                <Box className="company-categories">

                    {categories.map((category, index) => (

                        <Button
                            key={category}
                            className={
                                index === 0
                                    ? 'company-category active'
                                    : 'company-category'
                            }
                        >
                            {category}
                        </Button>

                    ))}

                </Box>


                <Box className="category-arrows">

                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>

                </Box>

            </Box>


            {/* COMPANIES */}

            <Box className="company-layout">

                {companies.length > 0 && (

                    <CompanyCard
                        company={companies[0]}
                        featured={true}
                    />

                )}


                <Box className="company-grid">

                    {companies.slice(1).map((company, index) => (

                        <CompanyCard
                            key={company?.id || index}
                            company={company}
                        />

                    ))}

                </Box>

            </Box>

        </section>
    )
}


export default CompanyList