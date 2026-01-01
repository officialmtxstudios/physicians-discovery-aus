interface ArticleHeadlineProps {
  title: string;
  subheadline: string;
  authorName: string;
  authorImage: string;
  date: string;
}

export default function ArticleHeadline({
  title,
  subheadline,
  authorName,
  authorImage,
  date,
}: ArticleHeadlineProps) {
  return (
    <section className="article-headline">
      <div className="headline-content">
        <h1 className="article-title">{title}</h1>

        <div className="author-row">
          <img src={authorImage} alt={authorName} className="author-image" />
          <div className="author-info">
            <p className="author-name">{authorName}</p>
            <p className="article-date">{date}</p>
          </div>
        </div>
        {subheadline && <p className="article-subheadline">{subheadline}</p>}
      </div>
    </section>
  );
}
