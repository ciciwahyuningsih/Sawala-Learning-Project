import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Button from '@/components/atoms/Button'
import { getArticleBySlug } from '@/lib/strapi'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  return {
    title: article ? `${article.title} | Artikel Sederhana` : 'Artikel tidak ditemukan',
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const tanggal = new Date(article.publishedAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '24px' }}>
      <Button href="/" variant="secondary">
        ← Kembali
      </Button>

      <h1>{article.title}</h1>
      <small style={{ color: '#666' }}>Diterbitkan {tanggal}</small>
      <p style={{ whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>{article.content}</p>
    </main>
  )
}