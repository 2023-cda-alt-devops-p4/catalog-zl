import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Breadcrumb = () => {
    const params = window.location.href.split("/").slice(5);

    function generateLink(params, index) {
      let array = [];

      for (let i = 0; i < index+1; i++) {
        array.push(params[i])
      }
      return array.join("/")
    }

  return (
    <BreadcrumbContainer>
        <BreadcrumbLink to="/">Accueil</BreadcrumbLink>
        {
          Object.values(params).map((item, index) => {
            return (
              <>
                <p>/</p>
                <BreadcrumbLink key={index} to={`/${generateLink(params, index)}`}>{decodeURI(item)}</BreadcrumbLink>
              </>
            )
          })
        }
    </BreadcrumbContainer>
  )
}

export default Breadcrumb

const BreadcrumbContainer = styled.div`
    border: 1px solid #a1a1a1;
    border-radius: 0.5em;
    padding: 1em;
    display: flex;
    gap: 1em;
    align-self: flex-start;
`

const BreadcrumbLink = styled(NavLink)`
    text-decoration: none;
    color: gray;
`