import Logo from 'assets/img/logo2018.jpg';
import LogoDark from 'assets/img/logo2018_dark.jpg';
import { useEffect, useRef, useState } from 'react';
import './logo-img.scss';

const LogoImg = (props: {className?: string}) => {
    const matcherRef = useRef(window.matchMedia('(prefers-color-scheme: dark)'));
    const [darkMode, setDarkMode] = useState(matcherRef.current.matches);

    useEffect( () => {
        const matcher = matcherRef.current;
        const onChange = (e:MediaQueryListEvent) => setDarkMode(e.matches);
        matcher.addEventListener('change', onChange);
        return () => {
            matcher.removeEventListener('change', onChange);
        };
    }, [matcherRef]);

    return <img 
        src={darkMode ? LogoDark : Logo} 
        alt='boncos logo' 
        className={props.className} 
    />;
}
export default LogoImg;
