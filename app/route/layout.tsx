import { Suspense } from 'react';

export default function routeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="fixed left-0 top-0 w-full h-full">
      <Suspense>
        <div className="relative inset-0">{children}</div>
      </Suspense>
    </section>
  );
}
