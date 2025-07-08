import { Outlet } from "react-router";
import { Header } from '../components/Header.tsx'

export function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
