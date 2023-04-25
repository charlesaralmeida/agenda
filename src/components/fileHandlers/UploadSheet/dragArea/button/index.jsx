import '../../style.css'

const Button = ({ clearFile, fileSelected }) => (
    <>
        {fileSelected ? (
            <>
                <br />
                <br />
                <p className="button" onClick={clearFile}>
                    Limpar
                </p>
            </>
        ) : null}
    </>
)

export default Button
