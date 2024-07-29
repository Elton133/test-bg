import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import CourseCardGrid from "@components/courses/course-card-grid";
import getUserSession from "@/services/get-user";

export default async function Page() {
  const data = await getUserSession()
  return (
    <section className={"py-6 px-4"}>
      <div className={"v-stack"}>
        <h1 className={"text-2xl font-semibold"}>My learning</h1>
        <p className={"text-sm font-medium text-muted"}>
          Hi {data?.fname}, this is where you left off.
        </p>
      </div>
      <div className={"pt-6 pb-4"}>
        <Tabs defaultValue="progress" className="w[400px]">
          <TabsList>
            <TabsTrigger value="progress">In progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="progress">
            <div className={"py-4 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  sm:flex-row sm:justify-center lg:justify-start gap-y-4 sm:gap-x-4"}>
              <CourseCardGrid courseName={"Civil procedure"} progress={50} />
              <CourseCardGrid courseName={"Legal system"} progress={70} />
              <CourseCardGrid courseName={"Family law"} progress={20} />
              <CourseCardGrid courseName={"Family law"} progress={20} />
              <CourseCardGrid courseName={"Family law"} progress={20} />
              <CourseCardGrid courseName={"Family law"} progress={20} />

            </div>
          </TabsContent>
          <TabsContent value="completed">
            <div className={"py-4 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  sm:flex-row sm:justify-center lg:justify-start gap-y-4 sm:gap-x-4"}>
              <CourseCardGrid courseName={"Civil procedure"} progress={100} />
              <CourseCardGrid courseName={"Legal system"} progress={100} />
              <CourseCardGrid courseName={"Family law"} progress={100} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
