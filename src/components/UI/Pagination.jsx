import ReactPaginate from "react-paginate";

export default function Pagination({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
}) {
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    return (
        <ReactPaginate
            previousLabel="←"
            nextLabel="→"
            breakLabel="..."
            pageCount={pageCount}
            forcePage={currentPage}
            onPageChange={(e) => onPageChange(e.selected)}
            containerClassName="flex items-center justify-center gap-2 mt-6 flex-wrap"
            pageClassName="px-2 py-1 border rounded cursor-pointer text-[12px]"
            activeClassName="bg-blue-600 border border-blue-600 text-white"
            previousClassName="px-2 py-1 border rounded text-[12px]"
            nextClassName="px-2 py-1 border rounded text-[12px]"
            disabledClassName="opacity-50 cursor-not-allowed"
        />
    );
}
