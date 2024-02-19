import DashboardNavbar from "./dashboardNavbar.jsx"



export default function DashboardLayout (
  { children } : { children: React.ReactNode }
  ) {
  return (
    <div className="z-10 flex flex-col h-screen">
      <DashboardNavbar />
      <div className="flex p-6 ">{children}</div>
    </div>
  )
}