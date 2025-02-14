import { useState, useEffect, useRef } from "react";

const useQuery = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const cache = useRef(new Map());

  const {
    enabled = true,
    cacheTime = 5 * 60 * 1000, // 5 minutes
    retries = 3,
    retryDelay = 1000,
    ...fetchOptions
  } = options;

  useEffect(() => {
    let isMounted = true;
    let retryCount = 0;

    const fetchData = async () => {
      try {
        // Check cache first
        const cachedData = cache.current.get(endpoint);
        if (cachedData && Date.now() - cachedData.timestamp < cacheTime) {
          setData(cachedData.data);
          setLoading(false);
          return;
        }

        const response = await fetch(endpoint, fetchOptions);

        if (!response.ok) {
          throw new Error(
            `Query failed: ${response.status} ${response.statusText}`
          );
        }

        const result = await response.json();

        if (isMounted) {
          setData(result);
          // Update cache
          cache.current.set(endpoint, {
            data: result,
            timestamp: Date.now(),
          });
        }
      } catch (err) {
        if (retryCount < retries) {
          retryCount++;
          setTimeout(fetchData, retryDelay * retryCount);
          return;
        }
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    if (enabled) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [endpoint, enabled]);

  const refetch = async () => {
    setLoading(true);
    cache.current.delete(endpoint);
    try {
      const response = await fetch(endpoint, fetchOptions);
      const result = await response.json();
      setData(result);
      cache.current.set(endpoint, {
        data: result,
        timestamp: Date.now(),
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, refetch };
};

export default useQuery;
