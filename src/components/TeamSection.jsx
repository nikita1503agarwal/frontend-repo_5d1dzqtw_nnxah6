import { Mail, Phone, Linkedin } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function TeamSection(){
  const [team, setTeam] = useState([
    { name: 'Monique Reibelt', role: 'Senior Broker', email: 'monique@example.com', phone: '+1 (555) 123-4567', linkedin: '#' },
    { name: 'Stuart Madden', role: 'Service Agent', email: 'stuart@example.com', phone: '+1 (555) 987-6543', linkedin: '#' },
  ])
  useEffect(()=>{
    const url = `${import.meta.env.VITE_BACKEND_URL || ''}/api/team`
    fetch(url)
      .then(r=>r.json())
      .then(d=> setTeam(d))
      .catch(()=>{})
  },[])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {team.map((m)=> (
        <div key={m.email} className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(m.name)}`} alt={m.name} className="w-14 h-14 rounded-full" />
            <div>
              <div className="font-semibold text-gray-900">{m.name}</div>
              <div className="text-sm text-gray-500">{m.role}</div>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <a href={`mailto:${m.email}`} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-sm"><Mail className="w-4 h-4"/> Email</a>
            <a href={`tel:${m.phone}`} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-sm"><Phone className="w-4 h-4"/> Call</a>
            <a href={m.linkedin} target="_blank" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-sm"><Linkedin className="w-4 h-4"/> View LinkedIn</a>
          </div>
        </div>
      ))}
    </div>
  )
}
