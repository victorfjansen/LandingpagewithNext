import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { sectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionTech = ({ title, techIcons }: sectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ id, title, icon }) => (
          <S.Icon key={id}>
            <S.Icons src={getImageUrl(icon.url)} loading="lazy" alt={title} />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
