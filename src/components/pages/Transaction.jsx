import React from 'react'
import { useTransaction } from '../hooks/useTransaction';
import Loading from './Loading';
import { Table,TableHead, TableCell, TableRow, TableBody, TableHeader } from '../ui/table';

const Transaction = () => {
  const{transactions, isLoading, error}= useTransaction();
  if (error) return <p className="text-red-500">Failed to load Transaction.</p>;
  return (
  <div className='flex flex-col items-center h-screen bg-gray-200'>
          {isLoading &&(
          <Loading/>
        )}

      <div className='flex bg-white h-10 items-center p-6 rounded mt-10  '>
        <h1 className=' font-bold text-blue-500'>Welcome to the Overall  Transaction List </h1>
      </div>
  <div className='mt-5 bg-white p-7 rounded xl'>
      
 <Table >
 <TableHeader>
 <TableRow>
    <TableHead className="w-[100px]">ID</TableHead>
    <TableHead className="w-[100px]" >Date</TableHead>
    <TableHead className="w-[100px]">Description</TableHead>
    <TableHead className="w-[100px]">Category</TableHead>
    <TableHead className="w-[100px]">Amount</TableHead>
    <TableHead className="w-[100px]">Types</TableHead>
   </TableRow>
 </TableHeader>
   {transactions?.map((tx)=>(
   <TableBody>
      <TableRow>
        <TableCell>{tx.id}</TableCell>
        <TableCell>{tx.date}</TableCell>
        <TableCell>{tx.description}</TableCell>
        <TableCell>{tx.category}</TableCell>
        <TableCell><span className={tx.type === 'Income' ? 'text-green-600' : 'text-red-600'}>
        Shs. {tx.amount}</span></TableCell>
        <TableCell>{tx.type}</TableCell>
      </TableRow>
    </TableBody>
    ))}
    
</Table>
</div>
 </div>
  )
}

export default Transaction