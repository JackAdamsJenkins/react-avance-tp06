import { useUserProfile } from '@tp06/core';
import './UserProfile.web.css';

export function UserProfile() {
  // TODO: Etape 2 - Les Mains Web
  // 1. Utiliser le hook useUserProfile
  const { user, loading, error } = useUserProfile();

  // 2. Gérer le chargement
  if (loading) {
    return <p>Chargement...</p>;
  }

  // 3. Gérer l'erreur
  if (error) {
    return <div style={{ color: 'red' }}>Erreur : {error}</div>;
  }

  // 4. Afficher le profil
  // Vous devez utiliser des balises HTML standard (div, img, h2, p, etc.)
  // L'objet user contient : picture.large, name.first, email, etc.
  return (
    <div className="profile-card">
      {/* TODO: Afficher l'image et les infos ici */}
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
