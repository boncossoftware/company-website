type Props = {
    title: String | null;
    children?: React.ReactNode;
}

const Section = ({title='', children}:Props) => {
    return <section>
        <h2>{title}</h2>
        <div>
            {children}
        </div>
    </section>
}
export default Section;