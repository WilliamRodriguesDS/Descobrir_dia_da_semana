let dias = new Array("Domingo" ,"Segunda-feira", "Terca-feira", "Quarta-feira", "Quinta-feira", "Sábado");

let hoje = new Date();
let dia = hoje.getDate();
let diaSemana = hoje.getDay(dias);

alert("Bem vindo, hoje, o dia da semana é " + dias[diaSemana] + " e estamos no dia " + dia);
alert("Olá, bem vindo ao mundo, William ;)")
