import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Topbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="pl-24 pr-6 py-3 flex items-center justify-between">
        <div></div>
        <div className="relative">
          <button onClick={() => setOpen(v=>!v)} className="flex items-center gap-3 rounded-full px-3 py-1.5 hover:bg-gray-100 transition">
            <img src={`https://api.dicebear.com/7.x/initials/svg?seed=John%20Smith`} alt="avatar" className="w-8 h-8 rounded-full" />
            <span className="text-sm font-medium">John Smith</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1">
              <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50">Profile</button>
              <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50">Settings</button>
              <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 text-red-600">Sign out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
