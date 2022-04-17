import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { AboutUs, sectionAboutUsProps } from 'types/api'

const SectionAboutUs = ({ authors, title }: sectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map(
        ({ description, id, name, photo, role, socialLinks }: AboutUs) => (
          <ProfileCard
            key={id}
            name={name}
            role={role}
            image={photo.url}
            socialLinks={socialLinks}
            description={description}
          />
        )
      )}
    </S.Content>
  </Container>
)

export default SectionAboutUs
