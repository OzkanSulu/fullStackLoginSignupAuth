import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import bcyript from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request:NextRequest){
try {
    const reqBody= request.json();
    const {email,password} = reqBody;
    console.log(reqBody);

    const user=await User.findOne({email})
    if(!user){
        return NextResponse.json({
            error:"User doesnt exist!"
        },{status:400})
    }

    const tokenData = {
        id:user._id,
        username:user.username,
        email:user.email,
    }

    const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"10m"})

    const response = NextResponse.json({
        message:"Login successful",
        success:true,
    })

    response.cookies.set("token",token,{
        httpOnly:true,
    })
    return response;

    
    const validPassw = await bcyript.compare
    (password,user.password)




} catch (error:any) {
    return NextResponse.json({error:error.message})
}
}