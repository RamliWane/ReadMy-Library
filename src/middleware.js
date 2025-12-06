export { default } from "next-auth/middleware"

export const config = {
   matcher: [
    "/dashboard",
    "/home",
    "/booklist",
    "/borrowlist",
    "/borrowpending",
    "/profile",
    "/detail",
    "/editbook",
    "/katalog",
  ] 
  }