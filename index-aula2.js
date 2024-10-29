const listaLivros = require("./arrays.js") ;
function mergeSort (array) {
    if (array.length > 1){
    const meio = Math.floor(array.length / 2);
    const part1 = mergeSort(array.slice(0, meio));
    const part2 = mergeSort(array.slice(meio));
    array = ordena (part1, part2);
    }
    return array;

}

