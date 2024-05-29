interface ButtonProps {
    text: string;
    link: string;
    type: Type;
}

export enum Type {
    Main = "bg-sky-400",
    Sec = "bg-amber-600",
    Danger = "bg-rose-700"
}

export const Button = (props: ButtonProps) => {
    return (
        <div className="mt-5">
            <a className={"text-lg text-center font-bold text-slate-50 px-16 py-3 rounded-md max-w-80 uppercase no-underline " + props.type} href={props.link}>
                {props.text}
            </a>
        </div>
    )
}
