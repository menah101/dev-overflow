import { formatAndDivideNumber, getTimestamp } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Metric from "../shared/Metric";
import Image from "next/image";
import { IQuestion } from "@/database/question.model";
import { SignedIn } from "@clerk/nextjs";
import EditDeleteAction from "../shared/EditDeleteAction";

interface Props {
  _id: string;
  author: {
    _id: string;
    clerkId: string;
    name: string;
    picture: string;
  };
  upvotes: number;
  question: IQuestion;
  createdAt: Date;
  clerkId?: string | null
}

const AnswersCard = ({ clerkId, question, _id, createdAt, author, upvotes }: Props) => {
  const showActionButtons = clerkId && clerkId === author.clerkId;

  return (
    <Link href={`/question/${question?._id}/#${_id}}`} className="card-wrapper rounded-[10px] px-11 py-9">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">{question?.title}</h3>
        </div>
        <SignedIn>{showActionButtons && <EditDeleteAction type="Answer" itemId={JSON.stringify(_id)} />}</SignedIn>
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <div className="flex items-center">
          <Image
            src={author.picture}
            width={18}
            height={18}
            alt="profile"
            className="rounded-full object-cover max-sm:mt-0.5"
          />
          <div className="flex flex-col sm:flex-row sm:items-center">
            <p className="body-semibold text-dark300_light700">{author.name }</p>
            <p className="small-regular text-light400_light500 ml-0.5 mt-0.5 line-clamp-1">
              - answered {getTimestamp(createdAt)}
            </p>
          </div>
        </div>

        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="Upvotes"
          value={formatAndDivideNumber(upvotes)}
          title=" Votes"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
    </Link>
  );
};

export default AnswersCard;
