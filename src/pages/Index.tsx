import { Link } from "react-router-dom";
import { QrCode, ScanLine, Shield, Users, CalendarCheck, BarChart3, ArrowRight } from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "QR Registration",
    desc: "Participants register and receive a unique QR code instantly.",
  },
  {
    icon: ScanLine,
    title: "Instant Scanning",
    desc: "Scan QR codes at the entry gate for real-time verification.",
  },
  {
    icon: Shield,
    title: "Duplicate Prevention",
    desc: "Automatic detection and alerts for duplicate scan attempts.",
  },
  {
    icon: Users,
    title: "Live Attendance",
    desc: "Track live entry count and attendance in real-time.",
  },
  {
    icon: CalendarCheck,
    title: "Event Management",
    desc: "Create and manage multiple events from one dashboard.",
  },
  {
    icon: BarChart3,
    title: "Reports & Export",
    desc: "Download registration and attendance reports as CSV/PDF.",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground/90 text-sm font-medium mb-6">
            <QrCode className="w-4 h-4" />
            College Event Management
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Smart Entry Management
            <br />
            <span className="text-accent">with QR Codes</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Streamline event registration, automate entry verification, and track
            attendance in real-time — all in one system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 gradient-accent text-accent-foreground px-8 py-3.5 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-elevated"
            >
              Register Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/admin/login"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 px-8 py-3.5 rounded-xl font-semibold text-lg hover:bg-primary-foreground/20 transition-colors"
            >
              Admin Panel
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A complete event entry system designed for speed, security, and simplicity.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow border border-border"
              >
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
            Ready to streamline your event?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Start managing your college event entries with a modern, QR-based system.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 gradient-accent text-accent-foreground px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-elevated"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
