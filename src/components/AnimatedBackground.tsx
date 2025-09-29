export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900"></div>
      <div className="animated-ball"></div>
      <div className="animated-ball"></div>
      <div className="animated-ball"></div>
      <div className="animated-ball"></div>
      <div className="animated-ball"></div>
      <div className="animated-ball"></div>
      <div className="animated-ball"></div>
      <div className="animated-ball"></div>
    </div>
  );
}
