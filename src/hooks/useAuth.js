import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth.allContext
}
export default useAuth;