const URL = process.env.NEXT_PUBLIC_API_URL;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

// GET ALL
export async function getAll(page: any, pageSize: any, endpoint: string) {
  const url = `${URL}${endpoint}&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
  console.log(`Fetching paginated entries from: ${url}`);
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Network response was not ok");
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

// GET SLUG
export async function getSlug(endpoint: string) {
  let response: Response | null = null;
  try {
    response = await fetch(URL + endpoint, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Network response was not ok");
    }
  } catch (error) {
    console.error("Error:", error);
  }

  return response!.json();
}
