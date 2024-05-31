import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useRecipes = () => {
    const myAxios = useAxios();
    const { refetch, data: recipes = [] } = useQuery({
        queryKey: ['recipes',],
        queryFn: async () => {
            const res = await myAxios.get(`/recipes`)
            return res.data;
        }
    });
    return [recipes, refetch]
};

export default useRecipes;