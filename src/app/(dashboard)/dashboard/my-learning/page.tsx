import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import CourseCardGrid from "@components/courses/course-card-grid";
import { getCourses } from "@/actions/courses";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/options";

export default async function Page() {
    const session = await getServerSession(authOptions);
    const courses = await getCourses();
  return (
    <section className={"py-6 px-4 lg:px-8 w-full min-h-[calc(100vh_-_50px)]"}>
      <div className={"v-stack"}>
        <h1 className={"text-2xl font-semibold"}>My learning</h1>
        <p className={"text-sm font-medium text-muted"}>
          Hi {session?.user.firstName}, this is where you left off.
        </p>
      </div>
      <div className={"pt-6 pb-4"}>
        <Tabs defaultValue="progress" className="w[400px]">
          <TabsList>
            <TabsTrigger value="progress">In progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="progress">
            <div
              className={
                "py-4 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  sm:flex-row sm:justify-center lg:justify-start gap-y-4 sm:gap-x-4"
              }
            >
              {courses &&
                courses
                  .filter((item) => item.enroll_status === "active")
                  .map((course) => (
                    <CourseCardGrid
                      key={course.id}
                      courseName={course.title}
                      progress={50}
                      // imageUrl={`${process.env.NEXT_PUBLIC_API_URL}/public/courses/${course.image}`}
                    />
                  ))}
            </div>
          </TabsContent>
          <TabsContent value="completed">
            <div
              className={
                "py-4 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  sm:flex-row sm:justify-center lg:justify-start gap-y-4 sm:gap-x-4"
              }
            >
              {courses &&
                courses
                  .filter((item) => item.enroll_status === "active")
                  .map((course) => (
                    <CourseCardGrid
                      key={course.id}
                      courseName={course.title}
                      progress={100}
                      // imageUrl={`${process.env.NEXT_PUBLIC_API_URL}/public/courses/${course.image}`}
                    />
                  ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {courses &&
        courses.filter((item) => item.enroll_status === "active").length ===
          0 && (
          <div className={"flex justify-center items-center py-[15%]"}>
            <p className={"font-medium text-xs sm:text-sm"}>
              Looks like your legal mind is craving a challenge. 🤕
              <br /> Dive into a course and become courtroom-ready!
            </p>
          </div>
        )}
    </section>
  );
}
