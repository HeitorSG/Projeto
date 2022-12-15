import { AxiosError } from "axios";

interface IProps {
    error: AxiosError;
}

export const RecordError: React.FC<IProps> = ({ error }) => {
    
    return (
        <div className="error">
            <div>
                <b>Message:</b>{error.message}
            </div>
            <b>URL:</b> {error.config?.url}
            <div>
                <b>Details:</b>{error.response?.statusText}
            </div>
        </div>
    )
}