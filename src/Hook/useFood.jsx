import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useFood = () => {
    const myAxios = useAxios();
    const { refetch, data: foods = [] } = useQuery({
        queryKey: ['foods',],
        queryFn: async () => {
            const res = await myAxios.get(`/foods`)
            return res.data;
        }
    });
    return [foods, refetch]
};

export default useFood;