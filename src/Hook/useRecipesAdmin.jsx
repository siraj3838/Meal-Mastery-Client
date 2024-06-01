import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useEffect, useState } from "react";

const useRecipesAdmin = () => {
    const myAxios = useAxios();
    // const { refetch, data: recipesAdmin = [] } = useQuery({
    //     queryKey: ['recipesAdmin',],
    //     queryFn: async () => {
    //         const res = await myAxios.get(`/recipesAdmin`)
    //         return res.data;
    //     }
    // });
    const [recipesAdmin, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('/food.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return [recipesAdmin]
};

export default useRecipesAdmin;