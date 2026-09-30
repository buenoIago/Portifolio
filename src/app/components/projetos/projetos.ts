import { Component } from '@angular/core';

interface Projeto{
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlRepositorio: string;
  tecnologias: string[];
}

@Component({
  imports: [],
  selector: 'app-projetos',
  templateUrl: './projetos.html',
})

export class Projetos {
  public readonly projetos: Projeto[] = [
    {
      titulo: 'Gerador de Certificados Online',
      descricao: 'A aplicação permite cadastrar cursos e alunos, gerar certificados em lote de forma assíncrona e acompanhar o processamento dos certificados. O projeto utiliza autenticação JWT, persistência relacional e mensageria para organizar o fluxo de geração e download dos arquivos.',
      urlImagem: '?',
      urlRepositorio: 'https://github.com/GuardioesCodigo/GeradorDeCertificados',
      tecnologias: [
        'C#',
        '.NET 10',
        'Entity Framework',
        'ASP .NET CORE',
        'MassTransit',
        'RabbitMQ',
        'SQL Server'
      ]
    },
    {
      titulo: 'Controle De Bar',
      urlImagem: '?',
      urlRepositorio: 'https://github.com/GuardioesCodigo/ControleDeBar',
      tecnologias: [
        'C#',
        '.NET 10',
        'Entity Framework',
        'ASP.NET Core',
        'SQL Srver',
        'Azure',
        'GitHub Actions',
      ],
      descricao: `Sistema web para gerenciamento de bares, desenvolvido em C# e .NET com POO e arquitetura em 3 camadas. Utiliza Entity Framework para persistência de dados, autenticação e validações, testes unitários, de integração e E2E com Playwright, GitHub Actions para CI/CD, além de publicação da aplicação e banco de dados em nuvem.`,
    },
    {
      titulo: 'Gerador de Provas',
      urlImagem: '?',
      urlRepositorio: 'https://github.com/buenoIago/GeradorDeProvasWeb',
      tecnologias: [
        'HTML', 
        'CSS', 
        'C#', 
        '.NET 10', 
        'Entity Framework'
      ],
      descricao: `A aplicação organiza disciplinas, matérias e questões para permitir a criação de testes personalizados. Os testes podem ser gerados com questões selecionadas aleatoriamente, duplicados e exportados em PDF junto com seus respectivos gabaritos.`,
    },
  ];
}
