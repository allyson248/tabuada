const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const tabuada = parseInt(req.query.tabuada) || 0;
    const sequencia = parseInt(req.query.sequencia) || 10;

    let html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tabuada do ${tabuada}</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; }
            .container { width: 60%; margin: auto; background: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
            h1 { text-align: center; }
            table { width: 100%; border-collapse: collapse; }
            th, td { padding: 10px; text-align: center; border: 1px solid #ccc; }
            th { background-color: #f2f2f2; }
        </style>
    </head>
    <body>
        <div class='container'>
            <h1>Tabuada do ${tabuada}</h1>
            <table>
                <tr>
                    <th>Multiplicação</th>
                    <th>Resultado</th>
                </tr>`;

    for (let i = 0; i <= sequencia; i++) {
        const resultado = tabuada * i;
        html += `<tr>
                    <td>${tabuada} x ${i}</td>
                    <td>${resultado}</td>
                  </tr>`;
    }

    html += `   </table>
                <p><a href='/'>Voltar</a></p>
            </div>
        </body>
    </html>`;

    res.send(html);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
