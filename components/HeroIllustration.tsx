"use client";
import {
  Shield,
  Lock,
  Cpu,
  KeyRound,
} from "lucide-react";

const rotationStyles = `
  @keyframes spin-y {
    from { transform: perspective(1000px) rotateX(18deg) rotateY(-18deg); }
    to { transform: perspective(1000px) rotateX(18deg) rotateY(342deg); }
  }
  .animate-spin-y {
    animation: spin-y 12s linear infinite;
  }
`;

export default function HeroIllustration() {
  return (
    <div className="relative flex h-[620px] w-[620px] -my-6 items-center justify-center overflow-visible bg-[#09090B]">
      <style>{rotationStyles}</style>

      {/* Structural Orbit Outlines */}
      <div className="absolute -left-24 top-10 h-[500px] w-[500px] rounded-full border border-[#2A2A31]/40" />
      <div className="absolute right-[-120px] top-28 h-[420px] w-[420px] rounded-full border border-[#2A2A31]/40" />
      <div className="absolute left-[90px] top-[40px] h-[460px] w-[460px] rotate-12 rounded-full border border-[#00C2AE]/5" />

      {/* Primary Teal Soft Ambient Underlays */}
      <div className="absolute h-[650px] w-[650px] rounded-full bg-[#00C2AE]/5 blur-[170px]" />
      <div className="absolute h-[520px] w-[520px] rounded-full bg-[#008A7C]/5 blur-[150px]" />

      {/* Workspace Area */}
      <div className="relative h-[520px] w-[520px]">

        {/* Vertical Base Light Ray */}
        <div className="absolute bottom-[72px] left-1/2 h-[210px] w-[140px] -translate-x-1/2 bg-gradient-to-t from-[#00C2AE]/15 via-[#00C2AE]/5 to-transparent blur-2xl" />

        {/* 3D Configured Orbit Rings */}
        <div
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2A2A31]"
          style={{ transform: "translate(-50%,-50%) rotateX(72deg) rotateZ(18deg)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00C2AE]/20 animate-spin"
          style={{
            animationDuration: "28s",
            transform: "translate(-50%,-50%) rotateX(72deg) rotateY(25deg)",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2A2A31]"
          style={{ transform: "translate(-50%,-50%) rotateX(70deg) rotateY(-30deg)" }}
        />

        {/* Node Points */}
        <div className="absolute left-[95px] top-[150px] h-2.5 w-2.5 rounded-full bg-[#00C2AE] shadow-[0_0_15px_#00C2AE]" />
        <div className="absolute right-[110px] top-[120px] h-2.5 w-2.5 rounded-full bg-[#14D8C2] shadow-[0_0_15px_#14D8C2]" />
        <div className="absolute left-[140px] bottom-[120px] h-2.5 w-2.5 rounded-full bg-[#008A7C] shadow-[0_0_15px_#008A7C]" />
        <div className="absolute right-[120px] bottom-[150px] h-2.5 w-2.5 rounded-full bg-[#00C2AE] shadow-[0_0_15px_#00C2AE]" />

        {/* SVG Network Interconnects */}
        <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 520 520">
          <path d="M130 170 C220 120 310 120 390 170" stroke="#2A2A31" strokeWidth="1" fill="none" />
          <path d="M140 350 C240 410 320 410 390 340" stroke="#2A2A31" strokeWidth="1" fill="none" />
        </svg>

        {/* Algorithm Modules (Strict Palette integration) */}

        {/* AES - Top Left */}
        <div
          className="absolute left-[70px] top-[90px] animate-[float_6s_ease-in-out_infinite]"
          style={{ transform: "perspective(1000px) rotateY(18deg) rotateX(8deg)" }}
        >
          <div className="rounded-xl border border-[#2A2A31] bg-[#16161A] px-6 py-5 shadow-xl">
            <Lock className="mb-2 text-[#00C2AE]" size={18} />
            <p className="text-[10px] font-medium tracking-widest text-[#8A8A94] uppercase">AES-256</p>
            <h3 className="text-base font-semibold text-[#F5F5F5]">Encryption</h3>
          </div>
        </div>

        {/* SHA - Top Right */}
        <div
          className="absolute right-[40px] top-[140px] animate-[float_7s_ease-in-out_infinite]"
          style={{ transform: "perspective(1000px) rotateY(-18deg)" }}
        >
          <div className="rounded-xl border border-[#2A2A31] bg-[#16161A] px-6 py-5 shadow-xl">
            <Cpu className="mb-2 text-[#00C2AE]" size={18} />
            <p className="text-[10px] font-medium tracking-widest text-[#8A8A94] uppercase">SHA-512</p>
            <h3 className="text-base font-semibold text-[#F5F5F5]">Hash Function</h3>
          </div>
        </div>

        {/* RSA - Bottom Left */}
        <div
          className="absolute left-[50px] bottom-[120px] animate-[float_8s_ease-in-out_infinite]"
          style={{ transform: "perspective(1000px) rotateY(18deg)" }}
        >
          <div className="rounded-xl border border-[#2A2A31] bg-[#16161A] px-6 py-5 shadow-xl">
            <KeyRound className="mb-2 text-[#00C2AE]" size={18} />
            <p className="text-[10px] font-medium tracking-widest text-[#8A8A94] uppercase">RSA</p>
            <h3 className="text-base font-semibold text-[#F5F5F5]">Asymmetric</h3>
          </div>
        </div>

        {/* ECC - Bottom Right */}
        <div
          className="absolute right-[60px] bottom-[90px] animate-[float_9s_ease-in-out_infinite]"
          style={{ transform: "perspective(1000px) rotateY(-18deg)" }}
        >
          <div className="rounded-xl border border-[#2A2A31] bg-[#16161A] px-6 py-5 shadow-xl">
            <Shield className="mb-2 text-[#00C2AE]" size={18} />
            <p className="text-[10px] font-medium tracking-widest text-[#8A8A94] uppercase">ECC</p>
            <h3 className="text-base font-semibold text-[#F5F5F5]">Elliptic Curve</h3>
          </div>
        </div>

        {/* Center Focal Core Glows */}
        <div className="absolute left-1/2 top-[180px] -translate-x-1/2">
          <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C2AE]/10 blur-[90px]" />
          <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008A7C]/5 blur-[120px]" />
        </div>

        {/* --- Rotating Floating Shield Node (Box constraints fixed) --- */}
        <div className="absolute left-1/2 top-[170px] -translate-x-1/2 animate-[float_6s_ease-in-out_infinite]">
          <div
            className="relative flex h-44 w-44 items-center justify-center rounded-full
                       border border-[#2A2A31] bg-[#16161A]
                       shadow-[0_0_50px_rgba(0,194,174,0.1)]
                       animate-spin-y"
          >
            {/* Geometric Concentric Rings within the core component boundary */}
            <div className="absolute inset-3 rounded-full border border-[#2A2A31]/50" />
            <div className="absolute inset-6 rounded-full border border-[#00C2AE]/10" />

            <Shield
              size={85}
              strokeWidth={1.5}
              className="text-[#00C2AE] drop-shadow-[0_0_20px_rgba(0,194,174,0.4)]"
            />
            <Lock
              size={28}
              strokeWidth={2}
              className="absolute text-[#F5F5F5] drop-shadow-[0_0_10px_rgba(245,245,245,0.3)]"
            />
          </div>
        </div>

      </div>

      {/* --- Platform Dock System --- */}
      <div className="absolute bottom-[45px] left-1/2 -translate-x-1/2">
        <div className="absolute left-1/2 top-4 h-24 w-48 -translate-x-1/2 rounded-full bg-[#00C2AE]/10 blur-[40px]" />
        <div className="h-7 w-52 rounded-full border border-[#2A2A31] bg-[#101013]" />
        <div className="absolute left-1/2 top-1.5 h-3 w-36 -translate-x-1/2 rounded-full border border-[#2A2A31] bg-[#16161A]" />
        <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-[#00C2AE] shadow-[0_0_15px_#00C2AE]" />
      </div>

    </div>
  );
}