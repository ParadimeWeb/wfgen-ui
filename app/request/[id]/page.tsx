import { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: { id: string }
}
export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = params;
    // const request = await fetch(`https://.../${id}`).then((res) => res.json());
    // return {
    //     title: request.title
    // }
    return {
        title: `Request #${id}`
    };
}

export default function Home({ params }: Props) {
    const { id } = params;
    return <div>{`Request #${id}`}</div>;
}