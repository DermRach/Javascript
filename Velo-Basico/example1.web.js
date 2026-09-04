import {Permissions, webMethod} from 'wix-web-module';

export const example1 = webMethod(Permissions.Anyone, async function getInformation(nome)
{
    if (nome === "Rafael")
    {
        return "Rafael Junqueira - Desenvolvedor Javascript e C++";
    } else 
    {
        return "Não há nenhuma informação acerca disso. Digite um valor válido.";
    }
})
