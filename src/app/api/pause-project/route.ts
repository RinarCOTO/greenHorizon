export async function POST() {
  const projectId = "prj_SV42Ai4i8ICUNGBqHPzmuQLaQvB4";
  const token = process.env.VERCEL_TOKEN;

  if (!token) {
    return new Response("Missing VERCEL_TOKEN", { status: 500 });
  }

  const route = `${projectId}/pause`;

  const res = await fetch(`https://api.vercel.com/v1/projects/${route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const error = await res.text();
    return new Response(`Failed to pause project: ${error}`, { status: res.status });
  }

  return new Response("Project paused", { status: 200 });
}
