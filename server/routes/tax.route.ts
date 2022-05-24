import { Router } from "express"
import {
    getAllTaxes,
    onDefault,
    getTaxesSumByYear
} from '../controllers/tax.controlleur'
const router = Router()

router.get("/", onDefault)
router.get("/all", getAllTaxes)
router.get("/byYear", getTaxesSumByYear)

module.exports = router


