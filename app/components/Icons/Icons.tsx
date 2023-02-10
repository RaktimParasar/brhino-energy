import { CSSProperties } from "react";

interface IconProps {
   color?: CSSProperties["color"];
}

const Address: React.FC<IconProps> = ({ color }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="50"
         height="50"
         viewBox="0 0 50 50"
         fill={color}
      >
         <path d="M 25 2 C 16.175781 2 9 9.175781 9 18 C 9 24.34375 12.863281 31.664063 16.65625 37.5 C 20.449219 43.335938 24.25 47.65625 24.25 47.65625 C 24.441406 47.871094 24.714844 47.996094 25 47.996094 C 25.285156 47.996094 25.558594 47.871094 25.75 47.65625 C 25.75 47.65625 29.550781 43.328125 33.34375 37.5 C 37.136719 31.671875 41 24.375 41 18 C 41 9.175781 33.824219 2 25 2 Z M 25 4 C 32.742188 4 39 10.257813 39 18 C 39 23.539063 35.363281 30.742188 31.65625 36.4375 C 28.546875 41.210938 25.921875 44.355469 25 45.4375 C 24.082031 44.355469 21.457031 41.195313 18.34375 36.40625 C 14.636719 30.703125 11 23.5 11 18 C 11 10.257813 17.257813 4 25 4 Z M 25 11.84375 L 24.5 12.15625 L 17 16.65625 L 18 18.34375 L 18 26 L 32 26 L 32 18.34375 L 33 16.65625 L 25.5 12.15625 Z M 25 14.15625 L 30 17.15625 L 30 24 L 27 24 L 27 19 L 23 19 L 23 24 L 20 24 L 20 17.15625 Z"></path>
      </svg>
   );
};

const Email: React.FC<IconProps> = ({ color }) => {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
         <path
            fill={color}
            d="M 10.5 8 C 6.9280619 8 4 10.928062 4 14.5 L 4 33.5 C 4 37.071938 6.9280619 40 10.5 40 L 37.5 40 C 41.071938 40 44 37.071938 44 33.5 L 44 14.5 C 44 10.928062 41.071938 8 37.5 8 L 10.5 8 z M 10.5 11 L 37.5 11 C 39.450062 11 41 12.549938 41 14.5 L 41 15.605469 L 24 24.794922 L 7 15.605469 L 7 14.5 C 7 12.549938 8.5499381 11 10.5 11 z M 7 19.015625 L 23.287109 27.820312 A 1.50015 1.50015 0 0 0 24.712891 27.820312 L 41 19.015625 L 41 33.5 C 41 35.450062 39.450062 37 37.5 37 L 10.5 37 C 8.5499381 37 7 35.450062 7 33.5 L 7 19.015625 z"
         ></path>
      </svg>
   );
};

