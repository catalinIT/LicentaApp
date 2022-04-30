import { values } from "mobx";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import { useStore } from "../../../app/stores/store";

export default function LearningUnitChat() {

    const {userStore} = useStore();

    var onSubmit = () => {
        var elem = document.getElementById("textareaComment") as HTMLTextAreaElement;
        const val = elem?.value;
        const userName = userStore.user?.username;
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
            </section >
        </div >
    )
}