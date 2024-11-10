export default async function Home() {

  const response = await fetch('https://jsonplaceholder.typicode.com/albums', { next: { revalidate: 10 } })
  if (!response.ok) { throw new Error('Failed to fetch') }

  const data = await response.json()


  return (
    <>
      <h1 className="text-3xl">Welcome to next.js</h1>
      <ul>
        {data.map((album: any) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </>
  );
}
