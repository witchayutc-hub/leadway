"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getNewsById } from "@/api/getNews";

export default function Page() {
  const params = useParams();
  const id = params.id as string;

  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    getNewsById(id)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error("Failed to load news:", err);
      });
  }, [id]);

  if (error) {
    return (
      <div className="text-red-600 text-center py-10">
        Failed to load data. Please try again.
      </div>
    );
  }

  if (!data) return <div className="text-black">Loading...</div>;

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section>
          <div
            className="flex flex-col w-full items-start max-w-7xl mx-auto gap-8 px-3 pt-12
                    md:flex-row"
          >
            <div className="w-full md:w-1/2">
              <img
                src="https://app.leadway.co.th/uploads/455788784_891465753025364_7206946970431052324_n_699e68cfd4.jpg"
                className="w-full max-h-150 object-cover"
                alt=""
              />
            </div>
            <div
              className="w-full flex items-center
                      md:w-1/2 "
            >
              <div className="grid gap-6">
                <span className="text-2xl md:text-4xl text-black">
                  {data.attributes.name}
                </span>
                <span className="text-black leading-relaxed">
                  {data.attributes.description}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
