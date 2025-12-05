//app/editbook/page.jsx

import FormEditBook from "../components/admin/FormEditBook";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function editbook({ searchParams }) {
  const session = await getServerSession(authOptions);

if (!session || !["admin", "petugas"].includes(session.user.role)) {
  redirect("/forbidden");
}


const { id } = await searchParams;

  const res = await fetch(`http://localhost:5000/buku/${id}`, {
    cache: 'no-store'
  });
  const buku = await res.json();

  return (
    <section>
      <div className="flex justify-center pt-20">
        <FormEditBook id={id} buku={buku} />
      </div>
    </section>
  );
}