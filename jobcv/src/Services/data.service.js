const API_URL = 'http://0.0.0.0:8000'

export const getJobs = async ({
                                  page = 1,
                                  keyword = '',
                                  category_slug = '',
                                  city_id = ''
                              } = {}) => {

    const params = new URLSearchParams()

    params.append('page', page)

    if (keyword) {
        params.append('keyword', keyword)
    }

    if (category_slug) {
        params.append('category_slug', category_slug)
    }

    if (city_id) {
        params.append('city_id', city_id)
    }

    const response = await fetch(
        `${API_URL}/jobs?${params.toString()}`
    )

    if (!response.ok) {
        throw new Error('Không thể lấy danh sách việc làm')
    }

    return await response.json()
}

export const getCompanies = async () => {

    const response = await fetch(
        `${API_URL}/companies`
    )

    if (!response.ok) {
        throw new Error('Không thể lấy danh sách công ty')
    }

    return await response.json()
}