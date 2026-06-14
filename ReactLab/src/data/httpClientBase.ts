const BASE_URL = "https://api.themoviedb.org/3";

export async function HttpClientBase<T>(path: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${path}?language=pt-BR`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
    });
    
    if (!response.ok) throw new Error(`Error: ${response.status} - ${response.statusText}`);
    
    return response.json(); 
}