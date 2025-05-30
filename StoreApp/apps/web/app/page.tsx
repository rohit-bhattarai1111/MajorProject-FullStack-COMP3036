import { greet } from '@repo/utils/messages';

export default function Home() {
  return (
    <div>
      {greet("world")}
    </div>
  );
}