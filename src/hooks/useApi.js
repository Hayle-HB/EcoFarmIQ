import { useState, useEffect, useCallback } from "react";

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
  credentials: "include", // This is crucial for sending cookies
};

const useApi = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Merge default options with custom options
  const fetchOptions = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  const execute = useCallback(
    async (customEndpoint = endpoint, customOptions = {}) => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(customEndpoint, {
          ...fetchOptions,
          ...customOptions,
        });

        if (!response.ok) {
          throw new Error(
            `API Error: ${response.status} ${response.statusText}`
          );
        }

        const result = await response.json();
        setData(result);
        return result;
      } catch (err) {
        setError(err.message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [endpoint]
  );

  return { data, error, loading, execute };
};

export default useApi;
