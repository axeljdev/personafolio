export default async function fetchApi(url) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des projets");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Erreur:", error);
  }
};