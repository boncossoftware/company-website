type TextSectionContentProps = {
    children: React.ReactNode
};

const TextSectionContent = ({children}: TextSectionContentProps) => {
    return <p>
        {children}
    </p>
}
export default TextSectionContent;