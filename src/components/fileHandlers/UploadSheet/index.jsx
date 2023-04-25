import DragArea from './dragArea'
import ModelDownload from './modelDownload'

const UploadSheet = ({ modelo, saveFile, getData }) => {
    return (
        <div className="upload-container">
            <ModelDownload modelo={modelo} />
            <DragArea saveFile={saveFile} getData={getData} />
        </div>
    )
}

export default UploadSheet
