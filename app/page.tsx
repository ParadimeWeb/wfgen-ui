import { Container, Header, Main, TopMenu } from "@/components";

export default function Home() {
    return (
        <Container>
            <Header>
                <TopMenu selectedId="home" />
            </Header>
            <Main>
                <div className="h-96">Dashboard</div>
                <div className="h-96">Dashboard</div>
                <div className="h-96">Dashboard</div>
                <div className="h-96">Dashboard</div>
                <div className="h-96">Dashboard</div>
            </Main>
        </Container>
    );
}
