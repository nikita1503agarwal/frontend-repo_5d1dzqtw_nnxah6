import { useEffect, useState } from 'react'

export default function UpdatesSection(){
  const [updates, setUpdates] = useState([
    { title: 'New Cyber Insurance Requirements for 2025', label: 'Latest Update', description: 'Multi-factor authentication and endpoint detection are now standard.', date_str: 'Nov 10, 2024' }
  ])
  useEffect(()=>{
    const url = `${import.meta.env.VITE_BACKEND_URL || ''}/api/updates`
    fetch(url).then(r=>r.json()).then(d=> setUpdates(d)).catch(()=>{})
  },[])
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
      <div className="text-sm text-teal-700 font-medium">Insurance Updates</div>
      <div className="mt-4 space-y-4">
        {updates.map((u)=> (
          <div key={u.title} className="rounded-lg border border-gray-100 p-4 hover:bg-gray-50 transition">
            <div className="text-xs inline-flex px-2 py-0.5 rounded bg-teal-50 text-teal-700">{u.label || 'Latest Update'}</div>
            <div className="mt-2 font-semibold text-gray-900">{u.title}</div>
            <div className="mt-1 text-sm text-gray-600">{u.description}</div>
            <div className="mt-2 text-xs text-gray-400">{u.date_str}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
