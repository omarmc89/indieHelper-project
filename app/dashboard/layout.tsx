import DashboardNavbar from "./dashboardNavbar.jsx"

export default function DashboardLayout (
  { children } : { children: React.ReactNode }
  ) {
  return (
      <div className="flex p-6 ">{children}</div>
  )
}