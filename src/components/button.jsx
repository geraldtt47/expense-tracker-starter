import './button.css'

const variants = {
  blue: '#2979ff',
  pink: '#d81b6a',
  green: '#2e7d32',
  purple: '#6a1b9a',
  navy: '#0d1b5e',
  black: '#1a1a1a',
  orange: '#e65100',
  teal: '#00695c',
  red: '#bf360c',
}

export default function Button({
  children,
  variant = 'blue',
  onClick,
  type = 'button',
  disabled = false,
}) {
  const color = variants[variant] ?? variants.blue

  return (
    <button
      type={type}
      className="glossy-btn"
      style={{ '--btn-color': color }}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="glossy-btn__inner">{children}</span>
    </button>
  )
}
