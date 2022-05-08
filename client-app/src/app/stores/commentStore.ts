import { makeAutoObservable, runInAction } from "mobx";
import { LUComment } from "../models/comment";
import {v4 as uuid} from 'uuid';
import agent from "../api/agent";

export default class CommentStore {
    comments: LUComment[] = [];
    
    constructor() {
        makeAutoObservable(this);
    }

    createComment = async (comment: LUComment) => {
        comment.id = uuid();
        try {
            await agent.Comments.create(comment);
            runInAction(() => {
                this.comments.push(comment);
            })
        } catch (error) {
            console.log(error);
        }
    }
}