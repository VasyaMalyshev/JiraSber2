
export const sort = (list) => {
    return  list.sort(function(a, b){
        a = new Date(a.creationTime);
        b = new Date(b.creationTime);
        return a>b ? -1 : a < b ? 1 : 0;
    });
}
