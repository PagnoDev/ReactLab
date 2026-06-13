import { useState, useRef, useEffect } from "react";

interface Option {
    label: string;
    value: string;
}

interface MultiSelectProps {
    value: string[];
    options: Option[];
    placeholder?: string;
    onChange: (value: string[]) => void;
}

export function InputMultiSelect({ value, options, placeholder, onChange }: MultiSelectProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // fecha ao clicar fora, mesma ideia do Escape no modal
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    function toggle(optionValue: string) {
        if (value.includes(optionValue)) {
            onChange(value.filter((v) => v !== optionValue)); // já tem, remove
        } else {
            onChange([...value, optionValue]);                // não tem, adiciona
        }
    }

    function remove(optionValue: string) {
        onChange(value.filter((v) => v !== optionValue));
    }

    return (
        <div ref={ref} className="relative w-full">
            {/* o campo com os chips */}
            <div
                onClick={() => setOpen((o) => !o)}
                className="flex min-h-10 w-full flex-wrap items-center gap-2 rounded-2xl border-2 border-gray-500/10 p-2 cursor-pointer"
            >
                {value.length === 0 && (
                    <span className="text-slate-400 text-sm">{placeholder}</span>
                )}

                {value.map((v) => {
                    const option = options.find((o) => o.value === v);
                    return (
                        <span
                            key={v}
                            className="flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-sm text-slate-700"
                        >
                            {option?.label ?? v}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // não abre/fecha o dropdown ao remover
                                    remove(v);
                                }}
                                className="text-slate-400 hover:text-slate-700"
                            >
                                ✕
                            </button>
                        </span>
                    );
                })}

                <span className="ml-auto text-slate-400">⌄</span>
            </div>

            {/* a lista de opções */}
            {open && (
                <div className="absolute z-10 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-lg">
                    {options.map((option) => {
                        const selected = value.includes(option.value);
                        return (
                            <div
                                key={option.value}
                                onClick={() => toggle(option.value)}
                                className={`flex items-center justify-between px-3 py-2 text-sm cursor-pointer hover:bg-slate-50 ${selected ? "text-blue-600 font-medium" : "text-slate-700"
                                    }`}
                            >
                                {option.label}
                                {selected && <span>✓</span>}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}