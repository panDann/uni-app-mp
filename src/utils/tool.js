
// type Formatter = 'MMMM/mm/dd' | 'MMMM-mm-dd'
const addZero = (mon) => mon > 9 ? mon : '0' + mon

export function formatDate(time=new Date(), formatter='MMMM-mm-dd') {

    let date = new Date(time)
    let linkChar = /\//.test(formatter||'/') ? '/' : '-'
    if (!date) return ''
    // return formatter.replace('MMMM',date.getFullYear()+'').replace('mm',date.getMonth()+1+'').replace('dd',date.getDate()+'')
    return date.getFullYear() + linkChar +
        addZero(date.getMonth() + 1) + linkChar +
        addZero(date.getDate())
}
