const URL = process.env.NEXT_PUBLIC_API_URL;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

// GET DATA
export async function getData(endpoint: string) {
  const url = `${URL}${endpoint}`;
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

// GET ALL
export async function getAll(page: number, pageSize: number, endpoint: string) {
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

// POST CALCULATE
export async function postData(endpoint: string, options?: any) {
  const body = new URLSearchParams(options?.body).toString();

  const response = await fetch(URL + endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
