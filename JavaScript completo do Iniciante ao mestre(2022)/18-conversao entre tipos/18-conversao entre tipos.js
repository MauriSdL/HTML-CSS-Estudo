// Conversao de dados


//let n1 = 10;
//let n2 = '2';// O javaScript faz automaticamente o reconhecimento e a converção
               // implicita do valor da variavel como mostrado logo abaixo.
//console.log(n1 * n2, typeof n1, typeof n2);
//console.log(n1 + n2, typeof n1, typeof n2);
// toda entrada de dado no javaScript é reconhecida como STRING mesmo sendo um numero por isso tem que converter
// no caso de cima o resultado seria 102 que é a soma de 10(number)+ 2(que é uma string)
// Usando o sinal de (+) o javaScript ao inves de somar ele concatena um numero com uma string

// conversores
// parseFloat -- converte para float
// parseInt -- converte para inteiro
/*
OBS: parseInt e parseFloat
Só serao capaz de fazer a conversao se o primeiro caractere for um
numero caso contrario aparecerá esse resultado (NaN).
*/

/*
Number -- (metodo construtor) converte para int ou float (o numero nao pode conter letras)
OBS: Se tiver(14a)ou(a14)ou(a14a) um caractere junto com um numero seja na frete ou depois do numero
o Number vai dar como resultado (NaN) 
*/

//conversao de string para numero  usa-se parseInt parseFloat ou Number
//let n1 = 10;
//let n2 = Number('2');
//n2
//console.log( n1 + n2)
//console.log(typeof n1, typeof n2);

// converter numero para string
// n2 =11;
// n2 = n2.toString();
// console.log(n2, typeof n2);

// decimais 0 - 9
// hexadecimais 0 - f(15)

// .toFixed -->casas depois da virgula
// variavel.toFixed(2)--2 é o numero de casas decimais depois da virgula
num = 7;
num2 = parseFloat(num);
console.log(num2.toFixed(4));
