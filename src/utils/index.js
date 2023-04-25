export const openPage = (url) => {
    return () => window.open(url, '_blank')
}

export const equalsArrays = (a, b) => {
    let equalLengths = a.length === b.length
    let equalValues = a.every((value, index) => value === b[index])
    return equalLengths && equalValues
}

export const arraySortAccent = (a, b) => a.localeCompare(b)

export const getDateZeroHour = (date) => {
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    return new Date(year, month, day)
}

export const getTimeByMinutes = (time) => {
    let minutes = time.getMinutes()
    let hours = time.getHours()
    return minutes + hours * 60
}

export const checkDate = (date) => {
    let now = new Date(Date.now())
    //se date1 < date2 -> invalido
    return getDateZeroHour(date) >= getDateZeroHour(now) ? true : false
}

export const checkTime = (date, time) => {
    let now = new Date(Date.now())
    let result = true
    //se mesmo dia, mas horario da data1 < horario da data2 -> invalido
    if (getDateZeroHour(date).getTime() === getDateZeroHour(now).getTime()) {
        result = getTimeByMinutes(time) >= getTimeByMinutes(now) ? true : false
    }
    return result
}

export const checkReturnDate = (boardingDate, returnDate) => {
    //se data retorno < date embarque -> invalido
    return getDateZeroHour(returnDate) >= getDateZeroHour(boardingDate)
        ? true
        : false
}

export const checkReturnTime = (
    boardingDate,
    returnDate,
    boardingTime,
    returnTime
) => {
    let result = true
    //se mesmo dia, mas horario da data retorno < horario da data embarque -> invalido
    if (
        getDateZeroHour(boardingDate).getTime() ===
        getDateZeroHour(returnDate).getTime()
    ) {
        result =
            getTimeByMinutes(returnTime) >= getTimeByMinutes(boardingTime)
                ? true
                : false
    }
    return result
}

export const checkAdress = (adress) => {
    return adress !== '' ? true : false
}
