import React from 'react';
export const TableRow = ({children}) => {
    return (
        <tr className="hover:bg-[#f0f8ff] transition bg-white text-sm border-b border-b-gray-200">{children}</tr>
    )
}

export const TableCell = ({children}) => {
    return (
         <td className="px-4 py-2 max-w-[280px] truncate text-sm">{children}</td>
    )
}


export const Table = ({ tableHead, children }) => {
    return (

        <div className="overflow-x-auto  bg-white">
            <div className="overflow-x-auto">
                <table className="min-w-full  overflow-hidden bg-white">
                    <thead className="bg-gray-50">
                        <tr className="text-black ">
                            {tableHead?.map((data, key) => {
                                return (<th className={"px-2 py-3 font-semibold text-left min-w-[150px] text-sm"} key={key}>{data}</th>)
                            })}
                        </tr>
                    </thead>

                    <tbody className="text-gray-700">
                        {children}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

