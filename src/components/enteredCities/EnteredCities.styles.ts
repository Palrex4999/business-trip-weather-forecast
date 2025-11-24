export const styles = {
  container:
    "flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full shadow-sm overflow-x-auto",

  pill:
    "inline-flex items-center gap-2 px-4 py-1 min-w-[64px] rounded-full border border-gray-300 text-sm bg-white transition-colors font-medium text-gray-900 whitespace-nowrap",

  cityName: "text-gray-900",

  removeButton:
    "w-4 h-4 flex items-center justify-center rounded-full text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors text-base leading-none",
} as const;
