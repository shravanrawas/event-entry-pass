import { useLocation, useParams, Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { Download, ArrowLeft, CheckCircle } from "lucide-react";

const QRDisplay = () => {
  const { regId } = useParams();
  const location = useLocation();
  const state = location.state as {
    name: string;
    collegeId: string;
    event: string;
    mobile: string;
    regId: string;
  } | null;

  const qrData = JSON.stringify({
    regId,
    name: state?.name || "Unknown",
    collegeId: state?.collegeId || "",
    event: state?.event || "",
  });

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md text-center">
        <div className="bg-card rounded-2xl shadow-elevated border border-border p-8">
          <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-success" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-card-foreground mb-1">
            Registration Successful!
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            Show this QR code at the event entrance
          </p>

          <div className="bg-background rounded-xl p-6 inline-block mb-6 border border-border">
            <QRCodeSVG
              value={qrData}
              size={200}
              level="H"
              includeMargin
              bgColor="transparent"
              fgColor="hsl(220, 65%, 18%)"
            />
          </div>

          <div className="text-left space-y-2 bg-secondary rounded-xl p-4 mb-6">
            <p className="text-sm">
              <span className="text-muted-foreground">Registration ID:</span>{" "}
              <span className="font-semibold text-secondary-foreground">{regId}</span>
            </p>
            {state && (
              <>
                <p className="text-sm">
                  <span className="text-muted-foreground">Name:</span>{" "}
                  <span className="font-semibold text-secondary-foreground">{state.name}</span>
                </p>
                <p className="text-sm">
                  <span className="text-muted-foreground">Event:</span>{" "}
                  <span className="font-semibold text-secondary-foreground">{state.event}</span>
                </p>
                <p className="text-sm">
                  <span className="text-muted-foreground">College ID:</span>{" "}
                  <span className="font-semibold text-secondary-foreground">{state.collegeId}</span>
                </p>
              </>
            )}
          </div>

          <div className="flex gap-3">
            <Link
              to="/register"
              className="flex-1 inline-flex items-center justify-center gap-2 border border-border text-card-foreground px-4 py-2.5 rounded-xl font-medium hover:bg-secondary transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              New Registration
            </Link>
            <button
              onClick={() => window.print()}
              className="flex-1 inline-flex items-center justify-center gap-2 gradient-accent text-accent-foreground px-4 py-2.5 rounded-xl font-medium hover:opacity-90 transition-opacity text-sm"
            >
              <Download className="w-4 h-4" />
              Save / Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRDisplay;
