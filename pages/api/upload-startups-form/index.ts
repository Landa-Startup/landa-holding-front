import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import formidable from 'formidable'
import cloudinary from '@/lib/cloudinary'
// import {UploadFile} from 'cloudinary'
import { extractFieldValue, parseDateString } from "@/utils/index";


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
        // const formidableFiles = Object.values(files);

        // const uploadFiles = formidableFiles.map(file => {
        //   return {
        //      path: file.filepath, 
        //      // access filepath on each File object
        //      mimetype: file.mimetype  
        //   };
        // });

        const links: any = {};
        for (const [key, value] of Object.entries(files)) {
            const link = await cloudinary(files[key] as any, 'landa/files/forms/' + fields.email)
            links[key] = link[0]
        }

        const startupsForm = await prisma.startupsForm.create({

            data: {
                firstName: extractFieldValue(fields, 'firstName'),
                lastName: extractFieldValue(fields, 'lastName'),
                email: extractFieldValue(fields, 'email'),
                birthDate: parseDateString(extractFieldValue(fields, 'birthDate')),
                countryOfResidence: extractFieldValue(fields, 'countryOfResidence'),

                businessPlanFile: links["businessPlanFile"] ? links["businessPlanFile"] : null,
                pitchDeckFile: links["pitchDeckFile"] ? links["pitchDeckFile"] : null,
                financialModelFile: links["financialModelFile"] ? links["financialModelFile"] : null,

            }
        })


        res.status(200).json({ 'message': links })
        // res.status(200).json({'message1':startupsForm})
    } else {
        try {
            return res.status(200).json({ "message": "error!" })
        } catch (error) {
            console.log("message", res)
            return res.status(500).json({ message: error });
        }

    }
}