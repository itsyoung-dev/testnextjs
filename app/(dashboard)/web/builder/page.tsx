"use client";
import { prisma } from "@/utils/Utility";
import { currentUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";

const page = () => {
    const router = useRouter();
    // const user = await currentUser();
    // if (!user || !user.id) return router.push("/");

    // const userData = await prisma.user.findFirst({
    //     where: { id: user.id },
    // });

    const editor = grapesjs.init({
        container: "#gjs",
        fromElement: true,
        height: "300px",
        width: "auto",
        storageManager: false,
        panels: { defaults: [] },
        blockManager: {
            appendTo: "#blocks",
            blocks: [
                {
                    id: "section",
                    label: "<b>Section</b>",
                    attributes: { class: "gjs-block-section" },
                    content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
                },
                {
                    id: "text",
                    label: "Text",
                    content:
                        '<div data-gjs-type="text">Insert your text here</div>',
                },
                {
                    id: "image",
                    label: "Image",
                    select: true,
                    content: { type: "image" },
                    activate: true,
                },
            ],
        },
    });

    return (
        <div>
            <div id="gjs">
                <h1>Hello World Component!</h1>
            </div>
            <div id="blocks"></div>
        </div>
    );
};

export default page;
