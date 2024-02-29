'use client';

import { useEffect, useState } from 'react';
import { Tables } from '@/types_db';
import { createClient } from '@/utils/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from '@/components/ui/pagination';
import { max } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ClockIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons';
import { MdOutlineTimer } from 'react-icons/md';
import { PersonIcon } from '@radix-ui/react-icons';
import { TagIcon } from 'lucide-react';

function formatDate(dateObject: Date) {
    const options = {
        month: 'long',
        year: 'numeric'
    } as Intl.DateTimeFormatOptions;

    const dateFormatter = new Intl.DateTimeFormat('en-US', options);
    const formattedDateString = dateFormatter.format(dateObject);

    const day = dateObject.getDate();
    const suffix = getDaySuffix(day);

    return day + suffix + ' ' + formattedDateString;
}

function getDaySuffix(day: number) {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    switch (day % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

function convertTimeString(inputTimeString: string) {
    const [hours, minutes, seconds] = inputTimeString.split(':').map(Number);

    let period = 'AM';
    let formattedHours = hours;

    if (hours >= 12) {
        period = 'PM';
        formattedHours = hours === 12 ? 12 : hours - 12;
    }

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${period}`;
}

export default function EventsPage({ events }: { events: Tables<'events'>[] }) {
    const router = useRouter();
    const [filteredEvents, setFilteredEvents] = useState<Tables<'events'>[]>(
        []
    );
    const [dateFilter, setDateFilter] = useState<string | null>(null);
    const [tagFilter, setTagFilter] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 10;

    useEffect(() => {
        // Apply filters
        let filtered = [...events];

        if (dateFilter) {
            filtered = filtered.filter((event) => event.date === dateFilter);
        }

        if (tagFilter) {
            filtered = filtered.filter((event) =>
                event.tags?.includes(tagFilter)
            );
        }

        setFilteredEvents(filtered);
    }, [events, dateFilter, tagFilter]);

    const handleDateFilterChange = (value: string) => {
        setDateFilter(value);
        setCurrentPage(1); // Reset to first page when changing filters
    };

    const handleTagFilterChange = (value: string) => {
        setTagFilter(value);
        setCurrentPage(1); // Reset to first page when changing filters
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
        <div className="flex flex-col min-h-[100dvh] pb-24">
            <main className="flex-1">
                <section className="w-full py-6 md:py-12 lg:py-20 xl:py-24">
                    <div className="overflow-clip relative container flex lg:flex-row flex-col items-center justify-center px-4 space-y-4 md:px-6 lg:space-y-10">
                        <div className="text-center">
                            <h1 className="-mt-2 lg:leading-tighter text-4xl font-medium tracking-tighter sm:text-5xl md:text-6xl text-balance">
                                Browse{' '}
                                <span className="underline decoration-primary decoration-[6px] underline-offset-[4px] font-bold">
                                    Events
                                </span>
                            </h1>
                            <p className="mx-auto max-w-[70ch] mt-4 text-foreground/40 dark:text-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Explore the latest events happening in your
                                area. Check out the upcoming events and register
                                for them.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-2 max-w-7xl mx-auto px-8 flex flex-col gap-8">
                    <div className="grid xl:grid-cols-2 grid-cols1 gap-8 ">
                        {/* <Select
                            placeholder="Filter by Date"

                            onChange={handleDateFilterChange}
                        />
                        <Select
                            placeholder="Filter by Tag"

                            onChange={handleTagFilterChange}
                        /> */}

                        {filteredEvents
                            .slice(startIndex, endIndex)
                            .map((event) => (
                                <Card key={event.id} className='h-full'>
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
                                                                        className="h-[250px] w-full object-cover rounded-t-xl"
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
                                                                    className="h-[250px] w-full object-cover rounded-t-xl hue-rotate-[20deg]"
                                                                />
                                                            </CarouselItem>
                                                        )}
                                                </CarouselContent>
                                            </Link>
                                            <div
                                                className="absolute h-[250px] w-full top-0 inset-0 bg-gradient-to-t from-background via-background/30 transition-all duration-300 ease-in-out-sine to-transparent"
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
                                                <h1 className="lg:text-2xl text-xl font-semibold line-clamp-1 underline underline-offset-4 decoration-primary/60 hover:decoration-primary decoration-[3px] transition-all duration-300 ease-in-out-sine">
                                                    {event.title}
                                                </h1>
                                            </Link>
                                            <p className="text-foreground/80 lg:leading-6 leading-5 line-clamp-3 lg:text-md text-sm">
                                                {event.description}
                                            </p>
                                            <h1 className="lg:text-xl text-lg font-semibold">
                                                Event Details
                                            </h1>
                                            <div className="flex flex-row gap-2 items-center justify-between text-foreground/90">
                                                <div className="inline-flex gap-2 items-center">
                                                    <ClockIcon className="size-6" />
                                                    <span className="lg:text-lg text-md">
                                                        {formatDate(
                                                            new Date(
                                                                event.date ??
                                                                    '1970-01-01'
                                                            )
                                                        )}
                                                        ,{' '}
                                                        {convertTimeString(
                                                            event.time ??
                                                                '00:00:00'
                                                        )}
                                                    </span>
                                                </div>
                                                {/* <div className="inline-flex gap-2 items-center">
                                                    <MdOutlineTimer className="size-6" />
                                                    <span className="lg:text-lg text-md">
                                                        {convertTimeString(
                                                            event.time ??
                                                                '00:00:00'
                                                        )}
                                                    </span>
                                                </div> */}
                                            </div>
                                            <h1 className="lg:text-xl text-lg font-semibold">
                                                Host Details
                                            </h1>
                                            <div className="flex flex-row gap-2 items-center justify-between text-foreground/90">
                                                <div className="inline-flex gap-2 items-center">
                                                    <PersonIcon className="size-6" />
                                                    <span className="lg:text-lg text-md">
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
                                                {/* <div className="inline-flex gap-2 items-center">
                                                    <EnvelopeOpenIcon className="size-6" />
                                                    <span className="lg:text-lg text-md">
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
                                                    <h1 className="lg:text-xl text-lg font-semibold">
                                                        Event Tags
                                                    </h1>
                                                    <div className="flex gap-2 items-start flex-col">
                                                        <div className="flex gap-3 flex-wrap">
                                                            {event.tags.map(
                                                                (tag) => (
                                                                    <Badge
                                                                        key={
                                                                            tag
                                                                        }
                                                                        variant="outline"
                                                                        className="inline-flex items-center gap-1 rounded-md px-3 py-1 text-xs font-semibold text-foreground/90 bg-primary/5 hover:bg-primary/10 transition-all duration-300 ease-in-out-sine capitalize text-md"
                                                                    >
                                                                        <TagIcon className="size-4" />
                                                                        {tag}
                                                                    </Badge>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                    </div>
                    <Pagination>
                        <PaginationContent className="gap-2">
                            {currentPage > 1 && (
                                <PaginationItem>
                                    <PaginationPrevious
                                        onClick={() =>
                                            handlePageChange(currentPage - 1)
                                        }
                                        href="#"
                                        className="hover:underline hover:bg-transparent text-md underline-offset-4 decoration-primary decoration-[3px] text-foreground/90 hover:text-foreground transition-all duration-300 ease-in-out-sine"
                                    />
                                </PaginationItem>
                            )}
                            {/* Assuming you have calculated total pages based on filteredEvents.length and itemsPerPage */}
                            {Array.from(
                                {
                                    length: Math.ceil(
                                        filteredEvents.length / itemsPerPage
                                    )
                                },
                                (_, index) => (
                                    <PaginationItem
                                        key={index}
                                        className="border-2 border-primary/50 hover:bg-primary/20  transition-all duration-300 ease-in-out-sine rounded-2xl p-1.5 "
                                    >
                                        <PaginationLink
                                            href="#"
                                            onClick={() =>
                                                handlePageChange(index + 1)
                                            }
                                            className="p-0 hover:bg-transparent bg-transparent text-md"
                                        >
                                            {index + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                )
                            )}
                            {currentPage <
                                Math.ceil(
                                    filteredEvents.length / itemsPerPage
                                ) && (
                                <PaginationItem>
                                    <PaginationNext
                                        onClick={() =>
                                            handlePageChange(currentPage + 1)
                                        }
                                        href="#"
                                        className="hover:underline hover:bg-transparent text-md underline-offset-4 decoration-primary decoration-[3px] text-foreground/90 hover:text-foreground transition-all duration-300 ease-in-out-sine"
                                    />
                                </PaginationItem>
                            )}
                        </PaginationContent>
                    </Pagination>
                </section>
            </main>
        </div>
    );
}
