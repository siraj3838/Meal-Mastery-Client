import useRecipes from "../../Hook/useRecipes";

const Recipes = () => {
    const [recipes] = useRecipes();
    return (
        <div>
            <div className="fixed top-16 z-30 left-[54%] w-full">
                <div className="w-2/6 py-1">
                    <label className="input input-bordered input-warning flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search Recipe..." />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
            </div>
            
        </div>
    );
};

export default Recipes;