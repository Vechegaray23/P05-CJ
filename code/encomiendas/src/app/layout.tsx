import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>Sistema de Gestión de Encomiendas</title>
      </head>
      <body>
        <header style={{ padding: "1rem", textAlign: "center", background: "#eee" }}>
          <h1>Gestión de Encomiendas</h1>
          <nav>
            <a href="/">Inicio</a> | <a href="/encomiendas">Encomiendas</a>
          </nav>
        </header>
        {children}
        <footer style={{ padding: "1rem", textAlign: "center", background: "#eee" }}>
          © 2025 Mi Sistema de Encomiendas
        </footer>
      </body>
    </html>
  );
}
