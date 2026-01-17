import { useEffect, useState } from "react";
import { Table, TableCell, TableRow } from "./UI/Table";
import { useDispatch, useSelector } from "react-redux";
import { getLinkFromFirebase, updateVerification } from "../slice/shortLinkSlice";
import Pagination from "./UI/Pagination";
const ITEMS_PER_PAGE = 10;

export default function ManageShortLink() {
    const { shortLinks, loading } = useSelector((state) => state?.shortLinks)
    const dispatch = useDispatch();
        const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        dispatch(getLinkFromFirebase());
    }, [dispatch]);

    const handleVerificationChange = (id, value) => {
        dispatch(updateVerification({ id, value }));
    };

      const startIndex = currentPage * ITEMS_PER_PAGE;
    const paginatedData = shortLinks.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );


    const tableHead = ['No', 'Date', "Link Title", "Original Link", "Click Count", "verification", "Track Link", "short Link",]
    return (
        <div className=" p-4 sm:p-6 -mt-6 rounded-t-4xl bg-[#f0f8ff]">
            {loading ? <div className="flex justify-center items-center py-10 min-h-[500px]">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
            </div> : <>

                <h2 className="font-semibold text-xl mb-6">Manage Short Link</h2>
                <Table tableHead={tableHead}>
                    {paginatedData?.map((item, key) => {
                        const formattedDate = item?.createAt
                            ? item.createAt?.toDate()?.toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric"
                            })
                            : null;
                        return (
                            <TableRow>
                                <TableCell>{key + 1}</TableCell>
                                <TableCell>{formattedDate}</TableCell>
                                <TableCell>{item?.linkTitle ?? '-'}</TableCell>
                                <TableCell>{item?.originalUrl ? <a href={item?.originalUrl} target="_blank" className="text-blue-600">{item?.originalUrl}</a> : '-'}</TableCell>
                                <TableCell>{item?.clickCount ?? '-'}</TableCell>
                                <TableCell>
                                    {item?.verification == "approved" ? <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 border border-green-300">Approved</span> : item?.verification == "not-approved" ? <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-700 border border-red-300">Not Approved</span> :
                                        <div class="w-full max-w-sm min-w-[200px]">
                                            <div class="relative">
                                                <select
                                                    onChange={(e) => handleVerificationChange(item?.fb_id, e.target.value)}
                                                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none  hover:border-slate-400 focus:shadow-md appearance-none cursor-pointer">
                                                    <option value="">Select</option>
                                                    <option value="approved">Approved</option>
                                                    <option value="not-approved">Not Approved</option>
                                                </select>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                                </svg>
                                            </div>
                                        </div>
                                    }</TableCell>
                                <TableCell>{item?.trackingUrl ? <a href={item?.trackingUrl} target="_blank" className="text-blue-600">{item?.trackingUrl}</a> : '-'}</TableCell>
                                <TableCell>{item?.shortUrl ? <a href={item?.shortUrl} target="_blank" className="text-blue-600">{item?.shortUrl}</a> : '-'}</TableCell>
                            </TableRow>
                        )
                    })}
                </Table>
            </>}
             <Pagination
                totalItems={shortLinks.length}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}
