import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { pricingBoxProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  benefits,
  button,
  numberInstallments,
  priceInstallment,
  totalPrice
}: pricingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De{' '}
        <span>
          {totalPrice.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </span>{' '}
        por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{numberInstallments} x de</span>{' '}
        {priceInstallment.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />

    <Button href={button.url} onClick={onClick} withPrice>
      <p>{button.label}</p>
      <div>
        <S.ButtonFullPrice>
          {priceInstallment.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </S.ButtonFullPrice>
        <S.ButtonDiscountPrice>R$399</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
