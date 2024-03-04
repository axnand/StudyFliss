'use client';
import { createClient } from '@/utils/supabase/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { useCallback, useEffect, useState } from 'react';
import { Tables } from '@/types_db';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import NotesPDFViewer from './notes-pdf-viewer';
import { branches } from '@/utils/helpers';
import NotesDocViewer from './notes-doc-viewer';
import Button from '@/components/ui/Button';
import { DownloadIcon } from '@radix-ui/react-icons';
import { DownloadCloudIcon } from 'lucide-react';
import Link from 'next/link';

export default function CoursePageClient({ course }: { course: string }) {
    // console.log(Object.keys(branches));
    const supabase = createClient();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const semester = searchParams.get('semester');
    const branch = searchParams.get('branch');
    const subject = searchParams.get('subject');
    const [notes, setNotes] = useState<Tables<'notes'>[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        const fetchNotes = async () => {
            if (course === 'bba') {
                const { data: data, error: error } = await supabase
                    .from('notes')
                    .select('*')
                    .eq('course', course)
                    .eq('semester', parseInt(semester ?? '0'));
                // .eq('branch', branch ?? '');
                // console.log(data);
                if (error) {
                    console.error(error);
                    setErrorMessage('Could not fetch notes: ' + error.message);
                }
                setNotes(error ? [] : data);
            }
            if (course === 'btech') {
                console.log(branch)
                const { data: data, error: error } = await supabase
                    .from('notes')
                    .select('*')
                    .eq('course', course)
                    .eq('semester', parseInt(semester ?? '0'))
                    .eq('branch', branch ?? '');
                // console.log(data);
                if (error) {
                    console.error(error);
                    setErrorMessage('Could not fetch notes: ' + error.message);
                }
                console.log(data, error)
                setNotes(error ? [] : data);
                console.log(notes)
            }
        };
        fetchNotes();
    }, [semester, branch]);
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );
    return (
        <div className="flex flex-col min-h-[100dvh] pt-12 px-8">
            <main className="flex-1">
                <section className="w-full py-6 md:py-12 lg:py-20 xl:py-24 max-w-5xl mx-auto flex flex-col gap-12 pt-0 pb-0 ">
                    <div className="flex flex-col gap-6">
                        <h1 className="lg:text-6xl text-5xl tracking-tighter font-medium transition-all duration-300 ease-in-out-sine">
                            Select{' '}
                            <span className="underline decoration-primary underline-offset-4 font-bold decoration-[6px] transition-all duration-300 ease-in-out-sine">
                                {course === 'bba' ? '' : `Branch and`}{' '}
                                {'Semester'}
                            </span>
                        </h1>
                        <div className="flex flex-col gap-4">
                            {
                                <Select
                                    onValueChange={(value) => {
                                        router.push(
                                            pathname +
                                                '?' +
                                                createQueryString(
                                                    'semester',
                                                    value
                                                )
                                        );
                                    }}
                                    value={semester ?? undefined}
                                >
                                    <SelectTrigger
                                        className="rounded-2xl lg:text-xl text-lg h-12 lg:px-4 px-3 md:w-[450px] w-full"
                                        aria-modal={'false'}
                                    >
                                        <SelectValue
                                            placeholder={'Select Semester'}
                                        />
                                    </SelectTrigger>
                                    <SelectContent
                                        aria-modal={'false'}
                                        className=" max-h-[200px]"
                                    >
                                        {Array.from(
                                            {
                                                length: course === 'bba' ? 6 : 8
                                            },
                                            (_, i) => i + 1
                                        ).map((i) => (
                                            <SelectItem
                                                className="lg:text-xl text-lg lg:px-4 px-2"
                                                value={i.toString()}
                                                key={i}
                                            >
                                                <span>{i}</span>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            }
                            {course === 'btech' && (
                                <Select
                                    onValueChange={(value) => {
                                        router.push(
                                            pathname +
                                                '?' +
                                                createQueryString(
                                                    'branch',
                                                    value
                                                )
                                        );
                                    }}
                                    value={branch ?? undefined}
                                >
                                    <SelectTrigger
                                        className="rounded-2xl lg:text-xl text-lg h-12 lg:px-4 px-3 md:w-[450px] w-full"
                                        aria-modal={'false'}
                                    >
                                        <SelectValue
                                            placeholder={'Select Branch'}
                                        />
                                    </SelectTrigger>
                                    <SelectContent
                                        aria-modal={'false'}
                                        className=" max-h-[200px]"
                                    >
                                        {Object.entries(branches).map(
                                            (kv, index) => (
                                                <SelectItem
                                                    className="lg:text-xl text-lg lg:px-4 px-2"
                                                    value={kv[0]}
                                                    key={index}
                                                >
                                                    <span>{kv[1]}</span>
                                                </SelectItem>
                                            )
                                        )}
                                    </SelectContent>
                                </Select>
                            )}
                        </div>
                    </div>
                    {notes.length > 0 ? (
                        <div className="overflow-clip relative flex lg:flex-row flex-col items-start justify-start space-y-4 lg:space-y-10">
                            <div className="flex flex-col gap-6">
                                <h1 className="lg:text-6xl text-5xl tracking-tighter font-medium transition-all duration-300 ease-in-out-sine">
                                    Select a{' '}
                                    <span className="underline decoration-primary underline-offset-4 font-bold decoration-[6px] transition-all duration-300 ease-in-out-sine">
                                        Subject
                                    </span>
                                </h1>
                                <div className="flex flex-row flex-wrap gap-4">
                                    {Array.from(
                                        new Set(
                                            notes.map((note) => note.subject)
                                        )
                                    ).map((sub) => (
                                        <Badge
                                            variant={'outline'}
                                            className={`border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300 ease-in-out-sine rounded-2xl lg:px-8 px-6 lg:py-2 py-1 lg:text-2xl text-lg font-semibold text-foreground/90 cursor-pointer ${subject?.toLowerCase() === sub?.toLowerCase() ? 'bg-primary/10 border-primary/70' : ''}`}
                                            onClick={() => {
                                                router.push(
                                                    pathname +
                                                        '?' +
                                                        createQueryString(
                                                            'subject',
                                                            sub ?? ''
                                                        )
                                                );
                                            }}
                                        >
                                            {sub ?? 'Unknown Subject'}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        semester && (course === "btech" ? branch : true) && (
                            <div>
                                <h1 className="lg:text-6xl overflow-visible text-5xl tracking-tighter font-medium transition-all duration-300 ease-in-out-sine">
                                    Semester {semester} Notes
                                    <br />
                                    <span className="underline decoration-primary underline-offset-4 font-bold decoration-[6px] transition-all duration-300 ease-in-out-sine">
                                        Coming Soon!
                                    </span>
                                </h1>
                            </div>
                        )
                    )}
                    {notes.filter((note) => note.subject === subject).length >
                        0 && (
                        <div className="overflow-clip relative flex lg:flex-row flex-col items-start justify-start space-y-4 lg:space-y-10">
                            <div className="flex flex-col gap-6 w-full">
                                <h1 className="lg:text-6xl text-5xl tracking-tighter font-medium transition-all duration-300 ease-in-out-sine">
                                    {subject}{' '}
                                    <span className="underline decoration-primary underline-offset-4 font-bold decoration-[6px] transition-all duration-300 ease-in-out-sine">
                                        Notes
                                    </span>
                                </h1>
                                <div className="grid lg:grid-cols-1 grid-cols-1 gap-8 w-full">
                                    {notes
                                        .filter(
                                            (note) => note.subject === subject
                                        )
                                        .map((note: Tables<'notes'>) => (
                                            <>
                                                {Boolean(
                                                    JSON.parse(
                                                        JSON.stringify(
                                                            note.notes
                                                        )
                                                    )
                                                ) === true &&
                                                    (
                                                        JSON.parse(
                                                            JSON.stringify(
                                                                note.notes
                                                            )
                                                        ) as {
                                                            link: string;
                                                            name: string;
                                                        }[]
                                                    ).map(
                                                        (note: {
                                                            link: string;
                                                            name: string;
                                                        }) => {
                                                            return (
                                                                <Card
                                                                    key={
                                                                        note.name
                                                                    }
                                                                    className=" lg:p-4 p-2"
                                                                >
                                                                    <CardTitle className="flex justify-center items-center gap-4 py-4 pt-0">
                                                                        <h1 className='text-center capitalize lg:text-xl text-lg font-semibold'>
                                                                            {
                                                                                decodeURI(note.name.slice(0, -4))
                                                                            }
                                                                        </h1>
                                                                        <Link href={note.link} target='_blank' rel='noopener noreferrer'>
                                                                            <Button variant={'outline'} className='border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300 ease-in-out-sine rounded-2xl flex justify-center items-center gap-2 px-6 lg:text-base text-sm py-5'>
                                                                                <DownloadCloudIcon className="h-5 w-5 text-foreground" /> Download Notes
                                                                            </Button>
                                                                        </Link>
                                                                    </CardTitle>
                                                                    <CardContent className="flex justify-center items-center">
                                                                        <NotesDocViewer
                                                                            link={
                                                                                note.link
                                                                            }
                                                                            className="w-full lg:h-[450px] h-[400px] overflow-hidden object-center"
                                                                        />
                                                                    </CardContent>
                                                                </Card>
                                                            );
                                                        }
                                                    )}
                                                {Boolean(
                                                    JSON.parse(
                                                        JSON.stringify(
                                                            note.notes
                                                        )
                                                    )
                                                ) === false && (
                                                    <p className='text-2xl tracking-tighter text-foreground font-thin'>
                                                        Currently, there are no notes available for{' '}
                                                        <span className='font-bold underline decoration-primary decoration-[3px]'>{note.subject}</span>.<br/>
                                                        We will be adding notes for this subject very soon.
                                                    </p>
                                                )}
                                                

                                            </>
                                        ))}
                                </div>
                            </div>
                        </div>
                    )}
                    {errorMessage}
                </section>
            </main>
        </div>
    );
}
