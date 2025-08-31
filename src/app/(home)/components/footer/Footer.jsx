// const Footer = () => {
//   return (
//     <footer className="container pt-24 pb-16 mx-auto">
//       <div className="flex flex-col items-center">
//         <h2 className="pb-5 text-xl font-bold text-gray-300">
//           Get in touch to me.
//         </h2>
//         <Image
//           alt="footer-arrow"
//           className="h-[120px]"
//           width={200}
//           height={800}
//           src={footerArrow}
//         />

import { Heart } from "lucide-react";

//         <SocialLinks />
//       </div>
//     </footer>
//   );
// };
// export default Footer;

const Footer = () => {
  return (
    <footer className="pt-24 pb-6 mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="pb-5 text-xl font-bold text-gray-300 flex  justify-center items-center gap-3">
          Created By <Heart /> Jubayer Ahmed
        </h2>
      </div>
    </footer>
  );
};
export default Footer;
