export default function Home() {
  return (
    <main style={{ padding: 32, maxWidth: 720, margin: "0 auto" }}>
      <h1>Capsule</h1>
      <p>Your meeting recorder cum AI notemaker.</p>
      <a href="/auth" style={{ padding: "10px 14px", border: "1px solid #000", textDecoration: "none" }}>
        Sign in with Google
      </a>
    </main>
  );
}
