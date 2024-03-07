'use client';

import Separator from '@/components/ui/AuthForms/Separator';
import Button from '@/components/ui/Button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tables } from '@/types_db';
import { convertTimeString, formatDate } from '@/utils/helpers';
import {
    ArrowRightIcon,
    ArrowTopRightIcon,
    CalendarIcon,
    EnvelopeOpenIcon,
    PersonIcon
} from '@radix-ui/react-icons';
import Autoplay from 'embla-carousel-autoplay';
import {
    ClockIcon,
    GraduationCapIcon,
    LucideGraduationCap,
    Map,
    MapPinIcon,
    MapPinnedIcon,
    School,
    School2Icon,
    TagIcon
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaArrowRight, FaMapPin } from 'react-icons/fa6';
import { MdOutlineTimer } from 'react-icons/md';

export default function EventPageClient({
    event,
    recentEvents
}: {
    event: Tables<'events'>;
    recentEvents: Tables<'events'>[] | [];
}) {
    const router = useRouter();
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);
    return (
        <div className="flex flex-col min-h-[100dvh] mb-96">
            <main className="flex-1 px-4">
                <section className="w-full py-6 md:py-12 lg:py-12 xl:py-24 max-w-5xl mx-auto flex flex-col gap-8 pt-0 pb-0">
                    {/* <h1 className="lg:text-4xl tracking-tighter underline decoration-primary underline-offset-4 decoration-[4px] text-3xl text-center font-semibold line-clamp-1 transition-all duration-300 ease-in-out-sine">
                        {event.title ?? 'Unknown Event Title'}
                    </h1> */}
                    <Carousel
                        setApi={setApi}
                        orientation="horizontal"
                        className="flex-1 w-full h-full hover:cursor-grab relative border-2 border-primary/50 rounded-2xl"
                        opts={{
                            loop: true,
                            align: 'center',
                            duration: 35
                        }}
                    >
                        <CarouselContent className="-ml-0">
                            {event.images &&
                                event.images.map((image, index) => (
                                    <CarouselItem className="pl-0 overflow-hidden rounded-2xl">
                                        <img
                                            key={index}
                                            src={image}
                                            alt={'StudyFliss'}
                                            className="w-full object-scale-down aspect-video rounded-2xl"
                                        />
                                    </CarouselItem>
                                ))}
                            {event.images && event.images.length === 0 && (
                                <CarouselItem className="pl-0 overflow-hidden rounded-2xl">
                                    <img
                                        src="https://studyfliss.s3.ap-south-1.amazonaws.com/newreigncap_Design_a_ultra_HD_intriguing_and_futuristic_compute_1370d12f-b0de-404b-b79e-016782a9d0ff-a114f97880e75148823baeea3c6feefe8535366e57cb16732e95d39f8418c108.png"
                                        alt="StudyFliss"
                                        className="w-full object-scale-down aspect-video rounded-2xl hue-rotate-[20deg]"
                                    />
                                </CarouselItem>
                            )}
                        </CarouselContent>
                        <CarouselNext className="mr-20" />
                        <CarouselPrevious className="ml-20" />
                    </Carousel>
                    <div className="flex lg:flex-row flex-col gap-8 relative">
                        <Card key={event.id} className="h-full basis-2/3">
                            <CardContent className="first:p-0 flex flex-col justify-start items-start h-full">
                                <div className="flex flex-col gap-4 p-6 flex-1 ">
                                    <div className="flex flex-row items-start gap-4 sticky pb-2">
                                        <img
                                            src={
                                                event.images?.[0] ??
                                                '/logos/circle/svgexport-27.svg'
                                            }
                                            alt={event.title ?? 'StudyFliss'}
                                            className="size-28 sm:block hidden object-center object-cover aspect-square rounded-2xl border-2 border-primary/50 hover:border-primary/70 transition-all duration-300 ease-in-out-sine select-none"
                                            draggable={false}
                                        />
                                        <div className="flex flex-col gap-2">
                                            <h1 className="lg:text-2xl text-lg font-semibold line-clamp-1 transition-all duration-300 ease-in-out-sine">
                                                {event.title ??
                                                    'Unknown Event Title'}
                                            </h1>
                                            <div className="flex flex-row gap-2 items-center justify-start">
                                                <Map className="lg:size-6 size-5" />
                                                <span className="lg:text-md text-sm text-foreground/90 hover:text-foreground transition-all duration-300 ease-in-out-sine line-clamp-1">
                                                    {event.location ??
                                                        'Event location not provided'}
                                                </span>
                                            </div>
                                            <div className="inline-flex gap-2 items-center">
                                                <CalendarIcon className="lg:size-6 size-5" />
                                                <span className="lg:text-md text-sm text-foreground/90 hover:text-foreground transition-all duration-300 ease-in-out-sine">
                                                    {formatDate(
                                                        new Date(
                                                            event.date ??
                                                                '1970-01-01'
                                                        )
                                                    )}
                                                    ,{' '}
                                                    {convertTimeString(
                                                        event.time ?? '00:00:00'
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <Separator text="" className='opacity-50' /> */}
                                    <Tabs
                                        defaultValue="description"
                                        className="w-full flex flex-col gap-2"
                                    >
                                        <TabsList className="bg-transparent h-full items-start justify-start gap-2 flex-wrap p-0">
                                            <TabsTrigger
                                                value="description"
                                                className="px-6 lg:text-base text-sm tracking-tight font-bold py-1 data-[state=active]:border-primary/50 border-2 data-[state=active]:bg-primary/5 border-accent text-foreground/90 transition-all duration-300 ease-in-out-sine"
                                            >
                                                Description
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="host"
                                                className="px-6 lg:text-base text-sm tracking-tight font-bold py-1 data-[state=active]:border-primary/50 border-2 data-[state=active]:bg-primary/5 border-accent text-foreground/90 transition-all duration-300 ease-in-out-sine"
                                            >
                                                Host Details
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="tags"
                                                className="px-6 lg:text-base text-sm tracking-tight font-bold py-1 data-[state=active]:border-primary/50 border-2 data-[state=active]:bg-primary/5 border-accent text-foreground/90 transition-all duration-300 ease-in-out-sine"
                                            >
                                                Tags
                                            </TabsTrigger>
                                        </TabsList>
                                        <TabsContent
                                            value="description"
                                            className="text-foreground/90 whitespace-pre-wrap"
                                        >
                                            {event.description}
                                        </TabsContent>
                                        <TabsContent value="host">
                                            <div className="flex flex-row flex-wrap md:gap-x-16 gap-4 items-center justify-start text-foreground/90">
                                                <div className="inline-flex flex-col lg:gap-2 gap-1">
                                                    <h1 className="lg:text-xl text-lg tracking-tight font-bold">
                                                        Name
                                                    </h1>
                                                    <div className="flex flex-row gap-2 items-start justify-between">
                                                        <PersonIcon className="lg:size-6 size-5" />
                                                        <span className="lg:text-lg text-sm text-foreground/90 tracking-tight">
                                                            {(
                                                                JSON.parse(
                                                                    JSON.stringify(
                                                                        event.host_data
                                                                    )
                                                                ) as Tables<'users'>
                                                            )?.full_name ??
                                                                'Unknown'}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="inline-flex flex-col lg:gap-2 gap-1">
                                                    <h1 className="lg:text-xl text-lg tracking-tight font-bold">
                                                        College
                                                    </h1>
                                                    <div className="flex flex-row gap-2 items-start justify-between">
                                                        <LucideGraduationCap className="lg:size-6 size-5" />
                                                        <span className="lg:text-lg text-sm line-clamp-1 text-foreground/90 tracking-tight">
                                                            {(
                                                                JSON.parse(
                                                                    JSON.stringify(
                                                                        event.host_data
                                                                    )
                                                                ) as Tables<'users'>
                                                            )?.college ??
                                                                'Unknown'}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="inline-flex flex-col lg:gap-2 gap-1">
                                                    <h1 className="lg:text-xl text-lg tracking-tight font-bold">
                                                        Contact Info
                                                    </h1>
                                                    <div className="flex flex-row gap-2 items-start justify-between">
                                                        <EnvelopeOpenIcon className="lg:size-6 size-5" />
                                                        <Link
                                                            href={`mailto:${JSON.parse(JSON.stringify(event.host_data))?.email ?? 'harjjotsinghh@gmail.com'}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <span className="lg:text-lg text-sm text-foreground/90 tracking-tight">
                                                                {(
                                                                    JSON.parse(
                                                                        JSON.stringify(
                                                                            event.host_data
                                                                        )
                                                                    ) as Tables<'users'>
                                                                )?.email ??
                                                                    'Unknown'}
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabsContent>
                                        {event.tags && (
                                            <TabsContent value="tags">
                                                <div className="flex gap-2 items-start flex-col">
                                                    <div className="flex gap-3 flex-wrap">
                                                        {event.tags.map(
                                                            (tag) => (
                                                                <Link
                                                                    href={`/events?tags=${tag}`}
                                                                >
                                                                    <Badge
                                                                        key={
                                                                            tag
                                                                        }
                                                                        variant="outline"
                                                                        className="inline-flex items-center gap-1 rounded-md px-3 py-1 font-semibold text-foreground/90 bg-primary/5 hover:bg-primary/15 transition-all duration-300 ease-in-out-sine capitalize lg:text-md text-sm"
                                                                    >
                                                                        <TagIcon className="size-4" />
                                                                        {tag}
                                                                    </Badge>
                                                                </Link>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </TabsContent>
                                        )}
                                    </Tabs>
                                </div>
                            </CardContent>
                        </Card>
                        <Card
                            key={event.id}
                            className="h-full basis-1/3 sticky top-40 gap-11"
                        >
                            <CardContent className="first:p-0 flex flex-col justify-start items-start h-full">
                                <div className="flex flex-col gap-4 p-6 flex-1 w-full">
                                    {/* <h1 className="lg:text-2xl text-lg font-semibold line-clamp-1 underline underline-offset-4 decoration-primary/50 decoration-[3px] transition-all duration-300 ease-in-out-sine">
                                        {event.title ?? 'Unknown Event Title'}
                                    </h1> */}
                                    <div className="flex flex-col gap-2 w-full items-start justify-start">
                                        <div className="flex flex-row gap-2 items-center justify-start">
                                            <Map className="lg:size-6 size-5" />
                                            <span className="lg:text-lg text-md text-foreground/90 hover:text-foreground transition-all duration-300 ease-in-out-sine">
                                                {event.location ??
                                                    'Event location not provided'}
                                            </span>
                                        </div>
                                        <div className="inline-flex gap-2 items-center">
                                            <CalendarIcon className="lg:size-6 size-5" />
                                            <span className="lg:text-lg text-md text-foreground/90 hover:text-foreground transition-all duration-300 ease-in-out-sine">
                                                {formatDate(
                                                    new Date(
                                                        event.date ??
                                                            '1970-01-01'
                                                    )
                                                )}
                                            </span>
                                        </div>
                                        <div className="inline-flex gap-2 items-center">
                                            <ClockIcon className="lg:size-6 size-5" />
                                            <span className="lg:text-lg text-md text-foreground/90 hover:text-foreground transition-all duration-300 ease-in-out-sine">
                                                {convertTimeString(
                                                    event.time ?? '00:00:00'
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-foreground/90 lg:leading-6 leading-5 line-clamp-3 lg:text-md text-sm">
                                        Interested in attending
                                        <br />
                                        <span className="font-bold line-clamp-1 -mt-1 lg:text-xl text-lg">
                                            {event.title ??
                                                'Unknown Event Title'}
                                            ?
                                        </span>
                                    </p>
                                    <Link
                                        href={event.registration_link ?? '#'}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="lg:text-lg text-base w-full mt-2"
                                    >
                                        <Button
                                            variant={'outline'}
                                            type="submit"
                                            className={
                                                'group border-primary/50 hover:bg-primary/[0.02] border-2 lg:py-6 lg:px-6 py-6 px-4 lg:text-lg text-md tracking-tighter rounded-xl transition-all duration-300 ease-in-out-sine shadow-md hover:shadow-lg shadow-primary/20 hover:shadow-primary/40 w-full'
                                            }
                                        >
                                            <span className="inline-flex flex-row gap-2 items-center justify-center font-bold">
                                                Register Now{' '}
                                                <FaArrowRight className="size-4 group-hover:-rotate-45 transition-all duration-500 ease-in-out-sine" />
                                            </span>
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
                {recentEvents.length > 0 && (
                    <section className="w-full max-w-5xl mx-auto flex flex-col gap-8 pt-0 ">
                        <h1 className="-mt-2 lg:leading-tighter text-4xl font-medium tracking-tighter sm:text-5xl md:text-6xl text-balance">
                            Recent{' '}
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
                                            <Link
                                                href={`/events/${event.slug}`}
                                            >
                                                <CarouselContent className="-ml-0">
                                                    {event.images &&
                                                        event.images.map(
                                                            (image, index) => (
                                                                <CarouselItem className="pl-0">
                                                                    <img
                                                                        key={
                                                                            index
                                                                        }
                                                                        src={
                                                                            image
                                                                        }
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
                                            <Link
                                                href={`/events/${event.slug}`}
                                            >
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
                                                        {event.location ??
                                                            'Online'}
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
                    </section>
                )}
                <section className=" max-w-5xl mx-auto flex flex-col gap-8 pt-8 w-full">
                    <Link href={`/events`}>
                        <Button
                            variant={'outline'}
                            type="submit"
                            className={
                                'group border-primary/50 hover:bg-primary/[0.02] border-2 lg:py-8 lg:px-6 py-6 px-4 lg:text-lg text-md tracking-tighter rounded-xl transition-all duration-300 ease-in-out-sine xl:w-[calc(50%-1rem)] w-full'
                            }
                        >
                            <span className="inline-flex flex-row gap-2 items-center justify-center font-bold">
                                Browse All Events{' '}
                                <FaArrowRight className="size-4 group-hover:-rotate-45 transition-all duration-500 ease-in-out-sine" />
                            </span>
                        </Button>
                    </Link>
                </section>
            </main>
        </div>
    );
}
