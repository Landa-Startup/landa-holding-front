import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import formidable from 'formidable'
import cloudinary from '@/lib/cloudinary'
import { extractFieldValue } from "@/utils/index";

export const config = {
    api: {
        bodyParser: false,
    }
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {    
        const form = formidable({ multiples: true })

        const parseData = await new Promise<{ fields: formidable.Fields, files: formidable.Files }>((resolve, reject) => {
            form.parse(req, (err: Error, fields: formidable.Fields, files: formidable.Files) => {
                if (err) return reject(err)
                resolve({ fields, files })
            })
        })
        const { fields, files } = parseData
        console.log(files.businessPlanFile)
        console.log(files.pitchDeckFile)

        const uploadUrls = await cloudinary(files.businessPlanFile, 'landa/files/forms')
        const uploadUrls2 = await cloudinary(files.pitchDeckFile, 'landa/files/forms')

        console.log("this is file : ",uploadUrls)   
        const startupsForm = await prisma.startupsForm.create({
            data: {
                firstName: extractFieldValue(fields, 'firstName'),
                lastName: extractFieldValue(fields, 'lastName'),
                businessPlanFile: uploadUrls[0],
                pitchDeckFile: uploadUrls2[0], 
            }
        })
        // res.status(200).json(product)
        res.status(200).json({'message':uploadUrls})

        // res.status(200).json({'message1':startupsForm})
    } else {
        try {

            // const products = await prisma.product.create({
            //     include: {
            //         images: true
            //     }
            // })
            // console.log("products: ", products)
            // return res.status(200).json(products);
            return res.status(200).json({"message":"error!"})
        } catch (error) {
            console.log("message",res)      
            return res.status(500).json({ message: error });
        }

    }
}