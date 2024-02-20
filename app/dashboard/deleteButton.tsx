import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteArtwork } from '@/lib/actions'

export default function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteArtwork.bind(null, id);
  return (
    <form className="w-1/5 py-1 text-center border-2 border-gray-300 bg-gray-300 rounded-lg text-lg font-bold cursor-pointer shadow-md transition-colors hover:bg-gray-400 hover:text-white focus:outline-none" action={deleteInvoiceWithId}>
      <button className="">
      ❌
      </button>
    </form>
  );
}