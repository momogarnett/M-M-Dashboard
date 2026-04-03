export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-mm-blue mb-4">
          Welcome to M&M Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Dashboard foundation initialized. Ready for modules.
        </p>
      </div>

      {/* Foundation checklist */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-mm-blue mb-6">Module 1 Status</h2>
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="text-mm-orange text-2xl mr-3">✓</span>
            <span>Next.js initialized with TypeScript</span>
          </div>
          <div className="flex items-center">
            <span className="text-mm-orange text-2xl mr-3">✓</span>
            <span>Tailwind CSS configured with brand colors</span>
          </div>
          <div className="flex items-center">
            <span className="text-mm-orange text-2xl mr-3">✓</span>
            <span>Responsive layout structure in place</span>
          </div>
          <div className="flex items-center">
            <span className="text-mm-orange text-2xl mr-3">✓</span>
            <span>Base app shell with navigation and footer</span>
          </div>
          <div className="flex items-center">
            <span className="text-mm-orange text-2xl mr-3">✓</span>
            <span>Prisma + Supabase connected and migrated</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400 text-2xl mr-3">→</span>
            <span className="text-gray-600">Authentication module (Phase 2)</span>
          </div>
        </div>
      </div>

      {/* Next steps */}
      <div className="bg-mm-cyan bg-opacity-10 rounded-lg border border-mm-cyan p-6">
        <h3 className="text-lg font-bold text-mm-blue mb-4">Next Steps</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Set up Supabase project and Prisma schema</li>
          <li>Create basic database connection</li>
          <li>Verify app runs locally (npm run dev)</li>
          <li>Commit and push to GitHub</li>
        </ol>
      </div>
    </div>
  )
}
