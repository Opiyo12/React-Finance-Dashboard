import React from 'react'
import { useTransaction } from '../hooks/useTransaction';
import { Table,TableHead, TableCell, TableRow, TableBody, TableHeader } from '../ui/table';
import TransactionItem from './TransactionItem';
import TransactionList from './TransactionList';
import Skeleton from '../ui/Skeleton';

const Transaction = () => {
  const{transactions, error,isLoading}= useTransaction();
  if (error) {
    return (
    
      <div>
        <p className="text-red-500">Error:{error.message}</p>
        <p className='text-red-500'>Network  Error:- Check your internet connection</p>
      </div>
    )
  }
  return (
 <div >
    <h1 className='text-gray-600  text-2xl'> The Overall Transaction List</h1>
     

     
       <div >
          {isLoading &&(<Skeleton/>)}
       </div>
    
  <Table className="bg-white mt-5 rounded-md">
    <TransactionItem/>
    <TransactionList/>  
  </Table>

 </div>

  )
}

export default Transaction