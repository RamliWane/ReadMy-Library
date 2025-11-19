import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect }  from 'next/navigation';

export default async function Dashboard() {

    const session = await getServerSession(authOptions);
    console.log(session);

    const user = session?.user;

    if(session.user.role !== "admin"){
        redirect("/forbidden");
    }
    

    return (
        <main className="">
            <div className="flex flex-col justify-center items-center h-screen gap-4">
                <h1 className="text-2xl text-black">You can logout Here, {user?.email}</h1>
            </div>
        </main>
    );
}