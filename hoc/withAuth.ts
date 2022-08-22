// isLoggedIn.jsx

import AuthService from "../api/AuthService";
import { GetServerSideProps } from "next";
import { Tokens } from "../api/models";

export default (GetServerSidePropsFunction: GetServerSideProps) =>
  async (ctx: any) => {
    // // 1. Check if there is a token in cookies. Let's assume that your JWT is stored in 'jwt'.
    let tokens: Tokens | null = null;
    try {
      tokens = JSON.parse(ctx.req.cookies.accessToken);
    } catch {}

    // 4. Return your usual 'GetServerSideProps' function.
    return await GetServerSidePropsFunction(ctx);
  };
