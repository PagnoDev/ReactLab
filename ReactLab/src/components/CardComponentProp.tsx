import arrowRightIcon from "../assets/icons/arrow-right.svg?react";
import { IconBox } from "./ui/IconBox";

type CardComponentProp = {
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    iconBoxClassName?: string;
};

export function CardComponentProp({
    title,
    description,
    icon,
    iconBoxClassName = "bg-slate-100 text-slate-700",
}: CardComponentProp) {
    return (
        <article className="group flex min-h-44 flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]">
            <div className="flex items-start justify-between gap-4">
                <IconBox Icon={icon} boxClassName={iconBoxClassName} />
            </div>

            <div className="mt-5 flex flex-1 flex-col">
                <h3 className="max-w-56 text-[1.75rem] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-[1.55rem] md:text-[1.45rem]">
                    {title}
                </h3>
                <p className="mt-3 max-w-64 text-base leading-8 text-slate-700">
                    {description}
                </p>

                <div className="mt-auto flex justify-end pt-6 text-slate-700 transition group-hover:translate-x-1">
                    <IconBox Icon={arrowRightIcon} boxClassName="size-5" />
                </div>
            </div>
        </article>
    );
}
