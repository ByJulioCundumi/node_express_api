import app from "./app.js"
import { SERVER_PORT } from "./config.js"
//
app.listen(SERVER_PORT, ()=>{console.log((`Servidor iniciado en el puerto ${SERVER_PORT}`))})