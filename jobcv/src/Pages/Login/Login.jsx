import { useState } from 'react'
import './Login.css'

function Login({ setPage, setUser }) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

        setError('')
    }


    const handleSubmit = (e) => {

        e.preventDefault()

        const accounts = JSON.parse(
            localStorage.getItem('topcv_accounts') || '[]'
        )

        const account = accounts.find(
            (item) =>
                item.email === formData.email &&
                item.password === formData.password
        )


        if (!account) {
            setError('Email hoặc mật khẩu không chính xác.')
            return
        }


        // Lưu tài khoản đang đăng nhập
        localStorage.setItem(
            'topcv_user',
            JSON.stringify(account)
        )


        // Cập nhật Header
        if (setUser) {
            setUser(account)
        }


        // Về Home
        setPage('home')
    }


    return (
        <div className="login-page">

            <div className="login-card">

                {/* LOGO */}

                <div className="login-logo">

                    <span className="login-title">
                        Đăng nhập
                    </span>

                    <span className="login-topcv">
                        top<span>CV</span>
                    </span>

                </div>


                <p className="login-description">
                    Đăng nhập để tiếp tục sử dụng TopCV
                </p>


                {/* ERROR */}

                {error && (
                    <div className="login-error">
                        {error}
                    </div>
                )}


                <form onSubmit={handleSubmit}>

                    {/* EMAIL */}

                    <div className="login-group">

                        <label>
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Nhập email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* PASSWORD */}

                    <div className="login-group">

                        <label>
                            Mật khẩu
                        </label>

                        <div className="login-password">

                            <input
                                type={
                                    showPassword
                                        ? 'text'
                                        : 'password'
                                }
                                name="password"
                                placeholder="Nhập mật khẩu"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(
                                        !showPassword
                                    )
                                }
                            >
                                {showPassword ? 'Ẩn' : 'Hiện'}
                            </button>

                        </div>

                    </div>


                    {/* FORGOT */}

                    <div className="login-forgot">

                        <button type="button">
                            Quên mật khẩu?
                        </button>

                    </div>


                    {/* LOGIN */}

                    <button
                        type="submit"
                        className="login-submit"
                    >
                        Đăng nhập
                        <span>→</span>
                    </button>

                </form>


                {/* DIVIDER */}

                <div className="login-divider">

                    <div></div>

                    <span>
                        Hoặc
                    </span>

                    <div></div>

                </div>


                {/* SOCIAL */}

                <button
                    type="button"
                    className="login-social"
                >
                    Đăng nhập bằng tài khoản mạng xã hội
                </button>


                {/* REGISTER */}

                <div className="login-register">

                    <span>
                        Bạn chưa có tài khoản?
                    </span>

                    <button
                        type="button"
                        onClick={() => setPage('register')}
                    >
                        Đăng ký
                    </button>

                </div>


                {/* SUPPORT */}

                <div className="login-support">

                    Bạn gặp khó khăn khi đăng nhập?
                    Vui lòng gọi
                    <strong>1900 068 889</strong>

                </div>

            </div>


            <footer className="login-footer">

                © 2026. All Rights Reserved. TopCV Vietnam JSC.

            </footer>

        </div>
    )
}

export default Login