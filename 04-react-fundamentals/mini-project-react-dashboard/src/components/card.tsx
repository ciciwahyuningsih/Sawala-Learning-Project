interface CardProps {
  title: string
  content: string
  author?: string
  featured?: boolean
}

function Card({ title, content, author, featured = false }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        border: featured ? '2px solid #f59e0b' : '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
      }}
    >
      {featured && (
        <span
          style={{
            backgroundColor: '#f59e0b',
            color: 'white',
            fontSize: '12px',
            padding: '2px 8px',
            borderRadius: '4px',
          }}
        >
          Unggulan
        </span>
      )}

      <h2>{title}</h2>
      <p>{content}</p>

      {author ? (
        <small>Penulis: {author}</small>
      ) : (
        <small>Penulis: Anonim</small>
      )}
    </div>
  )
}

export default Card