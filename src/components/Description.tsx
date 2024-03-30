interface Props {
    description: string
}


function Description(props: Props) {
    return <p className="text-center text-sm py-2 text-slate-400">{props.description}</p>
}

export default Description;