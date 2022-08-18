export default function TopBar() {
  return (
    <div className="flex items-center h-20 gap-x-4 px-8 py-3 border-b-2">
      <svg
        className="grow-0 max-h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        color="#F49897"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
      <div className="flex-auto w-3/4">
        <span className="text-3xl" style={{ color: '#ccc' }}>
          Select location...
        </span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="grow-0 max-h-full"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
