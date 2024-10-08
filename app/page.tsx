import { SelectedCompanyProvider } from '@/hooks/useSelectedCompany';
import { MainPanel } from '@/components/ui/mainPanel';

export default function Home() {
  return (
    <main className="h-[875px] flex justify-center items-center pt-4 px-2 flex-col">
      <SelectedCompanyProvider>
        <MainPanel />
      </SelectedCompanyProvider>
    </main>
  );
}
