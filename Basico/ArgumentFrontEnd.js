import {msg} from 'backend/ArgumentBackEnd.web';

function botao1()
{
    $w("#button1").onClick(async function ()
    {
        let msg2 = "Status: ";
        const  getContent = $w("#textBox1").value;
        const msg1 = await msg(getContent);
        $w("#text32").text = msg2 + msg1;
    })
}

$w.onReady(botao1);
