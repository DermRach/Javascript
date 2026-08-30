import {webMethod, Permissions} from 'wix-web-module';

// Treinanmento de Javascript Velo no Wix

let resultado = "Default";

export const msg = webMethod(Permissions.Anyone, function Soma(content)
{
     if (content == "Velo")
     {
        resultado = "Conversa do Back-end com o Front-End";
     } else 
     {
        resultado = "Sua resposta foi diferente de Velo";
     }

     return resultado;
});

