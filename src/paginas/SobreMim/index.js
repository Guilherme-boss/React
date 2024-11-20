import styled from 'styled-components';
import PostModelo from '../../componentes/PostModelo';
import fotoCapa from '../../acessos/sobre_mim_capa.png';


const Subtitulo = styled.h3`
    font-size: 2.5rem;
    font-weight: bold;
    color: #1abc9c; 
    margin-bottom: 2rem;
    text-align: center;
    position: relative;

    &::after {
        display: block;
        width: 80px; 
        height: 4px;
        background-color: #1abc9c;
        margin: 0.75rem auto 0;
        border-radius: 2px;
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100px;
    }

    @media (max-width: 1024px) {
        font-size: 2.2rem;
        margin-bottom: 1.75rem;

        &::after {
            width: 70px;
        }

        &:hover::after {
            width: 90px;
        }
    }

    @media (max-width: 744px) {
        font-size: 1.9rem;
        line-height: 2.2rem;
        margin-bottom: 1.5rem;

        &::after {
            width: 60px;
        }

        &:hover::after {
            width: 80px;
        }
    }

    @media (max-width: 480px) {
        font-size: 1.6rem;
        line-height: 2.1rem;
        margin-bottom: 1.25rem;

        &::after {
            width: 50px;
        }

        &:hover::after {
            width: 70px;
        }
    }
`;

const Paragrafo = styled.p`
    font-size: 1.5rem;
    line-height: 2.25rem;
    color: #efefef; 
    margin-bottom: 1.5rem;
    text-align: justify;
    padding: 0 1rem; 
    transition: color 0.3s ease;

    @media (max-width: 1024px) {
        font-size: 1.3rem;
        line-height: 2.1rem;
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
        line-height: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        line-height: 1.8rem;
        padding: 0 0.5rem; 
    }
`;


function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa}>
        
            <Subtitulo>About me and My journey</Subtitulo>

            <Paragrafo>
                I am a developer passionate about creating efficient and scalable software solutions. I graduated in Systems Analysis and Development from the Catholic University of Brasília and have experience in developing RESTful APIs, system integration, and databases. With technical skills in C#, JavaScript, React, and the Nest.js framework, I am always looking for new challenges to apply my knowledge and continuously learn.
            </Paragrafo>

            <Paragrafo>
                Hello! My name is Guilherme, and my journey in IT began with a natural curiosity about how technology shapes the world around us. From a young age, I have been motivated to understand how systems work and explore ways to innovate. This interest led me to pursue a degree in Systems Analysis and Development at the Catholic University of Brasília, where I honed my ability to solve problems and develop impactful solutions.
            </Paragrafo>

            <Paragrafo>
                My first hands-on experience was as an intern at CODHAB, where I worked in IT support. There, I learned the importance of solid infrastructure and gained essential skills in communication and technical problem-solving. However, I realized that my true passion was in development, where I can turn ideas into innovative solutions.
            </Paragrafo>

            <Paragrafo>
                A few months later, I secured a position as a young apprentice at Cast Group, where I had the opportunity to learn the basics of Nest.js and, with that, created a CRUD system for a pharmacy. Throughout my studies and experiences, I have deepened my knowledge in various technologies, including HTML, CSS, JavaScript, TypeScript, SQL, and frameworks such as Nest.js and React. Recently, I have been focusing on front-end development with React while also exploring back-end development using C# and Node.js.
            </Paragrafo>

            <Paragrafo>
                I am excited to expand my horizons further, as I will soon embark on an exchange program in Ireland. This experience will not only improve my English but also allow me to immerse myself in new cultures, explore the international job market, and open doors to a global career.
            </Paragrafo>

            <Paragrafo>
                My goal is to use my knowledge to contribute to the growth of the company where I work while evolving as a professional. I believe that learning is a continuous journey, and I am always seeking ways to improve and add value with my skills. I am interested in exploring new opportunities in the IT field, where I can apply my expertise to projects that positively impact people and businesses.
            </Paragrafo>

            <Paragrafo>
                I am excited about the possibility of joining an innovative team and contributing to high-impact projects. If you are also passionate about technology and looking for innovation, I would be happy to share knowledge and experiences.
            </Paragrafo>

        </PostModelo>
    );
}

export default SobreMim;
