
const UserModel=require('../model/userModel');


const signup=async(req,res)=>{
    const {name,email,password,confirmPassword}=req.body;
  try {
    if(password!==confirmPassword){
        return res.status(400).json({message:" Password do not match"});
    }

    const user=await UserModel.findOne({email});
    if(user){
        return res.status(400).json({message:"User already exists"});
    }
    const newUser=await UserModel.create(
        {name,
        email,
        password
    });

    newUser.save();
    res.status(201).json({message:"User created successfully"});
}
catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal server error"});
}
}