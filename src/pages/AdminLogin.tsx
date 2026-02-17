import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login
    if (email && password) {
      navigate("/admin/dashboard");
    } else {
      setError("Please enter credentials");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition";

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-sm">
        <div className="bg-card rounded-2xl shadow-elevated border border-border p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-3">
              <Shield className="w-7 h-7 text-primary-foreground" />
            </div>
            <h1 className="font-heading text-2xl font-bold text-card-foreground">Admin Login</h1>
            <p className="text-muted-foreground text-sm mt-1">Access the event dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-1.5">Email</label>
              <input
                type="email"
                placeholder="admin@college.edu"
                className={inputClass}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-1.5">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className={inputClass}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-destructive text-xs">{error}</p>}
            <button
              type="submit"
              className="w-full gradient-primary text-primary-foreground py-3.5 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>
          </form>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Demo: Enter any credentials to proceed
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
