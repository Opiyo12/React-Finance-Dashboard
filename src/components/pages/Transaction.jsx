import React from 'react'
import { useTransaction } from '../hooks/useTransaction';
import Loading from './Loading';
import { Table,TableHead, TableCell, TableRow, TableBody, TableHeader } from '../ui/table';

const Transaction = () => {
  const{transactions, isLoading, error}= useTransaction();
  if (error) return <p className="text-red-500">Failed to load Transaction.</p>;
  return (
 <div>
    <h1 className='text-blue-500  text-2xl'>Welcome To the Overall Transaction List</h1>
     

     <div >
     <div >
          {isLoading &&(
          <Loading/>
        )}
  
      
  <Table className="bg-white mt-5 rounded-md">
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
   
   <TableBody>
   {transactions?.map((tx)=>(
      <TableRow key={tx}>
        <TableCell>{tx.id}</TableCell>
        <TableCell>{tx.date}</TableCell>
        <TableCell>{tx.description}</TableCell>
        <TableCell>{tx.category}</TableCell>
        <TableCell><span className={tx.type === 'Income' ? 'text-green-600' : 'text-red-600'}>
        Shs. {tx.amount}</span></TableCell>
        <TableCell>{tx.type}</TableCell>
      </TableRow>
      ))}
    </TableBody>
    
    
</Table>
</div>
 </div>
 </div>
  )
}

export default Transaction