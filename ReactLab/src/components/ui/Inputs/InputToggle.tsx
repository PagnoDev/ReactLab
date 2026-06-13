interface InputProps {
    value: string;
    classes?: string;
    onChange?: (value: string) => void;
}

export function InputToggle({ value, classes, onChange }: InputProps) {
    return (
        <input type="checkbox" value={value} className={`p-2 h-10 outline outline-2 outline-blue-500 rounded-2xl ${classes}`} onChange={(e) => onChange?.(e.target.value)} />
    );
}