const Copy: React.FC<IconProps> = ({ color }) => {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 26 26">
         <path
            fill={color}
            d="M 4 0 C 1.796875 0 0 1.796875 0 4 L 0 18 C 0 20.203125 1.796875 22 4 22 L 7 22 L 7 20 L 4 20 C 2.894531 20 2 19.105469 2 18 L 2 4 C 2 2.894531 2.894531 2 4 2 L 10.28125 2 C 10.433594 2.039063 10.5625 2.121094 10.65625 2.21875 C 11.089844 2.097656 11.53125 2 12 2 L 13.0625 2 C 11.773438 0.71875 10.902344 0 10 0 Z M 12 3 C 9.796875 3 8 4.796875 8 7 L 8 22 C 8 24.203125 9.796875 26 12 26 L 22 26 C 24.203125 26 26 24.203125 26 22 L 26 11 C 26 9.9375 25.027344 8.929688 23.28125 7.21875 C 23.039063 6.980469 22.777344 6.714844 22.53125 6.46875 C 22.285156 6.222656 22.019531 5.992188 21.78125 5.75 C 20.070313 4.003906 19.0625 3 18 3 Z M 12 5 L 18.28125 5 C 19.003906 5.183594 19 6.050781 19 6.9375 L 19 9 C 19 9.550781 19.449219 10 20 10 L 22 10 C 22.996094 10 24 10.003906 24 11 L 24 22 C 24 23.105469 23.105469 24 22 24 L 12 24 C 10.894531 24 10 23.105469 10 22 L 10 7 C 10 5.894531 10.894531 5 12 5 Z M 19.53125 12.09375 C 18.90625 12.125 18.308594 12.378906 17.84375 12.84375 L 16.59375 14.125 C 16.878906 13.835938 17.929688 14.023438 18.1875 14.28125 L 18.71875 13.71875 C 18.964844 13.476563 19.28125 13.328125 19.59375 13.3125 C 19.804688 13.300781 20.109375 13.359375 20.375 13.625 C 20.621094 13.875 20.6875 14.148438 20.6875 14.34375 C 20.6875 14.671875 20.539063 15.023438 20.28125 15.28125 L 17.96875 17.5625 C 17.488281 18.042969 16.738281 18.113281 16.3125 17.6875 C 16.070313 17.445313 15.679688 17.445313 15.4375 17.6875 C 15.195313 17.929688 15.195313 18.320313 15.4375 18.5625 C 15.875 19 16.46875 19.21875 17.0625 19.21875 C 17.703125 19.21875 18.339844 18.972656 18.84375 18.46875 L 21.15625 16.15625 C 21.644531 15.667969 21.9375 15 21.9375 14.34375 C 21.9375 13.738281 21.679688 13.179688 21.25 12.75 C 20.792969 12.292969 20.179688 12.066406 19.53125 12.09375 Z M 16.78125 14.9375 C 16.140625 14.9375 15.5 15.214844 15 15.71875 L 12.84375 17.84375 C 12.355469 18.332031 12.0625 19 12.0625 19.65625 C 12.0625 20.265625 12.320313 20.820313 12.75 21.25 C 13.210938 21.707031 13.816406 21.9375 14.46875 21.90625 C 15.089844 21.875 15.691406 21.621094 16.15625 21.15625 L 17.25 20.03125 C 16.964844 20.320313 15.914063 20.132813 15.65625 19.875 L 15.28125 20.28125 C 15.035156 20.523438 14.71875 20.671875 14.40625 20.6875 C 14.195313 20.699219 13.890625 20.640625 13.625 20.375 C 13.378906 20.128906 13.3125 19.851563 13.3125 19.65625 C 13.3125 19.328125 13.460938 18.976563 13.71875 18.71875 L 15.875 16.59375 C 16.359375 16.113281 17.074219 16.046875 17.5 16.46875 C 17.742188 16.710938 18.164063 16.710938 18.40625 16.46875 C 18.648438 16.226563 18.648438 15.835938 18.40625 15.59375 C 17.96875 15.15625 17.375 14.9375 16.78125 14.9375 Z"
         ></path>
      </svg>
   );
};

