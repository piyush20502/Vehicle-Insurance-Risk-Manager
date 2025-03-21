import InsuranceRiskDashboard from '@/components/dashboard/InsuranceRiskDashboard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <InsuranceRiskDashboard />
      </div>
    </main>
  );
}