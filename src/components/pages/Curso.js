import React from "react";
import NossosDiferenciais from "../organism/NossosDiferenciais";
import {Container, Row} from "react-bootstrap";
import Conteudos from "../organism/Conteudos";
import styled from "styled-components"


const diferenciais = [
    {
        title: "Metodologia Comprovada",
        text: "Nossas aulas online são todas ao vivo e a maneira que ensinamos, as ferramentas, a comunicação e os projetos simulam o dia a dia de uma empresa de tecnologia.",
    },
    {
        title: "Conteúdo Sempre Atualizado",
        text: "Trimestralmente, nós melhoramos e adaptamos nosso material de ensino, conforme as atualizações exigidas pelo mercado e também através dos feedbacks recebidos dos nossos alunos."
    },
    {
        title: "Contato com o Mercado",
        text: "A cada duas semanas, promovemos eventos com especialistas de mercado, para compartilhar a vivência deles em diversas áreas e trazer diferentes perspectivas para os nossos alunos."
    },
    {
        title: "Desenvolvimento de Soft Skills",
        text: "Aprenda skills que vão além de questões técnicas, como Gestão de Tempo, Organização, Comunicação Clara, Disciplina, Pensamento Crítico, Autonomia, Perseverança e Aprender com os erros."
    },
    {
        title: "Aprenda na Prática",
        text: "Aqui, você aprende diariamente, desenvolvendo projetos para a resolução de problemas, muito semelhantes aos encontrados no dia a dia de um desenvolvedor."
    },
    {
        title: "Mentoria de Carreira",
        text: "Conte com o apoio de mentores para te ajudar com temas técnicos e habilidades interpessoais, contribuindo para o desenvolvimento da sua carreira profissional."
    }
]

const diferenciaisDepoimentos = [
    {
        text: "Estudar na Kenzie é desenvolver a autonomia e autossuficiência nos estudos de tecnologia. Aprendemos a desenvolver nossas habilidades técnicas no dia a dia na Kenzie com construção de projetos individuais e em grupo.",
        aluno: "Augusto Pietroski"
    },
    {
        text: "Eu acho que esse mindset que a Kenzie propõe, como uma reeducação na maneira de aprender de uma forma totalmente passiva para uma forma ativa é o que traz o diferencial no meu dia a dia me deixando cada vez mais autônomo para buscar meus conhecimentos.",
        aluno: "Felipe Matheus"
    },
    {
        text: "Eu acho que esse mindset que a Kenzie propõe, como uma reeducação na maneira de aprender de uma forma totalmente passiva para uma forma ativa é o que traz o diferencial no meu dia a dia me deixando cada vez mais autônomo para buscar meus conhecimentos.",
        aluno: "Felipe Matheus"
    }
]

const modulos = [
    {
        eventKey: "m1",
        title: "1º Módulo",
        hardSkills: ["Lógica de programação", "Paradigmas de Programação", "Terminal", "Controle de Versão com git", "HTML5 e CSS3", "JavaScript/ECMAScript 6", "Protocolo HTTP", "Técnicas de programação assíncrona"],
        softSkills: ["Desenvolvimento de autonomia", "Comunicação clara e eficiente", "Colaboração", "Currículo e Linkedin (básico)", "Formação de novos hábitos", "Pitch Pessoal básico", "Treinamento para entrevista técnica", "Gestão do tempo, produtividade e organização", "Disciplina", "Aprender a aprender com os erros"],
        project: {
            title: "Paper Mario Jokenpo",
            description: "Com apenas dois meses na Kenzie, nosso aluno desenvolveu um jogo em HTML, CSS e JavaScript, com o nome de ‘Paper Mario Jokenpo’, uma espécie de ‘pedra, papel e tesoura’. É incrível para nós vermos esse nível de resultado de um aluno recém ingressado na Kenzie!"
        }
    },
    {
        eventKey: "m2",
        title: "2º Módulo",
        hardSkills: ["React", "Redux", "Desenvolvimento de sistemas completos", "Trabalho em equipe utilizando metodologias ágeis e suas cerimônias", "Testes automatizados", "TypeScript", "Arquitetura do Front end", "Processos de Deploy"],
        softSkills: ["Construção de marca pessoal e criação de conteúdo", "Flexibilidade", "Adaptação a novos ambientes de trabalho", "Treinamento para entrevista técnica", "Autonomia", "Persistência"],
        project: {
            title: "BookBook",
            description: "Usando Javascript com as bibliotecas React + Redux, uma equipe de alunos do nosso segundo módulo apresentou o projeto BookBook, uma estante virtual com opções de cadastro para usuários, interações entre telas e avaliação dos livros. Total #userfriendly!"
        }
    },
    {
        eventKey: "m3",
        title: "3º Módulo",
        hardSkills: ["Python", "Flask", "Arquitetura Back-end", "SQL, Bancos de Dados e ORMs", "TDD e BDD", "Deploys, CI/CD e Containerização", "Projetos em grupo utilizando metodologias ágeis e suas cerimônias"],
        softSkills: ["Âncoras de Carreira - Assessment", "Feedback - como dar e receber", "Mapeamento de Competências", "Currículo e Linkedin avançado", "Carta de apresentação e Job search", "Treinamento para entrevista técnica"],
        project: {
            title: "BookBook",
            description: "Usando Javascript com as bibliotecas React + Redux, uma equipe de alunos do nosso segundo módulo apresentou o projeto BookBook, uma estante virtual com opções de cadastro para usuários, interações entre telas e avaliação dos livros. Total #userfriendly!"
        }
    },
    {
        eventKey: "m4",
        title: "4º Módulo",
        hardSkills: ["Django Framework", "Controle de Banco de Dados", "Versionamento de Dados", "Segurança de Informação", "Segurança de Comunicação", "Mentorias", "Planejamento de Carreira", "Construção de imagem"],
        softSkills: ["Treinamento para entrevista com RH", "Treinamento para entrevista técnica", "Pitch Pessoal - Avançado", "Construção de Portfólio", "Planejamento de Carreira"],
        project: {
            title: "BookBook",
            description: "Usando Javascript com as bibliotecas React + Redux, uma equipe de alunos do nosso segundo módulo apresentou o projeto BookBook, uma estante virtual com opções de cadastro para usuários, interações entre telas e avaliação dos livros. Total #userfriendly!"
        }
    }
]


const StyledH2 = styled.h2`
    font-size: 1.6em;
    font-weight: normal;
    text-align: center;
`

function Curso() {
    return (
        <Row>
            <Container fluid={"lg"}>
                <Row>
                </Row>
                <Row>
                    <StyledH2>E como será o seu percurso de aprendizado?</StyledH2>
                </Row>
                <Row>
                    <Conteudos modulos={modulos}/>
                </Row>
                <Row>
                    <StyledH2>Como será o dia a dia</StyledH2>
                </Row>
                <Row>
                    ....
                </Row>
                <Row>
                    <NossosDiferenciais depoimentos={diferenciaisDepoimentos} diferenciais={diferenciais}/>
                </Row>
                <Row>
                    <StyledH2>Programa de Coaches</StyledH2>
                </Row>
                <Row>
                    ....
                </Row>
                <Row>
                    <StyledH2>Trabalhos e Projetos em equipe</StyledH2>
                </Row>
                <Row>
                    ....
                </Row>
                <Row>
                    <StyledH2>Conheça nosso time de ensino </StyledH2>
                </Row>
                <Row>
                    ....
                </Row>
            </Container>
        </Row>
    );
}

export default Curso