import { useState } from 'react'
import './Header.css'

function Header({ setPage, user, setUser }) {

    const [showMenu, setShowMenu] = useState(false)


    // =========================
    // ĐĂNG XUẤT
    // =========================

    const handleLogout = () => {

        // Xóa tài khoản đang đăng nhập
        localStorage.removeItem('topcv_user')

        // Xóa menu
        setShowMenu(false)

        // Cập nhật App
        if (setUser) {
            setUser(null)
        }

        // Về trang chủ
        setPage('home')
    }


    return (
        <header className="header">

            <div className="header-container">


                {/* =========================
                    LOGO
                ========================= */}

                <button
                    className="header-logo"
                    onClick={() => setPage('home')}
                >

                    <div className="logo">

                        <p className="black-logo">
                            TOP
                        </p>

                        <p>
                            CV
                        </p>

                    </div>

                </button>


                {/* =========================
                    MENU
                ========================= */}

                <nav className="header-menu">

                    <button
                        onClick={() => setPage('jobs')}
                    >
                        Việc làm
                    </button>


                    <button>
                        Tạo CV
                    </button>


                    <button>
                        Công cụ
                    </button>


                    <button>
                        Cẩm nang nghề nghiệp
                    </button>

                </nav>


                {/* =========================
                    ACTIONS
                ========================= */}

                <div className="header-actions">


                    {/* =========================
                        CHƯA ĐĂNG NHẬP
                    ========================= */}

                    {!user && (
                        <>

                            <button
                                className="login-button"
                                onClick={() =>
                                    setPage('login')
                                }
                            >
                                Đăng nhập
                            </button>


                            <button
                                className="register-button"
                                onClick={() =>
                                    setPage('register')
                                }
                            >
                                Đăng ký
                            </button>


                            <button
                                className="post-find-button"
                                onClick={() =>
                                    setPage('register')
                                }
                            >
                                Đăng tuyển & tìm hồ sơ
                            </button>

                        </>
                    )}


                    {/* =========================
                        ĐÃ ĐĂNG NHẬP
                    ========================= */}

                    {user && (
                        <>

                            {/* USER */}

                            <div className="header-user-wrapper">

                                <button
                                    className="header-user"
                                    onClick={() =>
                                        setShowMenu(
                                            !showMenu
                                        )
                                    }
                                >

                                    {/* LOGO CÔNG TY */}

                                    {user.accountType === 'employer' &&
                                    user.logo ? (

                                        <img
                                            className="header-avatar header-avatar-image"
                                            src={user.logo}
                                            alt=""
                                        />

                                    ) : (

                                        <div className="header-avatar">

                                            {user.avatar || 'U'}

                                        </div>

                                    )}


                                    <span className="header-user-name">

                                        {user.company_name ||
                                            user.full_name}

                                    </span>


                                    <span className="header-user-arrow">
                                        ▾
                                    </span>

                                </button>


                                {/* DROPDOWN */}

                                {showMenu && (

                                    <div className="header-user-menu">

                                        <button
                                            onClick={handleLogout}
                                        >
                                            Đăng xuất
                                        </button>

                                    </div>

                                )}

                            </div>


                            {/* NÚT NHÀ TUYỂN DỤNG */}

                            {user.accountType === 'employer' ? (

                                <button
                                    className="post-find-button"
                                    onClick={() =>
                                        setPage('post-job')
                                    }
                                >
                                    Đăng tuyển
                                </button>

                            ) : (

                                <button
                                    className="post-find-button"
                                    onClick={() =>
                                        setPage('register')
                                    }
                                >
                                    Đăng tuyển & tìm hồ sơ
                                </button>

                            )}

                        </>
                    )}

                </div>

            </div>

        </header>
    )
}

export default Header