'use client';
import { Card, CardContent } from '@/components/ui/card';
import { CircleDollarSign  } from 'lucide-react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { MdAutoGraph } from 'react-icons/md';

export default function GrowthSFPage() {
    return (
        <div className="flex flex-col mb-96 lg:mb-48">
            <section className="w-full mx-auto max-w-7xl  lg:py-24 py-12 ">
                <div className="container grid items-center gap-4 px-4 text-center lg:gap-10">
                    <div className="space-y-4">
                        <h2 className="lg:leading-tighter text-4xl font-medium tracking-tighter sm:text-5xl md:text-6xl text-balance">
                            Introducing{' '}
                            <span className="underline decoration-primary decoration-[6px] underline-offset-[4px] font-bold">
                                Growth SF
                            </span>
                        </h2>
                        <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-foreground/90 mt-4">
                            Coming soon!
                        </p>
                    </div>
                    <div className=" grid items-center gap-8 text-center lg:grid-cols-[1fr_1fr] lg:gap-8 xl:grid-cols-[1fr_1fr]">
                        <Card className="lg:p-0 p-6">
                            <CardContent className="space-y-4 lg:p-12 p-0">
                                <CalendarIcon className="mx-auto lg:size-16 size-12 mb-4" />
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                                        Upcoming Events
                                    </h2>
                                    <p className="mx-auto max-w-[600px] text-foreground/80 dark:text-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Our website provides updated notes,
                                        datesheets, syllabus and other
                                        information for students to study and
                                        learn.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="lg:p-0 p-6">
                            <CardContent className="space-y-4 lg:p-12 p-0">
                                <MdAutoGraph className="mx-auto lg:size-16 size-12 mb-4" />
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                                        Build Your Resume
                                    </h2>
                                    <p className="mx-auto max-w-[600px] text-foreground/80 dark:text-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Out website provides detailed
                                        examination analysis which helps
                                        students understand exam patterns and
                                        prepare for the exam.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="lg:p-0 p-6">
                            <CardContent className="space-y-4 lg:p-12 p-0">
                                <CircleDollarSign className="mx-auto lg:size-16 size-12 mb-4" />
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                                        Paid Interships
                                    </h2>
                                    <p className="mx-auto max-w-[600px] text-foreground/80 dark:text-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Our website provides the latest events'
                                        details for students to stay updated
                                        about all the upcoming events amd not
                                        miss any opportunity.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        
                    </div>
                </div>
            </section>
            {/* <section className="w-full max-w-7xl mx-auto lg:py-24 py-12">
                <div className="container grid items-center gap-6 px-4 lg:grid-cols-2 lg:gap-10">
                    <div className="space-y-4">
                        <h1 className="-mt-2 lg:leading-tighter text-4xl font-medium tracking-tighter sm:text-5xl md:text-6xl text-balance">
                            Trusted by{' '}
                            <span className="underline decoration-primary decoration-[6px] underline-offset-[4px] font-bold">
                                Educators
                            </span>
                        </h1>
                        <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-foreground/90 mt-4">
                            Our platform has been verified by many educators and teachers. Educators highly recommend StudyFliss to their students in order to help them in their college journey.
                        </p>
                    </div>
                    <div className="mx-auto w-full lg:max-w-[600px] space-y-2 lg:order-last lg:mx-0 flex flex-row gap-4">
                        <Carousel
                            orientation="horizontal"
                            className="flex flex-row gap-4 w-full rounded-2xl items-center justify-center h-full"
                            opts={{
                                loop: true,
                                align: 'center',
                                duration: 35
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 5000,
                                    playOnInit: true,
                                    stopOnMouseEnter: false,
                                    stopOnFocusIn: false,
                                    stopOnInteraction: false
                                })
                            ]}
                        >
                            <CarouselContent className="-ml-2">
                                <CarouselItem className="pl-4 flex justify-center items-stretch">
                                    <Card className=" w-full border-primary/50 border-2">
                                        <CardContent className=" flex lg:flex-row flex-col gap-4 justify-center items-center h-[100%] w-full lg:p-6 p-4">
                                            <div className="flex gap-0 flex-col lg:items-start items-center">
                                                <p className="lg:text-2xl text-xl font-semibold lg:text-left text-center mb-2">
                                                    John Doe
                                                </p>
                                                <p className="lg:text-lg text-base leading-relaxed text-foreground/80 italic dark:text-foreground/90">
                                                    "StudyFliss has transformed
                                                    my classroom. My students
                                                    are more engaged and
                                                    enthusiastic about learning.
                                                    The interactive lessons and
                                                    personalized feedback have
                                                    made a significant
                                                    difference in their academic
                                                    progress."
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className="pl-4 flex justify-center items-stretch">
                                    <Card className=" w-full border-primary/50 border-2">
                                        <CardContent className="flex lg:flex-row flex-col gap-4 justify-center items-center h-[100%] w-full lg:p-6 p-4">
                                            <div className="flex gap-0 flex-col lg:items-start items-center">
                                                <p className="lg:text-2xl text-xl font-semibold lg:text-left text-center mb-2">
                                                    Jane Smith
                                                </p>
                                                <p className="lg:text-lg text-base leading-relaxed text-foreground/80 italic dark:text-foreground/90">
                                                    "As an educator, I'm always
                                                    looking for ways to make
                                                    learning more engaging and
                                                    effective. StudyFliss has
                                                    been a game-changer in my
                                                    classroom. The platform's
                                                    interactive features and
                                                    personalized curriculum have
                                                    allowed me to create dynamic
                                                    and immersive learning
                                                    experiences for my
                                                    students."
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className="pl-4 flex justify-center items-stretch">
                                    <Card className=" w-full border-primary/50 border-2">
                                        <CardContent className="flex lg:flex-row flex-col gap-4 justify-center items-center h-[100%] w-full lg:p-6 p-4">
                                            <div className="flex gap-0 flex-col lg:items-start items-center">
                                                <p className="lg:text-2xl text-xl font-semibold lg:text-left text-center mb-2">
                                                    Emily Johnson
                                                </p>
                                                <p className="lg:text-lg text-base leading-relaxed text-foreground/80 italic dark:text-foreground/90">
                                                    "I've been using StudyFliss
                                                    to help my students learn
                                                    and retain information more
                                                    effectively. The platform's
                                                    interactive lessons and
                                                    personalized curriculum have
                                                    made learning fun and
                                                    engaging for my students.
                                                    They love the gamified
                                                    quizzes and the ability to
                                                    interact with the content."
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </section> */}
            {/* {recentEvents.length > 0 && (
                <section className="w-full max-w-7xl mx-auto flex flex-col gap-8 pt-0 px-4 lg:py-24 py-12 border-t border-t-primary/20">
                    <h1 className="-mt-2 lg:leading-tighter text-4xl font-medium tracking-tighter sm:text-5xl md:text-6xl text-pretty">
                        Recently Added{' '}
                        <span className="underline decoration-primary decoration-[6px] underline-offset-[4px] font-bold">
                            Events
                        </span>
                    </h1>
                    <div className="grid xl:grid-cols-2 grid-cols-1 gap-8 ">
                        {recentEvents.map((event) => (
                            <Card key={event.id} className="h-full">
                                <CardContent className="first:p-0 flex flex-col justify-center items-center h-full">
                                    <Carousel
                                        orientation="horizontal"
                                        className=" w-full h-full hover:cursor-pointer relative"
                                        opts={{
                                            loop: true,
                                            align: 'center',
                                            duration: 35
                                        }}
                                        plugins={[
                                            Autoplay({
                                                delay: 3000,
                                                playOnInit: true,
                                                stopOnMouseEnter: false,
                                                stopOnFocusIn: false,
                                                stopOnInteraction: false
                                            })
                                        ]}
                                    >
                                        <Link href={`/events/${event.slug}`}>
                                            <CarouselContent className="-ml-0">
                                                {event.images &&
                                                    event.images.map(
                                                        (image, index) => (
                                                            <CarouselItem className="pl-0">
                                                                <img
                                                                    key={index}
                                                                    src={image}
                                                                    alt={
                                                                        'StudyFliss'
                                                                    }
                                                                    className="lg:h-[150px] h-[150px] w-full object-cover rounded-t-xl"
                                                                />
                                                            </CarouselItem>
                                                        )
                                                    )}
                                                {event.images &&
                                                    event.images.length ===
                                                        0 && (
                                                        <CarouselItem className="pl-0">
                                                            <img
                                                                src="https://studyfliss.s3.ap-south-1.amazonaws.com/newreigncap_Design_a_ultra_HD_intriguing_and_futuristic_compute_1370d12f-b0de-404b-b79e-016782a9d0ff-a114f97880e75148823baeea3c6feefe8535366e57cb16732e95d39f8418c108.png"
                                                                alt="StudyFliss"
                                                                className="lg:h-[150px] h-[150px] w-full object-cover rounded-t-xl hue-rotate-[20deg]"
                                                            />
                                                        </CarouselItem>
                                                    )}
                                            </CarouselContent>
                                        </Link>
                                        <div
                                            className="absolute lg:h-[150px] h-[150px] w-full top-0 inset-0 bg-gradient-to-t from-background via-background/30 transition-all duration-300 ease-in-out-sine to-transparent"
                                            onClick={() =>
                                                router.push(
                                                    `/events/${event.slug}`
                                                )
                                            }
                                        />
                                    </Carousel>
                                    <div className="flex flex-col gap-2 p-6 flex-1">
                                        <Link href={`/events/${event.slug}`}>
                                            <h1 className="lg:text-2xl text-lg font-semibold line-clamp-1 underline underline-offset-4 decoration-primary/60 hover:decoration-primary decoration-[3px] transition-all duration-300 ease-in-out-sine">
                                                {event.title}
                                            </h1>
                                        </Link>
                                        <p className="text-foreground/80 lg:leading-6 leading-5 line-clamp-3 lg:text-md text-sm">
                                            {event.description}
                                        </p>
                                        <h1 className="lg:text-xl text-md font-semibold">
                                            Event Details
                                        </h1>
                                        <div className="flex flex-row gap-2 items-center justify-between text-foreground/90">
                                            <div className="inline-flex gap-2 items-center">
                                                <MapPinIcon className="lg:size-6 size-5" />
                                                <span className="lg:text-lg text-sm">
                                                    {event.location ?? 'Online'}
                                                </span>
                                            </div>
                                            <div className="inline-flex gap-2 items-center">
                                                <CalendarIcon className="lg:size-6 size-5" />
                                                <span className="lg:text-lg text-sm">
                                                    {formatDate(
                                                        new Date(
                                                            event.date ??
                                                                '1970-01-01'
                                                        )
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <Link href={`/events`}>
                        <Button
                            variant={'outline'}
                            type="submit"
                            className={
                                'group border-primary/50 hover:bg-primary/[0.02] border-2 lg:py-8 lg:px-6 py-6 px-4 lg:text-lg text-md tracking-tighter rounded-xl transition-all duration-300 ease-in-out-sine w-full'
                            }
                        >
                            <span className="inline-flex flex-row gap-2 items-center justify-center font-bold">
                                Browse All Events{' '}
                                <FaArrowRight className="size-4 group-hover:-rotate-45 transition-all duration-500 ease-in-out-sine" />
                            </span>
                        </Button>
                    </Link>
                </section>
            )} */}

            {/* <section className="w-full max-w-7xl border-b mx-auto lg:py-24 py-12 border-b-primary/20">
        <div className="container grid items-center gap-16 px-4 lg:grid-cols-2 lg:gap-10">
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
            <p className="text-xs text-foreground/40 dark:text-foreground/90">
              Sign up to get notified when we launch.
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl border-b mx-auto lg:py-24 py-12 border-b-primary/20">
        <div className="container px-4">
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
            <p className="text-xs text-foreground/40 dark:text-foreground/90">
              Sign up to get notified when we launch.
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section> */}
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
