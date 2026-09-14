export default function PagePlaceholder({ title, description, icon, children }) {
  return (
    <div className="page">
      <header className="page-head">
        {icon && <div className="page-head-icon">{icon}</div>}
        <div>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
      </header>
      <div className="card" style={{ marginTop: 8 }}>
        <div className="placeholder">
          <div className="placeholder-title">{title}</div>
          <div className="placeholder-rule" />
          <p>{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}