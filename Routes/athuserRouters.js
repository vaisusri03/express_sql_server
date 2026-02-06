 import {protect}from '../middleware/protect.js'
import{isAdmin}from '../middleware/admin.js'

import {authSignUp, login} from '../Controller/authUserController.js'
const authUserRoute= express.Router()
authUserRoute.post('/auth/signup', authSignUp)
authUserRoute.post('/auth/login', login)
 authUserRoute.get('/profile', protect,(req,res)=>{
    res.json({message: "protected profile ",
         user:req.role})
    

        
    }) 
    authUserRoute.get('/auth/admin-dash', protect,isAdmin,(req,res)=>{
        res.json({message: "Welcome admin user",
            user:req.role
        })

 })
 export default authUserRoute