import localFont from "next/font/local";
import { Inter, Permanent_Marker, Montserrat, Poppins} from "next/font/google";

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const permanent_maker = Permanent_Marker({
  weight: '400',
  subsets: ["latin"],
});

export const montserrat = Montserrat ({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});