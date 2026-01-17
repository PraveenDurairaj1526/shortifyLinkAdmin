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
            previousLabel="← Prev"
            nextLabel="Next →"
            breakLabel="..."
            pageCount={pageCount}
            forcePage={currentPage}
            onPageChange={(e) => onPageChange(e.selected)}
            containerClassName="flex items-center justify-center gap-2 mt-6"
            pageClassName="px-3 py-1 border rounded cursor-pointer"
            activeClassName="bg-blue-600 text-white"
            previousClassName="px-3 py-1 border rounded"
            nextClassName="px-3 py-1 border rounded"
            disabledClassName="opacity-50 cursor-not-allowed"
        />
    );
}
