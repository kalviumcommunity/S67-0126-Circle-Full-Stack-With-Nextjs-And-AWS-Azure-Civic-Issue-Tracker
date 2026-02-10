
export const revalidate = 60; // ISR every 60 seconds

export default async function PublicGrievancesPage() {
  const grievances = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    { next: { revalidate: 60 } }
  ).then(res => res.json());

  return (
    <main>
      <h1>Public Grievances</h1>
      {grievances.slice(0, 5).map(g => (
        <p key={g.id}>{g.title}</p>
      ))}
    </main>
  );
}
