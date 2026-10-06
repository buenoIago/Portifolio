import { Component } from "@angular/core";

interface Habilidade {
    imagem: string;
    titulo: string;
    descricao: string;
}

interface CategoriaHabilidades {
    id: string;
    titulo: string;
    habilidades: Habilidade[];
}

@Component({
    selector: 'app-habilidades',
    imports: [],
    templateUrl: './habilidades.html'
})
export class Habilidades {

    public gavetasAbertas: string[] = [];

    public alternarGaveta(id: string): void {

        if (this.gavetasAbertas.includes(id)) {

            this.gavetasAbertas = this.gavetasAbertas.filter(
                gaveta => gaveta !== id
            );

            return;
        }

        this.gavetasAbertas.push(id);
    }

    public readonly categorias: CategoriaHabilidades[] = [
        {
            id: 'linguagens',
            titulo: 'Linguagens de Programação',
            habilidades: [
                {
                    imagem: 'https://skillicons.dev/icons?i=cs',
                    titulo: 'C#',
                    descricao: 'Desenvolvimento de aplicações robustas e escaláveis.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=js',
                    titulo: 'JavaScript',
                    descricao: 'Desenvolvimento de aplicações e funcionalidades para a web.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=html',
                    titulo: 'HTML',
                    descricao: 'Estruturação semântica e acessível de páginas e aplicações web.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=css',
                    titulo: 'CSS',
                    descricao: 'Estilização e criação de interfaces web responsivas.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=scss',
                    titulo: 'SCSS',
                    descricao: 'Criação de estilos organizados, reutilizáveis e responsivos.'
                }
            ]
        },

        {
            id: 'frameworks',
            titulo: 'Frameworks',
            habilidades: [
                {
                    imagem: 'https://skillicons.dev/icons?i=dotnet',
                    titulo: '.NET',
                    descricao: 'Desenvolvimento de aplicações modernas e escaláveis.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=dotnet',
                    titulo: 'ASP.NET Core',
                    descricao: 'Desenvolvimento de aplicações web e APIs com .NET.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=angular&theme=dark',
                    titulo: 'Angular',
                    descricao: 'Construção de aplicações web escaláveis com componentes e TypeScript.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=nodejs',
                    titulo: 'Node.js',
                    descricao: 'Desenvolvimento de aplicações e serviços no lado do servidor.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=bootstrap',
                    titulo: 'Bootstrap',
                    descricao: 'Construção de interfaces responsivas e componentes reutilizáveis.'
                }
            ]
        },

        {
            id: 'database',
            titulo: 'Banco de Dados',
            habilidades: [
                {
                    imagem: 'https://skillicons.dev/icons?i=postgres&theme=dark',
                    titulo: 'PostgreSQL',
                    descricao: 'Persistência e gerenciamento de dados relacionais.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=mssql&theme=dark',
                    titulo: 'SQL Server',
                    descricao: 'Gerenciamento e persistência de dados relacionais.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=dotnet',
                    titulo: 'Entity Framework Core',
                    descricao: 'Mapeamento objeto-relacional e acesso a dados com .NET.'
                }
            ]
        },

        {
            id: 'ferramentas',
            titulo: 'Ferramentas',
            habilidades: [
                {
                    imagem: 'https://skillicons.dev/icons?i=git&theme=dark',
                    titulo: 'Git',
                    descricao: 'Versionamento de código e colaboração em projetos de software.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=github&theme=dark',
                    titulo: 'GitHub',
                    descricao: 'Hospedagem de código, colaboração e gerenciamento de projetos.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=docker&theme=dark',
                    titulo: 'Docker',
                    descricao: 'Criação de ambientes isolados e consistentes para desenvolvimento e entrega.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=vscode&theme=dark',
                    titulo: 'VS Code',
                    descricao: 'Ambiente de desenvolvimento extensível para produtividade e qualidade de código.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=githubactions&theme=dark',
                    titulo: 'GitHub Actions',
                    descricao: 'Automação de processos de integração e entrega contínua.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=azure&theme=dark',
                    titulo: 'Azure',
                    descricao: 'Hospedagem e operação de aplicações e serviços em nuvem.'
                }
            ]
        },

        {
            id: 'apis',
            titulo: 'APIs e Integrações',
            habilidades: [
                {
                    imagem: 'https://skillicons.dev/icons?i=dotnet',
                    titulo: 'REST API',
                    descricao: 'Desenvolvimento e integração de serviços utilizando arquitetura REST.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=dotnet',
                    titulo: 'Swagger / OpenAPI',
                    descricao: 'Documentação e testes de APIs.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=dotnet',
                    titulo: 'JWT',
                    descricao: 'Autenticação e autorização baseada em tokens.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=dotnet',
                    titulo: 'ASP.NET Identity',
                    descricao: 'Gerenciamento de usuários, autenticação e autorização.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=rabbitmq',
                    titulo: 'RabbitMQ',
                    descricao: 'Comunicação assíncrona entre aplicações por meio de mensageria.'
                },
                {
                    imagem: 'https://skillicons.dev/icons?i=rabbitmq',
                    titulo: 'MassTransit',
                    descricao: 'Abstração e gerenciamento de comunicação baseada em mensagens.'
                }
            ]
        }
    ];
}