const Phone: React.FC<IconProps> = ({ color }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="64"
         height="64"
         viewBox="0 0 64 64"
         fill={color}
      >
         <path d="M 28.1875 2.117188 C 27.929688 2.113281 27.671875 2.207031 27.472656 2.398438 L 24.59375 5.179688 C 24.199219 5.5625 24.1875 6.195313 24.574219 6.59375 C 24.769531 6.792969 25.027344 6.898438 25.292969 6.898438 C 25.542969 6.898438 25.792969 6.804688 25.984375 6.617188 L 28.863281 3.835938 C 29.261719 3.453125 29.269531 2.820313 28.886719 2.421875 C 28.695313 2.226563 28.441406 2.125 28.1875 2.117188 Z M 15.730469 6 C 13.535156 6 11.59375 6.703125 10.40625 7.929688 L 10.289063 8.046875 C 8.859375 9.507813 5.507813 12.933594 5.507813 19.664063 C 5.507813 25.441406 8.941406 31.023438 10.984375 33.839844 L 11.0625 33.941406 C 11.109375 34.003906 11.191406 34.125 11.3125 34.300781 C 17.804688 43.769531 25.828125 50.839844 33.914063 54.207031 C 41.089844 57.199219 44.886719 57.996094 47.484375 57.996094 C 48.582031 57.996094 49.464844 57.855469 50.300781 57.675781 C 54.027344 56.867188 58.652344 54.125 59.878906 50.628906 C 60.878906 47.789063 61.1875 44.59375 60.574219 43.515625 C 60.167969 42.796875 59.417969 42.433594 58.378906 41.929688 C 58.152344 41.820313 57.90625 41.703125 57.640625 41.566406 C 57.5625 41.527344 49.964844 37.722656 48.5625 37.234375 C 46.800781 36.5625 45.238281 37.039063 44.160156 38.574219 L 43.609375 39.355469 C 42.542969 40.859375 41.535156 42.28125 40.71875 43.164063 C 40.199219 43.722656 39.308594 43.699219 38.660156 43.429688 L 38.242188 43.257813 C 36.496094 42.546875 32.863281 41.070313 28.371094 37.046875 C 24.777344 33.828125 22.199219 29.746094 21.261719 28.152344 C 20.871094 27.480469 21.035156 27.238281 21.703125 26.449219 C 22.0625 26 22.414063 25.625 22.765625 25.25 C 23.058594 24.941406 23.347656 24.632813 23.640625 24.289063 L 23.777344 24.136719 C 24.367188 23.445313 24.792969 22.949219 25.230469 22.015625 C 25.964844 20.578125 25.28125 19.148438 25.058594 18.675781 C 24.835938 18.210938 23.292969 14.445313 22.167969 11.695313 L 21.027344 8.914063 L 21.023438 8.910156 C 19.960938 6.347656 18.898438 6.121094 17.296875 6.054688 C 16.832031 6.027344 16.308594 6 15.730469 6 Z M 34.734375 7.546875 C 34.605469 7.546875 34.472656 7.570313 34.34375 7.621094 L 28.78125 9.867188 C 28.265625 10.074219 28.023438 10.660156 28.230469 11.171875 C 28.386719 11.5625 28.761719 11.796875 29.15625 11.796875 C 29.28125 11.796875 29.40625 11.773438 29.53125 11.722656 L 35.09375 9.476563 C 35.605469 9.269531 35.851563 8.6875 35.644531 8.171875 C 35.492188 7.789063 35.125 7.554688 34.734375 7.546875 Z M 16.085938 8.007813 C 16.480469 8.015625 16.851563 8.03125 17.199219 8.050781 C 18.296875 8.097656 18.527344 8.105469 19.175781 9.671875 L 20.316406 12.453125 C 21.839844 16.175781 23.023438 19.058594 23.25 19.535156 C 23.589844 20.246094 23.648438 20.714844 23.4375 21.136719 C 23.097656 21.855469 22.816406 22.179688 22.261719 22.828125 L 22.214844 22.886719 Z M 14.035156 8.1875 C 14.050781 8.253906 14.046875 8.320313 14.074219 8.382813 L 20.71875 24.519531 C 20.527344 24.734375 20.332031 24.960938 20.125 25.214844 C 19.488281 25.96875 18.417969 27.230469 19.53125 29.15625 C 20.757813 31.25 23.367188 35.253906 27.035156 38.539063 C 31.785156 42.792969 35.78125 44.417969 37.484375 45.109375 L 37.886719 45.277344 C 39.460938 45.933594 41.148438 45.640625 42.1875 44.523438 C 42.761719 43.902344 43.398438 43.066406 44.0625 42.152344 L 58.222656 49.230469 C 58.152344 49.472656 58.082031 49.714844 57.992188 49.96875 C 57.054688 52.636719 53.050781 55.03125 49.878906 55.71875 C 47.890625 56.144531 45.160156 56.730469 34.683594 52.359375 C 26.953125 49.136719 19.238281 42.324219 12.964844 33.171875 C 12.816406 32.957031 12.710938 32.808594 12.671875 32.753906 L 12.605469 32.660156 C 10.703125 30.042969 7.507813 24.875 7.507813 19.660156 C 7.507813 13.746094 10.351563 10.839844 11.71875 9.445313 L 11.839844 9.320313 C 12.347656 8.796875 13.121094 8.40625 14.035156 8.1875 Z M 29.78125 16.003906 C 29.226563 16.003906 28.78125 16.453125 28.78125 17.003906 C 28.78125 17.558594 29.226563 18.003906 29.78125 18.003906 L 33.78125 18.003906 C 34.332031 18.003906 34.78125 17.558594 34.78125 17.003906 C 34.78125 16.453125 34.332031 16.003906 33.78125 16.003906 Z M 17.648438 30.660156 C 17.519531 30.675781 17.390625 30.71875 17.273438 30.789063 C 16.796875 31.070313 16.636719 31.683594 16.917969 32.15625 C 17.246094 32.71875 17.832031 33.578125 18.488281 34.460938 C 18.683594 34.726563 18.988281 34.863281 19.292969 34.863281 C 19.5 34.863281 19.707031 34.800781 19.886719 34.667969 C 20.332031 34.339844 20.425781 33.710938 20.09375 33.269531 C 19.183594 32.039063 18.753906 31.332031 18.640625 31.144531 C 18.433594 30.785156 18.035156 30.609375 17.648438 30.660156 Z M 22.0625 36.203125 C 21.804688 36.1875 21.542969 36.269531 21.339844 36.453125 C 20.925781 36.816406 20.886719 37.449219 21.253906 37.863281 C 22.410156 39.167969 23.589844 40.363281 24.761719 41.410156 C 27.507813 43.871094 30.269531 45.824219 32.972656 47.214844 C 33.117188 47.289063 33.277344 47.324219 33.429688 47.324219 C 33.792969 47.324219 34.140625 47.128906 34.316406 46.78125 C 34.574219 46.292969 34.378906 45.6875 33.890625 45.4375 C 31.335938 44.121094 28.714844 42.265625 26.09375 39.921875 C 24.980469 38.921875 23.855469 37.785156 22.75 36.535156 C 22.566406 36.332031 22.316406 36.214844 22.0625 36.203125 Z M 46.953125 38.941406 C 47.226563 38.921875 47.527344 38.980469 47.875 39.109375 C 48.949219 39.484375 54.832031 42.394531 56.734375 43.355469 C 57.011719 43.492188 57.269531 43.617188 57.507813 43.734375 C 58.054688 43.996094 58.734375 44.324219 58.8125 44.453125 C 58.917969 44.738281 58.945313 45.789063 58.703125 47.234375 L 45.246094 40.503906 L 45.796875 39.730469 C 46.140625 39.238281 46.503906 38.980469 46.953125 38.941406 Z"></path>
      </svg>
   );
};

