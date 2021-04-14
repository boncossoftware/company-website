import './footer.scss';

const Footer = () => {
    const year = (new Date()).getFullYear();
    return <footer className='footer'>
        <div className='footer-inner-container'>
            <hr />
            <span className='copyright'>
                Copyright © {year} Posco Enterprises VBA. All rights reserved.
            </span>
            <span className='chamber'>
                KvK 45207.0 
            </span>
            <span className='place'>
                Paradera, Aruba
            </span>
        </div>
    </footer>
}
export default Footer;