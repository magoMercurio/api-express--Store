const express = require('express');
const routerApi =require('./routes');
const cors = require('cors');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');


const app = express();

// puerto
const port = process.env.PORT || 3001;

app.use(express.json());

const whitelist = ['localhost:5500','http://localhost:3000']
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('no permitido'))
    }
  }
}
app.use(cors());

// ruta raiz
app.get('/api', (req, res) => {
    res.send('server en Express')
})

//ejemplo, borrar al final
app.get('api/nueva-ruta', (req, res) => {
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
