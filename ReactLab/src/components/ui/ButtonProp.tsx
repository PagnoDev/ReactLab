const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-700",
    red: "bg-red-500 hover:bg-red-700",
    white: "bg-gray-500 hover:bg-gray-700",
};

interface ButtonConfig {
    title: string;
    color: keyof typeof colorClasses;
    onAction: () => void;
}


export function ButtonProp({ title, color, onAction }: ButtonConfig) {
    const selectedColor = colorClasses[color]

    return (
        <div>
            <button className={`${selectedColor} text-white font-bold py-2 px-4 rounded`} onClick={onAction}>
                {title}
            </button>
        </div>
    );
}