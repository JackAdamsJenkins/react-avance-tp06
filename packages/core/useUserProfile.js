import { useState, useEffect } from 'react';

/**
 * Hook personnalisé agnostique pour gérer le profil utilisateur.
 * Ne doit contenir AUCUN code spécifique à la plateforme (pas de div, pas de View).
 */
export function useUserProfile() {
  // TODO: Etape 1 - Le Cerveau
  // 1. Initialiser les états : user (null), loading (true), error (null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [trigger, setTrigger] = useState(0)

  
  // 2. Utiliser useEffect pour appeler l'API au montage
  // API URL: https://randomuser.me/api/
  useEffect(() => {
    console.log("Appel API")
    setLoading(true)
    setError(null)

    fetch('https://randomuser.me/api/')
      .then((response) => {
        if(!response.ok){
          throw new Error("Erreur réseau");
        }
        return response.json()
      })
      .then((data) => {
        setUser(data.results[0])
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [trigger])
  
  const refetch = () => {
    setTrigger((prev) =>  prev + 1)
  }
  
  // 4. Retourner l'objet { user, loading, error }
  
  return {
    user,
    loading,
    error,
    refetch
  };
}
