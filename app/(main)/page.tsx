export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-mm-blue mb-4">
          Welcome to M&amp;M Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Mind &amp; Machine DFW — Member Portal
        </p>
      </div>

      {/* Build progress */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-mm-blue mb-6">Build Progress</h2>
        <div className="space-y-3">
          {[
            'Module 1 — Foundation: Next.js, Tailwind, Prisma, Supabase',
            'Module 2 — Authentication: Google OAuth, role-based access',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="text-mm-orange text-xl font-bold">✓</span>
              <span className="text-gray-800">{item}</span>
            </div>
          ))}
          {[
            'Module 3 — Core UI Shell',
            'Module 4 — Member Directory',
            'Module 5 — Events',
            'Module 6 — Admin Panel',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="text-gray-300 text-xl">○</span>
              <span className="text-gray-400">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
