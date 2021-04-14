import Logo from 'assets/img/logo2018.jpg';
import './header.scss';

const Header = () => {
    return <header className="header">
        <img src={Logo} alt="boncos logo" className="header-image"/>
    </header>
}
export default Header;