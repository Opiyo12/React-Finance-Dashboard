import React from 'react'
import { TableHead,  TableRow,  TableHeader } from '../ui/table';

const TransactionItem = () => {
  return (
    
        
      
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
     

  )
}

export default TransactionItem