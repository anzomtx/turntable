import TurntableViewer from '@/components/turntable-viewer';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-2 text-primary-foreground">
          SpinView
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-8">
          Use the arrows or your keyboard to spin the view.
        </p>
        <TurntableViewer />
      </div>
    </main>
  );
}
