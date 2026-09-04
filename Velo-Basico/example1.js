import {example1} from 'backend/example.web';

let auxGetContentTextBox1, auxGetResultExample;

function button1()
{
    $w("#button1").onClick(async function ()
    {
        const getContentTextBox1 = $w("#textBox1").value;
        auxGetContentTextBox1 = getContentTextBox1;
        const getResultExample = await example1(getContentTextBox1);
        auxGetResultExample = getResultExample;
        $w("#textBox1").value = " ";
        $w("#textBox1").value = getResultExample;
        console.log("Processo de resposta do backend (example1) foi executado com sucesso");
    })
}

function button2()
{
    $w("#button2").onClick(function ()
    {
        console.log(auxGetContentTextBox1);
        console.log(auxGetResultExample);
    })
}

$w.onReady(button1);
$w.onReady(button2);
