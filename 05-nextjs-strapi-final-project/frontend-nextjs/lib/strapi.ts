const STRAPI_URL = process.env.STRAPI_URL ?? 'http://localhost:1337'

export interface Article {
  id: number
  documentId: string
  title: string
  slug: string
  content: string
  createdAt: string
  publishedAt: string
}

interface StrapiResponse<T> {
  data: T
  meta: unknown
}

// Ambil semua artikel (terbaru dulu)
export async function getArticles(): Promise<Article[]> {
  const res = await fetch(`${STRAPI_URL}/api/articles?sort=createdAt:desc`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`Gagal mengambil artikel (status ${res.status})`)
  }

  const json: StrapiResponse<Article[]> = await res.json()
  return json.data
}

// Ambil satu artikel berdasarkan slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const res = await fetch(
    `${STRAPI_URL}/api/articles?filters[slug][$eq]=${encodeURIComponent(slug)}`,
    { cache: 'no-store' },
  )

  if (!res.ok) {
    throw new Error(`Gagal mengambil artikel (status ${res.status})`)
  }

  const json: StrapiResponse<Article[]> = await res.json()
  return json.data[0] ?? null
}