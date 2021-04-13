import WelcomeTextSection from 'components/welcome-text-section';
import Section from 'components/section';
import PointSectionContent, {Point} from 'components/point-section-content';
import TextSectionContent from 'components/text-section-content';
import Logo from 'assets/img/logo2018.jpg';
import {FaEnvelope, FaGithub, FaWhatsapp} from 'react-icons/fa';

const Home = () => {
    return <>
        <WelcomeTextSection text="Hi" />

        <Section title='We do'>
            <PointSectionContent>
                <Point lg>{'Apps & Website'}</Point>
                <Point lg>Data Sience</Point>
                <Point lg>Management Systems</Point>
                <Point lg>Process Automation</Point>
                <Point lg>Operations Optimization</Point>
                <Point lg>Project Leadership</Point>
            </PointSectionContent>
        </Section>

        <Section title='We are'>
            <TextSectionContent >
                We've noticed that there are two kinds of people 
                in this world: those with passion and those without 
                it. The passion driven do things, not because they 
                have to but because they want to, love to or need 
                to. They take leaps of faiths on a regular basis 
                to achieve their goals and inspire poeple around 
                them in the process. We are <img src={Logo} alt='boncos' height={14} style={{marginBottom:-1}}/>.
            </TextSectionContent>
        </Section>

        <Section title='We do'>
            <PointSectionContent>
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
                <Point 
                    icon={FaWhatsapp}
                    url='https://wa.me/2977322515?text=Hi%2C%20lets%20make%20software%21'
                >
                    +297 7322515
                </Point>
            </PointSectionContent>
        </Section>
    </>
}
export default Home;