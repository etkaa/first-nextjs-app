import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  return (
    <div>
      <h1>The Detail Page for</h1>
      <h2> {newsId}</h2>
    </div>
  );
};

export default DetailPage;
