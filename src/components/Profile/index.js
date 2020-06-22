import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar';
import * as S from './styled';


const Profile = () => {

    const {
        site: {
            siteMetadata: { title, position, description }
        },


    } = useStaticQuery(graphql`
        query MySiteMetadata {
            site {
                siteMetadata {
                title
                description
                position
                author
                }
            }
        }

    `)

    return (
        <S.ProfileWrapper>
            <S.ProfileLink>
                <Avatar />
                <S.ProfileAuthor>
                    {title}
                    <S.ProfilePosition>{position}</S.ProfilePosition>    
                </S.ProfileAuthor>
                
                <S.ProfileDescription>{description}</S.ProfileDescription>
            </S.ProfileLink>

        </S.ProfileWrapper>
    )

}





/*const Profile = () => (
    <StaticQuery
        query={graphql`
            query MySiteMetadata {
                site {
                    siteMetadata {
                      title
                      description
                      position
                      author
                    }
                  }
            }
        
        `}

        render={data => (
            <div className="Profile-wrapper">
                <h1>{data.site.siteMetadata.title}</h1>
                <h2>{data.site.siteMetadata.position}</h2>
                <p>{data.site.siteMetadata.description}</p>
            </div>
        )}
    />



)*/

export default Profile