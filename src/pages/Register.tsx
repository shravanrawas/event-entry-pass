import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";

const events = [
  "TechFest 2026",
  "Cultural Night",
  "Hackathon 3.0",
  "Sports Meet",
  "Workshop: AI & ML",
];

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    collegeId: "",
    event: "",
    mobile: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.collegeId.trim()) e.collegeId = "College ID is required";
    if (!form.event) e.event = "Select an event";
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = "Enter a valid 10-digit number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Generate a mock registration ID
    const regId = `EG-${Date.now().toString(36).toUpperCase()}`;
    navigate(`/qr/${regId}`, { state: { ...form, regId } });
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition ${
      errors[field] ? "border-destructive" : "border-border"
    }`;

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-elevated border border-border p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
              <UserPlus className="w-5 h-5 text-accent-foreground" />
            </div>
            <h1 className="font-heading text-2xl font-bold text-card-foreground">
              Event Registration
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className={inputClass("name")}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-1.5">
                College ID
              </label>
              <input
                type="text"
                placeholder="CSE2024001"
                className={inputClass("collegeId")}
                value={form.collegeId}
                onChange={(e) => setForm({ ...form, collegeId: e.target.value })}
                maxLength={50}
              />
              {errors.collegeId && <p className="text-destructive text-xs mt-1">{errors.collegeId}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-1.5">
                Event
              </label>
              <select
                className={inputClass("event")}
                value={form.event}
                onChange={(e) => setForm({ ...form, event: e.target.value })}
              >
                <option value="">Select an event</option>
                {events.map((ev) => (
                  <option key={ev} value={ev}>{ev}</option>
                ))}
              </select>
              {errors.event && <p className="text-destructive text-xs mt-1">{errors.event}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-1.5">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="9876543210"
                className={inputClass("mobile")}
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value.replace(/\D/g, "").slice(0, 10) })}
              />
              {errors.mobile && <p className="text-destructive text-xs mt-1">{errors.mobile}</p>}
            </div>

            <button
              type="submit"
              className="w-full gradient-accent text-accent-foreground py-3.5 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity mt-2"
            >
              Register & Get QR Code
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
