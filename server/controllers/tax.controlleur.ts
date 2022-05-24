import pool from '../databases/tax.database'
import { Request, Response } from "express"

export const onDefault = async (req : Request , res: Response) => {
    try {
        res.status(200).json({info :'Nodejs, Express, and PostgresSql tax APP'});
    } catch (e) {
        console.log(`error in getting todos : ${e}`)
    }
}
export const getAllTaxes = async (req: Request, resp: Response) => {
    try {
        const allTaxes = await pool.query("SELECT * from tax order by year desc");
        resp.status(200).json(allTaxes.rows);
    } catch (e) {
        console.log(`error in getting todos : ${e}`)
    }

}
export const getTaxesSumByYear =  async (req: Request, resp: Response) => {
    try {
        const taxesSumByYear = await pool.query("SELECT count(_id) as \"nbr_tax\", year\n" +
            "FROM public.tax\n" +
            "group by year;");
        resp.status(200).json(taxesSumByYear.rows);
    } catch (e) {
        console.log(`error in getting todos : ${e}`)
    }

}
