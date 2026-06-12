const colorClasses = {
    purple: "bg-purple-500 hover:bg-purple-700 text-white",
    gray: "bg-gray-400 hover:bg-gray-700 text-white",
    yellow: "bg-yellow-500 hover:bg-yellow-700 text-white",
    red: "outline outline-2 outline-red-500 text-red-500 hover:bg-red-500 hover:text-white",

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
            <button className={`${selectedColor} font-bold py-2 px-4 rounded-lg`} onClick={onAction}>
                {title}
            </button>
        </div>
    );
}