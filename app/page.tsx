import { ResizableVerticalPanel } from '@/components/ui/resizable-vertical';
import { FooterStuff } from '@/components/ui/footer';
import CanvasCursor from '@/components/ui/canvas-cursor';

export default function Home() {
  return (
    <main className="h-[875px] flex justify-center items-center pt-4 px-2  flex-col">
      <ResizableVerticalPanel />
      <FooterStuff />
      {/* <CanvasCursor /> */}
    </main>
  );
}
