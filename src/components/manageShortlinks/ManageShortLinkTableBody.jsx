import React, { useEffect } from 'react'
import { TableCell, TableRow } from '../UI/Table';
import { ArrowUpDownIcon } from '../../assets/SvgIcons';

const ManageShortLinkTableBody = ({ paginatedData, handleVerification }) => {

    return (
        <>
            {paginatedData?.map((item, key) => {
                const formattedDate = item?.createAt
                    ? new Date(item.createAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                    })
                    : null;
                return (
                    <TableRow key={item?.fb_id}>
                        <TableCell>{key + 1}</TableCell>
                        <TableCell>{formattedDate}</TableCell>
                        <TableCell>
                            {item?.verification == "approved" ? <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 border border-green-300">Approved</span> : item?.verification == "not-approved" ? <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-700 border border-red-300">Not Approved</span> :
                                <div className="w-full max-w-sm min-w-[200px]">
                                    <div className="relative">
                                        <select
                                            onChange={(e) => handleVerification(item?.fb_id, e.target.value)}
                                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none  hover:border-slate-400 focus:shadow-md appearance-none cursor-pointer">
                                            <option value="">Select</option>
                                            <option value="approved">Approved</option>
                                            <option value="not-approved">Not Approved</option>
                                        </select>
                                        <ArrowUpDownIcon className={'h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700'} />
                                    </div>
                                </div>}
                        </TableCell>
                        <TableCell>{item?.linkTitle ?? '-'}</TableCell>
                        <TableCell>{item?.originalUrl ? <a href={item?.originalUrl} target="_blank" className="text-blue-600">{item?.originalUrl}</a> : '-'}</TableCell>
                        <TableCell>{item?.clickCount ?? '-'}</TableCell>
                        <TableCell>{item?.trackingUrl ? <a href={item?.trackingUrl} target="_blank" className="text-blue-600">{item?.trackingUrl}</a> : '-'}</TableCell>
                        <TableCell>{item?.shortUrl ? <a href={item?.shortUrl} target="_blank" className="text-blue-600">{item?.shortUrl}</a> : '-'}</TableCell>
                    </TableRow>
                )
            })}
        </>
    )
}

export default ManageShortLinkTableBody