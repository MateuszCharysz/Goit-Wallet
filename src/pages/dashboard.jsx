import React from 'react'
import { Dashboard } from '../components/Dashboard/Dashboard'
import { AddTransactionButton } from '../components/AddTransactionButton/AddTransactionButton'
import { SelectMenuModal } from '../components/SelectMenuModal/SelectMenuModal'

export const DashBoard = () => {
  return (
    <>
    <Dashboard/>
    <AddTransactionButton/>
    <SelectMenuModal placeholder={'Select a category'}/>
    </>
  )
}
