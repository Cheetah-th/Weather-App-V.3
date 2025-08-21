export const httpClient = {
  async get<T>(url: string): Promise<T> {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
    return res.json() as Promise<T>
  }
}