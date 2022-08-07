import { Application, Request, Response, json, urlencoded } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "../api/";
import methodOverride from "method-override";
import cookieParser from 'cookie-parser';
import morgan from "morgan";

export default (app: Application) => {
    app.use(morgan("combined"));
    app.get("/", (_: Request, res: Response) =>
        res.json({ message: "Hello huston" })
    );
    app.get("/status", (_: Request, res: Response) => res.status(200).end());
    app.use(cors({}));
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(urlencoded({ extended: true }));
    app.use(json());
    app.use("/api", routes());
    app.enable("trust proxy");
    app.use(methodOverride());
    /// error handlers
    app.use(function (_, res) {
        res.status(404).json({ message: "404" });
    });
};
