const x = document.querySelector('aside')
const h1 = document.createElement("h1")
const texto = document.createTextNode('receitas')
x.appendChild(h1)
h1.appendChild(texto)

//

let nome = prompt('digite seu nome.')

let i = parseInt(prompt('digite sua idade'))
let anoatual = 2021

function anodenascimento(i, anoatual){
    return(anoatual-i)
   
}

      alert(`seu nome é ${nome} e nasceu em ${anodenascimento(i, anoatual)}`);
//

    const receita = prompt('Qual receita você está procurando? ps: escreva com a gramática correta.')
    
         
if  (receita==="bolo de chocolate"){
      alert('nós temos a receita de bolo de chocolate!')
}

else if (receita==="macarrão"){
    alert('nós temos a receita de macarrão!')
}

else if(receita==="torta de frango"){
    alert('nós temos a receita de torta de frango!')
}

else{
    alert('sinto muito, nós nâo temos essa receita disponível.')
}

