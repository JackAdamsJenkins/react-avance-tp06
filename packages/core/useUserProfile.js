import { useState, useEffect } from 'react';

/**
 * Hook personnalisé agnostique pour gérer le profil utilisateur.
 * Ne doit contenir AUCUN code spécifique à la plateforme (pas de div, pas de View).
 */
export function useUserProfile() {
  // TODO: Etape 1 - Le Cerveau
  // 1. Initialiser les états : user (null), loading (true), error (null)
  
  // 2. Utiliser useEffect pour appeler l'API au montage
  // API URL: https://randomuser.me/api/
  
  // 3. Gérer le fetch, la réponse JSON, et les cas d'erreur
  
  // 4. Retourner l'objet { user, loading, error }
  
  return {
    user: null,
    loading: true,
    error: null,
  };
}
