export interface ICourse {
    id: string;
    title: string;
    image: string;
    status: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    slug: string;
    notes_count: number;
    quizzes_count: number;
    question_count: number;
    enroll_status: string;
}

export interface ITopic {
    id: string;
    course_id: string;
    noteTitle: string;
    pdf: string;
    pqi: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    slug: string;
}

export interface ICourseDetail extends ICourse {
    notes: ITopic[];
}