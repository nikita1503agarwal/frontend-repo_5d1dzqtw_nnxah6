import { AppShell } from './Layouts'
import Hero from './Hero'
import NotificationBar from './NotificationBar'
import DashboardCards from './DashboardCards'
import TeamSection from './TeamSection'
import UpdatesSection from './UpdatesSection'
import Activities from './Activities'
import { useEffect, useState } from 'react'

function formatCurrency(n){
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(n)
}

export function Dashboard(){
  const [counts, setCounts] = useState({active_policies:3, outstanding_invoices:2, outstanding_total:24500, renewals_due:0, risk_updates:1})
  useEffect(()=>{
    const url = `${import.meta.env.VITE_BACKEND_URL || ''}/api/dashboard`
    fetch(url).then(r=>r.json()).then(d=> setCounts(d)).catch(()=>{})
  },[])

  return (
    <AppShell>
      <Hero />
      <div className="mt-6"><NotificationBar /></div>
      <div className="mt-6"><DashboardCards /></div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Outstanding Invoices</div>
                <div className="text-2xl font-semibold text-gray-900 mt-1">{counts.outstanding_invoices} • {formatCurrency(counts.outstanding_total)}</div>
              </div>
              <a href="/invoices" className="text-teal-700 text-sm font-medium hover:underline">View all</a>
            </div>
          </div>

          <div>
            <div className="text-sm text-teal-700 font-medium mb-3">Broker & Service Team</div>
            <TeamSection />
          </div>

          <UpdatesSection />
        </div>
        <div>
          <Activities />
        </div>
      </div>
    </AppShell>
  )
}

export function PoliciesPage(){
  const [policies, setPolicies] = useState([])
  useEffect(()=>{
    const url = `${import.meta.env.VITE_BACKEND_URL || ''}/api/policies`
    fetch(url).then(r=>r.json()).then(d=> setPolicies(d)).catch(()=>{})
  },[])
  return (
    <AppShell>
      <h2 className="text-xl font-semibold text-gray-900">Policies</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {policies.map((p)=> (
          <div key={p.policy_number} className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
            <div className="text-sm text-gray-500">{p.product}</div>
            <div className="mt-1 font-semibold text-gray-900">{p.policy_number}</div>
            <div className="mt-1 text-sm text-gray-600">{p.start_date} → {p.end_date}</div>
            <div className="mt-2 text-sm"><span className="px-2 py-0.5 rounded bg-teal-50 text-teal-700">{p.status}</span></div>
          </div>
        ))}
      </div>
    </AppShell>
  )
}

export function DocumentsPage(){
  const [docs, setDocs] = useState([])
  const [file, setFile] = useState(null)
  const [policy, setPolicy] = useState('')

  function refresh(){
    const url = `${import.meta.env.VITE_BACKEND_URL || ''}/api/documents`
    fetch(url).then(r=>r.json()).then(d=> setDocs(d)).catch(()=>{})
  }

  useEffect(()=>{ refresh() },[])

  async function onUpload(e){
    e.preventDefault()
    if(!file) return
    const url = `${import.meta.env.VITE_BACKEND_URL || ''}/api/documents/upload`
    const fd = new FormData()
    fd.append('file', file)
    if(policy) fd.append('policy_number', policy)
    await fetch(url, { method: 'POST', body: fd })
    setFile(null); setPolicy(''); refresh()
  }

  return (
    <AppShell>
      <h2 className="text-xl font-semibold text-gray-900">Documents</h2>
      <form onSubmit={onUpload} className="mt-4 rounded-xl bg-white p-5 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-3 items-center">
        <input type="file" onChange={(e)=> setFile(e.target.files?.[0]||null)} className="block w-full text-sm" accept=".pdf,.doc,.docx,image/*" />
        <input type="text" value={policy} onChange={e=> setPolicy(e.target.value)} placeholder="Policy number (optional)" className="w-full sm:w-64 px-3 py-2 border rounded-lg text-sm" />
        <button className="px-4 py-2 rounded-lg bg-teal-600 text-white text-sm font-medium hover:bg-teal-500">Upload</button>
      </form>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {docs.map((d, idx)=> (
          <div key={idx} className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
            <div className="font-medium text-gray-900">{d.filename}</div>
            <div className="text-sm text-gray-500">{d.content_type}</div>
            {d.policy_number && <div className="text-xs text-gray-400 mt-1">Policy: {d.policy_number}</div>}
          </div>
        ))}
      </div>
    </AppShell>
  )
}

export function InvoicesPage(){
  const [items, setItems] = useState([])
  useEffect(()=>{
    const url = `${import.meta.env.VITE_BACKEND_URL || ''}/api/invoices`
    fetch(url).then(r=>r.json()).then(d=> setItems(d)).catch(()=>{})
  },[])
  return (
    <AppShell>
      <h2 className="text-xl font-semibold text-gray-900">Invoices</h2>
      <div className="mt-4 rounded-xl bg-white p-5 shadow-sm border border-gray-100">
        <div className="divide-y">
          {items.map((it)=> (
            <div key={it.invoice_number} className="py-3 flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">{it.invoice_number}</div>
                <div className="text-sm text-gray-500">Due {it.due_date}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(it.amount)}</div>
                <div className={`text-xs mt-1 inline-flex px-2 py-0.5 rounded ${it.status==='paid'?'bg-emerald-50 text-emerald-700':'bg-amber-50 text-amber-700'}`}>{it.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  )
}

export function RenewalsPage(){
  const [items, setItems] = useState([])
  useEffect(()=>{
    const url = `${import.meta.env.VITE_BACKEND_URL || ''}/api/renewals`
    fetch(url).then(r=>r.json()).then(d=> setItems(d)).catch(()=>{})
  },[])
  return (
    <AppShell>
      <h2 className="text-xl font-semibold text-gray-900">Renewals</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it, idx)=> (
          <div key={idx} className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
            <div className="text-sm text-gray-500">{it.product}</div>
            <div className="mt-1 font-semibold text-gray-900">{it.policy_number}</div>
            <div className="mt-1 text-sm text-gray-600">Renewal date: {it.renewal_date}</div>
            <div className="mt-2 text-sm"><span className="px-2 py-0.5 rounded bg-sky-50 text-sky-700">{it.status}</span></div>
          </div>
        ))}
      </div>
    </AppShell>
  )
}
