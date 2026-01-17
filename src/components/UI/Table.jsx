import React from 'react';
export const TableRow = ({children}) => {
    return (
        <tr class="hover:bg-[#f0f8ff] transition bg-white text-sm">{children}</tr>
    )
}

export const TableCell = ({children}) => {
    return (
         <td class="px-4 py-2 max-w-[280px] truncate text-sm">{children}</td>
    )
}


export const Table = ({ tableHead, children }) => {
    return (

        <div class="overflow-x-auto  bg-white rounded-2xl">
            <div class="overflow-x-auto">
                <table class="min-w-full  overflow-hidden bg-white">
                    <thead class="bg-gray-100/80">
                        <tr class="text-black ">
                            {tableHead?.map((data, key) => {
                                return (<th class="px-2 py-3 font-semibold text-left min-w-[150px] text-sm" key={key}>{data}</th>)
                            })}
                        </tr>
                    </thead>

                    <tbody class="text-gray-700">
                        {children}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

