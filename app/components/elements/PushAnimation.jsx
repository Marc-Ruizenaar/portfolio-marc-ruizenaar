export default function PushAnimation() {
  return (
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mainGreen opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600"></span>
      </span>
  );
}
