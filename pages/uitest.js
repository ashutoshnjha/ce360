 
import Head from 'next/head'
import fs from 'fs';
import { join } from 'path';
import Navbar from '../src/components/navbar';
import Service from '../src/components/service';
import { Container, Grid } from '@mui/material';

export async function getServerSideProps() {
    // get all the services.
    let servicePath = join(__dirname, '..', '..', '..', 'data', 'servicelist.json');
    let services = await fs.promises.readFile(servicePath, 'utf8');
    return {
      props: {
        "services": JSON.parse(services)
      }
    }
  }
 
  export default function Home({ services }) {
    return (
      <div>
        <Head>
          <title>Services App</title>
          <meta name="description" content="Services app with Material UI" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Navbar />
  
        <Container>
          {
            services.length > 0 ? (
                services.map((todo, index) => (
                <Grid key={index} marginBottom={4} marginTop={4}>
                  <Service todo={todo} key={index} />
                </Grid>
              ))
            ) : (
              <p>
                No saved Services yet!!
              </p>
            )
          }
        </Container>
      </div>
    )
  }