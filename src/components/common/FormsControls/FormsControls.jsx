import style from "./FormsControls.module.css"
export const Textarea = ({input, meta, ...props}) => { //убрать input и meta и оставить props
    return(
        <div className={style.formsControls + " " + (meta.touched && meta.error ? style.error : "")}>
            <div>
            <textarea {...input}{...props} />
            </div>
            {meta.touched && (meta.error && <span>{meta.error}</span>)}
        </div>
    )
}