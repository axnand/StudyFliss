import { Link, Map } from "lucide-react";
import CoursePageClient from "./course-page";

export default function CoursePage({params}: {params: {course: string}}) {
    if (params.course === "bba") {
        return <CoursePageClient course={"bba"}/>
    }
    if (params.course === "btech") {
        return <CoursePageClient course={"btech"}/>
    }
    return (
        <div className="flex flex-col min-h-[100dvh] pt-12">
            <main className="flex-1">
                <section className="w-full py-6 md:py-12 lg:py-20 xl:py-24 max-w-5xl mx-auto flex flex-col gap-8 pt-0 pb-0">
                    <div className="overflow-clip relative container flex lg:flex-row flex-col items-center justify-center px-4 space-y-4 md:px-6 lg:space-y-10 ">
                        <div className="text-center">
                            <h1 className="-mt-2 lg:leading-tighter text-4xl font-medium tracking-tighter sm:text-5xl md:text-6xl text-balance">
                                Select a course
                            </h1>
                            <Link href={"/courses/bba"}>
                                <h2 className="mt-4 text-2xl font-semibold text-foreground/90">
                                    BBA
                                </h2>
                            </Link>
                            <Link href={"/courses/btech"}>
                                <h2 className="mt-2 text-2xl font-semibold text-foreground/90">
                                    B Tech.
                                </h2>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}