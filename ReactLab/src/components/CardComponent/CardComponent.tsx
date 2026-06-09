import { IconBox } from "../ui/IconBox";

type CardComponentProps = {
    title: string;
    description: string;
    iconSrc: string;
    iconBoxClassName?: string;
};

function ArrowIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
        >
            <path
                d="M4.16699 10H15.8337M15.8337 10L10.8337 5M15.8337 10L10.8337 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function CardComponent({
    title,
    description,
    iconSrc,
    iconBoxClassName = "bg-slate-100 text-slate-700",
}: CardComponentProps) {
    return (
        <article className="group flex min-h-44 flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]">
            <div className="flex items-start justify-between gap-4">
                <IconBox iconSrc={iconSrc} boxClassName={iconBoxClassName} />
            </div>

            <div className="mt-5 flex flex-1 flex-col">
                <h3 className="max-w-56 text-[1.75rem] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-[1.55rem] md:text-[1.45rem]">
                    {title}
                </h3>
                <p className="mt-3 max-w-64 text-base leading-8 text-slate-700">
                    {description}
                </p>

                <div className="mt-auto flex justify-end pt-6 text-slate-700 transition group-hover:translate-x-1">
                    <ArrowIcon />
                </div>
            </div>
        </article>
    );
}
