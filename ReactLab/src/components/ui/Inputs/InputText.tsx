interface InputProps {
    value: string;
    placeholder?: string;
    classes?: string;
    onChange?: (value: string) => void;
}

export function InputText({ value, placeholder, classes, onChange }: InputProps) {
    return (
        <input type="text" placeholder={placeholder} value={value} className={`outline outline-2 outline-gray-500/10 rounded-2xl hover:outline-purple-500/50 focus:outline-purple-500/50 p-2 h-10 ${classes}`} onChange={(e) => onChange?.(e.target.value)} />
    );
}