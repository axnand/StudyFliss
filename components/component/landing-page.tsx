'use client';
import { CardContent, Card } from '../ui/card';
import {
  CarouselItem,
  Carousel,
  CarouselPrevious,
  CarouselNext,
  CarouselContent
} from '@/components/ui/carousel';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full max-w-7xl border-b mx-auto lg:py-24 py-12 border-b-primary/20 ">
        <div className="container space-y-10 px-8 md:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-primary/10  px-3 py-1.5 lg:text-sm text-xs dark:bg-primary/10 border border-primary/40 font-light w-fit ">
                Interactive Learning
              </div>
              <h1 className="lg:leading-tighter text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl text-balance">
                Unlock the <br></br>
                <span className="underline decoration-primary decoration-[6px] underline-offset-[4px] font-bold">
                  Power of Learning
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-foreground/50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-foreground/60">
                StudyFliss provides an immersive and interactive learning
                experience that captivates students, making education engaging
                and fun.
              </p>
            </div>
            <div className="mx-auto flex items-center justify-center p-4 sm:p-8">
              <Image
                alt="Image"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl border-b mx-auto lg:py-24 py-12 border-b-primary/20">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-4">
            <h2 className="lg:leading-tighter text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl text-balance">
              Features{' '}
              <span className="underline decoration-primary decoration-[6px] underline-offset-[4px] font-bold">
                that Inspire
              </span>
            </h2>
            <p className="mx-auto max-w-[600px] text-foreground/50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-foreground/60">
              Experience the platform that's transforming education with
              innovative features and cutting-edge technology.
            </p>
          </div>
          <div className="flex lg:justify-center lg:items-center items-center gap-8 lg:flex-row flex-wrap flex-col">
            <Card className="md:max-w-xs w-full lg:max-w-sm xl:max-w-sm border-primary/50 border-2">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col gap-2">
                  <BookOpenIcon className="mx-auto w-10 h-10" />
                  <h3 className="text-lg font-bold">Interactive Learning</h3>
                  <p className="text-sm text-foreground/40 dark:text-foreground/60">
                    Engage with dynamic content and immersive simulations.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="md:max-w-xs w-full lg:max-w-sm xl:max-w-sm border-primary/50 border-2">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col gap-2">
                  <BookOpenIcon className="mx-auto w-10 h-10" />
                  <h3 className="text-lg font-bold">Personalized Curriculum</h3>
                  <p className="text-sm text-foreground/40 dark:text-foreground/60">
                    Tailored learning paths to match individual progress.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="md:max-w-xs w-full lg:max-w-sm xl:max-w-sm border-primary/50 border-2">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col gap-2">
                  <BookOpenIcon className="mx-auto w-10 h-10" />
                  <h3 className="text-lg font-bold">
                    Real-time Progress Tracking
                  </h3>
                  <p className="text-sm text-foreground/40 dark:text-foreground/60">
                    Monitor performance and provide instant feedback.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl border-b mx-auto lg:py-24 py-12 border-b-primary/20">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">
              Trusted <span className="underline decoration-primary decoration-[6px] underline-offset-[4px] font-bold">by Educators</span>
            </h2>
            <p className="max-w-[600px] text-foreground/50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-foreground/60 mt-4">
              The platform for rapid progress. Let your team focus on shipping
              features instead of managing infrastructure with automated CI/CD,
              built-in testing, and integrated collaboration.
            </p>
          </div>
          <div className="mx-auto w-full lg:max-w-[600px] space-y-2 lg:order-last lg:mx-0 flex flex-row gap-4">
            <Carousel
              orientation="horizontal"
              className="flex flex-row gap-4 w-full rounded-2xl p-4 items-center justify-center h-full"
              opts={{
                autoplay: true,
                loop: true,
                draggable: true,
                
                responsive: [
                  {
                    breakpoint: 1024,
                    items: 3
                  },
                  {
                    breakpoint: 768,
                    items: 2
                  },
                  {
                    breakpoint: 640,
                    items: 1
                  }
                ],
                align: 'center',
                centerMode: true,
                centerPadding: '20px',
              }}
            >
              <CarouselContent>
                <CarouselItem className='flex justify-center items-stretch'>
                  <Card className=" w-full border-primary/50 border-2">
                    <CardContent className='flex flex-row gap-4 justify-center items-center h-[100%] w-full p-6'>
                      <img
                        alt="Avatar"
                        className="rounded-full object-cover object-center"
                        height="150"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: '150/150',
                          objectFit: 'cover'
                        }}
                        width="150"
                      />
                      <div className="space-y-1 col-span-2">
                        <p className="text-lg font-semibold">John Doe</p>
                        <p className="text-sm text-foreground/40 italic first-letter:text-xl dark:text-foreground/60">
                          "StudyFliss has transformed my classroom. My students
                          are more engaged and enthusiastic about learning. The
                          interactive lessons and personalized feedback have made
                          a significant difference in their academic progress."
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className='flex justify-center items-stretch'>
                  <Card className=" w-full border-primary/50 border-2">
                    <CardContent className='flex flex-row gap-4 justify-center items-center h-[100%] w-full p-6'>
                      <img
                        alt="Avatar"
                        className="rounded-full object-cover object-center"
                        height="150"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: '150/150',
                          objectFit: 'cover'
                        }}
                        width="150"
                      />
                      <div className="space-y-1 col-span-2">
                        <p className="text-lg font-semibold">Jane Smith</p>
                        <p className="text-sm text-foreground/40 italic first-letter:text-xl dark:text-foreground/60">
                          "As an educator, I'm always looking for ways to make
                          learning more engaging and effective. StudyFliss has
                          been a game-changer in my classroom. The platform's
                          interactive features and personalized curriculum have
                          allowed me to create dynamic and immersive learning
                          experiences for my students."
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className='flex justify-center items-stretch'>
                  <Card className=" w-full border-primary/50 border-2">
                    <CardContent className='flex flex-row gap-4 justify-center items-center h-[100%] w-full p-6'>
                      <img
                        alt="Avatar"
                        className="rounded-full object-cover object-center"
                        height="150"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: '150/150',
                          objectFit: 'cover'
                        }}
                        width="150"
                      />
                      <div className="space-y-1 col-span-2">
                        <p className="text-lg font-semibold">Emily Johnson</p>
                        <p className="text-sm text-foreground/40 italic first-letter:text-xl dark:text-foreground/60">
                          "I've been using StudyFliss to help my students learn
                          and retain information more effectively. The platform's
                          interactive lessons and personalized curriculum have
                          made learning fun and engaging for my students. They
                          love the gamified quizzes and the ability to interact
                          with the content."
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              {/* <CarouselPrevious />
              <CarouselNext /> */}
            </Carousel>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl border-b mx-auto lg:py-24 py-12 border-b-primary/20">
        <div className="container grid items-center gap-16 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Experience the workflow the best frontend teams love.
            </h2>
            <p className=" max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let your team focus on shipping features instead of managing
              infrastructure with automated CI/CD.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-4">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit">Sign Up</Button>
            </form>
            <p className="text-xs text-foreground/40 dark:text-foreground/60">
              Sign up to get notified when we launch.
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl border-b mx-auto lg:py-24 py-12 border-b-primary/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-16 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Performance
              </div>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Traffic spikes should be exciting, not scary.
              </h2>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Get Started
              </Link>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Security
              </div>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Fully managed infrastructure designed to scale dynamically with
                your traffic, a global edge to ensure your site is fast for
                every customer, and the tools to monitor every aspect of your
                app.
              </p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl border-b mx-auto lg:py-24 py-12 border-b-primary/20">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Experience the workflow the best frontend teams love.
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let your team focus on shipping features instead of managing
              infrastructure with automated CI/CD.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit">Sign Up</Button>
            </form>
            <p className="text-xs text-foreground/40 dark:text-foreground/60">
              Sign up to get notified when we launch.
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function BookOpenIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
