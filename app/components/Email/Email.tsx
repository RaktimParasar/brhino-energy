import * as React from "react";
import { Row } from "@react-email/row";
import { Img } from "@react-email/img";
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Body } from "@react-email/body";
import { Button } from "@react-email/button";
import { Column } from "@react-email/column";
import { Heading } from "@react-email/heading";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

import { baseURL } from "../../utils/constants";

interface EmailProps {
   firstName: string;
   lastName: string;
   email: string;
   phone: string;
   comment: string;
}

const Email: React.FC<EmailProps> = ({ firstName, lastName, email, phone, comment }) => {
   return (
      <Html lang="en">
         <Preview>Get a quote</Preview>
         <Body style={main}>
            <Container>
               <Section style={content}>
                  <Img
                     width={620}
                     height={200}
                     src={`${baseURL}/Brhino/tr:w-620,h-200,f-auto/get-a-quote_PzXisPx7w?ik-sdk-version=javascript-1.4.3&updatedAt=1676119082572`}
                  />
                  <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                     <Column>
                        <Heading
                           style={{
                              ...paragraph,
                              fontSize: 18,
                              fontWeight: "bold",
                              textAlign: "center",
                           }}
                        >
                           Hi I&apos;m {`${firstName} ${lastName}`},
                        </Heading>
                        <Heading
                           as="h2"
                           style={{
                              ...paragraph,
                              fontSize: 16,
                              fontWeight: "bold",
                              textAlign: "center",
                           }}
                        >
                           Following are my contact information and details about our organization.
                        </Heading>
                        <Text style={paragraph}>
                           <b>Email: </b>
                           {email}
                        </Text>
                        <Text style={{ ...paragraph, marginTop: -5 }}>
                           <b>Phone: </b>
                           {phone}
                        </Text>
                        <Text style={{ ...paragraph, marginTop: -5 }}>
                           <b>Comment: </b>
                        </Text>
                        <Text
                           style={{
                              ...paragraph,
                              color: "rgb(0,0,0, 0.5)",
                              fontSize: 14,
                              marginTop: -10,
                           }}
                        >
                           {comment}
                        </Text>
                        <Text style={{ ...paragraph, marginTop: -5 }}>
                           &rdquo;We eagerly anticipate a response from your team and are grateful for the
                           opportunity to share a quote. Our gratitude for your time and consideration is
                           immeasurable. Thank you.&rdquo;
                        </Text>
                     </Column>
                  </Row>
                  <Row style={{ ...boxInfos, paddingTop: "0" }}>
                     <Column style={containerButton} colSpan={2}>
                        <Button style={button} href={`mailto:${email}`}>
                           Contact us
                        </Button>
                     </Column>
                  </Row>
               </Section>
            </Container>
         </Body>
      </Html>
   );
};

const main = {
   backgroundColor: "#fff",
   fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
   fontSize: 16,
};

const logo = {
   padding: "30px 20px",
};

const containerButton = {
   display: "flex",
   justifyContent: "center",
   width: "100%",
};

const button = {
   backgroundColor: "#0450d5",
   padding: "12px 30px",
   borderRadius: 3,
   color: "#FFF",
   fontWeight: "bold",
   border: "1px solid rgb(0,0,0, 0.1)",
   cursor: "pointer",
};

const content = {
   border: "1px solid rgb(0,0,0, 0.1)",
   borderRadius: "3px",
   overflow: "hidden",
};

const boxInfos = {
   padding: "20px 40px",
};

export default Email;
