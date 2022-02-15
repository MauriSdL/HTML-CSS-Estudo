// let Essa variavel não permite que vc use o nome da variavel da let,
// usada em uma variavel do tipo var

// let permite vc add um valor a ela e em seguida add,
// um outro valor fazerndo ela reconhecer o ultimo valor EX:
// let test = "minha string"
// test = 10
// resultado 10
// a varialvel let permitiu sustituir o valor inicial dado a mesma variavel


// const não permite vc add um segundo valor na variavel igual a let ex:
// const teste2 = 10;
// teste2 = 11;  -> a varialvel teste2 nao foi atribuida a ela o valor 11,
// porque ja havia sido declarada com o valor 10 
// console.log("teste2")
// type error: Assingnment to constant variable.

// let minhavar = "minha string";
// let minhavar2 = 'minha \"string\" com aspas simples';// pode ser ada 2 \ para,
// poder reconhecer as Aspas duplas
// OBS:acho que nao prescisa colocar as 2\ o vs reconhece nao tenho certeza.
// let minhavar2 = 'minha "string" com aspas simples';
// var minhavar3 = `minha template literal`;
// OBS A minhavar3 com Aspas invertidas ,as Crases nao funcionam com brawser antigos ex: internec explore 11
// console.log(minhavar3)

// formas de concatenar
// forma antiga
let idade = 40;
// let msg = "Eu possuo " + idade + " anos de idade"
let msg = `Eu possuo ${idade} anos de idade`;
// Se usar ${} nao funciona com Aspas simples e duplas somente com (`Crase)
console.log(msg) 