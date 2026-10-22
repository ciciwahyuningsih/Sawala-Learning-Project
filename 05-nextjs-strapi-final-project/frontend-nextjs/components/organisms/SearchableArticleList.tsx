'use client'

import { useState } from 'react'
import SearchBar from '@/components/molecules/SearchBar'
import ArticleList from '@/components/organisms/ArticleList'
import type { Article } from '@/lib/strapi'

interface SearchableArticleListProps {
  articles: Article[]
}

export default function SearchableArticleList({ articles }: SearchableArticleListProps) {
  const [query, setQuery] = useState('')

  const keyword = query.trim().toLowerCase()
  const filtered = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(keyword) ||
      a.content.toLowerCase().includes(keyword),
  )

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} />
      <p style={{ color: '#666' }}>
        Menampilkan {filtered.length} dari {articles.length} artikel
      </p>

      {filtered.length === 0 ? (
        <p>Tidak ada artikel yang cocok dengan “{query}”.</p>
      ) : (
        <ArticleList articles={filtered} />
      )}
    </div>
  )
}