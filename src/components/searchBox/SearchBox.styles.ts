export const styles = {
  container:
    "flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full shadow-sm w-full max-w-md",
  input:
    "flex-1 px-4 py-1 bg-transparent border-none text-sm text-gray-900 placeholder-gray-400 focus:outline-none disabled:bg-transparent disabled:cursor-not-allowed",
  button:
    "px-4 py-1 min-w-[64px] rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-md",
} as const;
