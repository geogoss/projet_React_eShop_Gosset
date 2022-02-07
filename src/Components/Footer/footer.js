import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import "./footer.css";
import { useContext } from "react";
import {ThemeContext} from '../Context/ThemeContext'

const Footer = () => {

  const {toggleTheme, theme} = useContext(ThemeContext)

  return (
    
    <Box>
      <div className={theme ? 'text-success footer' : 'text-success'} style={{textAlign: "center", marginTop: "-50px",}}>
      <h2>Jardin du Monde</h2>La où vous trouverez ce qu'il vous faut pour votre jardin <br /> même un 🌵cactus🌵
      </div>
      <div className={theme ? "footer" : ""}>
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
      </div>
    </Box>
  );
};

export default Footer;