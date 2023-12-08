const express = require('express');
const routerApi =require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');


const app = express();

// puerto
const port = 3001;

app.use(express.json());

// ruta raiz
app.get('/', (req, res) => {
    res.send('server en Express')
})

//ejemplo, borrar al final
app.get('/nueva-ruta', (req, res) => {
  res.send('nueva ruta')
})

routerApi(app);

// middleware de errores
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


// escuchar peticiones
app.listen(port, () => {
  console.log('mi port' + port)
})
