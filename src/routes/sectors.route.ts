import { Router } from "express";
import createSectorsController from "../controllers/sectors/createSectors.controller";
import getAllSectorsController from "../controllers/sectors/getAllSectors.controller";
import verifyDataIsValid from "../middlewares/validateData.middleware";
import { createSectorBodySchema } from "../schemas";

const sectorRoutes: Router = Router()

sectorRoutes.post("", verifyDataIsValid(createSectorBodySchema), createSectorsController)
sectorRoutes.get("", getAllSectorsController)

export default sectorRoutes