import AdminTopBar from '@/components/admin/top-bar'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-col gap-3 bg-muted p-3 sm:gap-4 sm:p-5 lg:p-8">
      <AdminTopBar />
      <div className="h-full w-full min-w-0 rounded-2xl bg-card p-3 sm:rounded-4xl sm:p-6">
        {children}
      </div>
    </div>
  )
}

export default AdminLayout
