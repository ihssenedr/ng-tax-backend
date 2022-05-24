"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTaxes = exports.onDefault = void 0;
const tax_database_1 = __importDefault(require("../databases/tax.database"));
const onDefault = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ info: 'Nodejs, Express, and PostgresSql tax APP' });
    }
    catch (e) {
        console.log(`error in getting todos : ${e}`);
    }
});
exports.onDefault = onDefault;
const getAllTaxes = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTaxes = yield tax_database_1.default.query("SELECT * from taxe");
        resp.status(200).json(allTaxes.rows);
    }
    catch (e) {
        console.log(`error in getting todos : ${e}`);
    }
});
exports.getAllTaxes = getAllTaxes;
