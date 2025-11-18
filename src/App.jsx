import { Routes, Route } from 'react-router-dom'
import { Dashboard, PoliciesPage, DocumentsPage, InvoicesPage, RenewalsPage } from './components/Pages'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/policies" element={<PoliciesPage />} />
      <Route path="/documents" element={<DocumentsPage />} />
      <Route path="/invoices" element={<InvoicesPage />} />
      <Route path="/renewals" element={<RenewalsPage />} />
    </Routes>
  )
}
