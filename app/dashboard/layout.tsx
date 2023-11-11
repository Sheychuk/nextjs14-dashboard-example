import Navbar from "@/app/ui/dashboard/navbar/navbar"
import Sidebar from "@/app/ui/dashboard/sidebar/sidebar"
import style from '@/app/ui/dashboard/dashboard.module.css'

export default function Layout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <div className={style.container}>
    <div className={style.menu}>
      <Sidebar/>
    </div>
    <div className={style.content}>
      <Navbar />
      {children}
    </div>
   </div>
  )
}
