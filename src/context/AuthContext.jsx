import { createContext, useState, useEffect } from "react";
import API from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            fetchUser();
        } else {
            setLoading(false);
        }
    }, []);

    const fetchUser = async () => {
        try {
            const { data } = await API.get("/company/me");
            setUser(data);
        } catch (error) {
            console.error("Failed to fetch user", error);
            localStorage.removeItem("token");
            delete API.defaults.headers.common["Authorization"];
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        const { data } = await API.post("/company/login", { email, password });
        localStorage.setItem("token", data.token);
        API.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        setUser(data);
        return data;
    };

    const register = async (companyData) => {
        const { data } = await API.post("/company/register", companyData);
        localStorage.setItem("token", data.token);
        API.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        setUser(data);
        return data;
    };

    const logout = () => {
        localStorage.removeItem("token");
        delete API.defaults.headers.common["Authorization"];
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};


