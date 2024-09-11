

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const product:any = []    // call product service
  if (!product) {
    return { title: 'Product not found' }
  }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string }
}) {
  const product:any = []    // call product service
  if (!product) {
    return <div>Product not found</div>
  }
  return (
    <>
    Product Details:{params.slug}
    </>
  )
}
