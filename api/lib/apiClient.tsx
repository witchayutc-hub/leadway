const URL = process.env.NEXT_PUBLIC_API_URL;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export async function apiClient(endpoint: string) {
  const response = await fetch(URL + endpoint, {
    headers: {
      Authorization: "Bearer " + TOKEN,
    },
  });

  return response.json();
}
