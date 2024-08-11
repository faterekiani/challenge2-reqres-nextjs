"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useState } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  const [queryCLient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryCLient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}
