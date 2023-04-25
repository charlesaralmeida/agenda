export const useLogic = () => {
    const formatPhoneNumber = (string) => {
        string = string.replace(/\D/g, '')
        if (string.length > 2)
            string =
                '(' + string.slice(0, 2) + ')' + string.slice(2, string.length)

        if (string.length > 8)
            string = string.slice(0, 8) + '-' + string.slice(8, string.length)

        if (string.length > 13) {
            string = string.replace('-', '')
            string = string.slice(0, 9) + '-' + string.slice(9, string.length)
        }

        if (string.length > 14) string = string.slice(0, 14)

        return string
    }

    return { formatPhoneNumber }
}
