import { hashpassword, passwordcheck } from "../utils/hash.js";
import { createToken } from "../utils/token.js";

import AuthuserModel from "../Model/authuserModel.js";

export const authSignUp = async (req, res) => {
    try{
        const {names, email, password, role}  = req.body
        const checkEmail = await AuthuserModel.userLoginModel(email)
        if(checkEmail){
            return res.status(400).json({message: "email already exist"}) 
            
        }
        const newPassword = await hashPassword(password);
        const id = await AuthuserModel.userSignupModdel(
            {
                 names,
                 email,
                password: newPassword,
                role: role || "user" 
            }
        )
        
            res.status(201).json({message: "user has been created"})
                 

            }
         catch (err) {
            res.status(500).json({ error: err.message })
            
        }  
    }
export const authLogin = async (req, res) => {
    try{
const { email, password} = req.body
const user = await AuthuserModel.userLoginModel(email);
if(!user) {
    return res.status(400).json({message: "Invalid email"})
}
const userPassword = await passwordcheck(password,user.Password)
if(!userPassword) {
    return res.status(400).json({
        message: "Wrong password"
    })
}
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
export const login = async (req, res)=> {
    try{
        const { email, password } = req.body;
        const user = await authuserModel userLoginModel(email)
        if(!user){
            return res.status(400).json({ message: "invalid user"})
        }
        const checkPassword = await passwordcheck(password, user.password)
           
        if(!checkPassword){
            return res.status(400).json({ message: "invalid password"})
        }
        const token = createToken({
            id: user.id,
            role: user.role
        })
        res.status(200).json({ message: "login successfully"})
    } catch (err){
        res.status(500).json({ error: err.message })

    }
    } 