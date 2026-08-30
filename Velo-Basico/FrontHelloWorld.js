import {msg, anotherClass} from 'backend/BackEndhelloworld.web';

// Este código funciona junto do helloworld.web.js (nesta pasta como helloworld.js
// É preciso salvar no wix como web antes do .js porque ele trata as funções como módulos de web.

function botao1()
{
    $w("#button1").onClick(async function ()
    {
        const msg1 = await msg();
        $w("#text32").text = msg1;
    })
}

function botao2()
{
    $w("#button2").onClick(async function ()
    {
        const msg2 = await anotherClass();
        $w("#text32").text = msg2;
    })
}

$w.onReady(botao1);
$w.onReady(botao2);
