import { useNavigate } from 'react-router-dom'

const cards = [
  { title: 'Active Policies', subtitle: 'Currently insured products', number: 3, to: '/policies', color: 'bg-teal-500/10 text-teal-700' },
  { title: 'Outstanding Invoices', subtitle: '$24,500 total amount', number: 2, to: '/invoices', color: 'bg-amber-500/10 text-amber-700' },
  { title: 'Renewals Due', subtitle: 'Within next 90 days', number: 0, to: '/renewals', color: 'bg-sky-500/10 text-sky-700' },
  { title: 'Risk Updates', subtitle: 'Pending submission', number: 1, to: '/documents', color: 'bg-rose-500/10 text-rose-700' },
]

export default function DashboardCards(){
  const nav = useNavigate()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c)=> (
        <button key={c.title} onClick={()=> nav(c.to)} className="group rounded-xl bg-white shadow-sm hover:shadow-md border border-gray-100 p-5 text-left transition">
          <div className={`inline-flex text-sm px-2 py-1 rounded ${c.color}`}>{c.title}</div>
          <div className="mt-3 text-gray-500 text-sm">{c.subtitle}</div>
          <div className="mt-6 text-3xl font-semibold text-gray-900 group-hover:text-teal-700 transition">{c.number}</div>
        </button>
      ))}
    </div>
  )
}
