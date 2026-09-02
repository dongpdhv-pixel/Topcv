import './Header.css'

function Header({ setPage }) {
    return (
        <header className="header">
            <div className="header-container">

                {/* Logo */}
                <button
                    className="header-logo"
                    onClick={() => setPage('home')}
                >
                    <div className={"logo"}>
                        <p className={"black-logo"}>TOP</p><p>CV</p>
                    </div>
                </button>

                {/* Menu */}
                <nav className="header-menu">

                    <button onClick={() => setPage('jobs')}>
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

                {/* Đăng nhập / Đăng ký */}
                <div className="header-actions">

                    <button
                        className="login-button"
                        onClick={() => setPage('login')}
                    >
                        Đăng nhập
                    </button>

                    <button
                        className="register-button"
                        onClick={() => setPage('register')}
                    >
                        Đăng ký
                    </button>

                </div>

            </div>
        </header>
    )
}

export default Header