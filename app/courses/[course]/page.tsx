import { Link, Map } from 'lucide-react';
import CoursePageClient from './course-page';
import { Suspense } from 'react';
import { redirect } from 'next/navigation'
import { getErrorRedirect } from '@/utils/helpers';

export default function CoursePage({ params }: { params: { course: string } }) {
    if (params.course === 'bba') {
        return (
            <Suspense fallback={<>Loading...</>}>
                <CoursePageClient course={'bba'} />
            </Suspense>
        );
    }
    if (params.course === 'btech') {
        return (
            <Suspense fallback={<>Loading...</>}>
                <CoursePageClient course={'btech'} />
            </Suspense>
        );
    }
    return redirect(getErrorRedirect('/courses', 'Invalid Course Name', `Course named ${params.course} was not found.`));
}
