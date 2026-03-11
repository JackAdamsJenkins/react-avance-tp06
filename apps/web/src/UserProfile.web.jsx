import { useUserProfile } from '@tp06/core';
import './UserProfile.web.css';

export function UserProfile() {
  // TODO: Etape 2 - Les Mains Web
  // 1. Utiliser le hook useUserProfile
  const { user, loading, error, refetch } = useUserProfile();

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
      <img 
        src={user.picture.large} 
        alt={`${user.name.first} ${user.name.last}`}
        style={{ borderRadius: '50%', marginBottom: '1rem'}}
        />
        <h2>{user.name.first} {user.name.last}</h2>
        <p>{user.email}</p>
        <p>{user.location.city}, {user.location.country}</p>
        <button 
          onClick={refetch}
          style={{marginTop: '1rem', padding: '0.5rem 1rem'}}
        >
          Rafraîchir
        </button>
    </div>
  );
}
