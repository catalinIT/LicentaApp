import { observer } from "mobx-react-lite";
import {  useState } from "react";
import { toast } from 'react-toastify';
import { List, ListItem } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css'
import { string } from "yup";
import { LUComment } from "../../../app/models/comment";
import { User } from "../../../app/models/user";
import { useStore } from "../../../app/stores/store";


export default observer(function LearningUnitChat() {

    const { userStore, commentStore, learningUnitStore } = useStore();

    const initialState = {
        id: '',
        user: userStore.user,
        learningUnitId: learningUnitStore.selectedLearningUnit?.id,
        learningUnit: learningUnitStore.selectedLearningUnit,
        content: '',
        createdAt: new Date()
    }

    const [newComment, setNewComment] = useState(initialState);


    var onSubmit = () => {
        var elem = document.getElementById("textareaComment") as HTMLTextAreaElement;
        const val = elem?.value;
        if (val.length < 1) {
            toast.error("comment should not be empty!")
            return;
        }
        newComment.content = val;
        commentStore.createComment(newComment);
        learningUnitStore.selectedLearningUnitComments?.push(newComment);
        learningUnitStore.commentJustAdded = true;
        elem.value = "";
        toast.success("Feedback received!");
    }

    return (
        <div>
            <section id="app">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="chatSectionTitle">
                                How did you find the content of this unit?
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <textarea id="textareaComment" className="input" placeholder="Write a comment" v-model="newItem"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <button onClick={onSubmit} className='primaryContained' type="submit">Add Comment</button>
                        </div>
                    </div>
                </div>
                <div>
                    {learningUnitStore.selectedLearningUnitComments &&
                        <List>
                            {learningUnitStore.selectedLearningUnitComments.map(comment => (
                                <ListItem key={comment.id} className="comment">
                                    <p className="comment-author">
                                        {comment.user?.displayName}
                                    </p>
                                    <p className="comment-body">
                                        {comment.content}
                                    </p>
                                </ListItem>
                            ))}
                        </List>}
                </div>
            </section >
        </div >
    )
})