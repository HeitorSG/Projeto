import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";


interface IProps {
    token: string | null;
}

export const RequireAuth: React.FC<IProps> = ({token}) => {
    const auth =  useContext(AuthContext)
    if(!auth.user) {
        return (<></>);
    }
    return null;
}