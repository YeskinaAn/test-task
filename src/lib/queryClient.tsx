import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { tagsApi } from "./tagsApi";

const defaultQueryFunction: QueryFunction<unknown, ReadonlyArray<unknown>> = ({
  queryKey: [url, data],
}) => {
  return tagsApi
    .get(url as string, { params: data })
    .then(({ data }) => data);
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFunction,
      refetchOnWindowFocus: false,
    },
  },
});
