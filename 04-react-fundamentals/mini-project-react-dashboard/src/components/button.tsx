interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'danger'
}

function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  const warna = variant === 'primary' ? '#2563eb' : '#dc2626'

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: warna,
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '6px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  )
}

export default Button