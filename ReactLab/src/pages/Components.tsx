import { useState } from "react";
import puzzleIcon from "../assets/icons/puzzle.svg?react";
import { Box } from "../components/ui/Box";
import { ButtonProp } from "../components/ui/ButtonProp";
import { IconBox } from "../components/ui/IconBox";
import { ModalComponent } from "../components/ModalComponent";
import { Alert, type AlertData, type AlertType } from "../components/ui/Alert/Alert";
import { AlertContainer } from "../components/ui/Alert/AlertContainer";

export function Components() {
    const [description, setDescription] = useState("Lorem ipsum, dolor sit amet consectetur adipisicing elit.");
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [alertType, setAlertType] = useState<"success" | "error" | "warning" | "info">("success");
    const [alertIsOpen, setAlertIsOpen] = useState(false);

    const [alerts, setAlerts] = useState<AlertData[]>([]);


    function addAlert(message: string, type: AlertType) {
        const id = Date.now(); // id único simples
        setAlerts((prev) => [...prev, { id, message, type }]);
    }

    function removeAlert(id: number) {
        setAlerts((prev) => prev.filter((a) => a.id !== id));
    }

    return (
        <section className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 xl:px-10">

            <ModalComponent
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                title="Meu modal"
            >
                <p>Conteúdo do modal aqui.</p>

                <ButtonProp
                    title="Cancelar"
                    color="gray"
                    onAction={() => setModalIsOpen(false)}
                />
            </ModalComponent>
            
             <AlertContainer alerts={alerts} onClose={removeAlert} />

            <header className="max-w-3xl">
                <h1 className="text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl">
                    Componentes
                </h1>
                <p className="mt-4 text-base leading-8 text-slate-800 sm:text-lg">
                    Esta tela mostra um exemplo simples de componente reutilizavel com props.
                </p>
            </header>

            <Box extraClasses="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-3 rounded-3xl border border-slate-200 bg-white p-5 m-0">
                <Box extraClasses="rounded-3xl border border-slate-200">
                    <div className="flex flex-row items-start justify-start gap-4">
                        <IconBox Icon={puzzleIcon} boxClassName="m-0 h-19 w-19 bg-orange-100 text-orange-500" />
                        <div className="flex flex-col items-start justify-center">
                            <h3 className="max-w-56 text-[1.75rem] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-[1.55rem] md:text-[1.45rem]">
                                Buttons
                            </h3>
                            <p className="mt-3 max-w-64 text-base leading-8 text-slate-700">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="flex justify-end space-x-4 object-contain">
                        <ButtonProp title="Salvar" color="purple" onAction={() => save()} />
                        <ButtonProp title="Cancelar" color="gray" onAction={() => cancel()} />
                        <ButtonProp title="Excluir" color="red" onAction={() => remove()} />
                    </div>
                </Box>
                <Box extraClasses="rounded-3xl border border-slate-200">
                    <div className="flex flex-row items-start justify-start gap-4">
                        <IconBox Icon={puzzleIcon} boxClassName="m-0 h-19 w-19 bg-orange-100 text-orange-500" />
                        <div className="flex flex-col items-start justify-center">
                            <h3 className="max-w-56 text-[1.75rem] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-[1.55rem] md:text-[1.45rem]">
                                Input
                            </h3>
                            <p className="mt-3 max-w-64 text-base leading-8 text-slate-700">
                                {description}
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="flex space-x-4 object-contain outline-red-100">
                        <input
                            type="text"
                            maxLength={70}
                            className="p-2 h-10 w-full bg-purple-100 border-red-600 rounded-md focus:border-red-600 focus:outline-purple-500"
                            onChange={(e) => updateDescription(setDescription, e.target.value)}
                        />
                    </div>
                </Box>
                <Box extraClasses="rounded-3xl border border-slate-200">
                    <div className="flex flex-row items-start justify-start gap-4">
                        <IconBox Icon={puzzleIcon} boxClassName="m-0 h-19 w-19 bg-orange-100 text-orange-500" />
                        <div className="flex flex-col items-start justify-center">
                            <h3 className="max-w-56 text-[1.75rem] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-[1.55rem] md:text-[1.45rem]">
                                Modal
                            </h3>
                            <p className="mt-3 max-w-64 text-base leading-8 text-slate-700">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="flex justify-end space-x-4 object-contain outline-red-100">
                        <ButtonProp title="Abir modal" color="purple" onAction={() => setModalIsOpen(true)} />
                    </div>
                </Box>
                <Box extraClasses="rounded-3xl border border-slate-200">
                    <div className="flex flex-row items-start justify-start gap-4">
                        <IconBox Icon={puzzleIcon} boxClassName="m-0 h-19 w-19 bg-orange-100 text-orange-500" />
                        <div className="flex flex-col items-start justify-center">
                            <h3 className="max-w-56 text-[1.75rem] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-[1.55rem] md:text-[1.45rem]">
                                Alert
                            </h3>
                            <p className="mt-3 max-w-64 text-base leading-8 text-slate-700">
                                Card destinado a exemplificar a funcionalidade de alerts
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="flex justify-end space-x-4 object-contain outline-red-100">
                        <ButtonProp title="Sucesso" color="purple" onAction={() => addAlert("Operação realizada com sucesso.", "success")} />
                        <ButtonProp title="Aviso" color="yellow" onAction={() => addAlert("Este é um aviso.", "warning")} />
                        <ButtonProp title="Erro" color="red" onAction={() => addAlert("Ocorreu um erro.", "error")} />
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

function updateDescription(callback: (val: string) => void, val: string) {
    if (val == "") {
        val = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
    }

    callback(val);
}