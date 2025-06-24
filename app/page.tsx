export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Supervision AI</h1>
      <p>Enter a description and generate a video using AI.</p>
      <form>
        <input
          type="text"
          placeholder="Describe your scene (e.g. A man walking in the rain)"
          style={{
            padding: '0.5rem',
            width: '100%',
            maxWidth: '400px',
            marginBottom: '1rem',
          }}
        />
        <br />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Generate Video
        </button>
      </form>
    </main>
  );
}
