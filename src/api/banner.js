import { fetchWithAuth } from './auth'; // Verifica que la ruta sea correcta

// FETCH CATEGORIAS 🚩...

export async function getBanners() {
    try {
        const categorias = await fetchWithAuth('https://vitribackendflask.onrender.com/api/admin/banner');
        return categorias;  
    } catch (error) {
        console.error('Error fetching categorias:', error);
        throw error;
    }
}