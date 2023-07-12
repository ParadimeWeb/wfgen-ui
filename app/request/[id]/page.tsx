import { Metadata, ResolvingMetadata } from "next";
import { Container, Header, Main, TopMenu } from "@/components";

type Props = {
    params: { id: string }
}
export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = params;
    return {
        title: `Request #${id}`
    };
}

export default function Home({ params }: Props) {
    const { id } = params;
    return (
        <Container>
            <Header>
                <TopMenu />
            </Header>
            <Main>
                <div className="h-96">{`Request #${id}`}</div>
            </Main>
        </Container>
    );
}