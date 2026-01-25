import User from "../model/user.model.js";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
            const createUser = new User({
            fullname,
            email,
            password
        });

        await createUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};