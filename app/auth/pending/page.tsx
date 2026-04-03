export default function PendingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-mm-light">
      <div className="bg-white rounded-lg border border-gray-200 p-10 w-full max-w-md text-center shadow-sm">
        <h1 className="text-3xl font-bold text-mm-blue mb-2">Access Pending</h1>
        <p className="text-gray-600 mt-4">
          Your account has been created but is awaiting admin approval.
        </p>
        <p className="text-gray-400 text-sm mt-4">
          You will be notified once your access is approved.
        </p>
      </div>
    </div>
  )
}
