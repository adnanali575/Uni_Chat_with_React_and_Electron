import Avatar from "./Avatar";

const Profile = () => {
  const src = "https://cdn.statusqueen.com/dpimages/thumbnail/cute3-247.jpg";

  return (
    <div>
      <Avatar src={src} className="active:scale-95" />
    </div>
  );
};

export default Profile;
