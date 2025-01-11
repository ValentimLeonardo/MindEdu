import { useState } from 'react';

function ProfileIcon() {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const defaultImage = '/src/assets/icone.jpg';

  return (
    <div>
      <div className="profile-icon">
        <img
          src={profileImage || defaultImage}
          alt="Profile"
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
      </div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
}

export default ProfileIcon;