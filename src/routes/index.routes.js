import { notFound } from "../employess/index.controller.js"
import {Router} from "express"
//
export const router = Router()
//
router.all("*", notFound)