import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'
import { AboutProjectProps } from 'types/api'

const SectionAboutProject = ({
  title,
  image,
  description
}: AboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <source
            srcSet={require('@images/project.png?webp')}
            type="image/webp"
          />
          <source srcSet={require('@images/project.png')} type="image/png" />
          <img
            src={getImageUrl(image.url)}
            loading="lazy"
            alt={image.alternativeText}
          />
        </S.Image>
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
