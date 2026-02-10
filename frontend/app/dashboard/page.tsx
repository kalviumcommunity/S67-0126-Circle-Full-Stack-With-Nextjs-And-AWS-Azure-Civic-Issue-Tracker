
export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const data = await fetch(
    'https://worldtimeapi.org/api/timezone/Etc/UTC',
    { cache: 'no-store' }
  ).then(res => res.json());

  return (
    <main>
      <h1>My Grievances</h1>
      <p>Status Last Updated At:</p>
      <strong>{data.datetime}</strong>
    </main>
  );
}
