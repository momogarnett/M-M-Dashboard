export default async function AuthError({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams
  return (
    <div style={{ padding: 40, fontFamily: 'monospace' }}>
      <h1>Auth Error</h1>
      <p>Error: <strong>{error || 'unknown'}</strong></p>
    </div>
  )
}
