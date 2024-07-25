"use client";
import React from "react";
import Button from "@/components/button";
import Image from "next/image";
import book from "@/assets/images/book1.svg";
import bossy from "@/assets/images/bossy.svg";
import book2 from "@/assets/images/book2.svg";
import richbook from "@/assets/images/richbook.svg";
import Review from "@/domain/homepage/components/Review";
import { useRouter } from "next/navigation";
import billionaire from "@/assets/images/billionaire.svg";

const ContemporaryRomance = () => {
  const router = useRouter();
  return (
    <section className="w-full">
      <div className="bg-white w-full h-auto lg:px-[8rem] mt-4 px-[1rem] lg:py-[4rem] flex flex-col sidebar">
        <h1 className="lg:text-6xl text-2xl font-custom w-full my-3">CONTEMPORARY ROMANCE </h1>
        <h2 className="font-custom lg:text-[40px]">BY ASHTON GREY</h2>
        <div className="w-full text-center flex justify-center py-6">
          <Button onClick={() => router.push("https://www.amazon.com/stores/Ashton-Grey/author/B0CCWVBC7N?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true")} title="Order Now" width="150px" height="60px" fontSize="20px" />
        </div>
      </div>
      <div className="bg-[#E0B3A0] w-full flex flex-col justify-center items-center h-auto py-[4rem] px-[1rem]">
        <h1 className="font-custom text-2xl lg:text-5xl">ONE BOSSY BABY DADDY</h1>
        <Image src={book} alt="image" />
        <h2 className="font-custom text-2xl">One Bossy Baby Daddy: An Enemies to Lovers Surprise Pregnancy Romance</h2>
        <div className="text-center py-8 w-full lg:w-[50%]">
          <p className="font-bold"> I never planned to start anything serious, let alone co-parenting with a stranger.</p>
          <p className="">
            In the world of one-night stands, we’re not supposed to exchange numbers. But rules were meant to be broken… unapologetically. As a retired NBA star turned billionaire, content in my own world, until I met Sarah- the one who shattered my
            defenses. One night of electric chemistry awakened a dormant desire within me. Now I can’t help but search for her in every crowd, intoxicated by her jasmine scent and sultry voice. Then, fate steps in, revealing the undeniable proof of
            our unforgettable night. Will this turn our fiery attraction into something lasting, or will it tear us apart?
          </p>
        </div>
        <Button
          onClick={() =>
            router.push(
              "https://www.amazon.com/One-Bossy-Baby-Daddy-Pregnancy-ebook/dp/B0CT4JS7C9/?_encoding=UTF8&pd_rd_w=7DKjh&content-id=amzn1.sym.cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_p=cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_r=147-5866834-6193418&pd_rd_wg=Wm8Hu&pd_rd_r=b60ef826-2743-4741-a3cc-cff892407cf1&ref_=aufs_ap_sc_dsk"
            )
          }
          title="Order Now"
          width="150px"
          height="55px"
          fontSize="24px"
        />
      </div>
      <div className="bg-white w-full h-auto lg:px-[8rem] px-[1rem] lg:py-[4rem] flex flex-col sidebar">
        <h1 className="text-2xl lg:text-4xl font-normal font-custom w-full my-3 text-center mt-8">ONE BOSSY FAKE MARRIAGE </h1>

        <div className="w-full flex flex-col">
          <div className="flex flex-col lg:flex-row w-full gap-8 items-center">
            <Image className="w-full lg:w-[60%]" src={bossy} alt="books" />
            <div className="flex flex-col w-full gap-8">
              <h1 className="font-custom text-4xl">One Bossy Fake Marriage : Ex&apos;s Brother Billionaire Romance</h1>
              <p className="font-semibold"> Marriages come with a lot of baggage, even fake ones. </p>
              <p>
                I never thought I&apos;d agree to a fake marriage, especially not with Noah, my ex-boyfriends billionaire brother. But when my financial situation took a turn for the worse, I had no choice. Noah was the CEO of the company where I
                worked, and he offered me financial security in exchange for a fake marriage. He was the sunshine and I was damaged and grumpy, but we were stuck with each other. As we spent more time together, I began to see Noah in a new light.
                Despite our differences, we began to develop feelings for each other. Just when things were going exceptionally, a whirlwind of obstacles made its way to us, including the arrival of my ex- boyfriend, Noah&apos;s jealous
                ex-girlfriend, and *drumroll* A surprise pregnancy! Will Noah and I be able to face these challenges and will our love for each other continue to grow?
              </p>
              <div>
                <Button onClick={() => router.push("https://www.amazon.com/One-Bossy-Fake-Marriage-Billionaire-ebook/dp/B0CC3PCCRT?ref_=ast_author_dp")} title="Order Now" width="200px" height="55px" fontSize="24px" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-8 my-[10rem] items-center">
          <Image className="w-full lg:w-[70%]" src={book2} alt="books" />
          <div className="flex flex-col w-full gap-8">
            <h1 className="font-custom text-4xl">One Bossy Tease: An Enemies to Lovers off-limits Age Gap Romance  </h1>
            <h2 className="font-semibold">With our age gap and his status as a billionaire, my boss is a forbidden fruit that I must taste.</h2>
            <p>
              I never expected to meet a possessive billionaire at work, but Alexander changed everything. Our initial clash {"}"}idn&apos;t go well, but I soon found{">"}myself working for him and living in his guest room. As our relationship grew,
              his possessiveness suffocated me, but we pushed through it during our romantic getaway. When I got a job that offered me an opportunity in California, we broke up, but he flew out to win me back. Despite facing Marcus, his business
              rival, and his ex-wife&apos;s return, we navigated our engagement to a lavish Manhattan wedding but will we get through our marriage? Or will the obstacles tear us apart?
            </p>
            <div>
              <Button onClick={() => router.push("https://www.amazon.com/One-Bossy-Tease-Enemies-off-limits-ebook/dp/B0CW1DWJ3P?ref_=ast_author_dp")} title="Order Now" width="200px" height="55px" fontSize="24px" />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse w-full gap-8 lg:my-[10rem] items-center mb-8">
          <Image className="w-full lg:w-[50%]" src={richbook} alt="books" />
          <div className="flex flex-col w-full gap-8">
            <h1 className="font-custom text-4xl">Filthy Rich Grump: A Brother&apos;s Best Friend Age Gap Romance  </h1>
            <h2 className="font-semibold">I am an influential billionaire, here I am about to face a test that money can’t solve…</h2>
            <p>
              I find myself locked in a custody battle with my son’s grandparents. Fighting to keep custody is how I’ve found myself embroiled in this new mess— My best friend has come up with an outrageous scheme to win the custody battle. Pretend
              to date his sister, so I look more like a family man. Lily is young, charismatic, and annoyingly hot. Only, here’s the problem… fake dating a woman I used to have a crush on? Disaster. Even worse, how can I convince the media that Lily
              and I are the real deal when we can barely stand each other? Having my secret crush under my roof is a death sentence. After our first kiss my groin has remained hypnotized beyond measure. How can this incredible kiss come from my best
              friend’s baby sister? And how can I admit that, beneath the hate, there’s a dangerous attraction bubbling just below the surface?
            </p>
            <div>
              <Button title="Read for Free" onClick={() => router.push("https://dl.bookfunnel.com/uvb9jhaccg")} width="200px" height="55px" fontSize="24px" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse w-full lg:my-[10rem] items-center justify-between px-[1rem] lg:px-[8rem] mt-9">
        <Image className="w-full h-full lg:w-[60%]" src={billionaire} alt="books" />
        <div className="flex flex-col w-full gap-8">
          <h1 className="font-custom text-4xl">One Bossy Billionaire Ex- Seal Protector  </h1>
          <h2 className="font-semibold">In the chaotic whirlwind of nanny duty for my bestie&apos;s brother&apos;s daughter.</h2>
          <p className="font-bold">Fate gets me stuck on the web of a billionaire Ex-Seal.</p>
          <p>
            Adrian is a tall and dangerously charming enigmatic figure oozing charisma and mystery. A brooding hunk of a romantic novel yet his presence is enough to make any woman weak in the knees, but beneath that cool exterior lies a depth
            that&apos;s as intriguing as it is intoxication. His gaze that could melt glaciers and his protective aura truly captivates me and have me rethink my game plan. Sure his billionaire status is intimidation but there&apos;s more to him than
            meets the eye. As a fiercely independent woman, I&apos;ve always kept my guard up, but yet Adrian&apos;s presence ignites a fire within me I can not resist then shatters my defenses faster than you can say{" "}
            <span className="font-bold"> “ Babysitter&apos;s dilemma,”</span> Sparks fly, challenges arise and suddenly, I&apos;m toeing the line between friendship and something much spicier. I am totally lost in the whirlwind of desire that&apos;s
            as irresistible as it is unexpected. Can I crack open the tough exterior of this damaged bossy ex-SEAL, melt the icy walls around his heart, showing him that vulnerability is the new sexy? Buckle up for a wild ride as we navigate the
            rollercoaster of passion, trust and unexpected romance. It&apos;s a journey you don&apos;t want to miss.
          </p>
          <div>
            <Button title="Order Now" onClick={() => router.push("https://www.amazon.com/One-Bossy-Billionaire-Ex-Seal-Protector-ebook/dp/B0D25ZDY9H?ref_=ast_author_dp")} width="200px" height="55px" fontSize="24px" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Review />
      </div>
    </section>
  );
};

export default ContemporaryRomance;
