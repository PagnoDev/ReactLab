interface InputProps {
    value: string;
    placeholder?: string;
    classes?: string;
    onChange?: (value: string) => void;
}

export function InputTextBox({ value, placeholder, classes, onChange }: InputProps) {
    return (
        <textarea
            placeholder={placeholder}
            rows={4}
            value={value}
            className={`h-full w-full resize-none overflow-hidden rounded-2xl outline outline-2 outline-gray-500/10 hover:outline-purple-500/50 focus:outline-purple-500/50 p-2 h-10 ${classes}`}
            onChange={(e) => onChange?.(e.target.value)} />
    );
}