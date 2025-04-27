import React from 'react'
import { useSummary } from '../hooks/useSummary'
import SummaryCard from './SummaryCard'
import { FaDollarSign,FaChartLine, FaBalanceScale,  FaSave } from 'react-icons/fa'
import Skeleton from '../ui/Skeleton';



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
    <div className='' >
       {isLoading && (
        <Skeleton/>
      )}

     <div >
      <h1 className=' text-2xl text-gray-600 text-center'>The Transaction Summary </h1>
      </div>
  
      {/* cards */}
      <div className='flex justify-center gap-5 flex-wrap'>
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