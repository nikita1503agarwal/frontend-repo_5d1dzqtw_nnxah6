import { useEffect, useState } from 'react'

export default function Activities(){
  const [items, setItems] = useState([
    { type: 'policy_renewal', message: 'Commercial Property Insurance renewed for another year' },
    { type: 'payment_made', message: 'Payment Made' },
    { type: 'document_uploaded', message: 'Document Uploaded' },
  ])
  useEffect(()=>{
    const url = `${import.meta.env.VITE_BACKEND_URL || ''}/api/activities`
    fetch(url).then(r=>r.json()).then(d=> setItems(d)).catch(()=>{})
  },[])
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
      <div className="font-medium text-gray-900">Recent Activities</div>
      <ul className="mt-4 space-y-3">
        {items.map((a, idx)=> (
          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5"/>
            <span>{a.message}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
