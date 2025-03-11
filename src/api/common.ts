
const API_URL = 'http://127.0.0.1:8000/api/v1';
export function getJsonData(url: string, data?: object): Promise<any> {
    const url2 = replaceUrl(url, data);
    // const headers = new Headers();
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return fetch(url2, { headers } )
        .then((response) => response.json())
}

function replaceUrl(base: string, data?: object): string {
    if (!data) return `${API_URL}${base}/`;

    const queryParams = new URLSearchParams(data as Record<string, string>).toString();
    return `${API_URL}${base}?${queryParams}`;
}