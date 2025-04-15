export function Instagram() {
  return (
    <a className="relative border select-none cursor-pointer flex items-center justify-center w-12 h-12 bg-[#E1306C] text-white font-bold rounded-xl transition-all duration-300 ease-in-out group overflow-hidden hover:w-36">
      <svg
        className="absolute transition-transform duration-300 ease-in-out group-hover:-translate-x-12"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.5.2.8.4 1.2.8s.6.7.8 1.2c.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.5-.4.8-.8 1.2s-.7.6-1.2.8c-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.5-.2-.8-.4-1.2-.8s-.6-.7-.8-1.2c-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.5.4-.8.8-1.2s.7-.6 1.2-.8c.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 0 5.7 0 4.8.2 4.1.4c-.8.3-1.5.7-2.2 1.3S.7 2.9.4 3.7C.2 4.4 0 5.3 0 6.6 0 8 0 8.4 0 12s0 4 .1 5.4c.1 1.3.3 2.2.5 2.9.3.8.7 1.5 1.3 2.2s1.3 1 2.2 1.3c.7.2 1.6.4 2.9.5C8 24 8.4 24 12 24s4 0 5.4-.1c1.3-.1 2.2-.3 2.9-.5.8-.3 1.5-.7 2.2-1.3s1-1.3 1.3-2.2c.2-.7.4-1.6.5-2.9.1-1.4.1-1.8.1-5.4s0-4-.1-5.4c-.1-1.3-.3-2.2-.5-2.9-.3-.8-.7-1.5-1.3-2.2S21.1.7 20.3.4C19.6.2 18.7 0 17.4 0 16 0 15.6 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
      </svg>
      <span className="pl-16 pr-8 text-lg uppercase opacity-0 transition-opacity ease-in group-hover:opacity-100 group-hover:duration-700">
        Follow
      </span>
    </a>
  );
}
