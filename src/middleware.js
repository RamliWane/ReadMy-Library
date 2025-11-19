import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {},
  {
    callbacks: {
      authorized: ({ token }) => {
        // jika tidak login -> false
        if (!token) return false;

        // hanya admin boleh ke /dashboard
        return token.role === "admin";
      },
    },
    pages: {
      signIn: "/forbidden",
      error: "/forbidden",
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"],
};
