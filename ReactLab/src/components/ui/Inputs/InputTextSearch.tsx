interface InputProps {
    value: string;
    placeholder?: string;
    classes?: string;
    onChange?: (value: string) => void;
}

export function InputTextSearch({ value, placeholder, classes, onChange }: InputProps) {
    return (
        <div>
            <label htmlFor="price" className="block text-sm/6 font-medium text-white">Price</label>
            <div className="mt-2">
                <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                    <div className="shrink-0 text-base text-gray-400 select-none sm:text-sm/6">$</div>
                    <input id="price" value={value} onChange={(e) => onChange?.(e.target.value)} type="text" name="price" placeholder={`${placeholder}`} className={`block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6 ${classes}`} />
                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4">
                            <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}