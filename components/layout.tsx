import TopBar from './topBar';
import Days from './days';
import BottomBar from './bottomBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <Days />
      {children}
      <BottomBar />
    </div>
  );
}
