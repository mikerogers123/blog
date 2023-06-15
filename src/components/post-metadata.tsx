import React from "react";
import { Post } from "../models/post";
import moment from "moment";
import { calculateReadingTime } from "../functions/reading-time";

export default function PostMetadata ({ post }: { post: Post }) {
    return (
        <small>
            {moment(post.dateAdded).format("MMM Do, YYYY")} |{" "}
            {calculateReadingTime(post.content)} min read
        </small>
    );
};
