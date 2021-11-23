import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t } = useTranslation('common')

  return <>{t('budgetExample', { budget: 20, budgetType: 'per person' })}</>
}
