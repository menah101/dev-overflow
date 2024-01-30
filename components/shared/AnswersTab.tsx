import { getUserAnswers } from "@/lib/actions/user.action";
import React from "react";
import AnswersCard from "../cards/AnswersCard";


interface Props  {
  userId: string;
  clerkId?: string | null;
  searchPrams: { [key: string]: string | undefined; }
}

const AnswersTab = async ({ searchPrams, userId, clerkId }: Props) => {
  const result = await getUserAnswers({
    userId,
    page: 1,
  })

  return (
    <>
    {result.answers.map((item) => (
      <AnswersCard
        key={item._id}
        clerkId={clerkId}
        _id={item._id}
        question={item.question}
        author={item.author}
        upvotes={item.upvotes.length}
        createdAt={item.createdAt}
      />
    ))}
    </>
  )
}

export default AnswersTab