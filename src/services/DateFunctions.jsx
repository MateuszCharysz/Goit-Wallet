export const getDay = () => {
    const day = new Date().getDate()
        if (day<10) {
            return `0${day}`
        }   return day
    }
export const getMonth = () => {
        const month = new Date().getMonth()+1
            if (month<10) {
                return `0${month}`
            } return month
        }
export const getYear = () => {
        const trim = (number) => {
            if (number<10) {
                return `0${number}`
            }   return number
        }
        const year = new Date().getYear()
            if (year<100) {
                return trim(year)
            } return trim(year-100)
    }
