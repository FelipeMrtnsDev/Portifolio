import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function TypingEffect() {
  const [text] = useTypewriter({
    words: ['Felipe Martins'],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <h1 className="text-7xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent drop-shadow-md">
      {text}
      <Cursor cursorColor="#fb923c" />
    </h1>
  );
}
