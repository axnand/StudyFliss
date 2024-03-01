'use client';

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
import { EnvelopeOpenIcon, PersonIcon } from '@radix-ui/react-icons';
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
import { FaMapPin } from 'react-icons/fa6';

export default function EventPageClient({
    event
}: {
    event: Tables<'events'>;
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
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1 px-8">
                <section className="w-full py-6 md:py-12 lg:py-12 xl:py-24 max-w-5xl mx-auto flex flex-col gap-8 pt-0">
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
                                            className="w-full object-cover aspect-video rounded-2xl"
                                        />
                                    </CarouselItem>
                                ))}
                            {event.images && event.images.length === 0 && (
                                <CarouselItem className="pl-0 overflow-hidden rounded-2xl">
                                    <img
                                        src="https://studyfliss.s3.ap-south-1.amazonaws.com/newreigncap_Design_a_ultra_HD_intriguing_and_futuristic_compute_1370d12f-b0de-404b-b79e-016782a9d0ff-a114f97880e75148823baeea3c6feefe8535366e57cb16732e95d39f8418c108.png"
                                        alt="StudyFliss"
                                        className="w-full object-cover aspect-video rounded-2xl hue-rotate-[20deg]"
                                    />
                                </CarouselItem>
                            )}
                        </CarouselContent>
                        <CarouselNext className="mr-16" />
                        <CarouselPrevious className="ml-16" />
                    </Carousel>
                    <div className="flex lg:flex-row flex-col gap-8">
                        <Card key={event.id} className="h-full basis-2/3">
                            <CardContent className="first:p-0 flex flex-col justify-start items-start h-full">
                                <div className="flex flex-col gap-4 p-6 flex-1">
                                    <div className="flex flex-row items-start gap-4">
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
                                            <div className="flex flex-row gap-2 items-center justify-between">
                                                <Map className="size-6" />
                                                <span className="lg:text-md text-sm text-foreground/90 hover:text-foreground transition-all duration-300 ease-in-out-sine">
                                                    {event.location ??
                                                        'Event location not provided'}
                                                </span>
                                            </div>
                                            <div className="inline-flex gap-2 items-center">
                                                <ClockIcon className="lg:size-6 size-5" />
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
                                        <TabsContent value="description" className='text-foreground/90'>
                                            {event.description}
                                        </TabsContent>
                                        <TabsContent value="host">
                                            <div className="flex flex-row flex-wrap md:gap-x-16 gap-4 items-center justify-start text-foreground/90">
                                                <div className="inline-flex flex-col lg:gap-2 gap-1">
                                                    <h1 className='lg:text-xl text-lg tracking-tight font-bold'>Name</h1>
                                                    <div className='flex flex-row gap-2 items-start justify-between'>
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
                                                    <h1 className='lg:text-xl text-lg tracking-tight font-bold'>College</h1>
                                                    <div className='flex flex-row gap-2 items-start justify-between'>
                                                        <LucideGraduationCap className="lg:size-6 size-5" />
                                                        <span className="lg:text-lg text-sm text-foreground/90 tracking-tight">
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
                                                    <h1 className='lg:text-xl text-lg tracking-tight font-bold'>Contact Info</h1>
                                                    <div className='flex flex-row gap-2 items-start justify-between'>
                                                        <EnvelopeOpenIcon className="lg:size-6 size-5" />
                                                        <Link href={`mailto:${JSON.parse(JSON.stringify(event.host_data))?.email ?? "harjjotsinghh@gmail.com"}`} target='_blank' rel='noopener noreferrer'>
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
                                                    {event.tags.map((tag) => (
                                                        <Link href={`/events?tags=${tag}`}>
                                                            <Badge
                                                                key={tag}
                                                                variant="outline"
                                                                className="inline-flex items-center gap-1 rounded-md px-3 py-1 font-semibold text-foreground/90 bg-primary/5 hover:bg-primary/15 transition-all duration-300 ease-in-out-sine capitalize lg:text-md text-sm"
                                                            >
                                                                <TagIcon className="size-4" />
                                                                {tag}
                                                            </Badge>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </TabsContent>
                                    )}
                                    </Tabs>
                                    
                                    
                                </div>
                            </CardContent>
                        </Card>
                        <Card key={event.id} className="h-full basis-1/3">
                            <CardContent className="first:p-0 flex flex-col justify-center items-center h-full">
                                <div className="flex flex-col gap-2 p-6 flex-1">
                                        <h1 className="lg:text-2xl text-lg font-semibold line-clamp-1 underline underline-offset-4 decoration-primary/50 decoration-[3px] transition-all duration-300 ease-in-out-sine">
                                            {event.title ??
                                                'Unknown Event Title'}
                                        </h1>
                                    <p className="text-foreground/90 lg:leading-6 leading-5 line-clamp-3 lg:text-md text-sm">
                                        Interested in participating in <span className='font-bold'>{event.title ?? 'Unknown Event Title'}</span>?
                                    </p>

                                    <div className="flex flex-row gap-2 items-center justify-between text-foreground/90">
                                        <div className="inline-flex gap-2 items-center">
                                            <ClockIcon className="lg:size-6 size-5" />
                                            <span className="lg:text-lg text-sm text-foreground/90">
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
                                        {/* <div className="inline-flex gap-2 items-center">
                                                        <MdOutlineTimer className="lg:size-6 size-5" />
                                                        <span className="lg:text-lg text-sm text-foreground/90">
                                                            {convertTimeString(
                                                                event.time ??
                                                                    '00:00:00'
                                                            )}
                                                        </span>
                                                    </div> */}
                                    </div>
                                    <h1 className="lg:text-xl text-md font-semibold">
                                        Host Details
                                    </h1>
                                    <div className="flex flex-row gap-2 items-center justify-between text-foreground/90">
                                        <div className="inline-flex gap-2 items-center">
                                            <PersonIcon className="lg:size-6 size-5" />
                                            <span className="lg:text-lg text-sm text-foreground/90">
                                                {(
                                                    JSON.parse(
                                                        JSON.stringify(
                                                            event.host_data
                                                        )
                                                    ) as Tables<'users'>
                                                )?.full_name ?? 'Unknown'}
                                            </span>
                                        </div>
                                        {/* <div className="inline-flex gap-2 items-center">
                                                        <EnvelopeOpenIcon className="lg:size-6 size-5" />
                                                        <span className="lg:text-lg text-sm text-foreground/90">
                                                            {(
                                                                JSON.parse(
                                                                    JSON.stringify(
                                                                        event.host_data
                                                                    )
                                                                ) as Tables<'users'>
                                                            ).email ?? 'Unknown'}
                                                        </span>
                                                    </div> */}
                                    </div>
                                    {event.tags && (
                                        <>
                                            <h1 className="lg:text-xl text-md font-semibold">
                                                Event Tags
                                            </h1>
                                            <div className="flex gap-2 items-start flex-col">
                                                <div className="flex gap-3 flex-wrap">
                                                    {event.tags.map((tag) => (
                                                        <Badge
                                                            key={tag}
                                                            variant="outline"
                                                            className="inline-flex items-center gap-1 rounded-md px-3 py-1 font-semibold text-foreground/90 bg-primary/5 hover:bg-primary/10 transition-all duration-300 ease-in-out-sine capitalize lg:text-md text-sm"
                                                        >
                                                            <TagIcon className="size-4" />
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
        </div>
    );
}
