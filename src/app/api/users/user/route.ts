import { getDataFromToken } from "@/helpers/dataFromToken";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModels";

connect();

export async function GET(request:NextRequest) {
    try {
        const userId = await getDataFromToken(request)
        const user = await User.findOne({_id:userId})
        return NextResponse.json(
            {
                message:"User Found",
                data:user
            }
        )
    } catch (error:any) {
        throw new Error(error.message)
    }
}