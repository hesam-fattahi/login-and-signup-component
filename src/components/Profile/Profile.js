import "./Profile.scss";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const Profile = (props) => {
  const handleLogoutClick = () => {
    localStorage.removeItem("loggedIn");
    props.onLogoutClick();
  };

  return (
    <Card className="profile" title="Profile">
      <h2>Welcome back!</h2>
      <p className="note">
        Please note that this frontend project is only a test for a login and
        sign up form validation and does not have any other functionality.
      </p>
      <div className="profile__info">
        <ion-icon name="person-outline" class="profile__info-icon"></ion-icon>
        <p className="profile__info-name">{props.profileInfo.fullName}</p>
        <p className="profile__info-email">{props.profileInfo.email}</p>
      </div>
      <Button className="btn--logout" onClick={handleLogoutClick}>
        Log Out
      </Button>
    </Card>
  );
};

export default Profile;
