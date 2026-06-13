import { useReducer, useState } from "react";
import { Box } from "../components/ui/Box";
import { InputText } from "../components/ui/Inputs/InputText.tsx";
import { InputTextBox } from "../components/ui/Inputs/InputTextBox.tsx";
import { InputRadio } from "../components/ui/Inputs/InputRadio.tsx";
import { InputSelect } from "../components/ui/Inputs/InputSelect.tsx";
import { InputCheckbox } from "../components/ui/Inputs/InputCheckbox.tsx";
import { InputMultiSelect } from "../components/ui/Inputs/InputMultSelect.tsx";
import { ButtonProp } from "../components/ui/ButtonProp.tsx";

export function FormPage() {

    const [input, setInput] = useState("Value inicial");

    const levels = [
        { label: "Júnior", value: "jr" },
        { label: "Pleno", value: "pl" },
        { label: "Sênior", value: "sr" },
    ];

    const technologies = [
        { label: "React", value: "react" },
        { label: "TypeScript", value: "ts" },
        { label: "Tailwind", value: "tailwind" },
        { label: "Node", value: "node" },
    ];

    interface FormState {
        name: string;
        email: string;
        profession: string;
        currentProfessionLevel: string;
        technologies: string[];
        receiveReminders: boolean;
        autoSave: boolean;
        observations: string;
        studyPeriod: boolean;
    }

    const initialFormState: FormState = {
        name: "João Pagno",
        email: "pagno-dev@outlook.com",
        profession: "Desenvolvedor Fullstack",
        currentProfessionLevel: "pl",
        technologies: ["React", "TypeScript", "Tailwind"],
        receiveReminders: false,
        autoSave: true,
        observations: "Em transição do framework Angular para React, buscando me aprofundar mais no ecossistema React e suas melhores práticas.",
        studyPeriod: false,
    };

    type FormAction =
        | { type: "SET_FIELD"; field: keyof FormState; value: string | string[] | boolean }
        | { type: "RESET" };

    const formReducer = (state: FormState, action: FormAction) => {
        switch (action.type) {
            case "SET_FIELD":
                return {
                    ...state,
                    [action.field!]: action.value,
                };

            case "RESET":
                return initialFormState;

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(formReducer, initialFormState);

    return (
        <section className="h-full mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 xl:px-10">
            <header className="max-w-3xl">
                <h1 className="text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl">
                    Formulários
                </h1>
                <p className="mt-4 text-base leading-8 text-slate-800 sm:text-lg">
                    Esta tela mostra exemplos simples de formulários utilizando reducers.
                </p>
            </header>
            <Box extraClasses="size-auto mt-6 grid grid-cols-1 xl:grid-cols-5 rounded-3xl border border-slate-200 bg-white">
                <Box extraClasses="h-40 flex flex-col col-span-5">
                    <div className="flex flex-col col-span-2 text-start text-lg font-medium text-slate-700">
                        <h1>Formulário com UseState simples</h1>
                    </div>
                    <div className="flex flex-col col-span-2 text-start text-lg font-medium text-slate-700 gap-4">
                        <span className="text-sm text-slate-500 ">Exemplo de formulário utilizando useState: {input}</span>
                        <InputText placeholder="State simples" value={input} onChange={setInput} />
                    </div>
                </Box>
                <Box extraClasses="h-full grid grid-cols-2 col-span-3 content-start">
                    <div className="flex flex-col col-span-2 text-start text-lg font-medium text-slate-700">
                        <h1>Formulário Reducer</h1>
                    </div>
                    <div className="flex flex-col gap-3 col-span-1 text-lg font-medium text-slate-700">
                        <span className="text-sm text-slate-500"><b>Nome completo: </b></span>
                        <InputText placeholder="Reducer" value={state.name} onChange={(value) => dispatch({ type: "SET_FIELD", field: "name", value: value })} />
                    </div>
                    <div className="flex flex-col gap-3 col-span-1 text-lg font-medium text-slate-700">
                        <span className="text-sm text-slate-500"><b>E-Mail: </b></span>
                        <InputText placeholder="Reducer" value={state.email} onChange={(value) => dispatch({ type: "SET_FIELD", field: "email", value: value })} />
                    </div>
                    <div className="flex flex-col gap-3 col-span-2 text-lg font-medium text-slate-700">
                        <span className="text-sm text-slate-500"><b>Cargo atual: </b></span>
                        <InputText placeholder="Reducer" value={state.profession} onChange={(value) => dispatch({ type: "SET_FIELD", field: "profession", value: value })} />
                    </div>
                    <div className="flex flex-col gap-3 col-span-1 text-lg font-medium text-slate-700">
                        <span className="text-sm text-slate-500"><b>Nivel atual: </b></span>
                        <InputSelect
                            value={state.currentProfessionLevel}
                            options={levels}
                            placeholder="Selecione..."
                            onChange={(value) =>
                                dispatch({ type: "SET_FIELD", field: "currentProfessionLevel", value })
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-3 col-span-1 text-lg font-medium text-slate-700">
                        <span className="text-sm text-slate-500"><b>Tecnologias: </b></span>

                        <InputMultiSelect
                            value={state.technologies}
                            options={technologies}
                            placeholder="Selecione..."
                            onChange={(value) =>
                                dispatch({ type: "SET_FIELD", field: "technologies", value })
                            }
                        />
                    </div>
                    <div className="flex items-center gap-3 col-span-2 text-lg font-medium text-slate-700">
                        <span className="text-sm text-slate-500"><b>Disponibilidade de estudo: </b></span>
                        <div className="flex items-center gap-4">
                            <InputRadio
                                label="Manhã"
                                name="level"
                                value="morning"
                                selected={"morning"}
                                onChange={(value) =>
                                    dispatch({ type: "SET_FIELD", field: "studyPeriod", value })
                                }
                            />
                            <InputRadio
                                label="Tarde"
                                name="level"
                                value="afternoon"
                                selected={"afternoon"}
                                onChange={(value) =>
                                    dispatch({ type: "SET_FIELD", field: "studyPeriod", value })
                                }
                            />
                            <InputRadio
                                label="Noite"
                                name="level"
                                value="night"
                                selected={"night"}
                                onChange={(value) =>
                                    dispatch({ type: "SET_FIELD", field: "studyPeriod", value })
                                }
                            />

                        </div>
                    </div>
                    <div className="flex flex-row items-start justify-evenly gap-3 col-span-2 text-lg font-medium text-slate-700">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-500"><b>Receber lembretes: </b></span>
                            <InputCheckbox onChange={() => dispatch({ type: "SET_FIELD", field: "receiveReminders", value: !state.receiveReminders })} />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-500"><b>Salvar automaticamente: </b></span>
                            <InputCheckbox onChange={() => dispatch({ type: "SET_FIELD", field: "autoSave", value: !state.autoSave })} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 col-span-2 text-lg font-medium text-slate-700">
                        <span className="text-sm text-slate-500"><b>Observações: </b></span>
                        <InputTextBox placeholder="Reducer" value={state.observations} onChange={(value) => dispatch({ type: "SET_FIELD", field: "observations", value: value })} />
                    </div>
                    <div className="flex justify-end gap-3 col-span-2 text-lg font-medium text-slate-700">
                        <ButtonProp title="Salvar" color="purple" onAction={() => alert("Formulário salvo com sucesso!")} />
                        <ButtonProp title="Resetar formulário" color="red" onAction={() => dispatch({ type: "RESET" })} />
                    </div>
                </Box>
                <Box extraClasses="h-full flex flex-col col-span-2 justify-content-center">
                    <ul role="list" className="divide-y divide-gray-200">
                        <li className="flex justify-between py-2">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="mt-1 truncate text-xs/5 text-gray-500">Nome: </p>
                                    <p className="mt-1 truncate text-xs/5 text-gray-400">{state.name}</p>
                                </div>
                            </div>
                        </li>
                        <li className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="mt-1 truncate text-xs/5 text-gray-500">Nome: </p>
                                    <p className="mt-1 truncate text-xs/5 text-gray-400">{state.name}</p>
                                </div>
                            </div>
                        </li>
                        <li className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="mt-1 truncate text-xs/5 text-gray-500">Email: </p>
                                    <p className="mt-1 truncate text-xs/5 text-gray-400">{state.email}</p>
                                </div>
                            </div>
                        </li>

                        <li className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="mt-1 truncate text-xs/5 text-gray-500">Profissão: </p>
                                    <p className="mt-1 truncate text-xs/5 text-gray-400">{state.profession}</p>
                                </div>
                            </div>
                        </li>

                        <li className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="mt-1 truncate text-xs/5 text-gray-500">Receber Lembretes: </p>
                                    <p className="mt-1 truncate text-xs/5 text-gray-400">{state.receiveReminders.valueOf() ? "Sim" : "Não"}</p>
                                </div>
                            </div>
                        </li>

                        <li className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="mt-1 truncate text-xs/5 text-gray-500">Salvar Automaticamente: </p>
                                    <p className="mt-1 truncate text-xs/5 text-gray-400">{state.autoSave.valueOf() ? "Sim" : "Não"}</p>
                                </div>
                            </div>
                        </li>

                        <li className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="mt-1 truncate text-xs/5 text-gray-500">Tecnologias: </p>
                                    <p className="mt-1 truncate text-xs/5 text-gray-400">{state.technologies.join(", ")}</p>
                                </div>
                            </div>
                        </li>

                        <li className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="mt-1 truncate text-xs/5 text-gray-500">Observações: </p>
                                    <p className="mt-1 truncate text-xs/5 text-gray-400 whitespace-pre-wrap">{state.observations}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Box>
            </Box>
        </section>
    );
}