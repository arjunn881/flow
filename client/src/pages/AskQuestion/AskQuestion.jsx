import React from 'react'
import style from '../AskQuestion/AskQuestion.module.css'


export default function AskQuestion() {
  return (
    <div className={style.askquestion}>
        
        <div className={style.formcon}>
            <h1>Ask Question !!!</h1>
            <form>
                <label htmlFor="title"><h4>Title</h4><p>Be specific and imagine you're asking a question to another person! </p>
                    <input type="text" placeholder="Be specific and imagine you're asking a question to another person!" id='title' />
                </label>

                <label htmlFor="title"><h4>Body</h4><p>Include all the information someone would need to answer your question!</p>
                    <textarea type="text" row='10' cols='30' placeholder='Include all the information someone would need to answer your question!' id='title' />
                </label>


                <label htmlFor="title"><h4>Tags</h4><p>Add up to 5 tags to describe what your question is about!</p>
                    <input type="text" placeholder='Add up to 5 tags to describe what your question is about!' id='title' />
                </label><br/>

                <button type='submit'>Review Your Question</button>
            </form>
        </div>

        
    </div>
  )
}
