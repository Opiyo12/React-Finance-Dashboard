import React from 'react'
import Loading from './Loading'
import { useSummary } from '../hooks/useSummary'
import SummaryCard from './SummaryCard'
import { FaDollarSign,FaChartLine, FaBalanceScale,  FaSave } from 'react-icons/fa'





const Dashboard = () => {
  const{summary, isLoading, error}= useSummary();
  
  if (error) return <p className="text-red-500">Failed to load summary.</p>;
  //defining summary card border color
const borderColors = {
  green: "border-l-green-500",
  red: "border-l-red-500",
  blue: "border-l-blue-500",
  orange:"border-l-orange-500",
  // Add more as needed
};



  return (
    <div className='flex flex-col items-center bg-gray-200 h-screen'>
       {isLoading && (
        <Loading/>
      )}

     <div className='flex bg-white h-10 items-center p-6 rounded mt-10  '>
      <h1 className=' font-bold text-blue-500'>Welcome to the Overall Dashboard Summary </h1>
      </div>
  
      {/* cards */}
      <div className='flex gap-5 ml-40 flex-wrap '>
          <SummaryCard
          name="Total Income"
          amount={summary?.income}
          icon={<FaDollarSign></FaDollarSign>}
          color={borderColors.green}

          />
          <SummaryCard
          name="Total Expenses"
          amount={summary?.expenses}
          icon={<FaChartLine></FaChartLine>}
          

          />
          <SummaryCard
          name="Net Balance"
          amount={summary?.netBalance}
          icon={<FaBalanceScale></FaBalanceScale>}
          

          />
          <SummaryCard
          name="Saving Goal"
          amount={`${summary?.savingGoal}%`}
          icon={<FaSave></FaSave>}
         

          />
         
     </div>
    </div>
  )
}

export default Dashboard