export default function EditButton({ id }) {
  return (
    <a href={`/editbook?id=${id}`}>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Edit
      </button>
    </a>
  );
}
