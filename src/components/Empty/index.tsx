import EmptyImage from "../../assets/empty.svg";
import "./styles.css";

interface IEmptyProps {
    title: string;
}

export default function Empty({ title = "Nenhum dado encontrado!"}: IEmptyProps) {
    return (
        <div className='container-empty'>
            <img src={EmptyImage} alt='empty' />
            <h3>{title}</h3>
        </div>
    )
}