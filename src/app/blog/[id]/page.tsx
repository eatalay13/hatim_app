interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

async function BlogDetailPage({ params: { id } }: BlogDetailPageProps) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div className="mt-40">BlogPage {id}</div>;
}

export default BlogDetailPage;
