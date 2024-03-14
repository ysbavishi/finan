// Clean Data
// Requirements;
// 1: Array of Date => Array[Date]
// 2. Array of Objects  containing Array of Open or Close Price =>

interface attributeType {
    firstPrice: any,
    secondPrice: any
}

const getArrayData = (dateObj: Array<Object>, attributes: attributeType,timeSpan: string) => {
    console.log(dateObj)
    console.log(attributes)
    let arrayOfDate = null;
    let firstPrice = null;
    let secondPrice = null;
    switch(timeSpan) {
        case 'annually':
            arrayOfDate = getArrayOfDate(dateObj, 0, 12);
            firstPrice = getFirstPrice(dateObj, attributes.firstPrice, 0, 12);
            secondPrice = getSecondPrice(dateObj,attributes.secondPrice, 0, 12);
            return {arrayOfDate, firstPrice, secondPrice}
        case 'firstHalf':
            arrayOfDate = getArrayOfDate(dateObj, 0, 7);
            firstPrice = getFirstPrice(dateObj, attributes.firstPrice,0, 7);
            secondPrice = getSecondPrice(dateObj, attributes.secondPrice,0, 7);
            return {arrayOfDate, firstPrice, secondPrice}
        case 'secondHalf':
            arrayOfDate = getArrayOfDate(dateObj, 7, 12);
            firstPrice = getFirstPrice(dateObj, attributes.firstPrice,7, 12);
            secondPrice = getSecondPrice(dateObj, attributes.secondPrice,7, 12);
            return {arrayOfDate, firstPrice, secondPrice}

    }
}

const getProperDate = (paramDate: string) => {
    const date = new Date(paramDate);
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()
    const shortDate = new Date(`${year}/${month}/${day}`)
    const properDate = new Date(shortDate);
    return properDate;
}


const getArrayOfDate = (dateObj: any, start: number, end: number) => {
    let arrayOfDate: Array<Date> = [];
    dateObj.map((ele: any) => {
        const properDate = getProperDate(ele.Date);
        if (properDate.getMonth() >= start && properDate.getMonth() < end) {
            arrayOfDate.push(new Date(ele.Date))
        }
    })
    return arrayOfDate;
}

const getFirstPrice = (dateObj: Array<Object>, attribute: string, start:number, end: number) => {
    let arrHigh: Array<number> = [];
    dateObj.map((ele:any) => {
        const properDate = getProperDate(ele.Date);
        if (properDate.getMonth() >= start && properDate.getMonth() < end) {
            arrHigh.push(Number.parseFloat(ele[attribute].replace(/,/g,'')))
        }
    })
    return arrHigh;
}

const getSecondPrice = (dateObj: Array<Object>, attribute:string, start:number, end: number) => {
    let arrClose: Array<number> = [];
    dateObj.map((ele:any) => {
        const properDate = getProperDate(ele.Date);
        if (properDate.getMonth() >= start && properDate.getMonth() < end) {
            arrClose.push(Number.parseFloat(ele[attribute].replace(/,/g,'')))
        }
    })
    return arrClose;
}

export {getArrayData}