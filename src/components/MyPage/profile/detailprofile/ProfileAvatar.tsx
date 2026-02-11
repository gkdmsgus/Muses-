import profileimg from '../../../../assets/images/profileimg.svg';

const ProfileAvatar = () => {
  return (
    <div className="w-32 h-32 rounded-full flex items-center justify-center">
      <div className="w-full h-full bg-white rounded-full border border-white40 flex items-center justify-center">
        <img src={profileimg} alt="profile" className="w-24 h-20" />
      </div>
    </div>
  );
};

export default ProfileAvatar;