const Facebook: React.FC<IconProps> = ({ color }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="30"
         height="30"
         viewBox="0 0 30 30"
         fill={color}
      >
         <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
      </svg>
   );
};

const Twitter: React.FC<IconProps> = ({ color }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="30"
         height="30"
         viewBox="0 0 30 30"
         fill={color}
      >
         <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
      </svg>
   );
};

const Linkedin: React.FC<IconProps> = ({ color }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="30"
         height="30"
         viewBox="0 0 30 30"
         fill={color}
      >
         <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"></path>
      </svg>
   );
};

const ArrowRight: React.FC<IconProps> = ({ color }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="30"
         height="30"
         viewBox="0 0 30 30"
         fill={color}
      >
         <path d="M 22.990234 8.9902344 A 1.0001 1.0001 0 0 0 22.292969 10.707031 L 25.585938 14 L 2 14 A 1.0001 1.0001 0 1 0 2 16 L 25.585938 16 L 22.292969 19.292969 A 1.0001 1.0001 0 1 0 23.707031 20.707031 L 28.619141 15.794922 A 1.0001 1.0001 0 0 0 28.623047 14.207031 A 1.0001 1.0001 0 0 0 28.617188 14.203125 L 23.707031 9.2929688 A 1.0001 1.0001 0 0 0 22.990234 8.9902344 z"></path>
      </svg>
   );
};

const Tick: React.FC<IconProps> = ({ color }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="50"
         height="50"
         viewBox="0 0 24 24"
         fill={color}
      >
         <path fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="3" d="M21 6L9 18 4 13"></path>
      </svg>
   );
};

export { Address, Email, Copy, Phone, Facebook, Twitter, Linkedin, ArrowRight, Tick };
