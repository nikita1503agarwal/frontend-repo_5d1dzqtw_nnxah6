import { Home, FileText, FolderOpenDot, Receipt, RefreshCcw } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Dashboard", icon: Home },
  { to: "/policies", label: "Policies", icon: FileText },
  { to: "/documents", label: "Documents", icon: FolderOpenDot },
  { to: "/invoices", label: "Invoices", icon: Receipt },
  { to: "/renewals", label: "Renewals", icon: RefreshCcw },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-20 bg-white shadow-md border-r border-gray-100 z-30">
      <div className="flex flex-col items-center py-6 gap-6">
        <div className="w-10 h-10 rounded-lg" style={{background: '#009688'}}></div>
        <nav className="flex flex-col gap-4 w-full items-center">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `group relative flex items-center justify-center w-12 h-12 rounded-lg transition ${isActive ? 'bg-teal-50 text-teal-700' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <Icon className="w-6 h-6" />
              <span className="absolute left-16 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
                {label}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
