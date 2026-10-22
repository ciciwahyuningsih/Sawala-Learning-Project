import Button from '@/components/atoms/Button'
import type { Article } from '@/lib/strapi'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const tanggal = new Date(article.publishedAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const ringkasan =
    article.content.length > 100
      ? article.content.slice(0, 100) + '...'
      : article.content

  return (
    <article
      style={{
        backgroundColor: 'white',
        color: '#222',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
      }}
    >
      <h2 style={{ margin: '0 0 4px' }}>{article.title}</h2>
      <small style={{ color: '#666' }}>{tanggal}</small>
      <p>{ringkasan}</p>
      <Button href={`/articles/${article.slug}`}>Baca selengkapnya</Button>
    </article>
  )
}