import { db } from "@/server/db";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";

const usreAsync = async () => {
    const { userId } = await auth();
    if (!userId) {
        throw new Error('Not authenticated')
    }
    const client = await clerkClient()
    const user = await client.users.getUser(userId)
    // console.log(user)
    if (!user.emailAddresses[0]?.emailAddress) {
        return notFound();
    }
    await db.user.upsert({
        where: { email: user.emailAddresses[0]?.emailAddress ?? "" },
        update: { imageUrl: user.imageUrl, firstname: user.firstName, lastname: user.lastName },
        create: { id: userId, email: user.emailAddresses[0]?.emailAddress ?? "", imageUrl: user.imageUrl, firstname: user.firstName, lastname: user.lastName },
    })

    return redirect('/dashboard')
}

export default usreAsync;