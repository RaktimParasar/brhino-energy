import { Html } from "@react-email/html";
import { Preview } from "@react-email/preview";
import { Button } from "@react-email/button";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Section } from "@react-email/section";
import { Img } from "@react-email/img";

interface EmailProps {
   firstName: string;
   lastName: string;
   email: string;
   phone: string;
   comment: string;
}

const Email: React.FC = () => {
   return (
      <Html lang="en">
         <Preview>Brhino - Get a quote</Preview>
         <Body>
            <Container>
               <Section>{/* <Img width={620} src={"/images/get-a-quote.png"} /> */}</Section>
            </Container>
         </Body>
      </Html>
   );
};

export default Email;
