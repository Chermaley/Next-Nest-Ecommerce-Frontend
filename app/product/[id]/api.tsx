export function leaveComment({
  productId,
  accessToken,
  ...body
}: {
  productId: number
  text: string
  rating: number
  accessToken?: string
}) {
  return fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/p/${productId}/comment`,
    {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )
}
