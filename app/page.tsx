export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Supervision AI</h1>
      <p className="text-lg mb-6">Enter a description and generate a video using AI.</p>
      <form className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Describe your scene (e.g. A man walking in the rain)"
          className="w-full p-3 rounded border border-gray-300"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
        >
          Generate Video
        </button>
      </form>
    </main>
  );
}
