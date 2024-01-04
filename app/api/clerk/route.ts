import { deleteUser } from "@/actions/user.actions";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook, WebhookRequiredHeaders } from "svix";
import { IncomingHttpHeaders } from "http";

type EventType = "user.deleted";

type Event = {
    data: Record<string, string | number | Record<string, string>[]>;
    object: "event";
    type: EventType;
};

export async function POST(request: Request) {
    const payload: WebhookEvent = await request.json();
    // const header = headers();

    // const heads = {
    //     "svix-id": header.get("svix-id"),
    //     "svix-timestamp": header.get("svix-timestamp"),
    //     "svix-signature": header.get("svix-signature"),
    // };

    // const wh = new Webhook(process.env.NEXT_CLERK_WEBHOOK_SECRET || "");

    // let evnt: Event | null = null;

    // try {
    //     evnt = wh.verify(
    //         JSON.stringify(payload),
    //         heads as IncomingHttpHeaders & WebhookRequiredHeaders
    //     ) as Event;
    // } catch (err) {
    //     return Response.json({ message: err }, { status: 400 });
    // }

    // const eventType: EventType = evnt?.type!;

    // if (eventType === "user.deleted") {
    const id = payload.data.id;

    try {
        // @ts-ignore
        await deleteUser({ userId: id });

        return Response.json({ message: "User deleted" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return Response.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
        // }
    }
}
