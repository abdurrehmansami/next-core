// src/hooks/useFetch.ts
"use client";

import { useState, useEffect } from "react";
import httpClient from "@/http/singleton/httpClient";

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await httpClient.get(url);
        setData(response.data);
      } catch (err) {
        // setError(err);
        console.error("Fetching failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
