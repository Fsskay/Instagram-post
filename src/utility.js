export const flatternArr = (arr) =>{
    return arr.reduce((map,item)=>{
        map[item._uid] = item;
        return map
    },{})
};


export const parseToYearAndMonth = (str) => {
    const date = str ? new Date(str) : new Date();
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
    }
};