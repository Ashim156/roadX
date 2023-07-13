import  express  from "express";
import {forgotController, loginController, registerController} from '../controler/authController.js'
import {signIn, isAdminLogin } from "../middlewares/authMiddleware.js";

const router = express.Router();

//REGISTER ROUTE 
router.post('/register', registerController);

//LOGIN ROUTE
router.post('/login', loginController);
//forgot password

router.post('/forgot-password',forgotController)



router.get("/user-auth",signIn,(req,res)=>{
    res.status(200).send({ok:true}) 
})
router.get("/admin-auth",signIn,isAdminLogin,(req,res)=>{
    res.status(200).send({ok:true}) 
})

export default router;