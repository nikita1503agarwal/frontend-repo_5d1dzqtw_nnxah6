import Sidebar from './Sidebar'
import Topbar from './Topbar'

export function AppShell({children}){
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Topbar />
      <main className="pl-24 p-6 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  )
}
