import { useState } from "react";
import { ScanLine, CheckCircle, XCircle, AlertTriangle, Camera } from "lucide-react";

type ScanResult = null | "success" | "denied" | "duplicate";

const Scanner = () => {
  const [result, setResult] = useState<ScanResult>(null);
  const [scanning, setScanning] = useState(false);

  const simulateScan = (type: ScanResult) => {
    setScanning(true);
    setResult(null);
    setTimeout(() => {
      setScanning(false);
      setResult(type);
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-lg text-center">
        <div className="flex items-center gap-3 justify-center mb-8">
          <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
            <ScanLine className="w-5 h-5 text-accent-foreground" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            QR Code Scanner
          </h1>
        </div>

        {/* Camera viewfinder mockup */}
        <div className="bg-card rounded-2xl shadow-elevated border border-border overflow-hidden mb-6">
          <div className="aspect-square max-h-80 bg-foreground/5 relative flex items-center justify-center">
            {scanning ? (
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 border-4 border-accent rounded-lg animate-pulse" />
                <p className="text-muted-foreground text-sm animate-pulse">Scanning...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <Camera className="w-16 h-16 text-muted-foreground/40" />
                <p className="text-muted-foreground text-sm">
                  Point camera at QR code
                </p>
              </div>
            )}
            {/* Corner markers */}
            <div className="absolute top-6 left-6 w-10 h-10 border-t-3 border-l-3 border-accent rounded-tl-lg" />
            <div className="absolute top-6 right-6 w-10 h-10 border-t-3 border-r-3 border-accent rounded-tr-lg" />
            <div className="absolute bottom-6 left-6 w-10 h-10 border-b-3 border-l-3 border-accent rounded-bl-lg" />
            <div className="absolute bottom-6 right-6 w-10 h-10 border-b-3 border-r-3 border-accent rounded-br-lg" />
          </div>
        </div>

        {/* Scan Result */}
        {result && (
          <div
            className={`rounded-2xl p-6 mb-6 border ${
              result === "success"
                ? "bg-success/10 border-success/30"
                : result === "duplicate"
                ? "bg-warning/10 border-warning/30"
                : "bg-destructive/10 border-destructive/30"
            }`}
          >
            {result === "success" && (
              <div className="flex flex-col items-center gap-2">
                <CheckCircle className="w-12 h-12 text-success" />
                <h3 className="font-heading text-xl font-bold text-success">Entry Allowed</h3>
                <p className="text-sm text-muted-foreground">John Doe — TechFest 2026</p>
              </div>
            )}
            {result === "denied" && (
              <div className="flex flex-col items-center gap-2">
                <XCircle className="w-12 h-12 text-destructive" />
                <h3 className="font-heading text-xl font-bold text-destructive">Entry Denied</h3>
                <p className="text-sm text-muted-foreground">Invalid or unregistered QR code</p>
              </div>
            )}
            {result === "duplicate" && (
              <div className="flex flex-col items-center gap-2">
                <AlertTriangle className="w-12 h-12 text-warning" />
                <h3 className="font-heading text-xl font-bold text-warning">Duplicate Scan</h3>
                <p className="text-sm text-muted-foreground">This QR code has already been scanned</p>
              </div>
            )}
          </div>
        )}

        {/* Demo buttons */}
        <p className="text-xs text-muted-foreground mb-3">Simulate scan result (demo):</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => simulateScan("success")}
            disabled={scanning}
            className="px-5 py-2.5 rounded-xl bg-success text-success-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            ✅ Valid
          </button>
          <button
            onClick={() => simulateScan("denied")}
            disabled={scanning}
            className="px-5 py-2.5 rounded-xl bg-destructive text-destructive-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            ❌ Invalid
          </button>
          <button
            onClick={() => simulateScan("duplicate")}
            disabled={scanning}
            className="px-5 py-2.5 rounded-xl bg-warning text-warning-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            ⚠️ Duplicate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scanner;
