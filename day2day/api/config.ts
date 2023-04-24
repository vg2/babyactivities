const config = {
  baseUrl: "https://localhost:7138/api",
};

export default config;

export function fetcher(input: RequestInfo | URL, init?: RequestInit) {
  return fetch(input, init).then((res) => res.json());
}
