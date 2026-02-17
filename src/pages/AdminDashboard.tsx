import { useState } from "react";
import {
  Users,
  CalendarCheck,
  ScanLine,
  AlertTriangle,
  Download,
  Plus,
  Search,
} from "lucide-react";

const stats = [
  { label: "Total Registrations", value: "1,247", icon: Users, color: "gradient-accent" },
  { label: "Active Events", value: "5", icon: CalendarCheck, color: "gradient-primary" },
  { label: "Entries Today", value: "342", icon: ScanLine, color: "gradient-accent" },
  { label: "Duplicate Alerts", value: "8", icon: AlertTriangle, color: "bg-warning" },
];

const mockRegistrations = [
  { id: "EG-A1B2C3", name: "Aarav Sharma", college: "CSE2024001", event: "TechFest 2026", status: "Entered", time: "10:32 AM" },
  { id: "EG-D4E5F6", name: "Priya Patel", college: "ECE2024015", event: "TechFest 2026", status: "Registered", time: "—" },
  { id: "EG-G7H8I9", name: "Rohan Gupta", college: "ME2024008", event: "Hackathon 3.0", status: "Entered", time: "11:15 AM" },
  { id: "EG-J1K2L3", name: "Sneha Reddy", college: "CSE2024022", event: "Cultural Night", status: "Duplicate", time: "09:45 AM" },
  { id: "EG-M4N5O6", name: "Vikram Singh", college: "IT2024003", event: "Workshop: AI & ML", status: "Entered", time: "10:58 AM" },
  { id: "EG-P7Q8R9", name: "Ananya Joshi", college: "CSE2024019", event: "Sports Meet", status: "Registered", time: "—" },
];

const mockEvents = [
  { name: "TechFest 2026", date: "Mar 15, 2026", registered: 520, entered: 198 },
  { name: "Cultural Night", date: "Mar 18, 2026", registered: 310, entered: 82 },
  { name: "Hackathon 3.0", date: "Mar 20, 2026", registered: 180, entered: 45 },
  { name: "Sports Meet", date: "Mar 22, 2026", registered: 150, entered: 0 },
  { name: "Workshop: AI & ML", date: "Mar 25, 2026", registered: 87, entered: 17 },
];

const statusBadge = (status: string) => {
  switch (status) {
    case "Entered":
      return "bg-success/10 text-success";
    case "Registered":
      return "bg-accent/10 text-accent";
    case "Duplicate":
      return "bg-warning/10 text-warning";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const AdminDashboard = () => {
  const [tab, setTab] = useState<"registrations" | "events">("registrations");
  const [search, setSearch] = useState("");

  const filteredRegs = mockRegistrations.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.id.toLowerCase().includes(search.toLowerCase()) ||
      r.college.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground text-sm mt-1">Event management overview</p>
          </div>
          <div className="flex gap-3">
            <button className="inline-flex items-center gap-2 gradient-accent text-accent-foreground px-5 py-2.5 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity">
              <Plus className="w-4 h-4" />
              Create Event
            </button>
            <button className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-secondary transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-card rounded-2xl p-5 shadow-card border border-border">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center`}>
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <p className="font-heading text-2xl font-bold text-card-foreground">{s.value}</p>
              <p className="text-muted-foreground text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
          <div className="flex border-b border-border">
            <button
              onClick={() => setTab("registrations")}
              className={`px-6 py-3.5 text-sm font-medium transition-colors ${
                tab === "registrations"
                  ? "text-accent border-b-2 border-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Registrations
            </button>
            <button
              onClick={() => setTab("events")}
              className={`px-6 py-3.5 text-sm font-medium transition-colors ${
                tab === "events"
                  ? "text-accent border-b-2 border-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Events
            </button>
          </div>

          {tab === "registrations" && (
            <div>
              <div className="p-4 border-b border-border">
                <div className="relative max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by name, ID, or college..."
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    maxLength={100}
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-muted-foreground border-b border-border">
                      <th className="px-4 py-3 font-medium">Reg ID</th>
                      <th className="px-4 py-3 font-medium">Name</th>
                      <th className="px-4 py-3 font-medium hidden sm:table-cell">College ID</th>
                      <th className="px-4 py-3 font-medium hidden md:table-cell">Event</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                      <th className="px-4 py-3 font-medium hidden lg:table-cell">Entry Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRegs.map((r) => (
                      <tr key={r.id} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                        <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{r.id}</td>
                        <td className="px-4 py-3 font-medium text-card-foreground">{r.name}</td>
                        <td className="px-4 py-3 hidden sm:table-cell text-muted-foreground">{r.college}</td>
                        <td className="px-4 py-3 hidden md:table-cell text-muted-foreground">{r.event}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${statusBadge(r.status)}`}>
                            {r.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 hidden lg:table-cell text-muted-foreground">{r.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === "events" && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-muted-foreground border-b border-border">
                    <th className="px-4 py-3 font-medium">Event Name</th>
                    <th className="px-4 py-3 font-medium">Date</th>
                    <th className="px-4 py-3 font-medium">Registered</th>
                    <th className="px-4 py-3 font-medium">Entered</th>
                    <th className="px-4 py-3 font-medium">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {mockEvents.map((ev) => (
                    <tr key={ev.name} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                      <td className="px-4 py-3 font-medium text-card-foreground">{ev.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{ev.date}</td>
                      <td className="px-4 py-3 text-muted-foreground">{ev.registered}</td>
                      <td className="px-4 py-3 text-muted-foreground">{ev.entered}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
                            <div
                              className="h-full gradient-accent rounded-full transition-all"
                              style={{ width: `${(ev.entered / ev.registered) * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {Math.round((ev.entered / ev.registered) * 100)}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
