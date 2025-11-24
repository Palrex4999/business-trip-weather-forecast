export const styles = {
  container:
    "flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm overflow-x-auto",

  pill:
    "inline-flex items-center gap-2 px-4 py-2 min-w-[120px] rounded-lg bg-gray-100 transition-colors text-sm text-gray-900 whitespace-nowrap",

  locationIcon: "w-4 h-4 text-gray-600 flex-shrink-0",

  cityName: "text-gray-900 font-normal",

  removeButton:
    "w-4 h-4 flex items-center justify-center rounded-full text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors text-base leading-none ml-1 flex-shrink-0",
} as const;
