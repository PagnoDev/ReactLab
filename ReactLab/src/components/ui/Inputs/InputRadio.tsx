interface InputRadioProps {
  label: string;
  name: string;       // agrupa os radios
  value: string;      // o valor deste radio
  selected: string;   // o valor escolhido no grupo
  onChange: (value: string) => void;
}

export function InputRadio({ label, name, value, selected, onChange }: InputRadioProps) {
    return (
        <label className="flex items-center gap-2">
            <input
                type="radio"
                name={name}
                value={value}
                checked={value === selected}
                onChange={() => onChange(value)}
            />
            {label}
        </label>
    );
}