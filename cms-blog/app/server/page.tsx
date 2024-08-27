import { Service } from "@/server";

async function ServerPage() {
  const data = await Service.getPosts();

  return (
    <div>
      <h1>Server Component</h1>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
export default ServerPage;
