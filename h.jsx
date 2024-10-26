"use client";
import { db } from '@/configs/db';
import { Chapters, CourseList } from '@/configs/schema';
import { and, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import ChapterListCard from './_components/ChapterListCard';
import ChapterContent from './_components/ChapterContent';

function CourseStart({ params }) {
    const [course, setCourse] = useState();
    const [selectedChapter, setSelectedChapter] = useState();
    const [chapterContent, setChapterContent] = useState();

    useEffect(() => {
        GetCourse();
    }, []);

    const GetCourse = async () => {
        const result = await db.select().from(CourseList).where(eq(CourseList?.courseId, params?.courseId));
        console.log(result);
        setCourse(result[0]);
        GetSelectedChapterContent(0); // Automatically load the first chapter's content
    };

    const GetSelectedChapterContent = async (chapterId) => {
        const result = await db.select().from(Chapters).where(and(eq(Chapters.chapterId, chapterId), eq(Chapters.courseId, course?.courseId)));
        setChapterContent(result[0]);
        console.log(result);
    };

    return (
        <div className="flex"> {/* Use flexbox to create a horizontal layout */}
            {/* Chapter list sidebar */}
            <div className='md:w-72 hidden z-50 md:block shadow-lg border-r'>
                <h2 className='font-extrabold text-lg bg-primary p-3 text-white'>{course?.courseOutput?.course?.name}</h2>
                <div>
                    {course?.courseOutput?.course?.chapters.map((chapter, index) => {
                        return (
                            <div key={index} className={`cursor-pointer hover:bg-blue-500/10 ${selectedChapter?.name === chapter?.name && 'bg-blue-500/30'}`} onClick={() => { setSelectedChapter(chapter); GetSelectedChapterContent(index); }}>
                                <ChapterListCard chapter={chapter} index={index} />
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Content div */}
            <div className='flex-1 md:ml-72 p-4'> {/* Allow this div to take the remaining space */}
                <ChapterContent chapter={selectedChapter} content={chapterContent} />
            </div>
        </div>
    );
}

export default CourseStart;
