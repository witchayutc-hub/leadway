"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getNewsById } from "@/api/getNews";
import MarkDown from "@/components/markdown";

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
            className="flex flex-col  w-full items-start max-w-7xl mx-auto gap-8 px-3 pt-12 
              md:flex-row"
          >
            <div className="w-full md:w-1/2 min-w-0">
              <img
                src="https://app.leadway.co.th/uploads/455788784_891465753025364_7206946970431052324_n_699e68cfd4.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="w-full min-w-0 md:w-1/2">
              <div className="mb-12">
                <span className="text-2xl md:text-4xl text-black ">
                  {data.attributes.name}
                </span>
              </div>
              <div className="text-black whitespace-pre-line wrap-break-word">
                <MarkDown description={data.attributes.description ?? ""} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
