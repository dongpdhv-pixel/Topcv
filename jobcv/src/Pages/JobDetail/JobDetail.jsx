import {
    Box,
    Button,
    Container,
    Paper,
    Typography,
    Divider
} from '@mui/material'

import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined'
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'

import './JobDetail.css'


function JobDetail({ setPage, job }) {

    if (!job) {
        return (
            <div className="job-detail-empty">

                <Typography>
                    Không tìm thấy thông tin công việc.
                </Typography>

                <Button
                    onClick={() => setPage('jobs')}
                    className="job-detail-back-btn"
                >
                    ← Quay lại danh sách việc làm
                </Button>

            </div>
        )
    }


    // =========================
    // DATA
    // =========================

    const title =
        job.title ||
        job.name ||
        'Việc làm'


    const companyName =
        job.company?.name ||
        job.company_name ||
        'Tên công ty'


    const logo =
        job.company?.logo ||
        job.company_logo ||
        job.logo ||
        'https://via.placeholder.com/120'


    const location =
        job.city?.name ||
        job.city_name ||
        job.location ||
        job.work_location?.address ||
        'Chưa cập nhật'


    const salary =
        typeof job.salary === 'string'
            ? job.salary
            : job.salary?.is_negotiable
                ? 'Thỏa thuận'
                : `${job.salary?.min || ''} - ${job.salary?.max || ''} ${job.salary?.currency || ''}`


    const experience =
        job.experience ||
        job.experience_level ||
        'Chưa cập nhật'


    const jobType =
        job.jobType ||
        job.job_type ||
        'Toàn thời gian'


    const quantity =
        job.quantity ||
        1


    const deadline =
        job.deadline ||
        job.expired_at ||
        'Chưa cập nhật'


    const description =
        job.description ||
        'Chưa có mô tả công việc.'


    const requirements =
        job.requirement ||
        job.requirements ||
        'Chưa có yêu cầu ứng viên.'


    const benefits =
        job.benefit ||
        job.benefits ||
        'Chưa có thông tin quyền lợi.'


    // =========================
    // RENDER CONTENT
    // =========================

    const renderContent = (content) => {

        if (!content) {
            return null
        }

        const isHTML =
            /<\/?[a-z][\s\S]*>/i.test(content)

        if (isHTML) {
            return (
                <div
                    className="job-rich-text"
                    dangerouslySetInnerHTML={{
                        __html: content
                    }}
                />
            )
        }

        return (
            <Typography className="job-detail-text">
                {content}
            </Typography>
        )
    }


    return (

        <div className="job-detail-page">

            {/* =================================
                SEARCH HEADER
            ================================= */}

            <div className="job-detail-search">

                <Container maxWidth="lg">

                    <div className="job-detail-search-box">

                        <div className="job-detail-search-input">
                            🔍
                            <span>
                                Tìm kiếm việc làm
                            </span>
                        </div>

                        <div className="job-detail-search-location">
                            📍
                            <span>
                                Tất cả địa điểm
                            </span>
                        </div>

                        <button>
                            Tìm kiếm
                        </button>

                    </div>

                </Container>

            </div>


            <Container maxWidth="lg">


                {/* =================================
                    BREADCRUMB
                ================================= */}

                <div className="job-breadcrumb">

                    <button
                        onClick={() => setPage('home')}
                    >
                        Trang chủ
                    </button>

                    <span>›</span>

                    <button
                        onClick={() => setPage('jobs')}
                    >
                        Việc làm
                    </button>

                    <span>›</span>

                    <span>
                        {title}
                    </span>

                </div>


                {/* =================================
                    TOP JOB
                ================================= */}

                <div className="job-detail-layout">


                    {/* LEFT */}

                    <div className="job-detail-left">


                        {/* JOB HEADER */}

                        <Paper
                            className="job-detail-top-card"
                            elevation={0}
                        >

                            <div className="job-social">

                                <button>
                                    f
                                </button>

                                <button>
                                    X
                                </button>

                                <button>
                                    in
                                </button>

                                <button>
                                    <ShareOutlinedIcon />
                                </button>

                            </div>


                            <h1>
                                {title}
                            </h1>


                            <div className="job-price">
                                {salary}

                                <span>
                                    Xem mức lương thị trường cho vị trí này →
                                </span>
                            </div>


                            {/* META */}

                            <div className="job-meta-grid">

                                <div className="job-meta-item">

                                    <PlaceOutlinedIcon />

                                    <div>
                                        <span>
                                            Địa điểm
                                        </span>

                                        <strong>
                                            {location}
                                        </strong>
                                    </div>

                                </div>


                                <div className="job-meta-item">

                                    <WorkOutlineOutlinedIcon />

                                    <div>
                                        <span>
                                            Kinh nghiệm
                                        </span>

                                        <strong>
                                            {experience}
                                        </strong>
                                    </div>

                                </div>


                                <div className="job-meta-item">

                                    <AccessTimeOutlinedIcon />

                                    <div>
                                        <span>
                                            Hạn ứng tuyển
                                        </span>

                                        <strong>
                                            {deadline}
                                        </strong>
                                    </div>

                                </div>

                            </div>


                            {/* BUTTON */}

                            <div className="job-action-row">

                                <Button
                                    className="job-apply-button"
                                    startIcon={
                                        <SendOutlinedIcon />
                                    }
                                >
                                    Ứng tuyển ngay
                                </Button>


                                <Button
                                    className="job-save-button"
                                    startIcon={
                                        <FavoriteBorderIcon />
                                    }
                                >
                                    Lưu tin
                                </Button>

                            </div>

                        </Paper>


                        {/* SECURITY */}

                        <div className="job-safe-box">

                            <span>
                                🛡️
                            </span>

                            <strong>
                                100% tin đăng tải trên TopCV được cung cấp bởi các Nhà tuyển dụng đã được xác thực thông tin.
                            </strong>

                        </div>


                        {/* OVERVIEW */}

                        <Paper
                            className="job-section-card"
                            elevation={0}
                        >

                            <div className="section-heading">
                                Tổng quan
                            </div>


                            <div className="overview-row">

                                <strong>
                                    Yêu cầu:
                                </strong>

                                <div className="overview-tags">

                                    <span>
                                        {experience} kinh nghiệm
                                    </span>

                                    <span>
                                        {job.gender || 'Không yêu cầu'}
                                    </span>

                                    <span>
                                        {job.job_type || jobType}
                                    </span>

                                </div>

                            </div>


                            <div className="overview-row">

                                <strong>
                                    Quyền lợi:
                                </strong>

                                <div className="overview-tags">

                                    <span>
                                        Bảo hiểm
                                    </span>

                                    <span>
                                        Khám sức khỏe
                                    </span>

                                    <span>
                                        Thưởng
                                    </span>

                                </div>

                            </div>


                            <div className="overview-row">

                                <strong>
                                    Chuyên môn:
                                </strong>

                                <div className="overview-tags">

                                    <span>
                                        {job.category || 'Chưa cập nhật'}
                                    </span>

                                </div>

                            </div>


                            <Divider sx={{ my: 2 }} />


                            {/* DESCRIPTION */}

                            <div className="section-heading">
                                Mô tả công việc
                            </div>

                            {renderContent(description)}


                            <Divider sx={{ my: 2 }} />


                            {/* REQUIREMENT */}

                            <div className="section-heading">
                                Yêu cầu ứng viên
                            </div>

                            {renderContent(requirements)}


                            <Divider sx={{ my: 2 }} />


                            {/* BENEFIT */}

                            <div className="section-heading">
                                Quyền lợi ứng viên
                            </div>

                            {renderContent(benefits)}


                            <Divider sx={{ my: 2 }} />


                            {/* LOCATION */}

                            <div className="section-heading">
                                Địa điểm và thời gian
                            </div>

                            <Typography className="job-detail-text">
                                <strong>
                                    Địa điểm làm việc
                                </strong>
                                <br />
                                {location}
                            </Typography>


                            <div className="job-bottom-apply">

                                <Button
                                    className="job-apply-button"
                                    startIcon={
                                        <SendOutlinedIcon />
                                    }
                                >
                                    Ứng tuyển ngay
                                </Button>

                                <Button
                                    className="job-save-button"
                                    startIcon={
                                        <FavoriteBorderIcon />
                                    }
                                >
                                    Lưu tin
                                </Button>

                            </div>

                        </Paper>

                    </div>


                    {/* =================================
                        RIGHT SIDEBAR
                    ================================= */}

                    <div className="job-detail-right">


                        {/* COMPANY */}

                        <Paper
                            className="company-detail-card"
                            elevation={0}
                        >

                            <div className="company-detail-top">

                                <div className="company-detail-logo">

                                    <img
                                        src={logo}
                                        alt={companyName}
                                    />

                                </div>


                                <Typography>
                                    {companyName}
                                </Typography>

                            </div>


                            <div className="company-info-item">

                                <BusinessOutlinedIcon />

                                <div>
                                    <span>
                                        Quy mô
                                    </span>

                                    <strong>
                                        {job.company?.size ||
                                            '100-499 nhân viên'}
                                    </strong>
                                </div>

                            </div>


                            <div className="company-info-item">

                                <PlaceOutlinedIcon />

                                <div>
                                    <span>
                                        Địa điểm
                                    </span>

                                    <strong>
                                        {location}
                                    </strong>
                                </div>

                            </div>


                            <div className="company-info-item">

                                <PeopleOutlineOutlinedIcon />

                                <div>
                                    <span>
                                        Ngành nghề
                                    </span>

                                    <strong>
                                        {job.category ||
                                            'Chưa cập nhật'}
                                    </strong>
                                </div>

                            </div>


                            <Button
                                className="company-page-button"
                            >
                                Xem trang công ty ↗
                            </Button>

                        </Paper>


                        {/* GENERAL INFO */}

                        <Paper
                            className="company-detail-card"
                            elevation={0}
                        >

                            <div className="side-title">
                                Thông tin chung
                            </div>


                            <div className="side-info">

                                <WorkOutlineOutlinedIcon />

                                <div>
                                    <span>
                                        Hình thức làm việc
                                    </span>

                                    <strong>
                                        {jobType}
                                    </strong>
                                </div>

                            </div>


                            <div className="side-info">

                                <PeopleOutlineOutlinedIcon />

                                <div>
                                    <span>
                                        Số lượng tuyển
                                    </span>

                                    <strong>
                                        {quantity} người
                                    </strong>
                                </div>

                            </div>


                            <div className="side-info">

                                <AccessTimeOutlinedIcon />

                                <div>
                                    <span>
                                        Kinh nghiệm
                                    </span>

                                    <strong>
                                        {experience}
                                    </strong>
                                </div>

                            </div>


                            <div className="side-info">

                                <BusinessOutlinedIcon />

                                <div>
                                    <span>
                                        Loại hình làm việc
                                    </span>

                                    <strong>
                                        {jobType}
                                    </strong>
                                </div>

                            </div>

                        </Paper>


                        {/* SECURITY TIPS */}

                        <Paper
                            className="safety-card"
                            elevation={0}
                        >

                            <div className="side-title">
                                🟢 Bí kíp Tìm việc an toàn
                            </div>

                            <p>
                                Dưới đây là những thông tin giúp bạn nhận biết tin tuyển dụng và nhà tuyển dụng.
                            </p>

                            <p>
                                1. Kiểm tra thông tin công ty trước khi ứng tuyển.
                            </p>

                            <p>
                                2. Không cung cấp thông tin nhạy cảm ngoài phạm vi cần thiết.
                            </p>

                        </Paper>

                    </div>

                </div>


                {/* STICKY BAR */}

                <div className="job-detail-sticky">

                    <div className="sticky-tab active">
                        Chi tiết tin tuyển dụng
                    </div>

                    <div className="sticky-tab">
                        Việc làm liên quan
                    </div>

                    <Button>
                        <SendOutlinedIcon />
                        Ứng tuyển ngay
                    </Button>

                </div>

            </Container>

        </div>
    )
}

export default JobDetail