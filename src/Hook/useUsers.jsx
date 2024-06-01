import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useUsers = () => {
    const myAxios = useAxios();
    const {user} = useContext(AuthContext);
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await myAxios.get(`/users`)
            const findUser = await res?.data?.find(us => us.email == user?.email)
            return findUser;
        }
    });
    return [users, refetch]
};

export default useUsers;