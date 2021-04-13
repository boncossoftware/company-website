type Props = {
    text?: String;
}

const WelcomeTextSection = ({text=''}:Props) => {
    return <h1>
        {text}
    </h1>
}
export default WelcomeTextSection;