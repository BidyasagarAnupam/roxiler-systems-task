import React, { useState } from 'react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/table";
import { Image, Button } from "@nextui-org/react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { Skeleton } from "@nextui-org/skeleton";
const TransactionComponent = ({
    transactionData,
    page,
    setPage,
    perPage,
    setPerPage,
    totalData,
    loading
}
) => {
    const columns = [
        {
            key: "id",
            label: "ID",
        },
        {
            key: "title",
            label: "TITLE",
        },
        {
            key: "description",
            label: "DESCRIPTION",
        },
        {
            key: "price",
            label: "PRICE",
        },
        {
            key: "category",
            label: "CATEGORY",
        },
        {
            key: "sold",
            label: "SOLD",
        },
        {
            key: "image",
            label: "IMAGE",
        },
    ];


    return (
        <div>
            <Table isStriped>
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                {
                    (
                        transactionData.length === 0 ? (
                            <TableBody emptyContent={"No data found"}>{[]}</TableBody>
                        ) : (
                            <TableBody items={transactionData}>
                                {
                                    (item) => (
                                        <TableRow key={item._id}>
                                            {
                                                (columnKey) => (
                                                    <TableCell className='relative'>
                                                        {
                                                            columnKey === "sold" ? getKeyValue(item, columnKey) ? "Yes" : "No" :
                                                                columnKey === "image" ? <Image src={getKeyValue(item, columnKey)} width={70} height={50} /> :
                                                                    columnKey === "description" ? (
                                                                        item.description.slice(0, 30) + "..."
                                                                    ) :
                                                                        columnKey === "title" ? (item.title.slice(0, 30) + "...") :

                                                                            getKeyValue(item, columnKey)
                                                        }
                                                    </TableCell>
                                                )
                                            }
                                        </TableRow>
                                    )}
                            </TableBody>
                        )
                    )

                }
            </Table>

            {
                transactionData.length > 0 && (
                    <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full p-6 mt-4 rounded-lg flex justify-between flex-col md:flex-row items-center gap-3 '>
                        <div>
                            {`Page No: ${page}/${Math.ceil(totalData / perPage)}`}
                        </div>
                        <div className=' flex gap-3'>
                            <Button
                                onClick={() => setPage(page - 1)}
                                disabled={page === 1}
                                variant="bordered"
                                startContent={<MdOutlineNavigateBefore />}>
                                Previous
                            </Button>
                            <Button
                                onClick={() => setPage(page + 1)}
                                color='primary'
                                disabled={Math.ceil(totalData / perPage) === page}
                                endContent={<MdOutlineNavigateNext />}
                            >
                                Next
                            </Button>

                        </div>
                        <div className='flex gap-2 items-center'>
                            Per page:
                            <select
                                value={perPage}
                                onChange={(e) => setPerPage(parseInt(e.target.value))}
                                className='border border-gray-300 rounded-md p-1'>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={20}>20</option>
                            </select>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default TransactionComponent