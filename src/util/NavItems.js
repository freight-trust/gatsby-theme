import { useStaticQuery, graphql } from "gatsby";

export function useNavItems() {
  const {
    allNavItemsYaml: { edges },
  } = useStaticQuery(graphql`
    query leftNavQueryAndLeftNavQuery {
      allNavItemsYaml {
        edges {
          node {
            title
            pages {
              title
              path
            }
            hasDivider
          }
        }
      }
    }
  `);

  const navItems = edges.map(({ node }) => node);
  return navItems;
}
