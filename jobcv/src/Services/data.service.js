export async function getData() {
    const response = await fetch('/db.json')

    if (!response.ok) {
        throw new Error(`Không thể tải db.json: ${response.status}`)
    }

    const data = await response.json()

    console.log('DATA:', data)

    return data
}