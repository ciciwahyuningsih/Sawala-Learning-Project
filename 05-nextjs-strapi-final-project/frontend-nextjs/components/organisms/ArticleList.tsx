import ArticleCard from '@/components/molecules/ArticleCard'
import type { Article } from '@/lib/strapi'

interface ArticleListProps {
  articles: Article[]
}

export default function ArticleList({ articles }: ArticleListProps) {
  if (articles.length === 0) {
    return <p>Belum ada artikel.</p>
  }

  return (
    <section>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  )
}