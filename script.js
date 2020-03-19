//const str = "Salut John !";
//const strReverse = str.split(/(?:)/u).reverse().join('');
//console.log(strReverse);

//const array1 = ['Salut', 'John', '!'];
//console.log('array1:', array1);
//const reversed = array1.reverse();
//console.log('reversed:', reversed);

//const monArray = ["Salut", "John", "!"];
//monArray.reverse();
//console.log(monArray)

//const monArray = ["S", "a", "l", "u", "t"," ", "J", "o", "h", "n", "!"];
//monArray.reverse();
//console.log(monArray.join(''))

//const elements = ['Salut',' ', 'John', '!'];
//console.log(elements.join(''));

form.addEventListener("submit", e => {
    e.preventDefault();
    const str = document.getElementById("input").value;
    const strReverse = str.split(/(?:)/u).reverse().join('');
    console.log(strReverse);
    document.getElementById("result").innerText = strReverse ;
    console.log(result);
});