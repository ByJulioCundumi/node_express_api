import { getEmployees, getEmployee, postEmployee, putEmployee, deleteEmployee, patchEmployee } from "../employess/employees.controller.js"
import {Router} from "express"
//
export const router = Router()
//
router.get("/employees", getEmployees)
router.get("/employees/:id", getEmployee)
router.post("/employees", postEmployee)
router.put("/employees/:id", putEmployee)
router.patch("/employees/:id", patchEmployee)
router.delete("/employees/:id", deleteEmployee)

