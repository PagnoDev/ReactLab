import { Box } from "../components/ui/Box";
import { usePopularMovies } from "../hooks/useMovie";

export function APIDemo() {
    const { data, isLoading, isError } = usePopularMovies();
    console.log("API Demo - Data:", data, "Loading:", isLoading, "Error:", isError);

    return (
        <div className="size-auto grid grid-cols-1 xl:grid-cols-5 gap-4 p-5">
            <div className="col-span-5 xl:col-span-5">
                <h1 className="text-2xl font-bold text-black">API Demo</h1>
                <p className="text-gray-400">This page demonstrates how to use the API.</p>
            </div>
            <Box extraClasses="col-span-3">
                {isLoading && <p>Loading...</p>}
                {isError && <p>Error loading data.</p>}
                {data && (
                    <ul role="list" className="divide-y divide-white/5">
                        {data.results.map((movie) => (
                            <li key={movie.id} className="flex justify-between gap-x-6 py-5">{movie.title}</li>
                        ))}
                    </ul>
                )}
            </Box>
            <Box extraClasses="col-span-2">
                <p className="text-sm text-gray-400">This is a box component.</p>
            </Box>
        </div >
    );
}