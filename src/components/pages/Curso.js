import React from "react";
import Diferencial from "../molecule/Diferencial";
import DiferencialDepoimento from "../molecule/DiferencialDepoimento";

const diferenciais = [
    {
        title: "Metodologia Comprovada",
        text: "Nossas aulas online são todas ao vivo e a maneira que ensinamos, as ferramentas, a comunicação e os projetos simulam o dia a dia de uma empresa de tecnologia.",
    }, {
        title: "Conteúdo Sempre Atualizado",
        text: "Trimestralmente, nós melhoramos e adaptamos nosso material de ensino, conforme as atualizações exigidas pelo mercado e também através dos feedbacks recebidos dos nossos alunos."
    }, {
        title: "Contato com o Mercado",
        text: "A cada duas semanas, promovemos eventos com especialistas de mercado, para compartilhar a vivência deles em diversas áreas e trazer diferentes perspectivas para os nossos alunos."
    }, {
        title: "Desenvolvimento de Soft Skills",
        text: "Aprenda skills que vão além de questões técnicas, como Gestão de Tempo, Organização, Comunicação Clara, Disciplina, Pensamento Crítico, Autonomia, Perseverança e Aprender com os erros."
    }, {
        title: "Aprenda na Prática",
        text: "Aqui, você aprende diariamente, desenvolvendo projetos para a resolução de problemas, muito semelhantes aos encontrados no dia a dia de um desenvolvedor."
    }, {
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

function Curso() {
    return (
        <div>
            <h2>Nossos diferenciais</h2>
            {diferenciaisDepoimentos.map(data => (<DiferencialDepoimento data={data}/>))}
            {diferenciais.map(data => (<Diferencial data={data}/>))}
        </div>
    );
}

export default Curso