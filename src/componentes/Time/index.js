import "./Time.css"

const Time = (props) => {
    const estiloBg = { backgroundColor: props.corSecundaria }
    const estiloBorda = { borderColor: props.corPrimaria }
    return (
        <section className="time" style={estiloBg}>
            <h3 style={estiloBorda}>{props.nome}</h3>
        </section>
    )
}

export default Time