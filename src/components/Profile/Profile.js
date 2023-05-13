import "./Profile.scss";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const Profile = (props) => {
  const handleLogoutClick = () => {
    localStorage.removeItem("loggedIn");
    props.onLogoutClick();
  };

  const handleDeleteAccountClick = () => {
    let accounts = JSON.parse(localStorage.getItem("accounts"));
    let newAccounts = accounts.filter(
      (acc) => acc.email !== props.profileInfo.email
    );
    localStorage.setItem("accounts", JSON.stringify(newAccounts));
    handleLogoutClick();
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
      <div className="profile__btn-container">
        <Button className="btn--profile btn--edit-account">
          <ion-icon name="create-outline"></ion-icon>
          Edit account
        </Button>
        <Button
          className="btn--profile btn--logout"
          onClick={handleLogoutClick}
        >
          <ion-icon name="log-out-outline"></ion-icon>
          Log Out
        </Button>
        <Button
          className="btn--profile btn--delete-account"
          onClick={handleDeleteAccountClick}
        >
          <ion-icon name="trash-outline"></ion-icon>
          Delete account
        </Button>
      </div>
    </Card>
  );
};

export default Profile;
