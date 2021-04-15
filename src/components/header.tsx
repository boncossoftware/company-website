import Logo from 'assets/img/logo2018.jpg';
import LogoDark from 'assets/img/logo2018_dark.jpg';
import './header.scss';

const Header = () => {
    const matchDark = window.matchMedia('(prefers-color-scheme: dark)');
    return <header className="header">
        <img src={matchDark.matches ? LogoDark : Logo} alt="boncos logo" className="header-image"/>
    </header>
}
export default Header;
