import './Header.css'


function Header({ setPage, user }) {

    const handleRegister = () => {

        window.history.pushState(
            { page: 'register' },
            '',
            '/register'
        )

        setPage('register')
    }


    const handlePostFine = () => {

        window.history.pushState(
            { page: 'register' },
            '',
            '/register'
        )

        setPage('register')
    }


    return (
        <header className="header">

            <div className="header-container">

                {/* LOGO */}
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


                {/* MENU */}
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


                {/* ACTIONS */}
                <div className="header-actions">

                    {user ? (

                        /* =========================
                           ĐÃ ĐĂNG NHẬP
                        ========================= */

                        <div className="header-user">

                            <div className="header-avatar">
                                {user.full_name
                                    ? user.full_name.charAt(0).toUpperCase()
                                    : 'U'
                                }
                            </div>

                            <span className="header-user-name">
                                {user.full_name}
                            </span>

                        </div>

                    ) : (

                        /* =========================
                           CHƯA ĐĂNG NHẬP
                        ========================= */

                        <>

                            <button
                                className="login-button"
                                onClick={() => setPage('login')}
                            >
                                Đăng nhập
                            </button>


                            <button
                                className="register-button"
                                onClick={handleRegister}
                            >
                                Đăng ký
                            </button>

                        </>

                    )}


                    {/* ĐĂNG TUYỂN + TÌM HỒ SƠ */}

                    {user?.accountType === 'employer' ? (
                        <button className="post-find-button" onClick={() => setPage('post-job')}>
                            Đăng tuyển
                        </button>

                    ) : (
                        <button className="post-fine-button" onClick={() => {
                            window.history.pushState(
                                {page: "register"},
                                '',
                                '/register'
                            )
                            setPage('register')
                        }}>
                            Đăng tuyển & tìm hồ sơ
                        </button>
                    )}

                </div>

            </div>

        </header>
    )
}


export default Header