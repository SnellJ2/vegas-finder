import '../styles/components/NavItem.css'; // Create a CSS file for styles

const NavItem = ({ isLoggedIn, user }) => {
    if (isLoggedIn) {
        return (
        <li className="nav-item user-info">
            <img src={user.icon} alt="" className="user-icon" />
            <span className="user-name">{user.firstName}</span>
        </li>
        );
    } else {
        return (
        <li className="nav-item auth-buttons">
            <button className="login-button">Log In</button>
            <button className="signup-button">Sign Up</button>
        </li>
        );
    }
}

export default NavItem;