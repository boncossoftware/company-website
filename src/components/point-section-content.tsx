import {IconType} from 'react-icons';

type PointProps = {
    children: React.ReactNode,
    lg?: Boolean;
    icon?: IconType;
    url?: String;
};
export const Point = ({children}: PointProps) => {
    return <li>
        {children}
    </li>
}

type PointSectionContentProps = {
    children: React.ReactNode
};

const PointSectionContent = ({children}: PointSectionContentProps) => {
    return <ul>
        {children}
    </ul>
}
export default PointSectionContent;