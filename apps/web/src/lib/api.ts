export const apiFetch = async (path: string, options?: RequestInit) => {
  const base = process.env.NEXT_PUBLIC_API_BASE || process.env.API_BASE;
  const url = base ? `${base}${path}` : path;

  const hasBody = !!options?.body;

  const res = await fetch(url, {
    ...options,
    headers: {
      ...(hasBody ? { 'content-type': 'application/json' } : {}),
      ...(options?.headers || {}),
    },
  });

  if (!res.ok) throw new Error(await res.text());

  try {
    return await res.json();
  } catch {
    return null;
  }
};
