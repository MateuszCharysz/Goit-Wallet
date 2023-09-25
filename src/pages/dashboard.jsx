import React, {Fragment} from 'react'
import Media from 'react-media'
import { Dashboard } from '../components/Dashboard/Dashboard'
import { DashboardMobile } from '../components/Dashboard/DashboardMobile'
import { AddTransactionButton } from '../components/AddTransactionButton/AddTransactionButton'
import { SelectMenuModal } from '../components/SelectMenuModal/SelectMenuModal'
import { SelectStatisticsMenu } from '../components/SelectStatisticsMenu/SelectStatisticsMenu'


export const DashBoard = () => {
  return (
  <>
    <Media queries={{
      small: "(max-width: 768px)",
      medium: "(min-width: 769px)"
    }}>
      {matches => (
        <Fragment>
          {matches.small && <DashboardMobile/>}
          {matches.medium && <Dashboard/>}
        </Fragment>
      )}
    </Media>
    <AddTransactionButton/>
    {/* <SelectStatisticsMenu placeholder={'Month'} type={'month'}/>
    <SelectStatisticsMenu placeholder={'Year'} type={'year'}/> */}
  </>
  )
}


