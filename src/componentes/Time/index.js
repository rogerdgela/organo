import Colaborador from "../Colaborador"
import "./Time.css"

const Time = (props) => {
    const estiloBg = { backgroundColor: props.corSecundaria }
    const estiloBorda = { borderColor: props.corPrimaria }
    return (
        <section className="time" style={estiloBg}>
            <h3 style={estiloBorda}>{props.nome}</h3>

            <Colaborador />
            <Colaborador />
        </section>
    )
}

export default Time