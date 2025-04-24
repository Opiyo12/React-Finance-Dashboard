import React from 'react'
import { 
  Card,
  CardTitle,
  CardDescription
 } from '../ui/card'

const SummaryCard = ({color,icon, name, amount}) => {
  return (
    <div>
      <Card className="flex flex-row mt-5 gap-2 w-[180px] ml-5">
        <div className='flex flex-col justify-center px-2 '>
          <div className='rounded-full bg-green-200 p-1 text-slate-500 ml-3'>{icon}</div>
        </div>
        <div className=''>
        
          <CardTitle>{name}</CardTitle>
          <CardDescription>{amount}</CardDescription>
        
        
        </div>
      </Card>
    </div>
  )
}

export default SummaryCard