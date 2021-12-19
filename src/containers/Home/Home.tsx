import WelcomeTextSectionContent from 'components/welcome-text-section-content';
import Section from 'components/section';
import PointSectionContent, {Point} from 'components/point-section-content';
import TextSectionContent from 'components/text-section-content';
import LogoImg from 'components/logo-img';
import {FaEnvelope, FaGithub} from 'react-icons/fa';

const Home = () => {

    return <>
        <Section>
            <WelcomeTextSectionContent text="Hi" />
        </Section>

        <Section title='We do'>
            <PointSectionContent>
                <Point lg>Apps &amp;<br/>Websites</Point>
                <Point lg>Data<br/>Science</Point>
                <Point lg>Management<br/>Systems</Point>
                <Point lg>Process<br/>Automation</Point>
                <Point lg>Operations<br/>Optimization</Point>
                <Point lg>Project<br/>Leadership</Point>
            </PointSectionContent>
        </Section>

        <Section title='We are'>
            <TextSectionContent >
                We do things, not because we 
                have to but because we want to, love to or need 
                to. We take leaps of faith on a regular basis 
                to achieve our goals and inspire people around 
                us in the process. We are {<LogoImg />}.
            </TextSectionContent>
        </Section>

        <Section title='We talk'>
            <PointSectionContent doubleSpacing>
                <Point 
                    icon={FaEnvelope} 
                    url='mailto:info@boncos.io'
                >
                    info@boncos.io
                </Point>
                <Point 
                    icon={FaGithub}
                    url='https://github.com/boncossoftware'
                >
                    github.com/boncossoftware
                </Point>
            </PointSectionContent>
        </Section>
    </>
}
export default Home;
