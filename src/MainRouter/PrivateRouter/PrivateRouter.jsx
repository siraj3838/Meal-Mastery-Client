import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    useEffect(() => {
        if (!loading && !user) {
            toast.error("Please log in first");
        }
    }, [loading, user]);

    if (loading) {
        return (
            <div className="max-w-screen-xl mx-auto flex justify-center mt-20">
                <span className="loading loading-spinner text-accent"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return (
        <>
            <Navigate state={{ from: location }} to="/" />
            <Toaster />
        </>
    );
};

export default PrivateRouter;
