import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{
        color: "#94c4a0",
        textAlign: "center",
        marginTop: "-50px"
      }}>
        Jardin du Monde: La où vous trouverez ce qu'il vous faut pour votre jardin, même un cactus hehe
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>A propos</Heading>
            <FooterLink href="#">Partenaires</FooterLink>
            <FooterLink href="#">Catalogue</FooterLink>
            <FooterLink href="#">Temoignages</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Nous écrire</FooterLink>
            <FooterLink href="#">Paiement</FooterLink>
            <FooterLink href="#">Index botanique</FooterLink>
            <FooterLink href="#">Livraison</FooterLink>
          </Column>
          <Column>
            <Heading>Contact</Heading>
            <FooterLink href="#">Uttah</FooterLink>
            <FooterLink href="#">Tokyo</FooterLink>
            <FooterLink href="#">Brussels</FooterLink>
            <FooterLink href="#">Rome</FooterLink>
          </Column>
          <Column>
            <Heading>Réseaux sociaux</Heading>
            <FooterLink href="#">
              <i class="fab fa-facebook">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
            <i class="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
            <i class="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
            <i class="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

import styled from 'styled-components';

export const Box = styled.div`
  padding: 80px 60px;
  background: rgb(236, 209, 157);
  position: absolute;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export default Footer
