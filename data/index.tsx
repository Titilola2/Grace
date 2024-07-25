import facebook from "@/assets/icons/facebook.svg"
import twitter from "@/assets/icons/x.svg"
import instagram from "@/assets/icons/instagram.svg"
import bossy from "@/assets/images/bossy.svg";
import rich from "@/assets/images/rich.svg";
import book2 from "@/assets/images/book2.svg";
import richbook from "@/assets/images/richbook.svg";
import book from "@/assets/images/book1.svg";
import billionaire from "@/assets/images/billionaire.png";

export const menu = [
  { name: "Home", url: "/" },
  {
    name: "Categories",
    url: "/categories/contemporary-romance",
    subPages: [
      { name: "Contemporary romance", url: "/categories/contemporary-romance" },
      { name: "Clean and Wholesome", url: "/categories/clean-and-wholesome" },
      { name: "Children's Books", url: "/categories/children-books" },
    ],
  },
  { name: "About", url: "/about" },
  { name: "Contacts", url: "/contacts" },
  { name: "Amazon", url: "https://www.amazon.com/stores/Ashton-Grey/author/B0CCWVBC7N?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true" },
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
         src: book2,
         url: "https://www.amazon.com/One-Bossy-Tease-Enemies-off-limits-ebook/dp/B0CW1DWJ3P?ref_=ast_author_dp",
       },
       {
         src: bossy,
         url: "https://www.amazon.com/One-Bossy-Fake-Marriage-Billionaire-ebook/dp/B0CC3PCCRT?ref_=ast_author_dp",
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