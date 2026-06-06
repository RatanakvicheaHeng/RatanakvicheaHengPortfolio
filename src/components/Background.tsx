export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden gradient-mesh">
      {/* Animated ambient blobs */}
      <div
        className="absolute animate-morph animate-pulse-glow"
        style={{
          width: '600px',
          height: '600px',
          top: '-150px',
          left: '-100px',
          background: 'radial-gradient(ellipse, rgba(41,151,255,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animationDuration: '14s',
        }}
      />
      <div
        className="absolute animate-float"
        style={{
          width: '500px',
          height: '500px',
          top: '20%',
          right: '-80px',
          background: 'radial-gradient(ellipse, rgba(100,210,255,0.07) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animationDuration: '11s',
        }}
      />
      <div
        className="absolute animate-float-reverse"
        style={{
          width: '700px',
          height: '400px',
          bottom: '10%',
          left: '15%',
          background: 'radial-gradient(ellipse, rgba(41,80,220,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDuration: '16s',
        }}
      />
      <div
        className="absolute animate-morph"
        style={{
          width: '350px',
          height: '350px',
          bottom: '20%',
          right: '20%',
          background: 'radial-gradient(ellipse, rgba(0,200,160,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animationDuration: '10s',
          animationDelay: '-4s',
        }}
      />

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
}
