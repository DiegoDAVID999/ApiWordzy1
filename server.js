// import express from "express";
// import 'dotenv/config.js'
// import dbConnection from "./database/config.js";
// import routesFiles from "./routes/routesFiles.js";
// import routesProgram from "./routes/routesProgram.js";


// export default class Server {
//     constructor() {
//         this.app = express()
//         this.listen()
//         this.dbConnection()
//         this.pathFiles = '/api/files'
//         this.pathProgram = '/api/program'
//         this.route()
//     }

//     listen() {
//         this.app.listen(process.env.PORT, () => {
//             console.log(`Server is running in PORT ${process.env.PORT}`)
//         })
//     }

//     async dbConnection() {
//         await dbConnection()
//     }

//     route() {
//         this.app.use(express.json());

//         //Routes
//         this.app.use(this.pathFiles, routesFiles)
//         this.app.use(this.pathProgram, routesProgram)
//     }
// }

import express from "express";
import 'dotenv/config';  // Configuración de variables de entorno
import cors from 'cors';  // Importa el paquete CORS
import dbConnection from "./database/config.js";  // Conexión a la base de datos
import routesFiles from "./routes/routesFiles.js";  // Rutas de files
import routesProgram from "./routes/routesProgram.js";  // Rutas de program

export default class Server {
    constructor() {
        this.app = express();
        this.listen();
        this.dbConnection();
        this.pathFiles = '/api/files';
        this.pathProgram = '/api/program';
        this.route();
    }

    listen() {
        const port = process.env.PORT || 5000;
        this.app.listen(port, () => {
            console.log(`Server is running in PORT ${port}`);
        });
    }

    async dbConnection() {
        try {
            await dbConnection();  // Establecer la conexión con la base de datos
            console.log("Connected to the database");
        } catch (error) {
            console.error("Error connecting to the database", error);
        }
    }

    route() {
        this.app.use(express.json());
        
        // Configurar CORS
        const corsOptions = {
            origin: [
                "https://apiwordzy1.onrender.com",
                "http://localhost:56072",  // o el puerto que use Flutter web en Chrome
                "http://localhost:3000",  // otro puerto común
              ],
                // Permite solicitudes solo desde tu dominio
            methods: "GET,POST,PUT,DELETE",  // Métodos permitidos
            allowedHeaders: "Content-Type,Authorization",  // Encabezados permitidos
        };
        this.app.use(cors(corsOptions));  // Aplica CORS con las opciones configuradas

        // Rutas
        this.app.use(this.pathFiles, routesFiles);
        this.app.use(this.pathProgram, routesProgram);
    }
}
