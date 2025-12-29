export default function ArticleHeader() {
  return (
    <header className="editorial-header">
      <div className="header-content">
        <h1 className="publication-title">HealthSpot Blog</h1>
      </div>
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-content">
          <span className="breadcrumb-item">Home</span>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-item">News</span>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-item">Physician Discovery</span>
        </div>
      </nav>
    </header>
  );
}
