import express from "express";
import { isAdminLogin, signIn } from "../middlewares/authMiddleware.js";
import { createProductController, deleteProductController, filterController, filterPage, filterPageList, getProductController, productPhotoController, singleProductController, updateProductController } from "../controler/productController.js";
import formidable from "express-formidable";
const router=express.Router();

router.post('/create-product',signIn,isAdminLogin,formidable(),createProductController)

router.get('/get-product',getProductController)
router.get('/get-product/:slug',singleProductController)
router.get('/product-photo/:pid',productPhotoController)
router.delete('/delete-product/:pid',deleteProductController)
router.put('/update-product/:pid',signIn,isAdminLogin,formidable(),updateProductController)

router.post('/filter-product',filterController)
router.get('/product-count',filterPage)
router.get('/product-list/:page',filterPageList)

export default router;