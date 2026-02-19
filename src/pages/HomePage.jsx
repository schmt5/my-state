import { Link } from "react-router-dom";
import "./HomePage.css";

export function HomePage() {
  const machines = [
    {
      id: "toggle",
      name: "Toggle Machine",
      description:
        "A simple on/off toggle demonstrating basic state transitions",
      path: "/toggle",
      icon: "🔄",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },

    {
      id: "traffic-light",
      name: "Traffic Light Machine",
      description: "Cyclical state flow: green → yellow → red → green",
      path: "/traffic-light",
      icon: "🚦",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">XState v5 Machine Examples</h1>
        <p className="home-subtitle">
          Interactive examples demonstrating XState state machines with
          real-time visualization
        </p>
        <div className="info-banner">
          💡 Click on any machine and use the{" "}
          <strong>"Open Stately Inspector"</strong> button to open real-time
          visualization in a new tab!
        </div>
      </header>

      <main className="machines-grid">
        {machines.map((machine) => (
          <Link
            key={machine.id}
            to={machine.path}
            className="machine-card"
            style={{ "--card-gradient": machine.color }}
          >
            <div className="machine-icon">{machine.icon}</div>
            <h2 className="machine-name">{machine.name}</h2>
            <p className="machine-description">{machine.description}</p>
            <div className="machine-cta">Explore →</div>
          </Link>
        ))}
      </main>

      <footer className="home-footer">
        <div className="footer-section">
          <h3>📊 Visualization Options</h3>
          <ul>
            <li>
              <strong>Inspector Window:</strong> Click the "Open Stately
              Inspector" button on any machine page to open real-time state
              diagrams in a new tab
            </li>
            <li>
              <strong>Stately Studio:</strong> Copy machine code and paste at{" "}
              <a
                href="https://stately.ai/studio"
                target="_blank"
                rel="noopener noreferrer"
              >
                stately.ai/studio
              </a>
            </li>
            <li>
              <strong>VS Code Extension:</strong> Install "XState" extension for
              in-editor visualization
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>📚 Learn More</h3>
          <div className="footer-links">
            <a
              href="https://stately.ai/docs/inspector"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inspector Docs
            </a>
            <a
              href="https://stately.ai/docs/xstate"
              target="_blank"
              rel="noopener noreferrer"
            >
              XState Docs
            </a>
            <a
              href="https://stately.ai/studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stately Studio
            </a>
            <a
              href="https://discord.gg/xstate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord Community
            </a>
          </div>
        </div>

        <p className="footer-note">
          💡 Click on any machine card above to see it in action! Use the
          inspector button to open a new tab with real-time state visualization.
        </p>
      </footer>
    </div>
  );
}
