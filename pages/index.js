import Head from "next/head";
import { AppShell, Navbar, Header, Aside, Footer, Grid } from "@mantine/core";

export default function Home() {
  return (
    <>
      <AppShell
        padding="md"
        header={
          <Header height={60} p="m">
            <Grid justify="flex-end" align="center">
              <Grid.Col span={9} style={{}}>
                Home (Logo)
              </Grid.Col>
              <Grid.Col span={1} style={{ background: "red" }}>
                About Us
              </Grid.Col>
              <Grid.Col span={1} style={{}}>
                Resources
              </Grid.Col>
              <Grid.Col span={1} style={{}}>
                Contact
              </Grid.Col>
            </Grid>
          </Header>
        }
        footer={
          <Footer height={30} p="xs">
            End
          </Footer>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Head>
          <title>Michigan Venture Club</title>
          <link rel="icon" href="/icon.ico" />
        </Head>

        <main>
          <h1 className="title">Michigan Venture Club</h1>
          coming soon!
          <p>
            Michigan Venture Club aims to create an organization that connects
            the campus and the Venture capital industry. It provides students
            with the help of business practice, fund internship, experience
            sharing, financing support and other aspects of Venture capital
            growth. Our vision is to make the club a shortcut for students to
            grow from campus into the venture capital industry, a cradle for
            alumni to create opportunities and connections in the venture
            capital industry. Our existing resources are mainly concentrated in
            China. The most important resources are the venture capital fund of
            family office with a scale of more than one billion. From 2008 to
            now, the overall return is tens of times, and the annual return rate
            is more than 30%, which involves in consumer, technology, medical
            and other fields. In addition, we can invite well-known Chinese
            investors and entrepreneurs to share, and provide internship
            opportunities for those enterprises. Finally, we have a close
            relationship with alumni organizations in China, such as the Beijing
            Alumni Association and the first and second market alumni
            association, which can better connect the campus and the industry
            and help Umich alumni network
          </p>
        </main>
      </AppShell>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
