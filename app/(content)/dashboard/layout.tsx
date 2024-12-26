import localFont from "next/font/local";

const pl = localFont({
  src: '../../fonts/pl.ttf'
})

export default function DashboardLTLayout({
  children,
  admin,
  user
}: {
  children: React.ReactNode;
  admin: React.ReactNode;
  user: React.ReactNode;
}) {
  const a = true
  return a ? (
    <div>
      <h1 className={pl.className}> Just testing PL writing, which is found to be working </h1>
      {children}
      {admin}
    </div>
  ): (
    <div>
    {children}
    {user}
  </div>
  )
}