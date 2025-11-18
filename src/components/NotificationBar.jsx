import { useEffect, useState } from 'react'

export default function NotificationBar(){
  const [text, setText] = useState('Outstanding Invoices: $24,500 – Payment due Nov 15 & Nov 20')
  useEffect(()=>{
    const url = `${import.meta.env.VITE_BACKEND_URL || ''}/api/notification`
    fetch(url)
      .then(r=>r.json())
      .then(d=>{
        if(d?.message) setText(d.message)
      })
      .catch(()=>{})
  },[])
  return (
    <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-4 text-sm text-gray-700">
      {text}
    </div>
  )}
