// Import necessary React Native and React hooks
import { Alert } from "react-native";
import { useEffect, useState, useCallback } from "react";

// Define the interface for the hook options
// T is the type of the data returned by the function
// P is the type of parameters (must be an object with string/number values)
interface UseAppwriteOptions<T, P extends Record<string, string | number>> {
  fn: (params: P) => Promise<T>; // The async function to call
  params?: P; // Optional parameters for the function
  skip?: boolean; // Optional flag to skip initial fetch
}

// Define the return type of the hook
interface UseAppwriteReturn<T, P> {
  data: T | null; // The fetched data or null
  loading: boolean; // Loading state
  error: string | null; // Error message or null
  refetch: (newParams: P) => Promise<void>; // Function to refetch with new params
}

// The custom hook definition
export const useAppwrite = <T, P extends Record<string, string | number>>({
  fn,
  params = {} as P,
  skip = false,
}: UseAppwriteOptions<T, P>): UseAppwriteReturn<T, P> => {
  // State for storing the fetched data
  const [data, setData] = useState<T | null>(null);
  // State for loading status (starts as true unless skip is true)
  const [loading, setLoading] = useState(!skip);
  // State for error messages
  const [error, setError] = useState<string | null>(null);

  // Memoized fetch function using useCallback to prevent unnecessary recreations
  const fetchData = useCallback(
    async (fetchParams: P) => {
      setLoading(true); // Set loading to true when fetch starts
      setError(null); // Clear any previous errors

      try {
        const result = await fn(fetchParams); // Call the provided async function
        setData(result); // Store the result if successful
      } catch (err: unknown) {
        // Handle errors - extract message if it's an Error, otherwise generic message
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
        Alert.alert("Error", errorMessage); // Show alert with error message
      } finally {
        setLoading(false); // Set loading to false when done (success or error)
      }
    },
    [fn] // Only recreate if fn changes
  );

  // Effect to fetch data on initial render if not skipped
  useEffect(() => {
    if (!skip) {
      fetchData(params);
    }
  }, []); // Empty dependency array means this runs once on mount

  // Refetch function that takes new parameters
  const refetch = async (newParams: P) => await fetchData(newParams);

  // Return the current state and refetch function
  return { data, loading, error, refetch };
};