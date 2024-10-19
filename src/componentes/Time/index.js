import Colaborador from "../Colaborador"
import "./Time.css"

const Time = (props) => {
    const estiloBg = { backgroundColor: props.corSecundaria }
    const estiloBorda = { borderColor: props.corPrimaria }
    return (
        (props.colaboradores.length > 0) ? 
        <section className="time" style={estiloBg}>
            <h3 style={estiloBorda}>{props.nome}</h3>
            <div className="colaboradores">
                {
                    props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)
                }
            </div>
        </section>
        : ""
    )
}

export default Time