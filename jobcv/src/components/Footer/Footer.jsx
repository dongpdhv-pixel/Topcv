import {
    Box,
    Container,
    Typography,
    IconButton
} from '@mui/material'

import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MusicNoteIcon from '@mui/icons-material/MusicNote'

import './Footer.css'


function Footer() {

    const jobLinks = [
        'Việc làm',
        'Việc làm Hà Nội',
        'Việc làm TP. HCM',
        'Việc làm Cần Thơ',
        'Việc làm Đà Nẵng',
        'Việc làm Hải Phòng',
        'Việc làm Thanh Hóa',
        'Việc làm Bình Dương',
        'Việc làm Đồng Nai',
        'Việc làm Tây Ninh',
        'Việc làm Đà Lạt',
        'Việc làm Gia Lai',
        'Việc làm Nha Trang',
        'Việc làm Bà Rịa - Vũng Tàu',
        'Việc làm Huế',
        'Việc làm Gia sư tại Hà Nội',
        'Việc làm Lái xe tại Hà Nội',
        'Việc làm Tài xế tại Cần Thơ',
        'Việc làm Tài xế tại TP. HCM',
        'Việc làm Tài xế B2 tại TP. HCM',
        'Việc làm Kế toán tại Hà Nội',
        'Việc làm Kế toán tại TP. HCM',
        'Việc làm Kế toán tại Đà Nẵng',
        'Việc làm Marketing tại Hà Nội',
        'Việc làm Marketing tại TP. HCM',
        'Việc làm Marketing tại Đà Nẵng',
        'Việc làm Ngân hàng tại Hà Nội',
        'Việc làm Ngân hàng tại TP. HCM',
        'Việc làm Ngân hàng tại Đà Nẵng',
        'Việc làm Nhân viên kinh doanh',
        'Việc làm Marketing',
        'Việc làm Nhân viên Marketing',
        'Việc làm Content Marketing',
        'Việc làm Kế toán',
        'Việc làm Tài chính/Ngân hàng/Bảo hiểm',
        'Việc làm Ngân hàng',
        'Việc làm Hành chính nhân sự',
        'Việc làm Logistics',
        'Việc làm Sales Logistics',
        'Việc làm Xây dựng',
        'Việc làm Kỹ sư xây dựng',
        'Việc làm Tester',
        'Việc làm Lập trình viên .Net',
        'Việc làm Lập trình viên Java',
        'Việc làm Lập trình viên PHP',
        'Việc làm Lao động phổ thông',
        'Việc làm Sản xuất',
        'Việc làm Chăm sóc khách hàng'
    ]

    const cvLinks = [
        'Việc làm Online tại nhà',
        'Tra cứu mức lương tại Việt Nam',
        'Tính lương Gross - Net',
        'Tính thuế thu nhập cá nhân',
        'Trắc nghiệm tính cách MBTI',
        'Mẫu CV',
        'Mẫu CV theo vị trí công việc',
        'Mẫu CV tiếng Anh',
        'Mẫu CV tiếng Nhật',
        'Mẫu CV tiếng Trung',
        'Mẫu CV Kế toán',
        'Mẫu CV Nhân viên kinh doanh',
        'Mẫu CV Hành chính nhân sự',
        'Mẫu CV Lập trình viên',
        'Mẫu CV cho sinh viên/thực tập sinh',
        'CV là gì?',
        'Cách viết CV xin việc',
        'Cách viết CV cho sinh viên chưa tốt nghiệp',
        'Cách viết CV tiếng Anh',
        'Cách viết CV Tiếng Hàn',
        'Cách viết CV Tiếng Nhật',
        'Cách viết CV Tiếng Trung',
        'Cách viết CV xin học bổng du học',
        'Sửa lỗi gõ tiếng Việt trên Unikey khi viết CV',
        'Mẫu Cover Letter',
        'Mẫu bìa hồ sơ xin việc',
        'Mẫu sơ yếu lý lịch',
        'Mẫu đơn xin nghỉ phép',
        'Mẫu đơn xin nghỉ việc',
        'Mẫu đơn xin việc',
        'Mẫu đơn xin việc thực tập',
        'Mẫu email xin việc bằng tiếng Anh',
        'Cẩm nang ngành Công nghệ thông tin',
        'Cẩm nang ngành Công nghệ thực phẩm',
        'Cẩm nang ngành Du lịch',
        'Cẩm nang ngành Logistics'
    ]


    return (
        <footer className="footer">


            {/* =========================================
                BÁO CHÍ
            ========================================= */}

            <section className="footer-media">

                <Container maxWidth="lg">

                    <Typography className="footer-media-title">
                        Báo chí nói về TopCV
                    </Typography>


                    <div className="footer-media-list">

                        <a
                            href="https://vietnambiz.vn/topcv-va-thuocsi-la-2-startup-viet-duoc-google-ho-tro-tang-toc-khoi-nghiep-20200807110033455.htm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="media-logo"
                        >
                            Vietnambiz
                        </a>


                        <a
                            href="https://cafebiz.vn/topcv-nhan-cu-dup-giai-thuong-sao-khue-2021-202104271838343.chn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="media-logo"
                        >
                            CafeBiz
                        </a>


                        <a
                            href="https://baodautu.vn/goi-von-trieu-do-topcv-tap-trung-phat-trien-cong-nghe-gia-tang-hieu-qua-tuyen-dung-d147798.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="media-logo"
                        >
                            Đầu tư Online
                        </a>


                        <a
                            href="https://baodautu.vn/goi-von-trieu-do-topcv-tap-trung-phat-trien-cong-nghe-gia-tang-hieu-qua-tuyen-dung-d147798.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="media-logo"
                        >
                            GENK
                        </a>


                        <a
                            href="https://kenh14.vn/tao-cv-ha-guc-nha-tuyen-dung-chi-trong-mot-buoc-20210301205913038.chn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="media-logo"
                        >
                            kenh14.vn
                        </a>


                        <a
                            href="https://theleader.vn/chien-luoc-thu-hut-nhan-tai-thoi-ky-vang-hau-covid-19-d22265.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="media-logo"
                        >
                            TheLEADER
                        </a>

                    </div>

                </Container>

            </section>


            {/* =========================================
                LINK SEO
            ========================================= */}

            <section className="footer-links-section">

                <Container maxWidth="lg">

                    <div className="footer-link-cloud">

                        {jobLinks.map((item, index) => (

                            <a
                                href="#"
                                key={`job-${index}`}
                                onClick={(e) => e.preventDefault()}
                            >
                                {item}
                            </a>

                        ))}


                        {cvLinks.map((item, index) => (

                            <a
                                href="#"
                                key={`cv-${index}`}
                                onClick={(e) => e.preventDefault()}
                            >
                                {item}
                            </a>

                        ))}

                    </div>

                </Container>

            </section>


            {/* =========================================
                FOOTER MAIN
            ========================================= */}

            <section className="footer-main">

                <Container maxWidth="lg">

                    <div className="footer-main-grid">


                        {/* =============================
                            LOGO + LIÊN HỆ
                        ============================= */}

                        <div className="footer-brand">

                            <div className="footer-logo">
                                top<span>CV</span>
                            </div>

                            <div className="footer-tagline">
                                Tiếp lợi thế, nối thành công
                            </div>


                            <div className="footer-startup">
                                <strong>
                                    Google
                                </strong>

                                <span>
                                    for Startups
                                </span>

                                <small>
                                    Accelerator 2020
                                </small>
                            </div>


                            <h3>
                                Liên hệ
                            </h3>


                            <div className="footer-contact">

                                <p>
                                    Hotline:
                                    <strong>
                                        1900 068 889
                                    </strong>
                                    <strong>
                                        {' '}| Nhánh 2
                                    </strong>
                                    {' '}
                                    (Giờ hành chính)
                                </p>

                                <p>
                                    Email:
                                    <strong>
                                        hotro@topcv.vn
                                    </strong>
                                </p>

                                <p>
                                    Zalo hỗ trợ ứng viên:
                                    <strong>
                                        Kết nối ngay →
                                    </strong>
                                </p>

                                <p>
                                    Fanpage:
                                    <strong>
                                        TopCV Vietnam
                                    </strong>
                                </p>

                                <p>
                                    LinkedIn:
                                    <strong>
                                        TopCV Vietnam
                                    </strong>
                                </p>

                                <p>
                                    Thread:
                                    <strong>
                                        TopCV Vietnam
                                    </strong>
                                </p>

                                <p>
                                    Tiktok:
                                    <strong>
                                        TopCV Vietnam
                                    </strong>
                                </p>

                            </div>


                            <h3>
                                Ứng dụng tải xuống
                            </h3>


                            <div className="footer-apps">

                                <div className="app-badge">
                                    <b></b>
                                    <span>
                                        Download on the
                                        <strong>
                                            App Store
                                        </strong>
                                    </span>
                                </div>


                                <div className="app-badge">

                                    <b>
                                        ▶
                                    </b>

                                    <span>
                                        GET IT ON
                                        <strong>
                                            Google Play
                                        </strong>
                                    </span>

                                </div>

                            </div>


                            <h3>
                                Cộng đồng TopCV
                            </h3>


                            <div className="footer-social">

                                <IconButton>
                                    <FacebookIcon />
                                </IconButton>

                                <IconButton>
                                    <YouTubeIcon />
                                </IconButton>

                                <IconButton>
                                    <LinkedInIcon />
                                </IconButton>

                                <IconButton>
                                    <MusicNoteIcon />
                                </IconButton>

                            </div>

                        </div>


                        {/* =============================
                            CỘT 1
                        ============================= */}

                        <div className="footer-column">

                            <h3>
                                Về TopCV
                            </h3>

                            <a>Giới thiệu</a>
                            <a>Góc báo chí</a>
                            <a>Tuyển dụng</a>
                            <a>Liên hệ</a>
                            <a>Hỏi đáp</a>
                            <a>Chính sách quyền riêng tư</a>
                            <a>Cài đặt Cookie</a>
                            <a>Điều khoản dịch vụ</a>


                            <h3 className="footer-subtitle">
                                Đối tác
                            </h3>

                            <a>TestCenter</a>
                            <a>TopHR</a>
                            <a>ViecNgay</a>
                            <a>Happy Time</a>

                        </div>


                        {/* =============================
                            CỘT 2
                        ============================= */}

                        <div className="footer-column">

                            <h3>
                                Hồ sơ & CV
                            </h3>

                            <a>
                                Quản lý CV của bạn
                            </a>

                            <a>
                                Hướng dẫn viết CV
                            </a>

                            <a>
                                Thư viện CV theo ngành nghề
                            </a>


                            <h3 className="footer-subtitle">
                                Khám phá
                            </h3>

                            <a>
                                Ứng dụng di động TopCV
                            </a>

                            <a>
                                Tính lương Gross - Net
                            </a>

                            <a>
                                Tính lãi suất kép
                            </a>

                            <a>
                                Lập kế hoạch tiết kiệm
                            </a>

                            <a>
                                Tính bảo hiểm thất nghiệp
                            </a>

                            <a>
                                Tính bảo hiểm xã hội một lần
                            </a>

                            <a>
                                Trắc nghiệm MBTI
                            </a>

                            <a>
                                Trắc nghiệm MI
                            </a>

                        </div>


                        {/* =============================
                            CỘT 3
                        ============================= */}

                        <div className="footer-column">

                            <h3>
                                Xây dựng sự nghiệp
                            </h3>

                            <a>
                                Việc làm nổi bật
                            </a>

                            <a>
                                Việc làm lương cao
                            </a>

                            <a>
                                Việc làm quản lý
                            </a>

                            <a>
                                Việc làm IT
                            </a>

                            <a>
                                Việc làm Senior
                            </a>

                            <a>
                                Việc làm bán thời gian
                            </a>


                            <h3 className="footer-subtitle">
                                Quy tắc chung
                            </h3>

                            <a>
                                Điều kiện giao dịch chung
                            </a>

                            <a>
                                Giá dịch vụ & Cách thanh toán
                            </a>

                            <a>
                                Thông tin về vận chuyển
                            </a>

                        </div>

                    </div>

                </Container>

            </section>


            {/* =========================================
                COMPANY INFO
            ========================================= */}

            <section className="footer-company">

                <Container maxWidth="lg">

                    <div className="footer-company-content">


                        <div className="footer-company-info">

                            <h2>
                                Công ty Cổ phần TopCV Việt Nam
                            </h2>


                            <p>
                                🟩 Giấy phép đăng ký kinh doanh số:
                                <strong>
                                    0107307178
                                </strong>
                                cấp ngày 21/01/2016
                            </p>

                            <p>
                                🟩 Giấy phép hoạt động dịch vụ việc làm số:
                                <strong>
                                    44/2024/SLĐTBXH-GP
                                </strong>
                            </p>

                            <p>
                                📍 Trụ sở HN:
                                <strong>
                                    Tòa FS - GoldSeason số 47 Nguyễn Tuân,
                                    Phường Thanh Xuân, Thành phố Hà Nội, Việt Nam
                                </strong>
                            </p>

                            <p>
                                📍 Chi nhánh HCM:
                                <strong>
                                    Tòa nhà Dali, 24C Phan Đăng Lưu,
                                    Phường Gia Định, TP HCM
                                </strong>
                            </p>


                            <h3 className="ecosystem-title">
                                Hệ sinh thái HR Tech của TopCV
                            </h3>


                            <div className="ecosystem-grid">

                                <div className="ecosystem-card ecosystem-topcv">
                                    <strong>
                                        topCV
                                    </strong>

                                    <span>
                                        Nền tảng công nghệ tuyển dụng thông minh TopCV.vn
                                    </span>
                                </div>


                                <div className="ecosystem-card ecosystem-happy">
                                    <strong>
                                        ☼
                                    </strong>

                                    <span>
                                        Nền tảng quản lý & gia tăng trải nghiệm nhân viên HappyTime.vn
                                    </span>
                                </div>


                                <div className="ecosystem-card ecosystem-test">
                                    <strong>
                                        ✓
                                    </strong>

                                    <span>
                                        Nền tảng thiết lập và đánh giá năng lực nhân viên TestCenter.vn
                                    </span>
                                </div>


                                <div className="ecosystem-card ecosystem-shring">
                                    <strong>
                                        S
                                    </strong>

                                    <span>
                                        Giải pháp quản trị tuyển dụng hiệu suất cao SHring.ai
                                    </span>
                                </div>

                            </div>

                        </div>


                        {/* QR */}

                        <div className="footer-qr">

                            <div className="qr-placeholder">
                                QR
                            </div>

                            <strong>
                                topcv.com.vn
                            </strong>

                        </div>

                    </div>


                    <div className="footer-copyright">
                        © 2014-2026 TopCV Vietnam JSC. All rights reserved.
                    </div>

                </Container>

            </section>

        </footer>
    )
}

export default Footer