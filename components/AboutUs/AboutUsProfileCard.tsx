import React from 'react'

export default function AboutUsProfileCard({ image, title, description }: { image: string, title: string, description: string }) {
    return (
        <div>
            <div className="grid">


                <img
                    className="w-[390px] h-[400px] shrink-0"
                    src={image}
                ></img>
                <div className=" flex gap-4 ml-28 mt-6">
                    <img
                        className="shrink-0 w-9 h-9"
                        src="/static/images/03bc78eaab3dcbbdddec7554e9d34351.png"
                    ></img>
                    <img
                        className="shrink-0 w-9 h-9"
                        src="/static/images/6fd49ad10f9b1a9ab4224d4d900d8355.png"
                    ></img>
                    <img
                        className="shrink-0 w-9 h-9"
                        src="/static/images/aeb307f84efb8c124b331799a6f734e6.png"
                    ></img>
                    <img
                        className="shrink-0 w-9 h-9"
                        src="/static/images/c897906edf05703723098f4a66032d9b.png"
                    ></img>
                </div>
                <p className="text-gray-700 text-justify font-Barlow text-xs not-italic	font-medium	leading-normal ml-[164.5px] mt-2">
                    {title}
                </p>
            </div>
        </div>
    )
}
