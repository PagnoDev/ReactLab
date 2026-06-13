interface Option {
  label: string;
  value: string;
}

interface InputSelectProps {
  value: string;
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
}

export function InputSelect({ value, options, placeholder, onChange }: InputSelectProps) {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)} className={`outline outline-2 outline-gray-500/10 rounded-2xl hover:outline-purple-500/50 focus:outline-purple-500/50 p-2 h-10`}>
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}