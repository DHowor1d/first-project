import { ReactNode } from 'react'
import backgroundImage from '@renderer/assets/background.jpg'

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div
      className="relative w-full min-h-screen bg-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

      {/* 실제 콘텐츠 */}
      <div className="relative z-30">{children}</div>
    </div>
  )
}
export default Layout
