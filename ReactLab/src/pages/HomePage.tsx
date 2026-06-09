import arrowLeftIcon from "../assets/icons/arrow-left-turn.svg";
import boltIcon from "../assets/icons/bolt.svg";
import cloudIcon from "../assets/icons/cloud.svg";
import documentIcon from "../assets/icons/document.svg";
import layersIcon from "../assets/icons/layers.svg";
import listIcon from "../assets/icons/list.svg";
import puzzleIcon from "../assets/icons/puzzle.svg";
import usersIcon from "../assets/icons/users.svg";
import { CardComponent } from "../components/CardComponent/CardComponent";
import { Badge } from "../components/ui/Badge";
import { IconBox } from "../components/ui/IconBox";

const cardsInfo = [
    {
        title: "Componentes & Props",
        description: "Criação de componentes, passagem de dados e composição básica.",
        iconSrc: puzzleIcon,
        iconBoxClassName: "bg-violet-100 text-violet-600",
    },
    {
        title: "State & Eventos",
        description: "Estado local, eventos e atualização da interface.",
        iconSrc: boltIcon,
        iconBoxClassName: "bg-emerald-100 text-emerald-600",
    },
    {
        title: "Formulários",
        description: "Inputs controlados, validação simples e useReducer.",
        iconSrc: documentIcon,
        iconBoxClassName: "bg-blue-100 text-blue-600",
    },
    {
        title: "Listas & CRUD",
        description: "Renderização de listas, keys e operações de CRUD.",
        iconSrc: listIcon,
        iconBoxClassName: "bg-orange-100 text-orange-500",
    },
    {
        title: "API & useEffect",
        description: "Busca de dados, loading, erro e ciclo de efeitos.",
        iconSrc: cloudIcon,
        iconBoxClassName: "bg-violet-100 text-violet-600",
    },
    {
        title: "Estado Compartilhado",
        description: "Context API para dados usados por mais de uma tela.",
        iconSrc: usersIcon,
        iconBoxClassName: "bg-emerald-100 text-emerald-600",
    },
    {
        title: "Rotas",
        description: "Navegação entre páginas com React Router.",
        iconSrc: arrowLeftIcon,
        iconBoxClassName: "bg-blue-100 text-blue-600",
    },
    {
        title: "Componentes Reutilizáveis",
        description: "Button, Input, Card e padrões simples de reutilização.",
        iconSrc: layersIcon,
        iconBoxClassName: "bg-orange-100 text-orange-500",
    },
] as const;

export function HomePage() {
    return (
        <section className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 xl:px-10">
            <Badge className="bg-violet-100 text-violet-700">Catálogo</Badge>

            <header className="mt-5 max-w-4xl xl:max-w-5xl">
                <h1 className="text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl xl:text-[4.4rem]">
                    React Lab
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-800 sm:text-lg sm:leading-8 xl:text-[1.05rem] xl:leading-9">
                    Projeto pessoal criado para praticar React saindo do Angular.
                </p>
                <p className="max-w-4xl text-base leading-8 text-slate-800 sm:text-lg sm:leading-8 xl:text-[1.05rem] xl:leading-9">
                    Cada seção implementa uma funcionalidade simples e independente, focada em um conceito essencial do React.
                </p>
            </header>

            <div className="mt-12">
                <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950">
                    Seções do projeto
                </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {cardsInfo.map(({ title, description, iconSrc, iconBoxClassName }, index) => (
                    <CardComponent
                        key={`${title}-${index}`}
                        title={title}
                        description={description}
                        iconSrc={iconSrc}
                        iconBoxClassName={iconBoxClassName}
                    />
                ))}
            </div>

            <aside className="mt-8 rounded-3xl border border-sky-100 bg-slate-50/80 px-5 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:px-6 sm:py-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <IconBox boxClassName="rounded-full border-4 border-blue-500 bg-white text-blue-500" iconClassName="size-0">
                        <span className="text-2xl font-semibold leading-none">i</span>
                    </IconBox>
                    <div className="min-w-0">
                        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl">
                            Sobre o projeto
                        </h3>
                        <p className="mt-2 max-w-5xl text-base leading-8 text-slate-800 sm:text-lg">
                            O React Lab serve como catálogo visual do que foi praticado durante a transição de Angular para React.
                        </p>
                    </div>
                </div>
            </aside>
        </section>
    );
}
