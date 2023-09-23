import React from 'react'
import { Dashboard } from '../components/Dashboard/Dashboard'
import { AddTransactionButton } from '../components/AddTransactionButton/AddTransactionButton'
import { SelectMenuModal } from '../components/SelectMenuModal/SelectMenuModal'
import { SelectStatisticsMenu } from '../components/SelectStatisticsMenu/SelectStatisticsMenu'

export const DashBoard = () => {
  return (
    <>
    <Dashboard/>
    <AddTransactionButton/>
    <SelectStatisticsMenu placeholder={'Month'} type={'month'}/>
    <SelectStatisticsMenu placeholder={'Year'} type={'year'}/>
    </>
  )
}
