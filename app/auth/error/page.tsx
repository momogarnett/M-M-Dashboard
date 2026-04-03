export default function AuthError({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  return (
    <div style={{ padding: 40, fontFamily: 'monospace' }}>
      <h1>Auth Error</h1>
      <p>Error: <strong>{searchParams.error || 'unknown'}</strong></p>
    </div>
  )
}
