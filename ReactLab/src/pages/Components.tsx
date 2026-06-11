import puzzleIcon from "../assets/icons/puzzle.svg?react";
import { Box } from "../components/ui/Box";
import { ButtonProp } from "../components/ui/ButtonProp";
import { IconBox } from "../components/ui/IconBox";

export function Components() {
    return (
        <section className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 xl:px-10">
            <header className="max-w-3xl">
                <h1 className="text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl">
                    Componentes
                </h1>
                <p className="mt-4 text-base leading-8 text-slate-800 sm:text-lg">
                    Esta tela mostra um exemplo simples de componente reutilizavel com props.
                </p>
            </header>

            <Box extraClasses="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-3 rounded-3xl border border-slate-200 bg-white p-5 m-0">
                <Box>
                    <div className="flex items-start justify-between gap-4  m-0">
                        <IconBox Icon={puzzleIcon} boxClassName="m-0 bg-orange-100 text-orange-500" />
                    </div>

                    <div className="mt-5 flex flex-1 flex-col">
                        <h3 className="max-w-56 text-[1.75rem] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-[1.55rem] md:text-[1.45rem]">
                            Teste
                        </h3>
                        <p className="mt-3 max-w-64 text-base leading-8 text-slate-700">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nesciunt aliquid aspernatur. Dolores laborum repellendus soluta molestiae quibusdam pariatur voluptatibus ab quod, labore itaque quo corporis repellat! Qui, quam unde?
                        </p>
                    </div>
                    <br />
                    <div className="flex space-x-4 object-contain">
                        <ButtonProp title="Salvar" color="blue" onAction={() => save()} />
                        <ButtonProp title="Cancelar" color="white" onAction={() => cancel()} />
                        <ButtonProp title="Excluir" color="red" onAction={() => remove()} />
                    </div>
                </Box>
            </Box>
        </section>
    );
}

function save() {
    console.log("Salvando...");
}

function cancel() {
    console.log("Cancelando...");
}

function remove() {
    console.log("Excluindo...");
}