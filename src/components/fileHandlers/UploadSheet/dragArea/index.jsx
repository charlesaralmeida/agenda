import '../style.css'
import Button from './button'
import Input from './input'
import useLogic from './useLogic'

const DragArea = ({ getData }) => {
    const {
        dragOver,
        dragLeave,
        drop,
        fileSelected,
        readUploadFile,
        clearFile,
    } = useLogic()

    return (
        <div
            className="drag-area"
            onDragOver={dragOver}
            onDragLeave={dragLeave}
            onDrop={(e) => getData(drop(e))}
        >
            <Input
                readUploadFile={(e) => {
                    e.preventDefault()
                    return getData(readUploadFile(e.target.files[0]))
                }}
                fileSelected={fileSelected}
            />
            <Button fileSelected={fileSelected} clearFile={clearFile} />
        </div>
    )
}

export default DragArea
