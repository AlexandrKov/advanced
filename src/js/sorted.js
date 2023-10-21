export default function orderByProps(obj, sortArr = []) {
    const result = [];
    for(let key of sortArr){
        if(obj.hasOwnProperty(key)) {
            result.push({key, value: obj[key]})
        }
    }
    const allkeys = Object.keys(obj).sort()
    for(let key of allkeys) {
        if(!sortArr.includes(key)) {
            result.push({key, value: obj[key]})
        }
    }
    return result;
}