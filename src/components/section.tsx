import './section.scss';

type Props = {
    title?: String;
    children?: React.ReactNode;
}

const Section = ({title, children}:Props) => {
    return <section className='section'>
        <div className='section-inner-container'>
            {title && <h2 className='section-title'>{title}</h2>}
            <div className='section-content'>
                {children}
            </div>
        </div>
    </section>
}
export default Section;