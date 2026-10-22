import { getArticles } from '@/lib/strapi'
import SearchableArticleList from '@/components/organisms/SearchableArticleList'

export default async function Home() {
  const articles = await getArticles()

  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '24px' }}>
      <h1>Daftar Artikel</h1>
      <SearchableArticleList articles={articles} />
    </main>
  )
}