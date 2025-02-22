import moment from "moment";
import { PostQuery } from "../models/post";

export const getAllPosts = (query: PostQuery) => {
    const allPersonalMediumFeedPosts = query.allPersonalMediumFeed.nodes || [];
    const allMediumPosts = query.allMediumFeed.nodes || [];
    const allPosts = [...allPersonalMediumFeedPosts, ...allMediumPosts];
    return allPosts.sort((p1, p2) => moment(p2.dateAdded).diff(p1.dateAdded));
};