import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../assets/img/header-img.png'

export const Banner = () => {
        const [loopNum, setLoopNum] = useState(0); // Default index 0 
        const [isDeleting, setIsDeleting] = useState(false); // Initially typing, not deleting
        const rotation = ["a growing developer", "a coffee lover", "a bookworm", "Katya"];
        const [text, setText] = useState(''); // Displayed portion of text 
        const [delta, setDelta] = useState(300 - Math.random() * 100);
        const period = 2000;

        useEffect(() => {
            let ticker = setInterval(() => {
                tick();
            }, delta)

            return () => { clearInterval(ticker) };
        }, [text])

        const tick = () => {
            let i = loopNum % rotation.length;
            let fullText = rotation[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

            setText(updatedText);
            if (isDeleting) {
                setDelta(prevDelta => 150);
            }

            if (!isDeleting && updatedText == fullText) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && updatedText == '') {
                setIsDeleting(false);
                setLoopNum(loopNum+1);
                setDelta(500);
            }
        }

    return (
        <section className="banner" id="home">
             <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={8}>
                        <span className="tagline">Nice to meet you!</span>
                        <h1>{"I'm "}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum</p>
                    </Col>

                    <Col xs={12} md={6} xl={4}>
                       <img src={headerImg} alt="header image" /> 
                    </Col>
                </Row>
             </Container>
        </section>
    )
}