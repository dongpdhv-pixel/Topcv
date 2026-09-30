import { useState } from 'react'
import './PostJob.css'

function PostJob({ setPage, setRefreshJobs }) {

    const [jobData, setJobData] = useState({
        title: '',
        category: '',
        location: '',
        salary: '',
        experience: '',
        jobType: '',
        description: '',
        requirement: '',
        benefit: ''
    })

    const handleChange = (e) => {
        setJobData({
            ...jobData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Lấy thông tin nhà tuyển dụng đang đăng nhập
        const user = JSON.parse(
            localStorage.getItem('topcv_user') || 'null'
        )

        const newJob = {
            id: Date.now(),

            title: jobData.title,

            company: {
                name: user?.company_name || user?.full_name || 'Tên công ty',
                logo: user?.logo || ''
            },

            salary: {
                is_negotiable: false,
                min: jobData.salary,
                max: '',
                currency: ''
            },

            city: {
                name: jobData.location
            },

            category: jobData.category,

            experience: jobData.experience,

            jobType: jobData.jobType,

            description: jobData.description,

            requirement: jobData.requirement,

            benefit: jobData.benefit,

            isNew: true
        }

        // Lưu tin vừa đăng
        localStorage.setItem(
            'topcv_new_job',
            JSON.stringify(newJob)
        )

        alert('Đăng tin tuyển dụng thành công!')

        // Về trang chủ
        setPage('home')
    }

    return (
        <div className="post-job-page">

            <div className="post-job-container">

                <div className="post-job-title">
                    <h1>Đăng tin tuyển dụng</h1>

                    <p>
                        Tạo tin tuyển dụng và tìm kiếm ứng viên phù hợp
                    </p>
                </div>


                <form
                    className="post-job-form"
                    onSubmit={handleSubmit}
                >

                    <div className="post-job-card">

                        <h2>Thông tin tuyển dụng</h2>


                        {/* TÊN CÔNG VIỆC */}

                        <div className="post-job-group">

                            <label>
                                Tên công việc *
                            </label>

                            <input
                                type="text"
                                name="title"
                                placeholder="Nhập tên công việc"
                                value={jobData.title}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        {/* NGÀNH NGHỀ */}

                        <div className="post-job-row">

                            <div className="post-job-group">

                                <label>
                                    Ngành nghề *
                                </label>

                                <select
                                    name="category"
                                    value={jobData.category}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Chọn ngành nghề
                                    </option>

                                    <option value="it">
                                        IT - Phần mềm
                                    </option>

                                    <option value="marketing">
                                        Marketing
                                    </option>

                                    <option value="sales">
                                        Kinh doanh
                                    </option>

                                    <option value="accounting">
                                        Kế toán
                                    </option>

                                    <option value="construction">
                                        Xây dựng
                                    </option>

                                </select>

                            </div>


                            {/* ĐỊA ĐIỂM */}

                            <div className="post-job-group">

                                <label>
                                    Địa điểm *
                                </label>

                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Ví dụ: Hà Nội"
                                    value={jobData.location}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>


                        {/* LƯƠNG + KINH NGHIỆM */}

                        <div className="post-job-row">

                            <div className="post-job-group">

                                <label>
                                    Mức lương *
                                </label>

                                <input
                                    type="text"
                                    name="salary"
                                    placeholder="Ví dụ: 10 - 20 triệu"
                                    value={jobData.salary}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="post-job-group">

                                <label>
                                    Kinh nghiệm *
                                </label>

                                <select
                                    name="experience"
                                    value={jobData.experience}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Chọn kinh nghiệm
                                    </option>

                                    <option value="none">
                                        Chưa có kinh nghiệm
                                    </option>

                                    <option value="1">
                                        1 năm
                                    </option>

                                    <option value="2">
                                        2 năm
                                    </option>

                                    <option value="3">
                                        3 - 5 năm
                                    </option>

                                    <option value="5">
                                        Trên 5 năm
                                    </option>

                                </select>

                            </div>

                        </div>


                        {/* HÌNH THỨC */}

                        <div className="post-job-group">

                            <label>
                                Hình thức làm việc *
                            </label>

                            <select
                                name="jobType"
                                value={jobData.jobType}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    Chọn hình thức
                                </option>

                                <option value="full-time">
                                    Toàn thời gian
                                </option>

                                <option value="part-time">
                                    Bán thời gian
                                </option>

                                <option value="intern">
                                    Thực tập
                                </option>

                                <option value="remote">
                                    Remote
                                </option>

                            </select>

                        </div>


                        {/* MÔ TẢ */}

                        <div className="post-job-group">

                            <label>
                                Mô tả công việc *
                            </label>

                            <textarea
                                name="description"
                                rows="7"
                                placeholder="Nhập mô tả công việc..."
                                value={jobData.description}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        {/* YÊU CẦU */}

                        <div className="post-job-group">

                            <label>
                                Yêu cầu ứng viên *
                            </label>

                            <textarea
                                name="requirement"
                                rows="7"
                                placeholder="Nhập yêu cầu ứng viên..."
                                value={jobData.requirement}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        {/* QUYỀN LỢI */}

                        <div className="post-job-group">

                            <label>
                                Quyền lợi
                            </label>

                            <textarea
                                name="benefit"
                                rows="6"
                                placeholder="Nhập quyền lợi..."
                                value={jobData.benefit}
                                onChange={handleChange}
                            />

                        </div>


                        {/* BUTTON */}

                        <div className="post-job-actions">

                            <button
                                type="button"
                                className="post-job-cancel"
                                onClick={() => setPage('home')}
                            >
                                Để sau
                            </button>


                            <button
                                type="submit"
                                className="post-job-submit"
                            >
                                Đăng tin tuyển dụng →
                            </button>

                        </div>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default PostJob