export const styles = {
  container:
    "flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full shadow-sm overflow-x-auto",

  pill:
    "inline-flex items-center justify-center px-4 py-1 min-w-[64px] rounded-full border border-gray-300 text-sm bg-white transition-colors font-medium text-gray-900 whitespace-nowrap",

  pillActive:
    "inline-flex items-center justify-center px-4 py-1 min-w-[64px] rounded-full bg-blue-600 text-white border-transparent shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 z-10",

  addButton:
    "w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 bg-white hover:bg-gray-50 text-lg",
} as const;