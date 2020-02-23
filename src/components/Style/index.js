import styled from "styled-components";

const TitleH1 = styled.h1`
@media only screen and (min-width: 1024px) {
  font-size: 3vw;
  text-align: center;
  color: white;
  margin :0;
  padding:3vh;
};
@media only screen and (max-width: 1024px) {
  font-size: 12vw;
  text-align: center;
  color: white;
  margin :0
  padding:4vh
`;

const TitleH3 = styled.h3`
@media only screen and (min-width: 1024px) {
  font-size: 2vw;
  text-align: center;
  color: white;
  padding: 3vh;
};
@media only screen and (max-width: 1024px) {
  font-size: 9vw;
  text-align: center;
  color: white;
  padding: 4vh;
  margin-bottom:10vh;
`;

const Background = styled.div`
  background: linear-gradient(0.25turn, #00498e, #e50096);
  width: 100vw;
`;
const Paragraph = styled.p`
@media only screen and (min-width: 1024px) {
  font-size: 1vw;
  text-align: center;

};
@media only screen and (max-width: 1024px) {
  font-size: 2vw;
  text-align: center;
`;
export { TitleH1, TitleH3, Background, Paragraph };
