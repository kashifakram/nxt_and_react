 
export default async function BlogSlug({params}: {params: Promise<{slug: string}>}) {
 
  const sl = (await params).slug
  return (
    <h1>
      News content page {sl}
    </h1>
  )
}