interface InputProps {
    label?: string;
    classes?: string;
    onChange?: (value: string) => void;
}

export function InputCheckbox({ label, classes, onChange }: InputProps) {
    return (
        <label className="flex items-center gap-2">
            <input type="checkbox" className={`p-2 h-10 ${classes}`} onChange={(e) => onChange?.(e.target.value)} />
            {label && <span>{label}</span>}
        </label>
    );
}