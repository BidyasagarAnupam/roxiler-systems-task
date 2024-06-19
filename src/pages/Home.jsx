import React, { useEffect, useState } from 'react'
import { getCombinedData } from '../services/operations/combineAPI'
import { IoSearch } from "react-icons/io5";
import {
  Input, Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button
} from '@nextui-org/react';
import { Card, CardBody } from "@nextui-org/card";
import { FaAngleDown } from "react-icons/fa6";
import TransactionComponent from '../components/TransactionComponent';
import TransactionChart from '../components/TransactionChart';

const Home = () => {
  const [search, setSearch] = useState('')
  const [month, setMonth] = useState('March')
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [totalData, setTotalData] = useState(0)
  const [transactionData, setTransactionData] = useState([])
  const [statistics, setStatistics] = useState({})
  const [priceRange, setPriceRange] = useState([])
  const [loading, setLoading] = useState(false)

  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  const items = months.map((month) => ({ key: month, label: month }));



  const fetchCombinedData = async () => {
    // fetch combined data
    setLoading(true)
    const result = await getCombinedData(search, page, perPage, month)
    console.log("result", result)
    if (result) {
      setTransactionData(result?.transactions?.data[0]?.data)
      setStatistics(result?.statistics)
      setPriceRange(result?.priceRange)
      setTotalData(result?.transactions?.total)
    }
    setLoading(false)
  }

  useEffect(() => {
    setPage(1)
    setSearch('')
  }, [month])

  useEffect(() => {
    if (!search) {
      fetchCombinedData();
    }


  }, [page, perPage, month, search])



  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setPage(1)
      fetchCombinedData();
    }
  };

  return (
    <div className='h-full w-[90%] mx-auto my-16 bg-white rounded-xl px-5 py-5'>
      <p className='text-3xl font-semibold text-[#488BF2]'>Roxiler Systems</p>

      {/* search filter */}
      <div className='mt-4'>
        <p className='text-xl font-semibold text-[#488BF2] text-center'>Transaction Dashboard</p>
        <div className='flex justify-between flex-col gap-3 md:flex-row w-[80%] mx-auto my-3 '>
          <div className='w-full md:w-[40%]'>
            <Input
              isClearable
              isDisabled={loading}
              radius="lg"
              onKeyDown={handleKeyPress}
              value={search}
              onValueChange={setSearch}
              classNames={{
                label: "text-black/50 dark:text-white/90",
                inputWrapper: [
                  "!cursor-text",
                ],
              }}
              placeholder="Type and 'Press Enter' to search..."
              startContent={
                <IoSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
          <div>
            <Dropdown>
              <DropdownTrigger className=''>
                <Button
                  isDisabled={loading}
                  variant="bordered"
                  className="capitalize px-9 py-3 flex gap-6 w-full md:w-fit"
                >
                  {month}
                  <FaAngleDown />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={month}
                onAction={(key) => setMonth(key)}
              >
                {items.map((item) => (
                  <DropdownItem
                    key={item.key}
                  >
                    {item.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>

        </div>
      </div>

      {/* Table */}
      <TransactionComponent
        page={page}
        transactionData={transactionData}
        setPage={setPage}
        perPage={perPage}
        setPerPage={setPerPage}
        totalData={totalData}
        loading={loading}
      />

      {/* Statistics */}
      <div className='mt-14 flex flex-col items-center'>
        <p className='text-xl font-semibold text-[#488BF2] mb-3'>{`Statistics of : "${month}"`}</p>

        <Card className="max-w-[250px]">
          <CardBody>
            <p>{`Total Sale: ₹${statistics?.totalSalesAmount !== undefined ? statistics?.totalSalesAmount.toFixed(2) : 0}`}</p>
            <p>{`Total Sold Items: ${statistics?.totalSoldItems ?? 0}`}</p>
            <p>{`Total Not Sold Items: ${statistics?.totalNotSoldItems ?? 0}`}</p>
          </CardBody>
        </Card>
      </div>

      {/* Transaction Bar chart */}
      <TransactionChart priceRange={priceRange} month={month} />

    </div>
  )
}

export default Home