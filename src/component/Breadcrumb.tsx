import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Breadcrumb = () => {
    const params = window.location.href.split("/").slice(5);

    function generateLink(params:Array<string>, index:number) {
      const array = [];

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
  @media screen and (max-width: 768px) {
    display: none;
  }
    font-size: 0.8em;
    padding: 1em;
    padding-left: 8em;
    display: flex;
    gap: 0.8em;
    align-self: flex-start;
`

const BreadcrumbLink = styled(NavLink)`
    text-decoration: none;
    color: #b67332;
`