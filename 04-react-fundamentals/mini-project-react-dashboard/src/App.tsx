import { useState, useEffect } from 'react'
   import Button from './components/button'
   import Card from './components/card'

interface Article {
  id: number
  title: string
  content: string
  author?: string
  featured: boolean
}

const dataAwal: Article[] = [
  {
    id: 1,
    title: 'Belajar React',
    content: 'React membangun tampilan dari component-component kecil.',
    author: 'Cici',
    featured: true,
  },
  {
    id: 2,
    title: 'Mengenal TypeScript',
    content: 'TypeScript menambahkan tipe data ke JavaScript.',
    author: 'Admin',
    featured: false,
  },
  {
    id: 3,
    title: 'Artikel Tanpa Penulis',
    content: 'Kartu ini tidak punya data author.',
    featured: false,
  },
]

function App() {
  const [articles, setArticles] = useState<Article[]>(dataAwal)
  const [judulBaru, setJudulBaru] = useState('')
  const [isiBaru, setIsiBaru] = useState('')
  const [loading, setLoading] = useState(true)

  // useEffect 1: pura-pura memuat data selama 0,8 detik
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  // useEffect 2: ubah judul tab browser setiap jumlah artikel berubah
  useEffect(() => {
    document.title = `Dashboard Artikel (${articles.length})`
  }, [articles.length])

  const tambahArtikel = () => {
    if (!judulBaru.trim() || !isiBaru.trim()) {
      alert('Judul dan isi wajib diisi')
      return
    }
    const artikelBaru: Article = {
      id: Date.now(),
      title: judulBaru,
      content: isiBaru,
      featured: false,
    }
    setArticles([...articles, artikelBaru])
    setJudulBaru('')
    setIsiBaru('')
  }

  const hapusArtikel = (id: number) => {
    setArticles(articles.filter((a) => a.id !== id))
  }

  const toggleUnggulan = (id: number) => {
    setArticles(
      articles.map((a) => (a.id === id ? { ...a, featured: !a.featured } : a)),
    )
  }

  const jumlahUnggulan = articles.filter((a) => a.featured).length

  return (
    <div>
      <h1>Dashboard Artikel</h1>
      <p>
        Total: {articles.length} artikel | Unggulan: {jumlahUnggulan}
      </p>

      <div style={{ marginBottom: '24px' }}>
        <input
          placeholder="Judul artikel"
          value={judulBaru}
          onChange={(e) => setJudulBaru(e.target.value)}
          style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '300px' }}
        />
        <input
          placeholder="Isi artikel"
          value={isiBaru}
          onChange={(e) => setIsiBaru(e.target.value)}
          style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '300px' }}
        />
        <Button label="Tambah Artikel" onClick={tambahArtikel} />
      </div>

      {loading ? (
        <p>Memuat artikel...</p>
      ) : articles.length === 0 ? (
        <p>Belum ada artikel.</p>
      ) : (
        articles.map((a) => (
          <div key={a.id}>
            <Card
              title={a.title}
              content={a.content}
              author={a.author}
              featured={a.featured}
            />
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
              <Button
                label={a.featured ? 'Batal Unggulan' : 'Jadikan Unggulan'}
                onClick={() => toggleUnggulan(a.id)}
              />
              <Button
                label="Hapus"
                onClick={() => hapusArtikel(a.id)}
                variant="danger"
              />
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default App