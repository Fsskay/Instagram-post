export const flatternArr = (arr) =>{
    return arr.reduce((map,item)=>{
        map[item._uid] = item;
        return map
    },{})
};