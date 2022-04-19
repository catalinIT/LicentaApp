import React from "react";

export default function LearningUnitChat() {
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
                            <textarea className="input" placeholder="Write a comment" v-model="newItem"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <button className='primaryContained' type="submit">Add Comment</button>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}