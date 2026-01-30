import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

            const hashPassword=await bcryptjs.hash(password,10)
            const newUser = new User({
            fullname:fullname,
            email:email,
            password:hashPassword
        });

        await newUser.save();

        res.status(201).json({ message: "User created successfully",
            user:{
                _id:newUser._id,
                fullname:newUser.fullname,
                email:newUser.email,
        } 
    });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({ message: "Invalid username or password" });
        }
        const isMatch = await bcryptjs.compare(password, existingUser.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        res.status(200).json({ 
            message: "Login successfully",
            user: {
                _id: existingUser._id,
                fullname: existingUser.fullname,
                email: existingUser.email
            } 
        });

    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};