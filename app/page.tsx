import { SelectedCompanyProvider } from '@/app/hooks/useSelectedCompany'; // Import the provider
import { ResizableVerticalPanel } from '@/components/ui/resizable-vertical';
import { FooterStuff } from '@/components/ui/footer';

export default function Home() {
  return (
    <main className="h-[875px] flex justify-center items-center pt-4 px-2 flex-col">
      <SelectedCompanyProvider>
        {' '}
        {/* Wrap the panel with the provider */}
        <ResizableVerticalPanel />
      </SelectedCompanyProvider>
      <FooterStuff />
    </main>
  );
}
