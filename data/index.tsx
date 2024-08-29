import facebook from "@/assets/icons/facebook.svg"
import twitter from "@/assets/icons/x.svg"
import instagram from "@/assets/icons/instagram.svg"
import Proj1 from "@/assets/images/Proj1.png";
import Proj2 from "@/assets/images/Proj2.png";
import Proj3 from "@/assets/images/Proj3.png";
import Proj4 from "@/assets/images/Proj4.png";
import bossy from "@/assets/images/bossy.svg";
import rich from "@/assets/images/rich.svg";
import book2 from "@/assets/images/book2.svg";
import richbook from "@/assets/images/richbook.svg";
import book from "@/assets/images/book1.svg";
import billionaire from "@/assets/images/billionaire.png";
import { FaGithub, FaLinkedin, FaInstagram,  FaFacebookF   } from "react-icons/fa";

export const menu = [
  { name: "Home", url: "/" },
  {
    name: "Categories",
    url: "/categories/contemporary-romance",
    subPages: [
      { name: "Frontend", url: "/categories/frontend" },
      { name: "Fullstack", url: "/categories/fullstack" },
      { name: "Backend", url: "/categories/backend" },
    
    ],
  },
  { name: "Contact Me", url: "/contacts" },
  {name:<FaGithub /> , url:"https://github.com/Titilola2"},
  {name:<FaLinkedin /> , url:"https://github.com/Titilola2"},
  {name:<FaInstagram  /> , url:"https://github.com/Titilola2"},
  {name:< FaFacebookF /> , url:"https://github.com/Titilola2"},
];

export const socialIcons = [
    {
        icon: facebook,
        name: "facebook",
        url: ""
    },
    {
        icon: twitter,
        name: "x",
        url: ""
    },
    {
        icon: instagram,
        name: "instagram",
        url: ""
    },
]
 export const bookData = [
   {
     img: book2,
     text: "One Bossy Tease: An Enemies to Lovers off-limits Age Gap Romance",
     page: "223pages",
     button: "Order Today",
     url: "https://www.amazon.com/One-Bossy-Tease-Enemies-off-limits-ebook/dp/B0CW1DWJ3P/?_encoding=UTF8&pd_rd_w=klIir&content-id=amzn1.sym.cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_p=cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_r=147-5866834-6193418&pd_rd_wg=H1yFI&pd_rd_r=959b7e23-5808-4fdd-b238-03609c12476e&ref_=aufs_ap_sc_dsk",
   },
   {
     img: rich,
     text: "Filthy Rich Grump: A Brother's Best Friend Age Gap Romance",
     page: "87pages",
     button: "Read for free",
     url: "https://www.amazon.com/Filthy-Rich-Grump-Brothers-Romance-ebook/dp/B0CBKXDYYC?ref_=ast_author_dp",
   },
   {
     img: bossy,
     text: "One Bossy Fake Marriage : Ex's Brother Billionaire Romance",
     page: "188pages",
     button: "Order Today",
     url: "https://www.amazon.com/One-Bossy-Fake-Marriage-Billionaire-ebook/dp/B0CC3PCCRT?ref_=ast_author_dp",
   },
 ];

   export const numberData = [
     {
       number: "04",
       text: "Books Published",
     },
     {
       number: "4.5",
       text: "User Reviews",
     },
     {
       number: "01",
       text: "Book Coming Soon",
     },
   ];

     export const images = [
       {
        src: Proj1,
        url: "https://tobams.vercel.app/",
      },
      {
        src: Proj2,
        url: "https://stage2-ashen.vercel.app/",
      },
      {
        src: Proj3,
        url: "https://emin-test-theta.vercel.app/",
      },
      {
        src: Proj4,
        url: "https://test-beta-nine-59.vercel.app/",
      },
     ];

     export const bookImages = [
       {
         src: book2,
         url: "https://www.amazon.com/One-Bossy-Tease-Enemies-off-limits-ebook/dp/B0CW1DWJ3P?ref_=ast_author_dp",
       },
       {
         src: richbook,
         url: "https://www.amazon.com/Filthy-Rich-Grump-Brothers-Romance-ebook/dp/B0CBKXDYYC?ref_=ast_author_dp",
       },
       {
         src: billionaire,
         url: "https://www.amazon.com/One-Bossy-Billionaire-Ex-Seal-Protector-ebook/dp/B0D25ZDY9H?ref_=ast_author_dp",
       },
       {
         src: bossy,
         url: "https://www.amazon.com/One-Bossy-Fake-Marriage-Billionaire-ebook/dp/B0CC3PCCRT?ref_=ast_author_dp",
       },
       {
         src: book,
         url: "https://www.amazon.com/One-Bossy-Baby-Daddy-Pregnancy-ebook/dp/B0CT4JS7C9?ref_=ast_author_dp",
       },
     ];