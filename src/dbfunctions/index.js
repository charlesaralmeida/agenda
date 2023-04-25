import Firebase from '../firebase'

const AGENDA_PATH = 'agenda'

const saveAgenda = (data) => {
    return writeData(AGENDA_PATH, data)
}

const writeData = (path, data) => {
    return Firebase.writeData(path, data)
}

const Database = {
    saveAgenda,
}

export default Database
