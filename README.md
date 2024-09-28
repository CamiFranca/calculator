O projeto é uma calculadora básica. 
Criei esse projeto com o objetivo de manter o meu contato com programação, revisar.
Sobre a logica pensada para esse programa:
Foi criada uma função para pegar o valor do input através do onClick. A função concatena
todos os valores que estão sendo pressionados pelo botão, isso acontece porque usamos uma
função seta que guarda o valor anterior, recebe o novo e concatena.
Depois tem a função que limpa o input, ela é um simples onClick, o setInputState coloca uma
string vazia dentro do InputState.
Na terceira função que é ativada quando o usuário clica no operador numérico, recebe como 
parâmetro o operador escolhido. Ela passa o valor do InputState para outa variável, limpa
o InputState para que ele receba o proximo valor da operação e guarda o valor do operador em
uma constante. Em seguida, uma função para o calculo do valor é criada. Ela recebe como parâmentro 
todos os valores dos states. No escopo da função é criado um switch case com as possibilidades
operacionais e ao final o valor é salvo dentro de uma variável. A última função recebe os mesmos
valores da anterior, porque ela essa chamada dentro dessa, e vai ser ativada quando o usuário
pressionar o sinal de igual para ver o resultado. No escopo dessa função o valor do inputValue é atualizado
com o valor calculado para que possa ser mostrado no input e os outros states são limpos.
