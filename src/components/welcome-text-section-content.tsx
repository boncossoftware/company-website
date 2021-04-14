import './welcome-text-section-content.scss';

type Props = {
    text?: String;
}

const WelcomeTextSectionContent = ({text=''}:Props) => {
    return <h1 className='welcome-text-section-content'>
        {text}
    </h1>
}
export default WelcomeTextSectionContent;