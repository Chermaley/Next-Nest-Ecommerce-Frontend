import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

export function getAccessTokenFromCtx(
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
): string | null {
  try {
    return JSON.parse(ctx.req.cookies.tokens ?? "").accessToken;
  } catch {
    return null;
  }
}