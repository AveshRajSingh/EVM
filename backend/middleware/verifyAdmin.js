import mongoose from "mongoose";
import { Admin } from "../models/admin.model.js";

const verifyAdmin = async (req, res, next) => {
   const user = req.user;
    if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const isAdmin = user._id.equals(mongoose.Types.ObjectId("683821862fe56bba07fba3a5"))
    if (!isAdmin) {
        return res.status(403).json({ message: "Forbidden from admin" });
    }

    req.admin = true;
    next();

}


export { verifyAdmin };