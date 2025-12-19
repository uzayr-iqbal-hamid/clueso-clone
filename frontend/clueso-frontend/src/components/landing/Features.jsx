export default function Features() {
  const features = [
    {
      title: "AI Video Generation",
      desc: "Automatically turn raw recordings into polished videos.",
    },
    {
      title: "Step-by-step Docs",
      desc: "Generate help articles with screenshots and text.",
    },
    {
      title: "Auto Updates",
      desc: "Edit text and re-render videos instantly.",
    },
    {
      title: "Team Collaboration",
      desc: "Share projects and work together seamlessly.",
    },
  ];

  return (
    <section className="features">
      <h2>Everything you need to scale product education</h2>

      <div className="feature-grid">
        {features.map((f, idx) => (
          <div key={idx} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
