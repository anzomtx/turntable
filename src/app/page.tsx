"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import TurntableViewer from '@/components/turntable-viewer';
import { imageSets, DEFAULT_SET } from '@/lib/image-sets';
import type { ImageSet } from '@/lib/image-sets';

function Turntable() {
  const searchParams = useSearchParams();
  const setParam = searchParams.get('set') as keyof typeof imageSets | null;
  const currentSet: ImageSet = (setParam && imageSets[setParam]) || imageSets[DEFAULT_SET];

  return (
    <div className="w-full max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-2 text-primary-foreground">
        {currentSet.title}
      </h1>
      <p className="text-lg text-muted-foreground text-center mb-8">
        Use the arrows or your keyboard to spin the view.
      </p>
      <TurntableViewer images={currentSet.images} />
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 sm:p-8">
      <Suspense fallback={<div>Loading...</div>}>
        <Turntable />
      </Suspense>
    </main>
  );
}
