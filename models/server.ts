import express, {Application} from 'express'
import cors from "cors";
import userRouter from '../routes/usuario'
import db from '../db/connection';
class Server {

    private app: Application;
    private port: string
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '8000'
        // Conexion a la DB
        this.dbConection()
        // Middlewares 
        this.middlewares()
        // Definir mis rutas
        this.routes()
    }

    async dbConection() {
        try {
            await db.authenticate()
            console.log('Database Online!!');
            
        } catch (error) {
            throw new Error(error)
        }
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.apiPaths.usuarios,userRouter)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puero ${this.port}`);
            
        })
    }
    
}

export default Server