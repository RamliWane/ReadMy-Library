export default function EditButton({ id }) {
  return (
    <a href={`/editbook?id=${id}`}>
      <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Edit
      </button>
    </a>
  );
}
