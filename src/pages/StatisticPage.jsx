import React from 'react'
import { Chart } from '../components/Chart'

export function StatisticPage() {
  return (
    <section>
      <Chart title="Confirmed Transactions" data="confirmedTransactions" description="" color="blue" />
      <Chart title="Market Price" data="marketPrice" description="" color="red" />
    </section>
  )
}
