import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { sectionConceptsProps } from 'types/api'

const SectionConcepts = ({ concepts, title }: sectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map(({ id, title }) => (
          <S.Item key={id}>{title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
