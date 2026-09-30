import { useState } from 'react'
import './Register.css'

function EyeIcon({ visible }) {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
        >
            {visible ? (
                <>
                    <path
                        d="M2 12C2 12 5.5 5 12 5C18.5 5 22 12 22 12C22 12 18.5 19 12 19C5.5 19 2 12 2 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                    />

                    <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </>
            ) : (
                <>
                    <path
                        d="M3 3L21 21"
                        stroke="currentColor"
                        strokeWidth="2"
                    />

                    <path
                        d="M10.6 5.2C11.05 5.07 11.52 5 12 5C18.5 5 22 12 22 12C22 12 20.8 14.4 18.5 16.5"
                        stroke="currentColor"
                        strokeWidth="2"
                    />

                    <path
                        d="M6.2 6.5C3.5 8.7 2 12 2 12C2 12 5.5 19 12 19C13.6 19 15 18.6 16.2 18"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </>
            )}
        </svg>
    )
}


function Register({ setPage, setUser }) {

    // candidate = Ứng viên
    // employer = Nhà tuyển dụng
    const [accountType, setAccountType] = useState('candidate')


    // =========================
    // FORM ỨNG VIÊN
    // =========================

    const [candidateData, setCandidateData] = useState({
        full_name: '',
        email: '',
        password: '',
        confirm_password: ''
    })


    // =========================
    // FORM NHÀ TUYỂN DỤNG
    // =========================

    const [employerData, setEmployerData] = useState({
        email: '',
        tax_code: '',
        company_name: '',
        phone: '',
        representative: '',
        address: '',
        website: '',
        logo: '',
        password: '',
        confirm_password: ''
    })


    const [showPassword, setShowPassword] = useState(false)

    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false)


    const [agree, setAgree] = useState(false)

    const [error, setError] = useState('')

    const [success, setSuccess] = useState(false)

    const saveAccount = (account) => {
        const accounts = JSON.parse(
            localStorage.getItem('topcv_accounts') || '[]'
        )

        const existed = accounts.find(
            item => item.email === account.email
        )

        if (existed) {
            setError('Email này đã được đăng ký.')
            return false
        }

        accounts.push(account)

        localStorage.setItem(
            'topcv_accounts',
            JSON.stringify(accounts)
        )

        return true
    }
    // =========================
    // CHANGE ỨNG VIÊN
    // =========================

    const handleCandidateChange = (e) => {

        setCandidateData({
            ...candidateData,
            [e.target.name]: e.target.value
        })

        setError('')
    }


    // =========================
    // CHANGE NHÀ TUYỂN DỤNG
    // =========================

    const handleEmployerChange = (e) => {

        setEmployerData({
            ...employerData,
            [e.target.name]: e.target.value
        })

        setError('')
    }


    const handleLogoChange = (e) => {

        const file = e.target.files[0]

        if (!file) {
            return
        }

        // Chỉ cho phép ảnh
        if (!file.type.startsWith('image/')) {
            setError('Vui lòng chọn file hình ảnh.')
            return
        }

        const reader = new FileReader()

        reader.onloadend = () => {

            setEmployerData({
                ...employerData,
                logo: reader.result
            })

            setError('')
        }

        reader.readAsDataURL(file)
    }

    // =========================
    // CHUYỂN LOẠI TÀI KHOẢN
    // =========================

    const handleAccountTypeChange = (type) => {

        setAccountType(type)

        setError('')

        setSuccess(false)
    }


    // =========================
    // ĐĂNG KÝ ỨNG VIÊN
    // =========================

    const handleCandidateSubmit = (e) => {

        e.preventDefault()

        if (!agree) {
            setError(
                'Vui lòng đồng ý với điều khoản dịch vụ và chính sách quyền riêng tư.'
            )
            return
        }

        if (
            candidateData.password !==
            candidateData.confirm_password
        ) {
            setError('Mật khẩu xác nhận không khớp.')
            return
        }

        const newUser = {
            full_name: candidateData.full_name,
            email: candidateData.email,
            password: candidateData.password,
            accountType: 'candidate',
            avatar: candidateData.full_name
                ? candidateData.full_name.charAt(0).toUpperCase()
                : 'U'
        }

        // Lưu tài khoản đã đăng ký
        const saved = saveAccount(newUser)

        if (!saved) {
            return
        }

        // Hiện thông báo
        setSuccess(true)

        // Chuyển sang trang đăng nhập
        setTimeout(() => {
            setPage('login')
        }, 1500)
    }


    // =========================
    // ĐĂNG KÝ NHÀ TUYỂN DỤNG
    // =========================

    const handleEmployerSubmit = (e) => {

        e.preventDefault()

        if (!agree) {
            setError(
                'Vui lòng đồng ý với điều khoản dịch vụ và chính sách quyền riêng tư.'
            )
            return
        }

        if (
            employerData.password !==
            employerData.confirm_password
        ) {
            setError('Mật khẩu xác nhận không khớp.')
            return
        }

        const newUser = {
            full_name: employerData.company_name,

            email: employerData.email,

            password: employerData.password,

            accountType: 'employer',

            company_name: employerData.company_name,

            logo: employerData.logo || '',

            avatar: employerData.company_name
                ? employerData.company_name.charAt(0).toUpperCase()
                : 'C'
        }

        // Lưu tài khoản
        const saved = saveAccount(newUser)

        if (!saved) {
            return
        }

        // Thông báo đăng ký thành công
        setSuccess(true)

        // Sau khi đăng ký xong -> sang đăng nhập
        setTimeout(() => {
            setPage('login')
        }, 1500)
    }

    return (

        <div className="register-page">


            {/* =========================
                CARD
            ========================= */}

            <div className="register-card">


                {/* =========================
                    LOGO
                ========================= */}

                <div className="register-logo">

                    <span className="register-title">
                        Đăng ký
                    </span>

                    <span className="topcv-logo">
                        top<span>CV</span>
                    </span>

                </div>


                {/* =========================
                    DESCRIPTION
                ========================= */}

                <p className="register-description">

                    Tạo tài khoản miễn phí, tìm kiếm hơn
                    60.000 việc làm.

                </p>


                {/* =========================
                    ACCOUNT TYPE
                ========================= */}

                <div className="account-type">


                    {/* ỨNG VIÊN */}

                    <button
                        type="button"
                        className={`account-type-button ${
                            accountType === 'candidate'
                                ? 'active'
                                : ''
                        }`}
                        onClick={() =>
                            handleAccountTypeChange(
                                'candidate'
                            )
                        }
                    >

                        <span>
                            👨‍💼
                        </span>

                        <span>
                            Ứng viên
                        </span>

                    </button>


                    {/* NHÀ TUYỂN DỤNG */}

                    <button
                        type="button"
                        className={`account-type-button ${
                            accountType === 'employer'
                                ? 'active'
                                : ''
                        }`}
                        onClick={() =>
                            handleAccountTypeChange(
                                'employer'
                            )
                        }
                    >

                        <span>
                            🏢
                        </span>

                        <span>
                            Nhà tuyển dụng
                        </span>

                    </button>

                </div>


                {/* =================================================
                    FORM ỨNG VIÊN
                ================================================= */}

                {accountType === 'candidate' && (

                    <form
                        className="register-form"
                        onSubmit={handleCandidateSubmit}
                    >


                        {/* ERROR */}

                        {error && (

                            <div className="register-message error">

                                {error}

                            </div>

                        )}


                        {/* SUCCESS */}

                        {success && (

                            <div className="register-message success">

                                Đăng ký thành công

                            </div>

                        )}


                        {/* HỌ VÀ TÊN */}

                        <div className="register-form-group">

                            <label>
                                Họ và tên
                            </label>

                            <input
                                type="text"
                                name="full_name"
                                placeholder="Nhập họ và tên"
                                value={
                                    candidateData.full_name
                                }
                                onChange={
                                    handleCandidateChange
                                }
                                required
                            />

                        </div>


                        {/* EMAIL */}

                        <div className="register-form-group">

                            <label>
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Nhập email"
                                value={
                                    candidateData.email
                                }
                                onChange={
                                    handleCandidateChange
                                }
                                required
                            />

                        </div>


                        {/* MẬT KHẨU */}

                        <div className="register-form-group">

                            <label>
                                Mật khẩu
                            </label>

                            <div className="password-wrapper">

                                <input
                                    type={
                                        showPassword
                                            ? 'text'
                                            : 'password'
                                    }
                                    name="password"
                                    placeholder="Nhập mật khẩu"
                                    value={
                                        candidateData.password
                                    }
                                    onChange={
                                        handleCandidateChange
                                    }
                                    required
                                />

                                <button
                                    type="button"
                                    className="password-eye"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                >

                                    <EyeIcon
                                        visible={
                                            showPassword
                                        }
                                    />

                                </button>

                            </div>

                        </div>


                        {/* XÁC NHẬN */}

                        <div className="register-form-group">

                            <label>
                                Xác nhận mật khẩu
                            </label>

                            <div className="password-wrapper">

                                <input
                                    type={
                                        showConfirmPassword
                                            ? 'text'
                                            : 'password'
                                    }
                                    name="confirm_password"
                                    placeholder="Nhập lại mật khẩu"
                                    value={
                                        candidateData.confirm_password
                                    }
                                    onChange={
                                        handleCandidateChange
                                    }
                                    required
                                />

                                <button
                                    type="button"
                                    className="password-eye"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                >

                                    <EyeIcon
                                        visible={
                                            showConfirmPassword
                                        }
                                    />

                                </button>

                            </div>

                        </div>


                        {/* CHECKBOX */}

                        <Agreement
                            agree={agree}
                            setAgree={setAgree}
                        />


                        {/* BUTTON */}

                        <RegisterButton />

                    </form>

                )}


                {/* =================================================
                    FORM NHÀ TUYỂN DỤNG
                ================================================= */}

                {accountType === 'employer' && (

                    <form
                        className="register-form"
                        onSubmit={handleEmployerSubmit}
                    >


                        {/* ERROR */}

                        {error && (

                            <div className="register-message error">

                                {error}

                            </div>

                        )}


                        {/* SUCCESS */}

                        {success && (

                            <div className="register-message success">

                                Đăng ký thành công

                            </div>

                        )}


                        {/* EMAIL */}

                        <div className="register-form-group">

                            <label>
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Nhập email"
                                value={
                                    employerData.email
                                }
                                onChange={
                                    handleEmployerChange
                                }
                                required
                            />

                        </div>


                        {/* MÃ SỐ THUẾ */}

                        <div className="register-form-group">

                            <label>
                                Mã số thuế (MST) *
                            </label>

                            <input
                                type="text"
                                name="tax_code"
                                placeholder="Nhập mã số thuế"
                                value={
                                    employerData.tax_code
                                }
                                onChange={
                                    handleEmployerChange
                                }
                                required
                            />

                        </div>


                        {/* TÊN CÔNG TY */}

                        <div className="register-form-group">

                            <label>
                                Tên công ty *
                            </label>

                            <input
                                type="text"
                                name="company_name"
                                placeholder="Nhập tên công ty"
                                value={
                                    employerData.company_name
                                }
                                onChange={
                                    handleEmployerChange
                                }
                                required
                            />

                        </div>


                        {/* SỐ ĐIỆN THOẠI */}

                        <div className="register-form-group">

                            <label>
                                Số điện thoại *
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Nhập số điện thoại"
                                value={
                                    employerData.phone
                                }
                                onChange={
                                    handleEmployerChange
                                }
                                required
                            />

                        </div>


                        {/* GIÁM ĐỐC */}

                        <div className="register-form-group">

                            <label>
                                Giám đốc / Người đại diện
                            </label>

                            <input
                                type="text"
                                name="representative"
                                placeholder="Nhập họ tên"
                                value={
                                    employerData.representative
                                }
                                onChange={
                                    handleEmployerChange
                                }
                            />

                        </div>


                        {/* ĐỊA CHỈ */}

                        <div className="register-form-group">

                            <label>
                                Địa chỉ trụ sở
                            </label>

                            <input
                                type="text"
                                name="address"
                                placeholder="Nhập địa chỉ trụ sở"
                                value={
                                    employerData.address
                                }
                                onChange={
                                    handleEmployerChange
                                }
                            />

                        </div>


                        {/* WEBSITE */}

                        <div className="register-form-group">

                            <label>
                                Website
                            </label>

                            <input
                                type="url"
                                name="website"
                                placeholder="https://"
                                value={
                                    employerData.website
                                }
                                onChange={
                                    handleEmployerChange
                                }
                            />

                        </div>


                        {/* LOGO CÔNG TY */}

                        <div className="register-form-group">

                            <label>
                                Logo công ty
                            </label>

                            <div className="company-logo-upload">

                                <div className="company-logo-preview">

                                    {employerData.logo ? (
                                        <img
                                            src={employerData.logo}
                                            alt="Logo công ty"
                                        />
                                    ) : (
                                        <span>
                    Logo
                </span>
                                    )}

                                </div>


                                <div className="company-logo-content">

                                    <label
                                        htmlFor="company-logo"
                                        className="company-logo-button"
                                    >
                                        Chọn ảnh
                                    </label>

                                    <input
                                        id="company-logo"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleLogoChange}
                                        hidden
                                    />

                                    <p>
                                        PNG, JPG hoặc JPEG
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* MẬT KHẨU */}

                        <div className="register-form-group">

                            <label>
                                Mật khẩu
                            </label>

                            <div className="password-wrapper">

                                <input
                                    type={
                                        showPassword
                                            ? 'text'
                                            : 'password'
                                    }
                                    name="password"
                                    placeholder="Nhập mật khẩu"
                                    value={
                                        employerData.password
                                    }
                                    onChange={
                                        handleEmployerChange
                                    }
                                    required
                                />

                                <button
                                    type="button"
                                    className="password-eye"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                >

                                    <EyeIcon
                                        visible={
                                            showPassword
                                        }
                                    />

                                </button>

                            </div>

                        </div>


                        {/* XÁC NHẬN MẬT KHẨU */}

                        <div className="register-form-group">

                            <label>
                                Xác nhận mật khẩu
                            </label>

                            <div className="password-wrapper">

                                <input
                                    type={
                                        showConfirmPassword
                                            ? 'text'
                                            : 'password'
                                    }
                                    name="confirm_password"
                                    placeholder="Nhập lại mật khẩu"
                                    value={
                                        employerData.confirm_password
                                    }
                                    onChange={
                                        handleEmployerChange
                                    }
                                    required
                                />

                                <button
                                    type="button"
                                    className="password-eye"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                >

                                    <EyeIcon
                                        visible={
                                            showConfirmPassword
                                        }
                                    />

                                </button>

                            </div>

                        </div>


                        {/* CHECKBOX */}

                        <Agreement
                            agree={agree}
                            setAgree={setAgree}
                        />


                        {/* BUTTON */}

                        <RegisterButton />

                    </form>

                )}


                {/* =================================================
                    PHẦN DÙNG CHUNG
                ================================================= */}

                <div className="register-divider">

                    <div></div>

                    <span>
                        Hoặc
                    </span>

                    <div></div>

                </div>


                <button
                    className="register-social-button"
                    type="button"
                >

                    Đăng ký bằng tài khoản mạng xã hội

                    <span>
                        →
                    </span>

                </button>


                {/* LOGIN */}

                <div className="register-login">

                    <span>
                        Bạn đã có tài khoản?
                    </span>

                    <button
                        type="button"
                        onClick={() =>
                            setPage('login')
                        }
                    >
                        Đăng nhập
                    </button>

                </div>


                {/* SUPPORT */}

                <div className="register-support">

                    <span>
                        Bạn gặp khó khăn khi tạo tài khoản?
                    </span>

                    <span>
                        Vui lòng gọi tới số
                    </span>

                    <strong>
                        1900 068 889
                    </strong>

                    <span>
                        | Nhánh 2
                    </span>

                    <span>
                        (giờ hành chính).
                    </span>

                </div>

            </div>


            {/* FOOTER */}

            <footer className="register-footer">

                © 2026. All Rights Reserved. TopCV Vietnam JSC.

            </footer>

        </div>
    )
}


/* =========================================
   AGREEMENT
========================================= */

function Agreement({ agree, setAgree }) {

    return (

        <div className="register-agreement">

            <input
                id="agreement"
                type="checkbox"
                checked={agree}
                onChange={(e) =>
                    setAgree(e.target.checked)
                }
            />

            <label htmlFor="agreement">

                Tôi đã đọc và đồng ý với

                <a href="#">
                    Điều khoản dịch vụ
                </a>

                và

                <a href="#">
                    Chính sách quyền riêng tư
                </a>

                của TopCV (Bắt buộc)

            </label>

        </div>
    )
}


/* =========================================
   REGISTER BUTTON
========================================= */

function RegisterButton() {

    return (

        <button
            className="register-submit-button"
            type="submit"
        >

            Đăng ký

            <span>
                →
            </span>

        </button>
    )
}


export default Register