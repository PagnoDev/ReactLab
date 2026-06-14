import { NavLink, Outlet } from "react-router-dom";

type NavItem = {
    to: string;
    label: string;
    end?: boolean;
};

const navItems: NavItem[] = [
    { to: "/", label: "Início", end: true },
    { to: "/components", label: "Componentes" },
    { to: "/forms", label: "Formulários" },
    { to: "/api-demo", label: "API e useEffect" },
    { to: "/routes", label: "Rotas" },
];

export function AppLayout() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-950 lg:grid lg:grid-cols-[240px_minmax(0,1fr)]">
            <aside className="border-b border-slate-200 bg-white/90 px-4 py-5 backdrop-blur lg:sticky lg:top-0 lg:h-screen lg:border-r lg:border-b-0 lg:px-5 lg:py-6">
                <div className="mx-auto max-w-7xl lg:mx-0">
                    <h1 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                        React Lab
                    </h1>

                    <nav className="mt-5 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
                        {navItems.map(({ to, label, end }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={end}
                                className={({ isActive }) =>
                                    [
                                        "whitespace-nowrap rounded-2xl px-4 py-3 text-sm font-medium transition",
                                        isActive
                                            ? "bg-slate-950 text-white shadow-sm"
                                            : "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
                                    ].join(" ")
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </aside>

            <main className="min-w-0">
                <Outlet />
            </main>
        </div>
    );
}
