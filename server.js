import express from "express";
import 'dotenv/config.js'
import dbConnection from "./database/config.js";
import routesFiles from "./routes/routesFiles.js";
import routesProgram from "./routes/routesProgram.js";


export default class Server {
    constructor() {
        this.app = express()
        this.listen()
        this.dbConnection()
        this.pathFiles = '/api/files'
        this.pathProgram = '/api/program'
        this.route()
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running in PORT ${process.env.PORT}`)
        })
    }

    async dbConnection() {
        await dbConnection()
    }

    route() {
        this.app.use(express.json());

        //Routes
        this.app.use(this.pathFiles, routesFiles)
        this.app.use(this.pathProgram, routesProgram)
    }
}