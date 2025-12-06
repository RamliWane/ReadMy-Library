//app/editbook/page.jsx

import FormEditBook from "../components/admin/FormEditBook";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function editbook({ searchParams }) {
// Ambil session dari server
const session = await getServerSession(authOptions);
console.log(session); 

const user = session?.user; // Ambil data user dari session

//kalo gak login atau role bukan admin/petugas
if (!session || !["admin", "petugas"].includes(session.user.role)) {
  redirect("/forbidden");
}

//Ambil id dari url params
const { id } = await searchParams;

//Fetch data buku dari API berdasarkan id
const res = await fetch(`http://localhost:5000/buku/${id}`, {
    cache: 'no-store'
});

//responsenya dijadiin JSON
const buku = await res.json();

  return (
    <section>
      <div className="flex justify-center pt-20">
        <FormEditBook id={id} buku={buku} />
      </div>
    </section>
  );
}