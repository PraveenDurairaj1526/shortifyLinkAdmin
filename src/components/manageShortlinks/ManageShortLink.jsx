import { useEffect, useState } from "react";
import { Table, TableCell, TableRow } from "../UI/Table";
import { useDispatch, useSelector } from "react-redux";
import { getLinkFromFirebase, updateVerification } from "../../slice/shortLinkSlice";
import Pagination from "../UI/Pagination";
import cx from 'classnames';
import ManageShortLinkTableBody from "./ManageShortLinkTableBody";
import notFoundImg from '../../assets/no-data.gif';

const ITEMS_PER_PAGE = 10;

export default function ManageShortLink() {
    const { shortLinks, loading } = useSelector((state) => state?.shortLinks)
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);
    const [tab, setTab] = useState('allLinks')

    const handleVerificationChange = (id, value) => {
        dispatch(updateVerification({ id, value }));
    };

    const startIndex = currentPage * ITEMS_PER_PAGE;

    const filteredShortLinks = tab == 'allLinks' ? shortLinks : shortLinks.filter((item) => !item?.verification)
    const unverifiedLinkCount = shortLinks.filter((item) => !item?.verification)

    const paginatedData = filteredShortLinks.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    useEffect(() => {
        dispatch(getLinkFromFirebase());
    }, [dispatch]);


    const tableHead = ['No', 'Date', "verification", "Link Title", "Original Link", "Click Count", "Track Link", "short Link",]

    return (
        <div className="rounded-t-4xl">

            {loading ? <div className="flex justify-center items-center py-10 min-h-[500px]">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
            </div> : <>
                <div className="rounded-xl border border-gray-200 bg-white">
                    <div className="p-5 border-b border-b-gray-200 flex gap-3 justify-between items-end flex-wrap">
                        <div>
                            <h2 className="font-semibold text-xl mb-1.5">Short Link Management</h2>
                            <p className='text-sm text-gray-700'>Review and manage all generated links and performance metrics.</p>
                        </div>
                        <div className="p-1 rounded-md bg-gray-100 flex gap-3">
                            <button className={cx("py-1 px-3 rounded-md cursor-pointer", tab == 'allLinks' ? 'text-blue-600 bg-white' : 'text-gray-700')} onClick={() => setTab("allLinks")}>
                                All
                            </button>
                            <div className={cx("py-1 px-3 rounded-md flex gap-1.5 items-center cursor-pointer", tab == 'unverifiedLinks' ? 'text-blue-600 bg-white' : 'text-gray-700')} onClick={() => setTab("unverifiedLinks")}>
                                <span>Pending Review</span>
                                {unverifiedLinkCount.length > 0 && <span className="rounded-full p-1 flex justify-center items-center text-white bg-red-600 text-xs w-5 h-5">{unverifiedLinkCount.length}</span>}
                            </div>
                        </div>
                    </div>
                    <Table tableHead={tableHead} >
                        <ManageShortLinkTableBody paginatedData={paginatedData} handleVerification={handleVerificationChange} />
                    </Table>
                    {filteredShortLinks.length == 0 && <div className="flex justify-between items-center min-h-[400px]"><img src={notFoundImg} className="w-[200px] h-[200px] mx-auto" /></div>}
                    {filteredShortLinks.length > 10 &&
                        <div className="p-5">
                            <Pagination
                                totalItems={filteredShortLinks.length}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={setCurrentPage}
                            />
                        </div>}
                </div>
            </>}
        </div>
    );
}
