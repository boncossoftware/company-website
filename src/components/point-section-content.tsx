import {IconType} from 'react-icons';
import './point-section-content.scss';

type PointProps = {
    children: React.ReactNode,
    lg?: Boolean;
    icon?: IconType;
    url?: string;
};
export const Point = ({children, icon, lg, url}: PointProps) => {
    const classes = ['point-section-content-point'];
    (lg && classes.push('large'));

    const Icon: IconType | undefined = icon;
    const Container = url ? 
        ((p:any) => 
            <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                {...p}
            >
                {p?.children}
            </a>
        )
        : 
        ((p:any) => <li {...p}>{p?.children}</li>)
    ;
    return <Container className={classes.join(' ')}>
        {Icon && <Icon className="icon" />}
        {children}
    </Container>
}

type PointSectionContentProps = {
    doubleSpacing?: boolean;
    children: React.ReactNode;
};

const PointSectionContent = ({children, doubleSpacing}: PointSectionContentProps) => {
    const classes = ['point-section-content'];
    (doubleSpacing && classes.push('double-spacing'));

    return <ul className={classes.join(' ')}>
        {children}
    </ul>
}
export default PointSectionContent;