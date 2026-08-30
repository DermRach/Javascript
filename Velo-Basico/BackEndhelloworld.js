import {webMethod, Permissions} from 'wix-web-module';

let pontuacao = 500;

export const msg = webMethod(Permissions.Anyone, function Soma()
{
    let mensagem1 = "Harco Síndicos";
    return mensagem1;
});

export const anotherClass = webMethod(Permissions.Anyone, function add()
{
    let valueA = 3;
    let valueB = 4;
    let total = valueA + valueB;
    total = total + pontuacao;
    return total.toString();
});
