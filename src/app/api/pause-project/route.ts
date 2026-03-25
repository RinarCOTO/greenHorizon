export async function POST() {
  const projectId = process.env.VERCEL_PROJECT_ID;
  const teamId = process.env.VERCEL_TEAM_ID;
  const token = process.env.VERCEL_TOKEN;

  if (!projectId || !token) {
    return new Response("Missing VERCEL_PROJECT_ID or VERCEL_TOKEN", { status: 500 });
  }

  const route = teamId
    ? `${projectId}/pause?teamId=${teamId}`
    : `${projectId}/pause`;

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
