import { Html } from "@react-email/html";
import { Button } from "@react-email/button";

// interface EmailProps {
//    url?: string;
// }

const Email: React.FC = () => {
   return (
      <Html lang="en">
         <Button>Click me</Button>
      </Html>
   );
};

export default Email;
