import './text-section-content.scss';

type TextSectionContentProps = {
    children: React.ReactNode
};

const TextSectionContent = ({children}: TextSectionContentProps) => {
    return <p className='text-section-content'>
        {children}
    </p>
}
export default TextSectionContent;