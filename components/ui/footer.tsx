import { MessageCircleWarningIcon } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function FooterStuff() {
  return (
    <section className="pt-2">
      <Alert className="w-auto" variant="destructive">
        <MessageCircleWarningIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          This is a beta version of the site. Things may break or not work accordingly.
        </AlertDescription>
      </Alert>
    </section>
  );
}
