import React from 'react'
import { Table,TableHead, TableCell, TableRow, TableBody, TableHeader } from '../ui/table';
import { useTransaction } from '../hooks/useTransaction';

const TransactionList = () => {
    const{transactions}=useTransaction()
  return (
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
  )
}

export default TransactionList