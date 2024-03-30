interface Props {
    title: string
}
function Title (props: Props) {
    return <h1 className="text-lg font-bold text-blue-700">{props.title}</h1>
}

export default Title;