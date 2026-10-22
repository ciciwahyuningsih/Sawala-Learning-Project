interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Cari artikel...',
}: SearchBarProps) {
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        width: '100%',
        boxSizing: 'border-box',
        padding: '10px 12px',
        marginBottom: '12px',
        border: '1px solid #ddd',
        borderRadius: '6px',
        fontSize: '16px',
      }}
    />
  )
}