
import CategoryList from "@/app/_shared/CategoryList";
import { UserProfile } from "@clerk/nextjs";

import { pgTable, serial,integer, json, varchar, boolean } from "drizzle-orm/pg-core";


export const CourseList=pgTable('courseList',{
    id:serial('id').primaryKey(),
    courseId: varchar('courseId').notNull(),
    name:varchar('name').notNull(),
    category:varchar('category').notNull(),
    level:varchar('level').notNull(),
    includeVideo:varchar('includeVideo').notNull().default('Yes'),
    courseOutput:json('courseOutput').notNull(),
    createdBy:varchar('createdBy').notNull(),
    userName:varchar('username'),
    userProfileImage:varchar('userProfileImage'),
    courseBanner:varchar('courseBanner').default('/thum.png'),
    publish:boolean('publish').default(true)
      
})

export const Chapters = pgTable('chapters',{
    id:serial('id').primaryKey(),
    courseId:varchar('courseId').notNull(),
    chapterId : integer('chapterId').notNull(),
    content:json('content').notNull(),
    videoId:varchar('videoId').notNull(),
    
})